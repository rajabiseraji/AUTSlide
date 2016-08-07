/**
 * Created by mrolaf on 8/7/16.
 */


//document.getElementById("first").addEventListener("animationend", function(){
//    alert("hello");
//});

$(document).ready(function(){

    console.log("gooooz");
    $("#kar").fadeIn(4000);
    $("#dars").fadeIn(1000);
    $("#code").fadeIn(7000);
    $("#dars").addClass("fixed", 1000);

    setTimeout(function(){
        //console.log(window.location.href);
        if(window.location.href == "http://localhost:63342/SlideAUT/index.html"){
        //alert(window.location.href);
        window.location.href = "second.html";}
    }, 10000);

var arr = $("path");

for(var i =0 ; i < arr.length ; i++){
    var q = arr[i];
    q.addEventListener("animationend", p);
    console.log("hello");
}

    $(".logo").animate({width: "90px" , height: "90px" , paddingTop : "1px" , opacity:"1"}, 3000, function(){
        $("#logoCircle path").addClass("animated");
    });
    $("#why").animate({"opacity" : "1"}, 3000)
    .animate({fontSize : "48px" , paddingTop : "100px"}, 3000, function(){
            //$(".logo").animate({width: "90px" , height: "90px" , paddingTop : "1px"}, 3000, function(){
            //    $("#logoCircle path").addClass("animated");
            //});

            $("#sakhtLogo").fadeIn(1000);
            $("#NarmLogo").fadeIn(2000);
            $("#ITLogo").fadeIn(3000);

        })


});



/********************   **************************/

$(document).keypress(function(){

    if(window.location.href == "http://localhost:63342/SlideAUT/second.html") {


        clickNum++;
        console.log(clickNum);
        console.log($("#dars").attr("class") + " kar "+ $("#kar").attr("class"));
        if(clickNum == 1) {
            $("#dars").removeClass("fixed", 2000);
            //$("#dars").addClass("", 2000);
            $("#kar").toggleClass("fixed", 2000);
        } else if(clickNum == 2) {
            //$("#dars").toggleClass("fixed", 2000);
            $("#kar").toggleClass("fixed", 2000);
            $("#code").toggleClass("fixed", 2000);
        }


    } else {

        $("#why , #NarmLogo , #ITLogo, #compLogo , g").fadeOut(1000);
        //$("g").hide(1000);
        //$("").hide(1000);
        //$("#ITLogo").hide(1000);
        //$("#compLogo").hide(1000);
        $("#sakhtLogo span").fadeOut(1000, function () {
            document.location.href = "second.html"
        });
        $("#sakhtLogo").animate({
            top: "5px",
            right: "50px",
            backgroundSize: "100%",
            width: "150px",
            height: "130px"
        }, 2000, function () {
        });

    }


});







var clickNum = 0;

$("body").click(function(){

    //$("dars").animate({webkitFilter : grayscale(0%)},4000);
    clickNum++;
    if(clickNum === 1) {
        $("#dars").toggleClass("fixed", 2000);
        $("#kar").toggleClass("fixed", 2000);
    } else if(clickNum === 2) {
        //$("#dars").toggleClass("fixed", 2000);
        $("#kar").toggleClass("fixed", 2000);
        $("#code").toggleClass("fixed", 2000);
    }
});


function p() {
    this.style.strokeDashoffset = "0";
}




