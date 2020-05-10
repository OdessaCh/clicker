class UsersController < ApplicationController
  def index
    @mes_utilisateurs = User.all
  end

  def create
    User.create name: params[:name]
    redirect_to "/users"
  end
end
