[Samba server](https://www.samba.org/) - for file shares accessible to Linux, Windows & Mac clients.

FROM [dperson/samba](https://hub.docker.com/r/dperson/samba/) with additional UDP ports mapped.

Usage, mapping the /audio/music folder on the host as an SMB share called **music**, with public browse, read-write and guest access:

* docker run  -p 139:139 -p 445:445 -p 137:137/udp -p 138:138/udp -v /audio/music:/music -d sixeyed/samba -s "music;/music;yes;no;yes;all"

OR using Docker Compose:

```
samba:
 container_name: samba
 hostname: samba
 image: sixeyed/samba
 volumes:
  - /audio:/mnt/audio
 ports:
  - "139:139"
  - "445:445"
  - "137:137/udp"
  - "138:138/udp"
 command: samba.sh -s "music;/mnt/audio/music;yes;no;yes;all" 
 mem_limit: 1g
 restart: always
```

Connect to the share using **smb://<host>/music** and sign in with the guest account (if prompted).
