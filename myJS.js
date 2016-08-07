/**
 * Created by mrolaf on 8/7/16.
 */


//document.getElementById("first").addEventListener("animationend", function(){
//    alert("hello");
//});

$(document).ready(function(){


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


    $("#why").animate({"opacity" : "1"}, 3000)
    .animate({fontSize : "48px" , paddingTop : "10px"}, 3000, function(){
            $("#kar").fadeIn(4000);
            $("#dars").fadeIn(1000);
            $("#code").fadeIn(7000);
            $("#dars").toggleClass("fixed", 4000);

        })


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




