docker rm -f spiderweb-debug-ctnr
docker image rm -f spiderweb-debug
docker build -t spiderweb-debug -f Dockerfile.dev .
docker run -p 3000:3000 --name spiderweb-debug-ctnr -v `pwd`/src/:/usr/src/app/src/ -v `pwd`/public/:/usr/src/app/public/ spiderweb-debug