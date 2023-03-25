docker build -t flaskimage .
docker rm flaskcontainer
docker run --name flaskcontainer -p 7776:7776 flaskimage