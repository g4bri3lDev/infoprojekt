#!/bin/bash
cd /root/infoprojekt/
#updates the project and rearms the start script
git fetch --all
git reset --hard origin/master
chmod +x startscript.sh
#enables the camera stream
uv4l --driver raspicam --auto-video_nr --width 1920 --height 1080 --encoding jpeg
cd /root/infoprojekt/mjpg-streamer/mjpg-streamer-experimental
./mjpg_streamer -i "./input_uvc.so -rot 180" -o "./output_http.so -w ./www -p 8090" > output.log 2>&1 &
#starts the main programms
npm start --prefix /root/infoprojekt/frontend > output.log 2>&1 &
npm start --prefix /root/infoprojekt/backend > output.log 2>&1 &
echo "Ok"
