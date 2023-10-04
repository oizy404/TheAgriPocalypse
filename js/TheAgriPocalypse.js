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
    })


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