jQuery(document).ready(function($){

    $('.parallax').mousemove(function(e){
      var x = -(e.pageX + this.offsetLeft) / 20;
      var y = -(e.pageY + this.offsetTop) / 20;
      $(this).css('background-position', x + 'px ' + y + 'px');
    });  

    $('#column-dialogue1').hide();
    $('#column-dialogue2').hide();
    $('.sentences2').hide();
    $('.page5-dialogue2').hide();

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
    
    $('#dialogue2A').on('click', function(){
      $('.page5-dialogue2').show();
      $('.page5-dialogue1').hide();
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
      $('.page4-A').css('position','relative');
    })
    $('#organic-btn').on('click',function(){
      $('.page4-A').css('position','fixed');
      $('.page4-B').css('position','relative');
    })
    $('#regenerative-btn').on('click',function(){
      $('.page4-A').css('position','fixed');
      $('.page4-B').css('position','fixed');
      $('.page4-C').css('position','relative');
    })
    $('#pg4nextbutton').on('click',function(){
      $('.page4').css('position','fixed');
      $('.page5').css('position','relative');
    })
    $('#dialogue1A , #show-page5A').on('click',function(){
      $('.page5').css('position','fixed');
      $('.page5A').css('position','relative');
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