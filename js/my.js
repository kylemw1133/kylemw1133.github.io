
$(document).ready(function() {

/*
    Scroll features - upon specific nav click, scrolls to that section
*/
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
/*
    Updating navbar link color feature - When on a specific page, navbar link
    reflects this with changed color. Ue of Waypoints plugin to detect location. 
*/
$('#one').waypoint(function() {
    console.log('one');
    document.querySelector('.active').classList.remove('active')
    document.getElementById("nav1").classList.add("active")
}, {offset:'-5%'});

$('#two').waypoint(function(direction) {
    if(direction=='down') {
        document.querySelector('.active').classList.remove('active')
        document.getElementById("nav2").classList.add("active");
    } 
}, { offset: '20%'});
$('#two').waypoint(function(direction) {
    if(direction=='up') {
        document.querySelector('.active').classList.remove('active')
        document.getElementById("nav2").classList.add("active")
    } 
}, { offset: '-1%'});


$('#three').waypoint(function(direction) {
    if(direction=='down') {
        document.querySelector('.active').classList.remove('active')
        document.getElementById("nav3").classList.add("active")
    }
}, { offset: '20%'});

$('#three').waypoint(function(direction) {
    if(direction=='up') {
        document.querySelector('.active').classList.remove('active')
        document.getElementById("nav3").classList.add("active")
    }
}, { offset: '-1%'});

$('#four').waypoint(function() {
    document.querySelector('.active').classList.remove('active')
    document.getElementById("nav4").classList.add("active")
    
}, { offset: '20%'});


});
