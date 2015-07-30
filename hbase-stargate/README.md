FROM nerdammer/hbase - HBase running in pseudo-distributed mode, with the REST API started (listening on default port 8080).

Usage, with all HBase ports mapped:

* docker run -p 2181:2181 -p 60010:60010 -p 60000:60000 -p 60020:60020 -p 60030:60030 -p 8080:8080 -p 8085:8085 sixeyed/hbase-stargate

Browse to http://localhost:8085 to verify the REST server is working, and access Stargate on http://localhost:8080.
