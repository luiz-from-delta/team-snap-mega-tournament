class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.string :captain_first_name
      t.string :captain_last_name

      t.timestamps
    end
  end
end
