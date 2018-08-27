   var canvas=document.querySelector('canvas');//画布
   var ctxt=canvas.getContext('2d');//创建getContext('2d')对象
   var img=new Image();
   var show=function(){
        console.log('11');
        var im=document.querySelector('img');
       // var img=new Image();
        var file=document.querySelector("input[type='file']");//返回FileList对象
        var ffile=file.files[0];//选择列表中的第一个文件

        
        //用FileReader读取文件
        var reader=new FileReader();//FileReader对象允许web应用程序异步读取出巡在用户计算机上的文件
            reader.readAsDataURL(ffile);//读取文件方式，URL表示文件的数据为base64编码的字符串
            reader.onload=function(e){//文件加载
                img.src=this.result;
                //img.src=this.result;//读取图片完成
            }
            img.onload=function(){//图片加载
                canvas.setAttribute('width',img.width/4+'px');//设置画布分的大小
                canvas.setAttribute('height',img.height/4+'px');
                ctxt.drawImage(img,0,0,img.width/4,img.height/4);//将图片画入画布
                var data=ctxt.getImageData(0,0,img.width,img.height).data;//获取图片的像素数据
                //console.log(data,data.toString());
                    var main=document.getElementById('main');
                  //显示主要颜色  
                  var rgbs=maincolor(img);
                    main.style.background=rgbs;
                    main.textContent=rgbs;
                 //监听点击事件   
                canvas.addEventListener('click',pick);
             }
        }
            function pick(event){//点击图片响应事件
                    var color=document.getElementById('color');//显示颜色的地方
                    var x=event.layerX;        
                    var y=event.layerY; 
                    var pixel=ctxt.getImageData(x,y,1,1);
                    var data=pixel.data;
                    var rgb='rgb('+data[0]+','+data[1]+','+data[2]+')';
                    color.style.background=rgb;//设置div背景颜色
                    color.textContent=rgb;//显示颜色
                    
                }
            var rbg=new function(){
                this.r;
                this.g;
                this.b;
            }
            //引入color-thief.js的代码
            var newscript=document.createElement('script');
               newscript.setAttribute('type','text/javascript');
               newscript.setAttribute('src','color-thief.js');
               var head=document.getElementsByTagName('head')[0];
               head.appendChild(newscript);
            //提取主要颜色   
            function maincolor(data){
               var colorThief=new ColorThief();
               col=colorThief.getColor(data);
               var rgb='rgb('+col[0]+','+col[1]+','+col[2]+')';
               return rgb;
                }
        var input=document.querySelector("input[type='file']");
        input.addEventListener('change',show);//监听输入文件