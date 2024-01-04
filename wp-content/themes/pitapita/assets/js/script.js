// wow js
new WOW().init();

// Slick slider


// $(window).resize(function(){location.reload(true);});

$('#restorans-slider').slick({
                autoplay: true,
                autoplaySpeed: 8000,
                dots: false,
                cssEase: 'linear',
                infinite: true,
                centerMode: true,
                variableWidth: true,
                centerPadding: '60px',
                mobileFirst: true,
                arrows: false,
                pauseOnHover: false,
                adaptiveHeight: true,
                responsive: true,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
$(window).on('resize orientationchange', function() {
  $('#hero').slick('resize');
});
$('#hero').slick({
           
                autoplay: true,
                autoplaySpeed: 8000,
                dots: false,
                cssEase: 'linear',
                infinite: true,
                mobileFirst: true,
                arrows: true,
                pauseOnHover: false,
                adaptiveHeight: true,
                responsive: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                       
                        slidesToScroll: 1,
                        slidesToShow: 1
                  
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                },
                {
                    breakpoint: 300,
                    settings: {
                        arrows: false,
                        dots: true,
                        slidesToScroll: 1,
                        slidesToShow: 1,
                        adaptiveHeight: true
                    }
                }
                ]
            });

$('#hero').slick('setPosition');

// On scroll add bg
$(window).scroll(function(){
    if ($(window).scrollTop() > 100) {
        $('.custom-header').addClass('fixed-header');
    }
    else {
        $('.custom-header').removeClass('fixed-header');
    }
});

// Mobile menu toggle

$(function() {
  $(".mobile-nav-btn").click(function() {
    $('.mobile-nav').addClass("open");
  });
});

$(function() {
  $(".close").click(function() {
    $('.mobile-nav').removeClass("open");
  });
});


 // Upload file name in career page


 $(document).ready(function() { 
            $('input[type="file"]').change(function(e) { 
                var geekss = e.target.files[0].name; 
                $(".file-name").text(geekss);

            }); 
             $('input[type="file"]').change(function(e) { 
                var geekss = e.target.files[0].name; 
                $(".file-name").text(geekss);

            }); 
            
            $('input[type=submit]').click(function(e) { 
                setTimeout(function(){
                        var blank = ""; 
                        $(".file-name").text(blank);
                }, 4500); 
            }); 

        });


 
 // Nav toggle



//  $('li.menu-item-has-children').click(function() {

//       $(this).addClass('active');
//       $(this).siblings().removeClass('active');
//       $(this).hasclass('active').removeClass('active')

// });
 $(".menu-item-has-children").click(function(){
   $(this).toggleClass("active");
});
   //  var words = $(".block-title").text().split(" ");
    // $(".block-title").empty();
    // $.each(words, function(i, v) {
    //     $(".block-title").append($("<span>").text(v));
    // });
 $(document).ready(function() { 
 

    $('.block-title:not(.block-title>strong)').each(function(){ var text = $(this).text().split(' ');
       for( var i = 0, len = text.length; i < len; i++ ) {
               text[i] = '<span class="wow fadeIn word-' + i + '"  data-wow-delay="' + (i * 0.25 )+ 's" >' + text[i] + '</span>';
           }
           $(this).html(text.join(' '));
           
      });
});







