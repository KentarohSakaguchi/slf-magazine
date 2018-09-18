FROM docker/whalesay:latest

RUN apt-get -y update && apt-get insatll -y fortunes

CMD /usr/games/fortunes | cowsay
