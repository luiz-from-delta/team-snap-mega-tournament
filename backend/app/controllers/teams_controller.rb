class TeamsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    teams = Team.order("created_at desc");
    render json: { teams: teams }
  end

  def create
    team = Team.new(teamParams)
    if team.save
      render json: { team: team }, status: :ok
    else
      render json: { errors: team.errors }, status: :unprocessable_entity
    end
  end

  private
  def teamParams
    params.permit(:name, :captain_first_name, :captain_last_name)
  end
end
