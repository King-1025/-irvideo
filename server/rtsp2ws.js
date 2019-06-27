//转换RTSP流为WebSocket数据流
//转换形式：rtsp://...  =>  ws://...
//必须安装FFmpeg流媒体工具
//更多内容：https://github.com/kyriesent/node-rtsp-stream

Stream = require('node-rtsp-stream');
	
if (process.argv.length < 2) {
	console.log(
      	    "Usage: node rtsp2ws.js <rtsp-stream> [websocket-port]"
	);
	process.exit();
}

const RTSP_STREAM = process.argv[2] || "rtsp://47.93.47.77/live/test.sdp";
const WEBSOCKET_PORT = process.argv[3] || 9999;

const interfaces = require('os').networkInterfaces(); // 在开发环境中获取局域网中的本机iP地址
let IPAddress = "";
for(var devName in interfaces){  
  var iface = interfaces[devName];  
  for(var i=0;i<iface.length;i++){  
        var alias = iface[i];  
        if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){  
              IPAddress = alias.address;  
        }  
  }
} 

console.log(RTSP_STREAM+"  =>  "+"ws://"+IPAddress+":"+WEBSOCKET_PORT+"/\n");

stream = new Stream({
  name: 'name',
  streamUrl: RTSP_STREAM, //RTSP流地址
  wsPort: WEBSOCKET_PORT,
  ffmpegOptions: { // options ffmpeg flags
    '-stats': '', // an option with no neccessary value uses a blank string
    '-r': 30, // options with required values specify the value after the key
    '-vf':"fps=60",
    '-b':"1024k"
  }
});
