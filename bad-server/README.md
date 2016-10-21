# bad-server

Simple HTTP server which errors under known conditions - use for forcing a container to exit on demand, useful for testing.

## Usage

```
docker run -d -p 8080:8080 --bad-server sixeyed/bad-server
```

You now have a bad server listening on port 8080. You can browse to `http://localhost:8080/{any-path}` and you get a basic HTML reponse. Browse to `http://localhost:8080/err` and the server app exits with return code 1, so the container exits.

### Sample

```
> docker run -d -p 80:8080 sixeyed/bad-server
8b4bd7ffd96d543c9b51c7709267894d2bc75daa99ea80250d5e7846f98a6526                                                                         
> docker logs -f 8b4
+ exec app
Listening on port 8080                                                                                                        
Responding to path: test                                                                                 
err!
> docker ps --all
CONTAINER ID        IMAGE                COMMAND             CREATED             STATUS                        PORTS               NAMES
8b4bd7ffd96d        sixeyed/bad-server   "go-wrapper run"    37 seconds ago      Exited (1) 10 seconds ago                         ferven
t_hawking
```

While the `logs` were running, I hit `http://localhost/test` and then `http://localhost/err` - which caused the container to exit.
