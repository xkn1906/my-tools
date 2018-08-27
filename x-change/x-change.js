$(document).ready(function(){
    $(".list-1").click(function(){
        $(".list-1").css("backgroundPosition","0px -26px");
        $(".list-2").css("backgroundPosition","-30px -26px");
         $(".changelist").children().removeClass("change-list-1").addClass("change-list-2");
    })
    $(".list-2").click(function(){
       $(".list-1").css("backgroundPosition","0px 0px");
       $(".list-2").css("backgroundPosition","-30px 0px");
       $(".changelist").children().removeClass("change-list-2").addClass("change-list-1");
    })
 })


