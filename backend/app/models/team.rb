class Team < ApplicationRecord
  validates :name, presence: true
  validates :captain_first_name, presence: true
  validates :captain_last_name, presence: true
end
