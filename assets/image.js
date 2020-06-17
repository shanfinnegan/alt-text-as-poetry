$(function(){

  $(window).on('resize', function(){
    checkSize();
  });

  function checkSize(){

    var w_width = window.innerWidth;

    var image = document.getElementById('image');
    var i_width = image.clientWidth;

    console.log(w_width);
    console.log(i_width);

    if(i_width > w_width){
      // apply small
      $('#image').addClass('small');

    }

    if(w_width > i_width) {
      $('#image').removeClass('small');
      $('#image').removeClass('full');
    }

  }

  $('#image').click(function(){
    if($(this).hasClass('small')){
      $(this).removeClass('small');
      $(this).addClass('full');
    }
    else if($(this).hasClass('full')) {
      $(this).addClass('small');
    }
  });

  checkSize();

});
