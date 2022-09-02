//ハンバーガーメニュー
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {

  ham.classList.toggle('active');
  nav.classList.toggle('active');
});

// 押したら閉じる処理
$('.header__nav a[href^="#"]').on('click', function() {
  $('.hamburger').click();
});


// シークレットハウスマウスホバーで薄くなる
$(function(){
  $("#sercret-house").on("mouseover",function(){
    $(this).css("opacity",0.5);
  })
  .on("mouseleave",function(){ 
    $(this).css("opacity",1);
  });
});


$(function(){ 
    $("#pagetop").on("click",function(){
        $("html,body").animate({scrollTop: 0}, 1000);
    });
});


// スクロールするとフワッと表示させるやつ
// 参考サイトhttps://dezanari.com/jquery-scroll-fadein/#toc3
$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});