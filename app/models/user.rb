# frozen_string_literal: true

class User < ApplicationRecord

  validates :nombre, :apellido, :telefono, presence: true
  validates_uniqueness_of :nombre
end
