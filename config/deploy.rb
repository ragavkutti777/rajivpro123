# config valid for current version and patch releases of Capistrano
lock "~> 3.11.0"

set :application, "greenolive"
set :repo_url, "git@bitbucket.org:jayakumarP1/goc.git"
set :deploy_to, "/home/ubuntu/goc"
set :linked_files, %w{config/master.key}
after 'deploy:finished', 'restart_puma' do
  on roles(:app) do |host|
    # execute 'sudo systemctl restart greenolive'
    info "Application was restarted on #{host}"
  end
end
