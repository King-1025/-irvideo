主要文件:
  browser/video-stream.html 视频显示页

  server/rtsp2ws.js 转换rtsp视频流为websocket数据流

实现思路:
  1）在服务器端，使用rtsp2ws.js将rtsp视频流转换到websocket数据流，即: rtsp://... => ws://...
  2) 在浏览器端，借助jsmpeg.min.js库，从websocket数据流中取图片帧，并渲染到canvas上

Demo演示: 
   执行“run.sh"或者"run.cmd”，并访问“http://localhost:8086/”
