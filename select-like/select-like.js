$(document).ready(function(){
    $('div.checkbox').hide();
    $('img').click(function(){//隐藏显示
        $('div.checkbox').toggle();
        /*$('img').attr('src',function(i,origin){
            if(origin=='F:\\office\image\1.png'){
                return 'F:\\office\image\down.png'
            }
            else return 'F:\\office\image\1.png'
        })*/
    })
    var skills=$("input.skills")//选取所有class为skills的元素
    //var skills1=$("input[value='HTML5']");//jQuery.fn.init元素对象
    //console.log(skills1.attr('checked'));//jQuery对象
    //console.log(skills[1]);//skills[1]是input标签元素
    //console.log(skills[1].attr(''));
    skills.click(function(){
         var n=0;
        for(var i=0;i<7;i++){
            
            //console.log(skills[i].value);
            //console.log(skills[i].checked);
            //console.log(skills[i].getAttribute('checked'));
           if(skills[i].checked==true){
               n++;
               console.log(n);
               }
         }
        $('p.ch').text(n+' '+'selected')
    })
})