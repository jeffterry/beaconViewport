require "sinatra"
require "faye"
require "json"

# Set Sinatra configuration settings - available via "settings" variable
if production?
  require "public_ip"
  public_ip = PublicIp.get_ip
  set :faye_url, "http://#{public_ip}:9292/faye"
else
  set :faye_url, "http://localhost:9292/faye"
end
set :faye_client, Faye::Client.new( settings.faye_url )

get '/' do
  @faye_url = settings.faye_url
  erb :index
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
