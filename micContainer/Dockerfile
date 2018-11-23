# Adapted from a Dockerfile created by Andy Wong: https://hub.docker.com/r/binkybong/speech-recognition/
FROM centos:centos7 

# install and update CentOS packages
RUN \
yum install epel-release -y &&\
yum clean all && yum update -y
#install python and audio packages
RUN \
yum install portaudio-devel python34-pip mlocate bash-completion git wget sox libtool autoconf bison swig python34-devel python34-numpy python34-scipy python-devel doxygen alsa-utils alsa-lib-devel pulseaudio-libs-devel make -y
#install python packages using python's package manager (port audio bindings and speech to text)
RUN \
pip3 install pyaudio &&\
pip3 install SpeechRecognition &&\
chmod -R ugo+rX /lib/python2.7/site-packages/ &&\
chmod -R ugo+rX /lib/python3.4/site-packages/


RUN \
updatedb

#Nodejs dependencies
RUN \
yum install -y gcc gcc-c++ &&\
curl -sL https://rpm.nodesource.com/setup_10.x | bash - &&\
yum install -y nodejs

#create a directory to mount script directory later with "docker run -v"
RUN \ 
mkdir -p /src/micListener/ 

WORKDIR \
 /src/micListener


