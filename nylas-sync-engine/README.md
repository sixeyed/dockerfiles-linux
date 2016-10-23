# NYLAS Sync Engine

Cloned from [nhurel/nylas-sync-engine](https://hub.docker.com/r/nhurel/nylas-sync-engine/).

##Main changes:

 - use base Ubuntu image (12.04 seems required - check the Nylas [Vagrantfile](https://github.com/nylas/sync-engine))
 - replace custom init with standard
 - add create-db in startup
 - use [production](https://github.com/nylas/sync-engine/tree/production) branch


##TODO:

 - figure out what can be moved out of `secrets.yml`
 - upgrade to Xenial

More info to follow.