define(['jquery'], function($) {

  var $triggers = $('.js-show-more'),
    defaults = {
      btn_txt: 'Hide',
      btn_icon : 'icon-arrowup'
    };


  $triggers.on('click', function(event){
    event.preventDefault();
    var $this = $(this),
        data = $this.data(),
        options = $.extend({}, defaults, data);

    $showMore = $("#"+options.id);
    $icon = $this.find('i');
    currentTxt = $this.text();
    newhtml = options.btn_txt;

    if($icon.length > 0) {
      newhtml += ' <i class="'+options.btn_icon+'"></i>';
      currentIcon = $icon.attr('class');
      $icon.attr('class', options.btn_icon);
      $this.attr('data-btn_icon', currentIcon);
      $this.data('btn_icon', currentIcon);
    }
    $this.attr('data-btn_txt', currentTxt);
    $this.data('btn_txt', currentTxt);
    $this.html(newhtml);

    var height = $showMore.find('.show-more-inner').outerHeight();
    if( $showMore.hasClass('active') ){
      $showMore.removeClass('active');
      $showMore.css('height','0px');
    } else {
      $showMore.addClass('active');
      $showMore.css('height',height+'px');
    }


    $this.blur();
    return false;
  });


  /*
    $('<a></a>' , {
      text     : this.fileName,
      href     : this.fileUrl,
      target   : '_blank',
      class    : 'file-link',
      appendTo : this.container
    });
  */
});