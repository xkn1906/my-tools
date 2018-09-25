$(document).ready(function () {
    $("div.decorating").fadeIn(1500);
    $("div.content").fadeIn(1500);
    tit1 = $("h1.tit1");
    tit2 = $("h1.tit2");
    tit3 = $("h1.tit3");
    con1 = $("p.con1");
    con2 = $("p.con2");
    con3 = $("p.con3");
    i1 = $("i.i1");
    i2 = $("i.i2");
    i3 = $("i.i3");
    var repeat=Ready();
    repeat(action1, action2, action3);
    $("li i.i1").click(function () {


        repeat(action1, action2, action3);
    })
    $("li i.i2").click(function () {


        repeat(action2, action3, action1);
    })
    $("li i.i3").click(function () {


        repeat(action3, action1, action2);
    })
})
function action1() {
    tit1.css({visibility:''});
    tit2.css({visibility:'hidden'});
    tit3.css({visibility:'hidden'});
    con1.css({visibility:''});
    con2.css({visibility:'hidden'});
    con3.css({visibility:'hidden'});
    i1.animate({backgroundColor:'#80ffff'},'500');
    i2.animate({backgroundColor:"#ffffff"},'500');
    i3.animate({backgroundColor:"#ffffff"},'500');
}
function action2() {
    tit1.css({visibility:'hidden'});
    tit2.css({visibility:''});
    tit3.css({visibility:'hidden'});
    con1.css({visibility:'hidden'});
    con2.css({visibility:''});
    con3.css({visibility:'hidden'});
    i2.animate({backgroundColor:'#80ffff'},'500');
    i1.animate({backgroundColor:"#ffffff"},'500');
    i3.animate({backgroundColor:"#ffffff"},'500');
}
function action3() {
    tit1.css({visibility:'hidden'});
    tit2.css({visibility:'hidden'});
    tit3.css({visibility:''});
    con1.css({visibility:'hidden'});
    con2.css({visibility:'hidden'});
    con3.css({visibility:''});
    i3.animate({backgroundColor:'#80ffff'},'500');
    i2.animate({backgroundColor:"#ffffff"},'500');
    i1.animate({backgroundColor:"#ffffff"},'500');
}
function Ready(){
    var last;
    var last1;
    var last2;
    var last3;
    function repeat(action1, action2, action3) {
    clearTimeout(last);
    clearTimeout(last1);
    clearTimeout(last2);
    clearTimeout(last3);
    args = arguments;
    last1 = setTimeout(function () {
        action1();
    }, 0);
    last2 = setTimeout(function () {
        action2();
    }
        , 1500);
    last3 = setTimeout(function () {
        action3();
    }, 3000);
    last = setTimeout(function(){
        repeat.apply(null,args);
    }, 4500);
}
  return repeat;
}
