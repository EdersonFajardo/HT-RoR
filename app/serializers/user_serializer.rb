# frozen_string_literal: true

class BranchSerializer < ActiveModel::Serializer
  attributes :id
  attributes :nombre
  attributes :apellido
  attributes :telefono
end
