source env.rc
JAR=target/TestRestDB2-1.0-SNAPSHOT-jar-with-dependencies.jar
java -cp $JAR:$DB2JDBC RestMain -c $PROP -p $PORT