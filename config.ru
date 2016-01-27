#!/usr/bin/env rackup
# encoding: utf-8
# Not going to use config.ru for development any more - this file is just to support production

require_relative "sinatra.rb"
run Sinatra.application




# First call sinatra.rb - using rerun so it auto reloads upon changes - run in terminal
# Running on port 3000
# rerun "ruby sinatra.rb"

# Then call faye.ru separatly (faye does not need a rerun as we won't be making any changes to it) - run in terminal
# Running on port 9292
# bundle exec rackup faye.ru -s thin -E production