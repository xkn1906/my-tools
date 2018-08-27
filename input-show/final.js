var debounce=function(idle,action){
    var last ;//
    console.log('2');
    return function(){
      var ctx=this,args=arguments;
      clearTimeout(last);//清除时间
      console.log('4');  
     last=setTimeout(function(){//设置时间执行action
         console.log('1');
         action.apply(ctx,args)
        },idle)   
    }
    };
var out=function(){
var tt=arguments;
var demos=new Array();//存储选择器字符串
var paras=new Array();//存储要显示的段落
/*isneed= function(need){//判断是否是需要显示的输入框
if(need.length<4) return false;
if(need.substring(4)!='demo') return false;
else return true;
}*/
for(var i=0;i<tt.length;i++){//循环存储选择器标签
//if(isneed(tt[i]))
demos[i]='#'+tt[i];
}
for(var i=0;i<tt.length;i++){

paras[i]=document.querySelector(demos[i]);
}
var input=document.querySelector('input');//输入框
console.log(input.value);

function show(){//段落中显示
console.log(paras.length);
for(var i=0;i<paras.length;i++){
console.log(input.value);
paras[i].textContent=input.value;
}
}
var work=debounce(200,show);
input.addEventListener('keyup',work); //监听输入框
}
out('demo1','demo2','demo3');
out('demo4','demo5','demo6','demo7');