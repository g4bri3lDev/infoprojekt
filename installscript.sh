#!/bin/bash
cd ~/Documents/
git clone https://github.com/g4bri3lDev/infoprojekt.git
cd infoprojekt
chmod +x startscript.sh
./startscript.sh
cd frontend 
npm install
cd ..
cd backend 
npm install
cd.. 
echo "OK"
