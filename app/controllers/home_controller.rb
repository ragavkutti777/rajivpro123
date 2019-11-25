class HomeController < ApplicationController
  def index
    @contact = Contact.new
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

  def contact
    contact = Contact.new(contact_params)
    ContactMailer.contact_email(contact).deliver_now
    render json: { status: 'success' }
  end

  private

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :message)
  end
end
