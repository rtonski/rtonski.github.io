$(document).ready(function(){
    
    $('.hamburger').click(function(){

        $(".main-menu").toggleClass('open');
    });

    $('.main-menu-item').click(function(e){
        e.preventDefault();

        $('body').fadeOut(1000  , function(){
            window.location.href = $(e.target).attr('href');
        });
    });
});