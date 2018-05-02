#!/bin/bash
cd /home/pi/Documents/infoprojekt/
git fetch --all
git reset --hard origin/master
chmod +x startscript.sh
uv4l --driver raspicam --auto-video_nr --width 1920 --height 1080 --encoding jpeg
cd /home/pi/mjpg-streamer/mjpg-streamer-experimental
./mjpg_streamer -i "./input_uvc.so -rot 0" -o "./output_http.so -w ./www -p 8090" > output.log 2>&1 &
echo "Ok"
