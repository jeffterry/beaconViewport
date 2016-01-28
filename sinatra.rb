require "sinatra"
require "faye"
require "json"

# Set Sinatra configuration settings - available via "settings" variable
#if ENV["RACK_ENV"] = "production"
  set :faye_client, Faye::Client.new( 'http://107.170.204.77:9292/faye' )
#else
#  set :port, 3000
#  set :faye_client, Faye::Client.new( 'http://localhost:9292/faye' )
#end

get '/' do
  redirect to '/beaconViewport.html'
end

get '/pixel.png' do

  # Create JSON object to send to connected Faye clients
  a = Hash.new
  a["tagNum"] = params["tag"]
  a["learnerName"] = params["name"]
  a["beaconPath"] = "pixel.png"
  a["queryStringParams"] = request.env['rack.request.query_hash']

  # Send data out to connected Faye clients
  settings.faye_client.publish( "/beacons", a.to_json )

  # Return web beacon file
  send_file "assets/pixel.png"

end

get '/iframe.html' do

  # Create JSON object to send to connected Faye clients
  a = Hash.new
  a["tagNum"] = params["tag"]
  a["learnerName"] = params["name"]
  a["beaconPath"] = "iframe.html"
  a["queryStringParams"] = request.env['rack.request.query_hash']

  # Send data out to connected Faye clients
  settings.faye_client.publish( "/beacons", a.to_json )

  # Return web beacon file
  send_file "assets/iframe.html"

end

# require "byebug"; byebug; # Use and uncomment this line for debugging
