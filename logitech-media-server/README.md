[Logitech Media Server](https://en.wikipedia.org/wiki/Logitech_Media_Server) - the server for Squeezebox machines and the [Squeezelite emulator](https://code.google.com/p/squeezelite/).

Built using the nightly [package for Debian](http://wiki.slimdevices.com/index.php/Debian_Package).

Current version: **7.9**.
 
Usage, mapping the /audio foleder on the host:

* docker run -d -p 9000:9000 -p 3483:3483 -p 9090:9090 -v /audio:/mnt/audio sixeyed/logitech-media-server

Then connect to the UI using http:://<host>:9000 and follow the setup, using /mnt/audio for your source.

