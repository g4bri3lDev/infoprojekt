//controll code for the 'YDLIDAR X4' lidar
//written by Jonas Niesner

//config
//system port name
const portname = '/dev/ttyUSB0';
//minimum valid lidar distance 
const min_dist = 200.0;
//maximum valid lidar distance 
const max_dist = 6000.0;

//importing the serial port lib
var SerialPort = require('serialport');
//opening the serial port
var port = new SerialPort(portname, {baudRate: 128000});

//last angle
var lastval = 0;
//last timestamp
var ts = 0;

var centre_min = max_dist;
var left_min = max_dist;
var right_min = max_dist;

//setting up port callbacks
port.on('readable',function (){ processdat();});
port.on('error', function(err) {console.log('Error: ', err.message);})

//More Information about the calculations can be found on the YDLIDAR X4 DEVELOPMENT MANUAL
//it took me way to long to get the angle calculation right...
function processdat(){
  //read the serial buffer  
  var buf = port.read();
  //converte it to hex
  var data = buf.toString('hex');
  //filters for valid sensor data packets (and ignores null packets)
  var pos = data.search("aa5500");
  //calculetes packet length
  var length = parseInt(data.substring(pos + 6,pos + 8),16);
  //calculates the start angle and adds the correction value
  var staa = (parseInt(data.substring(pos+10,pos+12) + data.substring(pos+8,pos+10),16) >>> 1)/64 + anglecorr(parseInt(data.substring(pos+22,pos+24) + data.substring(pos+20,pos+22),16)/4);
  //calculates the stop angle and adds the correction value
  var stoa = (parseInt(data.substring(pos+14,pos+16) + data.substring(pos+12,pos+14),16) >>> 1)/64 + anglecorr(parseInt(data.substring(pos+22+(length - 1)*4,pos+24+(length - 1)*4) + data.substring(pos+20+(length - 1)*4,pos+22+(length - 1)*4),16)/4);
  //if the data crosses the jump from 360 back to 0 this has to be done to avoid errors 
  if((stoa - staa) < 0)stoa = stoa + 360;
  //iterate throug the data
  for(var i = 0;i < length;i++){
   //calculates the distance
   var dist = parseInt(data.substring(pos+22+i*4,pos+24+i*4) + data.substring(pos+20+i*4,pos+22+i*4),16)/4;
   //calculates the angele and checks that it never is gerater than 360
   var angle = ftc(((stoa  - staa)/length)*i + staa + anglecorr(dist));
   //checks for full rotations
   if(lastval > angle + 40){
       const hrTime = process.hrtime(); 
       var time =  hrTime[0] * 1000000 + hrTime[1] / 1000;
       console.log('New Frame >>');
       console.log('>> '+Math.round((1/((time - ts)/1000000))*100)/100 + ' FPS');
       ts = hrTime[0] * 1000000 + hrTime[1] / 1000;
       frame_done();
   }
   //writes last angle for the fame check
   lastval = angle;
   //data processing stuff
   if(15 > angle || angle > 345){
     console.log(angle);
     console.log("> m " + dist);
     if(datavalid(dist)){
     
         
    }
   }
   if(15 < angle && angle < 45){
     console.log(angle);
     console.log("> r " + dist);
   }
   if(345 > angle && angle < 315){
     console.log(angle);
     console.log("> l " + dist);
   }
}
}

function frame_done(){
    
     centre_min = max_dist;
     left_min = max_dist;
     right_min = max_dist;
}

//distance validation
function datavalid(dist){
    if(dist < min_dist)return false;
    if(dist > max_dist)return false;
    return true;
}

//angele correction function
function anglecorr(dist){
    //More Information about the calculations can be found on the YDLIDAR X4 DEVELOPMENT MANUAL
    if(dist == 0)return 0;
    else{
        return Math.atan(21.8*((155.3-dist)/(155.3*dist)))*(180/Math.PI);
    }
}

//shortens angles over 360 degrees
function ftc(angle){
    if(angle <= 360.0){
        return angle;
    }
    else if(angle > 360 && angle <= 720){
        return angle - 360;    
    }
    else return angle - 720;
}

//this function should be self explanatory
function hex_to_ascii(str1){
	var hex  = str1.toString();
	var str = '';
	for (var n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
 
function lidar_start(){
port.write(hex_to_ascii('A560'));
setTimeout(lidar_stop, 2000000);
    
} 

function lidar_stop(){ 
port.write(hex_to_ascii('A565'));
setTimeout(lidar_start, 20);
    
} 

setTimeout(lidar_start, 3000);
