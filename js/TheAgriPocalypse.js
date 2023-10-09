jQuery(document).ready(function($){

    $('.parallax').mousemove(function(e){
      var x = -(e.pageX + this.offsetLeft) / 30;
      var y = -(e.pageY + this.offsetTop) / 350;
      $(this).css('background-position', x + 'px ' + y + 'px');
    });  
    $('.parallax2').mousemove(function(e){
      var x = -(e.pageX + this.offsetLeft) / 100;
      var y = -(e.pageY + this.offsetTop) / 100;
      $(this).css('background-position', x + 'px ' + y + 'px');
    }); 
    $('#clicktostart').on('click', function(){
      $('#clicktostart').hide();
      $('#loading').show();
      $('#audio-instruction').show();
      setTimeout(function() {
        $(".front-pg").hide();
        $('.page1').css('position','relative');
        $('.navigation').css('z-index','999999');
      }, 3000);
    });
    

    function pauseAllSounds(){

      $('#nocheck').show();
      $('#withcheck').hide();

      $('#carousel-btn-sound')[0].pause();
      $('#click-btn-sound')[0].pause();
      $('#page12-sound')[0].pause();
      $('#page3-sound')[0].pause();
      $('#page6-sound')[0].pause();
      $('#page78-sound')[0].pause();

    }

    function playSoundsOnEvents(){
      
      $('#nocheck').hide();
      $('#withcheck').show();

      $(document).on('click', function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#click-btn-sound')[0].play();
        }
      })
      $('.carousel-control-next, .carousel-control-prev').on('click', function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#click-btn-sound')[0].pause();
          $('#carousel-btn-sound')[0].play();
        }
      })
      $('.page1, .page2').mousemove(function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#page3-sound')[0].pause();
          $('#page6-sound')[0].pause();
          $('#page78-sound')[0].pause();
          $('#page12-sound')[0].play();
        }
      })
      $('.page3').mousemove(function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#page12-sound')[0].pause();
          $('#page6-sound')[0].pause();
          $('#page78-sound')[0].pause();
          $('#page3-sound')[0].play();
        }
      })
      $('.page4, .page5').mousemove(function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#page12-sound')[0].pause();
          $('#page3-sound')[0].pause();
          $('#page6-sound')[0].pause();
          $('#page78-sound')[0].pause();
        }
      })
      $('.page6').mousemove(function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#page78-sound')[0].pause();
          $('#page12-sound')[0].pause();
          $('#page3-sound')[0].pause();
          $('#page6-sound')[0].play();
        }
      })
      $('.page7, .page8').mousemove(function(){
        if( $('#sound-div').hasClass('sound-on') ){
          $('#page12-sound')[0].pause();
          $('#page3-sound')[0].pause();
          $('#page6-sound')[0].pause();
          $('#page78-sound')[0].play();
        }
      })
    }

    // Function to toggle sound on/off
    function toggleSound() {
      const soundDiv = $('#sound-div');

      if (soundDiv.hasClass('sound-on')) {
        soundDiv.addClass('sound-off').removeClass('sound-on');
        pauseAllSounds();
      } else {
        soundDiv.addClass('sound-on').removeClass('sound-off');
        playSoundsOnEvents();
      }
    }

    // Click event handler for sound toggle
    $('#sound-div').on('click', toggleSound);

    // Initialize sound state based on class
    if ($('.sound-on').length) {
      playSoundsOnEvents();
    }

    $('#column-dialogue1').hide();
    $('#column-dialogue2').hide();
    $('.sentences2').hide();
    $('.pg7-sentences2').hide();
    $('.page5-dialogue2').hide();
    $('#line2').hide();
    $('#copylink').hide();
    $('#linkcopied').hide();
    $('.urlCopy-msg').hide();
    $('#pg3_panel6overlay').hide();
    $('#pg3_panel3dialogue').hide();
    $('#pg3_panel5dialogue').hide();
    $('#pg5-scarcydialoguebox-btn').hide();

    jQuery( ".pg3-content5" ).hover(function() {
      jQuery('#pg3_panel6').css('left','-210px');
      jQuery( "#pg3_panel6overlay" ).first().show( "slow", function showNext() {
        jQuery( this ).next( "div" ).show( "slow", showNext );
      });
    });
    jQuery( "#pg3_panel3" ).hover(function() {
      jQuery( "#pg3_panel3dialogue" ).first().show( "slow", function showNext() {
        jQuery( this ).next( "div" ).show( "slow", showNext );
      });
    });
    jQuery( "#pg3_panel5" ).hover(function() {
      jQuery('#pg3_panel5dialogue').css('bottom','550px');
      jQuery( "#pg3_panel5dialogue" ).first().show( "slow", function showNext() {
        jQuery( this ).next( "div" ).show( "slow", showNext );
      });
    });

    $('.pg-content3-colum2').on('click', function(){
      $(this).hide();
      $('#column-dialogue1').show();    
      $('.page1').css('background-image', 'url(img/page1/pg1wholebg2.png)');
    })
    
    $('#scarcydialoguebox-btn').on('click', function(){
      $(this).css('top', '68.5%');
      $('.sentences1').hide();
      $('.sentences2').show();
      $('#column-dialogue2').show()
    })
    $('#pg7-scarcydialoguebox-btn').on('click', function(){
      $(this).css('top', '78%');
      $(this).hide();
      $('.pg7-sentences1').hide();
      $('.pg7-sentences2').show();
      $('#pg7-column-dialogue2').show()
    })
    
    $('#dialogue2A').on('click', function(){
      $('.page5-dialogue2').show();
      $('.page5-dialogue1').hide();
    })
    $('#page5-slide-exit').on('click', function(){
      $('#pg5-scarcydialoguebox-btn').show();
      $('.page5-dialogue2').show();
      $('.page5-dialogue1').hide();
      $('#dialogue1A').hide();
      $('#dialogue2A').hide();
      $('.page5A').css('position','fixed');
      $('.page5').css('position','relative');
    })

    
    $('#dialogues').on('click',function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','relative');
    })
    $('#page2-next-btn').on('click',function(){
      $('.page2').css('position','fixed');
      $('.page3').css('position','relative');
    })
    $('#page3-next-btn').on('click',function(){
      $('.page3').css('position','fixed');
      $('.page4').css('position','relative');
    })
    $('#vertical-btn').on('click',function(){
      $('.page4').css('position','fixed');
      $('.page4-A').css('position','relative');
    })
    $('#organic-btn').on('click',function(){
      $('.page4').css('position','fixed');
      $('.page4-A').css('position','fixed');
      $('.page4-B').css('position','relative');
    })
    $('#regenerative-btn').on('click',function(){
      $('.page4').css('position','fixed');
      $('.page4-A').css('position','fixed');
      $('.page4-B').css('position','fixed');
      $('.page4-C').css('position','relative');
    })
    $('#reg-backbutton, #vertical-backbutton, #organic-backbutton').on('click', function(){
      $('.page4-A').css('position','fixed');
      $('.page4-B').css('position','fixed');
      $('.page4-C').css('position','fixed');
      $('.page4').css('position','relative');
    })
    $('#pg4nextbutton').on('click',function(){
      $('.page4').css('position','fixed');
      $('.page5').css('position','relative');
    })
    $('#dialogue1A , #show-page5A').on('click',function(){
      $('.page5').css('position','fixed');
      $('.page5A').css('position','relative');
    })
    $('#pg5-scarcydialoguebox-btn').on('click', function(){
      $('.page5').css('position','fixed');
      $('.page6').css('position','relative');
    })
    $('#page6-next-btn').on('click', function(){
      $('.page6').css('position','fixed');
      $('.page7').css('position','relative');
    })
    $('#pg7-dialogues').on('click', function(){
      $('.page7').css('position','fixed');
      $('.page8').css('position','relative');
    })
    $('#aboutus-button').on('click', function(){
      $('.page8').css('position','fixed');
      $('.aboutus-content').css('position','relative');
    })
    $('#page8-nextbutton').on('click', function(){
      $('#line2').show();
      $('#line1').hide();
      $('#copylink').show();
      $(this).hide();
    })
    $('#copylink').on('click', function(){
      var temp = $("<input>");
      $("body").append(temp);
      temp.val($('#tap-link').text()).select();
      document.execCommand("copy");
      temp.remove();
      $('#copylink').hide();
      $('#linkcopied').show();
    })
    $('#aboutus-button').on('click', function(){
      $('.aboutus-content').show();
    })
    $('#story1').on('click', function(){
      $('.story1content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story2').on('click', function(){
      $('.story2content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story3').on('click', function(){
      $('.story3content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story4').on('click', function(){
      $('.story4content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story5').on('click', function(){
      $('.story5content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story6').on('click', function(){
      $('.story6content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story7').on('click', function(){
      $('.story7content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    $('#story8').on('click', function(){
      $('.story8content').css('position','relative');
      $('.page6').css('position', 'fixed');
    })
    

    
    $('#story1content-back-btn').on('click', function(){
      $('.story1content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story2content-back-btn').on('click', function(){
      $('.story2content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story3content-back-btn').on('click', function(){
      $('.story3content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story4content-back-btn').on('click', function(){
      $('.story4content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story5content-back-btn').on('click', function(){
      $('.story5content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story6content-back-btn').on('click', function(){
      $('.story6content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story7content-back-btn').on('click', function(){
      $('.story7content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })
    $('#story8content-back-btn').on('click', function(){
      $('.story8content').css('position','fixed');
      $('.page6').css('position', 'relative');
    })


    $('#act1-nav-btn').on('click', function(){
      $('.page1').css('position','relative');
      $('.page4').css('position','fixed');
      $('.page5A').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#act2-nav-btn').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page4').css('position','relative');
      $('.page5A').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#yfc-nav-btn').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5A').css('position','relative');
      $('.page6').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#stories-nav-btn').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page5A').css('position','fixed');
      $('.page6').css('position','relative');
      $('.page8').css('position','fixed');
    })
    $('#act3-nav-btn').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5A').css('position','fixed');
      $('.page6').css('position','relative');
      $('.page8').css('position','fixed');
    })
    $('#present-nav-btn').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5A').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page8').css('position','relative');
    })

    $('#back_button2').on('click', function(){
      $('.page1').css('position','relative');
      $('.page2').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button3').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','relative');
      $('.page3').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button4').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','fixed');
      $('.page3').css('position','relative');
      $('.page4').css('position','fixed');
      $('.page5').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button5').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page4').css('position','relative');
      $('.page5').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button6').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5').css('position','relative');
      $('.page6').css('position','fixed');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button7').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5').css('position','fixed');
      $('.page6').css('position','relative');
      $('.page7').css('position','fixed');
      $('.page8').css('position','fixed');
    })
    $('#back_button8').on('click', function(){
      $('.page1').css('position','fixed');
      $('.page2').css('position','fixed');
      $('.page3').css('position','fixed');
      $('.page4').css('position','fixed');
      $('.page5').css('position','fixed');
      $('.page6').css('position','fixed');
      $('.page7').css('position','relative');
      $('.page8').css('position','fixed');
    })


        // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });
});