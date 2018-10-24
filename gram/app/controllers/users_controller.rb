
class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def create
    # console.log(user_params)
    # raise params.inspect
    @user = User.create(name: params['name'], pic_url: params['pic_url'])
    render json: @user
  end

  private

  def user_params
    params.permit(:username, :url)
  end
end
