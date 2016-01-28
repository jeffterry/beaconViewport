God.watch do |w|
  w.name = "faye"
  w.start = "rackup /var/www/beaconViewport/faye.ru -E production -s thin"
  w.log = "/var/www/beaconViewport/logs/god-faye.log"
  w.keepalive
end

God.watch do |w|
  w.name = "sinatra"
  w.start = "ruby /var/www/beaconViewport/sinatra.rb -p 80"
  w.log = "/var/www/beaconViewport/logs/god-sinatra.log"
  w.keepalive
end

