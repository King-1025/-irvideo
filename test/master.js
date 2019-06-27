const fs = require('fs');
const child_process = require('child_process');
const command_list=[
    	   ["server/rtsp2ws.js"],
	   ["test/webServer.js","browser"]
      ];

for(var i=0; i<command_list.length; i++) {
/*   
   var worker_process = null;
   var script=command_list[i]["script"];
   var args=command_list[i]["args"];

   if(args){
     worker_process=child_process.fork(script,args);
     console.log(script+" "+args);
   }else{
     worker_process=child_process.fork(script);    
     console.log(script);
   }
*/
   var args=command_list[i];
   var worker_process = child_process.spawn('node',args);

   console.log(args+"\n");

   if(worker_process){
     worker_process.stdout.on('data', function (data) {
        console.log(data);
     });
 
     worker_process.stderr.on('data', function (data) {
        console.log(data);
     });
 
     worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 '+code);
     });

   }

}

/*
for(var i=0; i<command_list.length; i++) {
    var workerProcess = child_process.exec(command_list[i], function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: '+error.code);
            console.log('Signal received: '+error.signal);
        }
        console.log(stdout);
        console.log(stderr);
    });
 
    workerProcess.on('exit', function (code) {
        //console.log('子进程已退出，退出码 '+code);
    });
}
*/
