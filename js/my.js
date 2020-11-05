
$(document).ready(function() {
//$('#nav1').addClass("active");

$("#nav1").click(function() {
    $('html, body').animate({
        scrollTop:        $("#one").offset().top-112
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
        scrollTop:        $("#four").offset().top-110
    }, 1000);
 return false;
});

$('#one').waypoint(function() {
    console.log('one');
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");
    document.getElementById("nav1").classList.add("active")
}, {offset:'-5%'});
$('#two').waypoint(function() {
    console.log('two');
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");
    document.getElementById("nav2").classList.add("active")
    
}, { offset: '20%'});
$('#three').waypoint(function() {
    console.log('three');
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav4").classList.remove("active");
    document.getElementById("nav3").classList.add("active")
    
}, { offset: '20%'});
$('#four').waypoint(function() {
    console.log('four');
    document.getElementById("nav1").classList.remove("active");
    document.getElementById("nav2").classList.remove("active");
    document.getElementById("nav3").classList.remove("active");
    document.getElementById("nav4").classList.add("active")
    
}, { offset: '20%'});


});
