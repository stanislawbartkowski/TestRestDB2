source env.rc
JAVA=/usr/lib/jvm/jre-15-openjdk/bin/java
JAR=target/TestRestDB2-1.0-SNAPSHOT-jar-with-dependencies.jar
$JAVA -cp $JAR:$DB2JDBC RestMain -c $PROP -p $PORT
