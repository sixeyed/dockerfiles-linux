# ubuntu-with-utils

Ubuntu image with a couple of useful tools installed for troubleshooting or navigating Docker networks, like `ping` and `telnet`.

## Usage

Run interactively, joining a named network if you want to poke around:

```
docker run -it --network my-net sixeyed/ubuntu-with-utils
```

