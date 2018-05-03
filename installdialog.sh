#!/bin/bash
if [[ $EUID -ne 0 ]]; then
   dialog --msgbox "This script must be run as root, use sudo "$0" instead" 0 0 1>&2
   clear
   exit 1
fi
concurrently=$(npm list -g concurrently)
if [[ ${concurrently} = *"empty"* ]]; then
  sudo npm install -g concurrently
  dialog --msgbox "Installed Concurrently" 0 0 1>&2
  clear
fi
folder=`dialog --inputbox "Pick installation folder" 0 0 "~/Documents/" 3>&1 1>&2 2>&3`
clear
cd ${folder}
git clone https://github.com/g4bri3lDev/infoprojekt.git
cd infoprojekt
chmod +x startscript.sh
cd frontend
npm install
cd ..
cd backend
npm install
dialog --msgbox "Installed Project" 0 0 1>&2
clear
start=`dialog --yesno "Start Project?" 0 0 3>&1 1>&2 2>&3`
clear
if ${start} == 0; then
    exit 1
fi
cd infoprojekt/
concurrently "cd frontend && npm start" "cd backend && npm start"