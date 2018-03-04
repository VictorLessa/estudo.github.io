$(document).ready(function() {

  function togglemenu(){
    $('.buttom').toggleClass('buttom-active');
    $('.menu').toggleClass('menu-action');
    $('.menu-item').toggleClass('item-action');

  }

  $('.buttom').on('click tap', function(){
    togglemenu();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      togglemenu();
    }
  });


});
