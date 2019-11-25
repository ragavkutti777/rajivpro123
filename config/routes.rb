Rails.application.routes.draw do
  resources :tests
  resources :home, only: [] do
    collection do
      post :contact
    end
  end

  get 'home_i', to: 'home#index'

  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
