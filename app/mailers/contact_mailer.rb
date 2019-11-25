class ContactMailer < ApplicationMailer
  def contact_email(contact)
    @message = contact
    mail(to: 'greenoliveconsultants20@gmail.com', from: contact.email.try(:strip), subject: contact.subject)
  end
end
