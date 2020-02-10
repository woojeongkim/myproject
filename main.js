$(function(){
    var nav = $('nav');
        
    $(window).resize(function(){
        if($(this).width() < 480){
            $('nav > ul').add('.login').css({display:'block'});
            nav.find('.menu,.login').hide();
            menuBtn.click(function(e){
                e.preventDefault();
                nav.find('.menu').slideToggle();
            });
            userBtn.click(function(){
                nav.find('.login').slideToggle();
            });
        } else {
            $('nav > ul').css({display:'flex'});
            $('.login').show();
            $('nav').hover(
                function(){
                    $('.navbg').add('.menu_list').addClass('active');
                },function(){
                    $('.navbg').add('.menu_list').removeClass('active');
                    
                });
        }
    });
  $(window).trigger('resize');
    $(window).trigger('scroll');
    
    $(window).scroll(function(){
        if(menu){
            var menuOffset = menu.offset().top - 300;
            var excuted = false;
            if(!excuted){
                if($(this).scrollTop() > menuOffset){
                    menu.addClass('active');
                }
             
            }
        }
    
    });
      
    
});
$(function(){
    var snslist = $('.sns_list').bxSlider({
    mode:'horizontal',
     controls: false,
    pager:false,
    minSlides: 3,
    maxSlides : 6,
    moveSlides: 1,
    slideWidth : 160,
    slideMargin:30,
    auto:true,
    pause:2000,
    speed:1000,
    autoHover:true
}); 



});//document ready
    


    