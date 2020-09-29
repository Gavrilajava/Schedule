class WorkcenterSerializer < ActiveModel::Serializer
  attributes :id, :code, :name, :group, :description, :average_downtime, :frozen_period, :minimal_setup, :setup_reduction_type, :average_setup, :average_speed, :max_deviation
end
