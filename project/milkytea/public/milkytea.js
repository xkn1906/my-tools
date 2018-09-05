$(document).ready(function () {
    var click1 = false;
    var click2 = false;
    var click3 = false;

    $("img.yidiandian").click(function () {
        if (click1 == false) {
            click1 = true;
            var params1 = { "type": "一点点" };
            $.ajax(
                {
                    data: params1,//讲自动转换称string类型
                    url: "milkytea.json",
                    type: "post",
                    //dataType:"json",//预期返回数据,此处需要yidiandian数组对象
                    success: function (data) {//ajax事件
                        var yidiandian = data;
                        //console.log("1");
                        console.log(yidiandian);
                        for (var i = 0; i < yidiandian.length; i++) {
                            var txt1 = $("<li></li>").text(yidiandian[i].name + ":" + yidiandian[i].best);//创建节点
                            $(txt1).appendTo($(".pic-box.yidiandian"));
                            $("#yidiandian").append(txt1);//插入节点
                        }
                    }
                })
            }
                else {
                    alert("请不要重复点击哦")
                };
    })

    $("img.coco").click(function () {
        if (click2 == false) {
            click2 = true;
            var params1 = { "type": "coco" };
            $.ajax(
                {
                    data: params1,//讲自动转换称string类型
                    url: "milkytea.json",
                    type: "post",
                    //dataType:"json",//预期返回数据,此处需要yidiandian数组对象
                    success: function (data) {//ajax事件
                        var coco = data;
                        //console.log("1");
                        console.log(coco);
                        for (var i = 0; i < coco.length; i++) {
                            var txt1 = $("<li></li>").text(coco[i].name + ":" + coco[i].best);//创建节点
                            $(txt1).appendTo($(".pic-box.coco"));
                            $("#coco").append(txt1);//插入节点
                        }
                    }
                })
        }
        else {
            alert("请不要重复点击哦")
        };
    })
    $("img.siyun").click(function () {
        if (click3 == false) {
            click3 = true;
            var params1 = { "type": "四云奶盖贡茶" };
            $.ajax(
                {
                    data: params1,//讲自动转换称string类型
                    url: "milkytea.json",
                    type: "post",
                    //dataType:"json",//预期返回数据,此处需要yidiandian数组对象
                    success: function (data) {//ajax事件
                        var siyun = data;
                        //console.log("1");
                        console.log(siyun);
                        for (var i = 0; i < siyun.length; i++) {
                            var txt1 = $("<li></li>").text(siyun[i].name + ":" + siyun[i].best);//创建节点
                            $(txt1).appendTo($(".pic-box.siyun"));
                            $("#siyun").append(txt1);//插入节点
                        }
                    }
                })
        }
        else {
            alert("请不要重复点击哦")
        };
    })
  $("#ok").click(function(event){
      event.preventDefault();
        var params = {
            "type": $("#type option:selected").text(),
            "name": $("#name").val(),
            "best": $("#best").val()
        }
        console.log(params);
        
          $.ajax({
            data: params,
            url: "post",
            type: "post",
            success: function (data) {
                console.log(data);
            },
            error: function () {
                alert('error');
            }
        })  
    })
})