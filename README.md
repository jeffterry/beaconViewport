# Beacon Viewport

## Installation

```
git clone git@github.com:jeffterry/beaconViewport.git
cd beaconViewport
bundle install
```

## Development usage

Open a terminal and run:

```
ruby sinatra.rb
```

Open a second terminal and run:

```
rackup faye.ru -s thin -E production -p 9292
```

Then visit [http://localhost:4567](http://localhost:4567) in your browser.

## Production usage

```
god -c production.god
```

You can verify that it is running by executing:

```
god status
```

Then visit [http://your-public-ip](http://your-public-ip) in your browser.
