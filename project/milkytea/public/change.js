var fs=require("fs");
var paras={
    "name": "四季如意",
    "best": "去冰+无糖+冰激凌"
}
var paras1={
    "name":"奶霜梅梅果茶",
    "best":"去冰+无糖"
}
var paras2={
    "name":"水果茶",
    "best":"去冰+无糖"
}
//paras=JSON.parse(paras);
fs.readFile("milkytea.json",function(err,data){
    if(err){
        return console.error(err);
    }
    var tea=data.toString();//将二进制转换成字符串
    tea=JSON.parse(tea);//将tea转换成json对象
    var yidiandian=tea["一点点"];
    var coco=tea["coco"];
    var siyun=tea["四云奶盖贡茶"];
    console.log(yidiandian[5]);
    console.log(coco[6]);
    console.log(coco[5]);
   yidiandian.pop();
    //coco.pop(coco[6]);
   //siyun.pop(siyun[5]);
    console.log(tea);
    var str=JSON.stringify(tea);
    
    fs.writeFile("milkytea.json",str,function(err){
        if(err){
            console.error(err);
        }
        console.log("delete success");
    })
})