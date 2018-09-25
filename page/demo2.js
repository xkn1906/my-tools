var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
var con1 = document.getElementById("con1");
var con2 = document.getElementById("con2");
var con3 = document.getElementById("con3");
var tit1 = document.getElementById("tit1");
var tit2 = document.getElementById("tit2");
var tit3 = document.getElementById("tit3");
function action1() {
    i1.style.animation = "mychange-2 2s";
    i1.addEventListener("animationend", function () {
        i1.style.animation = "none";
    })

    con1.style.animation = "con-change 2s";
    con1.addEventListener("animationend", function () {
        con1.style.animation = "none";
    })
    tit1.style.animation = "con-change 2s";
    tit1.addEventListener("animationend", function () {
        tit1.style.animation = "none";
    })
}
function action2() {
    i2.style.animation = "mychange-2 2s ";
    i2.addEventListener("animationend", function () {
        i2.style.animation = "none";
    })

    con2.style.animation = "con-change 2s";
    con2.addEventListener("animationend", function () {
        con2.style.animation = "none";
    })

    tit2.style.animation = "con-change 2s";
    tit2.addEventListener("animationend", function () {
        tit2.style.animation = "none";
    })
}
function action3() {
    i3.style.animation = "mychange-2 2s";
    i3.addEventListener("animationend", function () {
        i3.style.animation = "none";
    })

    con3.style.animation = "con-change 2s";
    con3.addEventListener("animationend", function () {
        con3.style.animation = "none";
    })
    tit3.style.animation = "con-change 2s";
    tit3.addEventListener("animationend", function () {
        tit3.style.animation = "none";
    })
}
function work() {
    var last;
    var last1;
    var last2;
    var last3;

    function repeat(action1, action2, action3) {
        clearTimeout(last);
        clearTimeout(last1);
        clearTimeout(last2);
        clearTimeout(last3);

        var args = arguments;
        last1 = setTimeout(function () {
            action1();
        }, 0);

        last2 = setTimeout(function () {
            action2();
        }, 3000);
        last3 = setTimeout(function () {
            action3();
        }, 6000);
        last = setTimeout(function () {
            repeat.apply(null, args);
        }, 9000);

    }
    return repeat;
}
var repeat = work();
repeat(action1, action2, action3);
i1.addEventListener("click", function () {
    repeat(action1, action2, action3)
});
i2.addEventListener("click", function () {
    repeat(action2, action3, action1)
});
i3.addEventListener("click", function () {
    repeat(action3, action1, action2)
});
