# god -c production.god

God.watch do |w|
  w.name = "faye"
  w.dir = Dir.pwd
  w.start = "rackup faye.ru -s thin -E production -p 9292 -o 0.0.0.0"
  w.keepalive
end

God.watch do |w|
  w.name = "sinatra"
  w.dir = Dir.pwd
  w.env = { 'RACK_ENV' => 'production' }
  w.start = "ruby sinatra.rb -p 80"
  w.log = "logs/sinatra.log"
  w.keepalive
end
