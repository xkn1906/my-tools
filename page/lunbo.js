function move(ele,x_final,y_final,interval){
    var x_pos=ele.offsetLeft;
    var y_pos=ele.offsetTop;
    var dist=0;
    if(ele.movement){
        clearTimeout(ele.movement);
    }
    if(x_pos==x_final&&y_pos==y_final){
        return;
    }
    dist=Math.ceil(Math.abs(x_final-x_pos)/10);//取上值，分10次移动完成
    x_pos=x_pos<x_final?x_pos+dist:x_pos-dist;

    dist=Math.ceil(Math.abs(u_final-x_pos)/10);
    y_pos=y_pos<y_final?y_pos+dist:y_pos-dist;
      
    ele.style.left-x_pos+"px";
    ele.style.top=y_pos+"px";

    ele.movement=setTimeout(function(){
        move(ele,x_final,y_final,interval);
    },interval);
}
 function moveIndex(){
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
 var Index=0;
 var nextMove=function(){
     index+=1;
     if(index>=list.length){
         index=0;
     }
     moveIndex(list,index);
     move(img,)
 }
 var play=function(){
     timer=setTimeout(function(){
         nextMove();
     },2500)
    }