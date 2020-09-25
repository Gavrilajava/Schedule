namespace :setup do
  desc "Tasks to setup environment"
  task :create_secret  do
    desc "Setting up secret phrase for authentication"
    if File.file?('.env')
      file = File.open('.env', 'a')
    else
      file = File.new('.env', 'a')
    end
    if  File.readlines(file).grep(/VERY_SECRET_PHRASE=/).size == 0
      file.puts "VERY_SECRET_PHRASE=#{SecureRandom.alphanumeric(24)}"
    end
    file.close
  end


end