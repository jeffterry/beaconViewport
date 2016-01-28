# rackup faye.ru -s thin -E production -p 9292 -o 0.0.0.0

require "faye"
require "logger" # console.logging to a text file or the terminal

Faye.logger = Logger.new( 'logs/faye.log' )
Faye::WebSocket.load_adapter 'thin'
faye = Faye::RackAdapter.new( mount: '/faye', timeout: 45, extensions: [] )
run faye
