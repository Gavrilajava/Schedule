class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def format_errors
    self.errors.messages.map{|k,v| "#{k.to_s.split("_").join(" ")}: #{v.join(',')}"}.join("\; ")
  end
end
