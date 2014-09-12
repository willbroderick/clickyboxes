(function($) {
  //Turn a <select> into clicky boxes
  $.fn.clickyBoxes = function(prefix){
    return $(this).each(function(){
      //Make sure rows are unique
      var prefix = prefix || $(this).attr('id');
      //Create container
      var $optCont = $('<ul class="clickyboxes"/>').attr('id', 'clickyboxes-'+prefix).data('select', $(this)).insertAfter(this);
      
      var $label;
      if($(this).is('[id]')) {
        $label = $('label[for="' + $(this).attr('id') + '"]'); // Grab real label
      } else {
        $label = $(this).siblings('label'); // Rough guess
      }
      if($label.length > 0) {
        $optCont.addClass('options-' + $label.html().toLowerCase().replace(/[^a-z0-9]/, '-'));
      }
      
      //Add options to container
      $(this).find('option').each(function(){
        $('<li/>').appendTo($optCont).append(
          $('<a href="#"/>').attr('data-value', $(this).val()).html($(this).html())
          .addClass('opt-' + $(this).html().toLowerCase().replace(/[^a-z0-9]/, '-'))
        );
      });
      //Select change event
      $(this).hide().addClass('replaced').on('change keyup', function(){
        //Choose the right option to show
        $optCont.find('a').removeClass('active').filter('[data-value="'+$(this).val()+'"]').addClass('active');
      }).trigger('keyup'); //Initial value
      //Button click event
      $optCont.on('click', 'a:not(.active)', function(){
        $(this).closest('.clickyboxes').data('select').val($(this).data('value')).trigger('change');
        return false;
      });
    });
  };
})(jQuery);