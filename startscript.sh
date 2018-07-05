#!/bin/bash
#created by Jonas Niesner
cd /root/infoprojekt/
#updates the project and rearms the start script
git fetch --all
git reset --hard origin/master
chmod +x startscript.sh
#enables the camera stream
sudo su - pi -c "uv4l --driver raspicam --auto-video_nr --width 1920 --height 1080 --encoding jpeg"
sudo su - pi -c '/home/pi/mjpg-streamer/mjpg-streamer-experimental/mjpg_streamer -i "/home/pi/mjpg-streamer/mjpg-streamer-experimental/input_uvc.so -rot 180" -o "/home/pi/mjpg-streamer/mjpg-streamer-experimental/output_http.so -w /home/pi/mjpg-streamer/mjpg-streamer-experimental/www -p 8090" > output.log 2>&1 &'
#starts the main programms in a subshell
sudo su - root -c "npm start --prefix /root/infoprojekt/frontend > output.log 2>&1 &"
sudo su - root -c "npm start --prefix /root/infoprojekt/backend > output.log 2>&1 &"
echo "Ok"
exit 0
