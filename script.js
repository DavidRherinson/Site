$(function(){
  $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active")
       $('.menu-btn i').toggleClass("active")

  })

// $('.navbar .menu li a').click(function(){
 //   $('html, body').css("scrollBehavior" , "smooth")
 // },500)

 $('.navbar .menu li a').click(function(e){
   e.preventDefault();
   let id = $(this).attr('href'),
   targetOffset = $(id).offset().top;
   $('html, body').animate({scrollTop: targetOffset - 60},500)
 })

})