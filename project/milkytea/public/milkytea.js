$(document).ready(function () {
    var click1 = false;
    var click2 = false;
    var click3 = false;

    $("img.yidiandian").click(function () {
        if (click1 == false) {
            click1 = true;
            $.get('milkytea.json', function (data, status) {
                console.log(typeof data);
                console.log(data);//data是JS对象
                var yidiandian = data["一点点"];//从data数组里面取出一点点对象
                console.log(yidiandian[0]);
                console.log(typeof yidiandian[0]);

                for (var i = 0; i < yidiandian.length; i++) {
                    var txt1 = $("<li></li>").text(yidiandian[i].name + ":" + yidiandian[i].best);//创建节点
                    $(txt1).appendTo($(".pic-box.yidiandian"));
                    $("#yidiandian").append(txt1);//插入节点
                }
            })
        }

    })

    $("img.coco").click(function () {
        if (click2 == false) {
            click2 = true;
            $.get('milkytea.json', function (data, status) {
                console.log(typeof data);
                console.log(data);//data是JS对象
                var coco = data["coco"];
                for (var i = 0; i < coco.length; i++) {
                    console.log(coco.length)
                    var txt1 = $("<li></li>").text(coco[i].name + ":" + coco[i].best);
                    $(txt1).appendTo($(".pic-box.coco"))
                    $("#coco").append(txt1);
                }
            })
        }
    })
    $("img.siyun").click(function () {
        if (click3 == false) {
            click3 = true;
            $.get('milkytea.json', function (data, status) {
                console.log(typeof data);
                console.log(data);//data是JS对象
                var siyun = data["四云奶盖贡茶"];
                for (var i = 0; i < siyun.length; i++) {
                    var txt1 = $("<li></li>").text(siyun[i].name + ":" + siyun[i].best);
                    $(txt1).appendTo($(".pic-box.siyun"))
                    $("#siyun").append(txt1);
                }
            })
        }
    })
    $("#ok").click(function () {
        var params = {
            "type":$("#type option:selected").text(),
            "name":$("#name").text(),
            "best":$("#best").text()
        }
        console.log(params);
        $.ajax({
            data: params,
            url: "post",
            type: "post",
            beforeSubmit: function () {
                console.log("submit");
            },
            success:function (data) {
                console.log(data);
            },
            error:function(){
             alert('error');   
            },
        })
    })
})