//对JSMpeg简化操作,提供统一操作接口
//更多内容：https://github.com/phoboslab/jsmpeg
//必须加载 jsmpeg.min.js

//TODO JSMpeg播放器控制等
PlayHelper=function(){
    
    this.player=null;
    this.playURL=null;
    this.playCanvas=null;

    this.init=initEveryThing;

    function initEveryThing(playCanvasId,playURL){
       this.playCanvas=document.querySelector(playCanvasId);
       this.playURL=playURL;
       if(!this.player){
          this.player=new JSMpeg.Player(this.playURL, {canvas: this.playCanvas
	  ,videoBufferSize:1024*1024});
       }
    }

}
