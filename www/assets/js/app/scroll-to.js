define(['jquery'], function($) {

  // Click to scroll the a[href] value, value will go to the id of that value
  // Ex:
  // <a class="js-scroll-to" href="#hello">Scroll me to hello</a>
  // takes you to ->
  // <div id="hello">Hello Content</div>
  $('.js-scroll-to').on( "click", function(e) {
    e.preventDefault;

    var $this = $(this),
        $target = $(this.hash),
        offset = ($this.data('offset')) ? $this.data('offset') : 0;

    if( $target.length ){
      $('html,body').animate({
          scrollTop: $target.offset().top - offset
        }, 700, 'swing');
    }

    return false;
  });

  return {};

});