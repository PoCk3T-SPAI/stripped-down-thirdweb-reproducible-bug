docker rm -f spiderweb-debug-ctnr
docker image rm -f spiderweb-debug
docker build -t spiderweb-debug .
docker run -p 8080:8080 --name spiderweb-debug-ctnr spiderweb-debug