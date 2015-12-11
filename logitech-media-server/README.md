[Logitech Media Server](https://en.wikipedia.org/wiki/Logitech_Media_Server) - the server for Squeezebox machines and the [Squeezelite emulator](https://code.google.com/p/squeezelite/).

Built using the nightly [package for Debian](http://wiki.slimdevices.com/index.php/Debian_Package).

Current version: **7.9**.
 
Usage, mapping the /audio folder on the host:

* docker run -d -p 9000:9000 -p 3483:3483 -p 3483:3483/udp -p 9090:9090 -v /audio:/mnt/audio sixeyed/logitech-media-server

OR using Docker Compose, and storing the server state on the host (in /vms/docker/lms):

```
lms:
 container_name: lms
 hostname: lms
 image: sixeyed/logitech-media-server
 volumes:
  - /audio:/mnt/audio
  - /vms/docker/lms:/mnt/state
 ports:
  - "9000:9000"
  - "3483:3483"
  - "3483:3483/udp"
  - "9090:9090"
 mem_limit: 1g
 restart: always
```

Then connect to the UI using **http:://<host>:9000** and follow the setup, using /mnt/audio for your source.

