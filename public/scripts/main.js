function text() {

  'strict'

  var $text = $('.js-text');

  if($text.length !== 0) {

    // Init
    $text.attr('aria-hidden', true);

    // On click (button)
    $('button[data-target]').on('click', function() {

      var $this   = $(this);
      var $target = '#' + $this.attr('data-target');

      if ($($target).hasClass('js-hidden')) {

        $this.text('Show less').attr('aria-expanded', true);
        $($target).removeClass('js-hidden').attr('aria-hidden', false);

      } else {

        $this.text('Show more').attr('aria-expanded', false);
        $($target).addClass('js-hidden').attr('aria-hidden', true);

      }

    });

  }

}


(function($) {
  text();
})(jQuery);
