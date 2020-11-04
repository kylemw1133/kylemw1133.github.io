
$(document).ready(function() {
//$('#nav1').addClass("active");

$("#nav1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#one").offset().top-66
    }, 1000);
 return false;
});

$("#nav2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#two").offset().top-112
    }, 1000);
 return false;
});

$("#nav3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#three").offset().top-112
    }, 1000);
 return false;
});

$("#nav4").click(function() {
    $('html,body ') .animate({
        scrollTop:        $("#four").offset().top-112
    }, 1000);
 return false;
});

});