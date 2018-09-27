function move(ele,x_final,y_final,interval){
    var x_pos=ele.offsetLeft;
    var y_pos=ele.offsetTop;
    var dist=0;
    if(ele.movement){
        clearTimeout(ele.movement);//必须要加，防止悬停
    }
    if(x_pos==x_final&&y_pos==y_final){
        return;
    }
    dist=Math.ceil(Math.abs(x_final-x_pos)/10);//取上值，分多次移动完成
    x_pos=x_pos<x_final?x_pos+dist:x_pos-dist;
    //console.log(x_pos);
    dist=Math.ceil(Math.abs(y_final-y_pos)/10);
    y_pos=y_pos<y_final?y_pos+dist:y_pos-dist;
      
    ele.style.left=x_pos+"px";
    ele.style.top=y_pos+"px";
    //ele.style.left=x_final+"px";
    //ele.style.top=y_final+"px";
    ele.movement=setTimeout(function(){//每隔interval调用一次（即移动一次）
      move(ele,x_final,y_final,interval);
    },interval);
    console.log(ele.movement);
}
 function moveIndex(list,num){
     for(var i=0;i<list.length;i++){
         if(list[i].className=='on'){
             list[i].className='';
         }
     }
     list[num].className='on';
 }
 var img=document.getElementById('img');
 var list=document.getElementById('ilist').getElementsByTagName('i');
 console.log(list);
 var index=0;
 var timer;
 var nextMove=function(){
     index+=1;
     if(index>=list.length){
         index=0;
     }
     moveIndex(list,index);
     move(img,-1000*index,0,0);
 }
 var play=function(){
     nextMove();
     timer=setTimeout(function(){
         play();
     },2500)
    }

    for(var i=0;i<list.length;i++){
        list[i].index=i;
        list[i].onmousedown=function(){
            var clickIndex=parseInt(this.index);
            
            clearTimeout(timer);//鼠标按下清空timer比较好，然后等待下面再次调用
            move(img,-1000*clickIndex,0,0);
            index=clickIndex;
            moveIndex(list,index);
           
        };
        var timers;
        list[i].onmouseup=function(){
            clearTimeout(timers);//为了防止多次快速点击，导致队列里面多出play任务从而导致，转换加快。
          timers=setTimeout(function(){//为了不让放开鼠标的时候马上进行滑动
              play();
          },2500);
        }
      }
        play();