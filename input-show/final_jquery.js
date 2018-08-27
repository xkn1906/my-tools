
//在选取的paras中显示
function dest(){
    args=arguments;
    var len=args.length;
    for(var i=0;i<len;i++){
        show(args[i]);
    }
}
//在paras中显示
var show=function(demo){
    $(document).ready(function(){
    $('input').keyup(function(){
       var s=this;
       function action(){
        $('p.'+demo).text($(s).val())
       }
       var work=debounce(1000,action)
       work();
    })
})
}
//除颤
var debounce=function(idle,action){
    var last ;//
    console.log('2');
    return function(){
      var ctx=this,args=arguments;
      clearTimeout(last);//清除时间
      console.log('4');  
     last=setTimeout(function(){//设置时间执行action
         console.log('1');
         action.apply(ctx,args)//function特有的apply属性
        },idle)   
        
    }
    };
    dest('demo1','demo2','demo5');