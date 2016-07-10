# hadoop-dotnet

Image for running .NET MapReduce jobs. Installed with Hadoop and .NET Core. This is the sample image used in my upcoming [Pluralsight course](https://www.pluralsight.com/authors/elton-stoneman), *Hadoop for .NET Developers* - [follow me on Twitter](https://twitter.com/EltonStoneman) for updates on that.

There's a walkthrough on my blog: [Hadoop and .NET: A Match Made in Docker](https://blog.sixeyed.com/hadoop-and-net-core-a-match-made-in-docker/)

## Usage

Containers can start as a 'master' (running the HDFS Name Node and YARN Resource Manager services), or as a 'worker' (running HDFS Data Node and YARN Node Manager services).

This image lets you spin up a distributed cluster on a single Docker machine or on a Swarm.

**Note: the [MapReduce configuration](conf/mapred-site.xml) specifies restricted memory for YARN tasks (1GB JVM and 1.5GB for tasks), to support multi-node clusters running on a single machine.**

## Example cluster

The [Docker Compose](docker-compose.yml) file shows a simple cluster setup with one master and one worker node. You can extend that by adding more workers. Workers can be called anything, but the configuration expects the master to be called `hadoop-dotnet-master`.

##Running .NET MapReduce jobs

.NET Core 1.0.0 is installed on the image, so you can copy compiled .NET Core dlls into the container and run them as Hadoop streaming jobs. If you have all your DLLs and dependencies in a local folder called `dotnetcore`, first copy the folder to the master node:

```
docker cp dotnetcore hadoop-dotnet-master:/dotnetcore
```

Then submit a streaming job specifying the file location of the .NET assemblies, and the name of the mapper and reducer:

```
hadoop jar $HADOOP_HOME/share/hadoop/tools/lib/hadoop-streaming-2.7.2.jar \
-files "/dotnetcore" \
-mapper "dotnet dotnetcore/My.Mapper.dll" \
-reducer  "dotnet dotnetcore/My.Reducer.dll" \
-input /input/* -output /output
```

From then on it's a standard YARN job which you can monitor on the master node at port 8088.
