#!/bin/bash
#sets start point
cd ~/Documents/
#clones the project from github
git clone https://github.com/g4bri3lDev/infoprojekt.git
cd infoprojekt
#prepares the start script
chmod +x startscript.sh
./startscript.sh
#installs dep.
cd frontend 
npm install
cd ..
cd backend 
npm install
cd .. 
cd ..
#installs mjpg-streamer
sudo apt-get install cmake libjpeg8-dev
cd mjpg-streamer-experimental
make
sudo make install
echo "OK"
