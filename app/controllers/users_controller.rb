class UsersController < ApplicationController
  def index
    @mes_utilisateurs = User.all
  end

  def create
    User.create name: params[:name]
    redirect_to "/users"
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update name: params[:name]
      flash[:success] = "Le pseudo a été mis à jour"
      redirect_to "/users/#{params[:id]}"
    else 
      render 'show'
    end
  end

  def destroy
    User.find(params[:id]).destroy
    redirect_to "/users"
  end
end
