$(document).ready(function(){
    $('.home-arrow-center').mouseenter(function(){
        $('.home-arrow-center').hide();
        $('.home-arrow-center-hover').fadeIn(100);
    });
    $('.home-arrow-center-hover').mouseleave(function(){
        $('.home-arrow-center').fadeIn(100);
        $('.home-arrow-center-hover').hide();
    });
    
    
});//end