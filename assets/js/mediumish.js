jQuery(document).ready(function($){

    //fix for stupid ie object cover
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
      jQuery('.featured-box-img-cover').each(function(){
          var t = jQuery(this),
              s = 'url(' + t.attr('src') + ')',
              p = t.parent(),
              d = jQuery('<div></div>');
  
          p.append(d);
          d.css({
              'height'                : '290',
              'background-size'       : 'cover',
              'background-repeat'     : 'no-repeat',
              'background-position'   : '50% 20%',
              'background-image'      : s
          });
          t.hide();
      });
    }

    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });


    // Smooth on external page
    $(function() {
      setTimeout(function() {
        if (location.hash) {
          /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
          window.scrollTo(0, 0);
          target = location.hash.split('#');
          smoothScrollTo($('#'+target[1]));
        }
      }, 1);

      // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          smoothScrollTo($(this.hash));
          return false;
        }
      });

      function smoothScrollTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });
    
    
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down            
            $('nav').removeClass('nav-down').addClass('nav-up'); 
            $('.nav-up').css('top', - $('nav').outerHeight() + 'px');
           
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {               
                $('nav').removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');             
            }
        }

        lastScrollTop = st;
    }
        
    $('.site-content').css('margin-top', $('header').outerHeight() + 'px');  
    
    // spoilers
     $(document).on('click', '.spoiler', function() {
        $(this).removeClass('spoiler');
     });
    
     // graph circles
     Circles.create({
      id:                  'circles-1',
      radius:              60,
      value:               90,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#D3B6C6', '#4B253A'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-2',
      radius:              60,
      value:               85,
      maxValue:            100,
      width:               10,
      text:                "High",
      colors:              ['#DCDCDC', '#696969'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-3',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#F08080', '#1D1E2C'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-4',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#90EE90', '#2E8B57'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-5',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#B0E0E6',"#1E90FF"],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-6',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#D2691E', '#DEB887'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-7',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#FFB6C1', '#FF69B4'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-8',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#EE82EE', '#D8BFD8'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
    Circles.create({
      id:                  'circles-9',
      radius:              60,
      value:               43,
      maxValue:            100,
      width:               10,
      text:                function(value){return value + '%';},
      colors:              ['#FFD700', '#FFFACD'],
      duration:            400,
      wrpClass:            'circles-wrp',
      textClass:           'circles-text',
      valueStrokeClass:    'circles-valueStroke',
      maxValueStrokeClass: 'circles-maxValueStroke',
      styleWrapper:        true,
      styleText:           true
    });
 });   

// deferred style loading
var loadDeferredStyles = function () {
	var addStylesNode = document.getElementById("deferred-styles");
	var replacement = document.createElement("div");
	replacement.innerHTML = addStylesNode.textContent;
	document.body.appendChild(replacement);
	addStylesNode.parentElement.removeChild(addStylesNode);
};
var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
if (raf) raf(function () {
	window.setTimeout(loadDeferredStyles, 0);
});
else window.addEventListener('load', loadDeferredStyles);
