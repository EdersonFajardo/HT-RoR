# frozen_string_literal: true

module affinityCalculates
  class CalculatorService
    class NotFoundError < StandardError; end

    IVA = 0.19
    attr_reader :person, :params

    def initialize(person, params)
      @person = person
      @params = params
    end

    def offer
      request = Requests::OfferDefinition.new
      @offer ||= request.get(params[:offer_id])
    end

    def excute!
      person.baseDates = affinity_calculate(params[:city_id][:contract_type_id].to_f)
      person.iva = person.baseDates * IVA
      person.total_premium = person.baseDates + person.iva
      person.contract_type_id = params[:city_id][:contract_type_id]
      person.job_categories = params[:city_id][:job_categories]
      person.offer_id = offer[:id]

      person.save!
    end

    private

    def affinity_calculate(contract_type_id)
      affinity * contract_type_id
    end

    ###########################################################
    def affinity
      if params[:city_id][:contract_type_id].to_i == offer[:technical_skills][:driving_licences][:id] && params[:city_id][:job_categories].to_i == offer[:technical_skills][:id]
        offer[:technical_skills][:driving_licences][:affinity].to_f
      else
        raise NotFoundError.new 'affinity not found in offer'
      end
    end
    #############################################################
  end
end
