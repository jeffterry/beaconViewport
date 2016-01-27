# Default port for Faye is 9292

require "faye"
# require "logger" # console.logging to a text file or the terminal

# Faye.logger = Logger.new(STDOUT)
Faye::WebSocket.load_adapter 'thin'
faye = Faye::RackAdapter.new(mount: '/faye', timeout: 45, extensions: [])
run faye