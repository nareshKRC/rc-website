$(document).ready(function(){

    function showMenu(prmBut,prmMenu){
        $(prmBut).hover(function(){
            $(prmMenu).stop(true, true).show();
            $(this).addClass("active");
        }, function(){
            $(prmMenu).hide();
            $(this).removeClass("active");
        });

        $(prmMenu).hover(function(){
            $(this).show();
            $(prmBut).addClass("active");
        }, function(){
            $(this).hide();
            $(prmBut).removeClass("active");
        });
    }

        showMenu(".m1but",".smdiv1");
        showMenu(".m2but",".smdiv2");
        showMenu(".m3but",".smdiv3");
        showMenu(".m4but",".smdiv4");
        showMenu(".m5but",".smdiv5");
        showMenu(".m6but",".smdiv6");

    });