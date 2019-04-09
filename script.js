$(document).ready(function(){
  function move(bartype, pourcent) {
    var elem = document.getElementById(bartype);
    var width = 20;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= pourcent) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

  // $(window).scrollTop(function(){
  move('progressBarHtml', 70);
  move('progressBarSass', 65);
  move('progressBarbootstrap', 70);
  move('progressBarPHP', 60);
  move('progressBarMysql', 60);
  move('progressBarjavascript', 50);
  move('progressBarjQuery', 60);
  move('progressBarGIT', 40);
  // })

  // block nom prenom modif slide
  $('.formation').hide();
  $('.nav--cursor').hide();
  $('.title--jo').effect("slide", 1000);
  $('.contain--block--infos').effect("slide", 1000);
  $('.formation').show("slide",{direction: "left"}, 1000);
  $('.nav--cursor').show("slide",{direction: "right"}, 1000);


  $(".profil").on("click",function(){
    $('html, body').animate({
      scrollTop: $(".who_I_m").offset().top
    }, 1500);
  })

  $(".comp").on("click",function(){
    $('html, body').animate({
      scrollTop: $(".contain").offset().top
    }, 1500);
  })

  $(".projects").on("click",function(){
    $('html, body').animate({
      scrollTop: $(".contain--project").offset().top
    }, 1500);
  })

  $(".cont").on("click",function(){
    $('html, body').animate({
      scrollTop: $(".contain--contact").offset().top
    }, 1500);
  })


  // block infos modif slide
  $('.content--img-prof').hide();
  $('.slide1').hide();
  $('.slide2').hide();
  $('.slide3').hide();
  $('.slide4').hide();
  $('.slide5').hide();
  $('.slide6').hide();
  $('.slide7').hide();
  $('.slide8').hide();
  $('.slide9').hide();


  $(window).scroll(function(){
    var top = $(".who_I_m").height();
    if($(this).scrollTop() >= top){

      $('.content--img-prof').show("slide",{direction: "left"}, 1000);
      $('.slide1').show(1000);
      $('.slide2').show(1000);
      $('.slide3').show(1000);
      $('.slide4').show(1000);
      $('.slide5').show(1000);
      $('.slide6').show(1000);
      $('.slide7').show(1000);
      $('.slide8').show(1000);
      $('.slide9').show(1000);
    }
  })

  $('.select--site1').hide();
  $('.pic--meetic a').on("mouseover", function(){
    $('.select--site1').fadeIn();
  })
  $('.pic--meetic a').on("mouseleave", function(){
    $('.select--site1').fadeOut();
  })

  $('.select--site2').hide();
  $('.pic--puissance a').on("mouseover", function(){
    $('.select--site2').fadeIn();
  })
  $('.pic--puissance a').on("mouseleave", function(){
    $('.select--site2').fadeOut();
  })

  $('.select--site3').hide();
  $('.pic--maquette a').on("mouseover", function(){
    $('.select--site3').fadeIn();
  })
  $('.pic--maquette a').on("mouseleave", function(){
    $('.select--site3').fadeOut();
  })

  $('.select--site4').hide();
  $('.pic--tweet a').on("mouseover", function(){
    $('.select--site4').fadeIn();
  })
  $('.pic--tweet a').on("mouseleave", function(){
    $('.select--site4').fadeOut();
  });

  $('.select--site5').hide();
  $('.pic--framework a').on("mouseover", function(){
    $('.select--site5').fadeIn();
  })
  $('.pic--framework a').on("mouseleave", function(){
    $('.select--site5').fadeOut();
  })
});
