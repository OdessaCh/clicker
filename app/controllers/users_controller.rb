class UsersController < ApplicationController
  def index
    @mes_utilisateurs = User.all
  end
end
