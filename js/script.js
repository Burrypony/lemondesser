$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });

  $('#employer').on('click', function () {
    $('#employer').addClass("section7BlocksHover"),
    $('#investor').removeClass("section7BlocksHover"),
    $('#startaper').removeClass("section7BlocksHover"),
    $('#expert').removeClass("section7BlocksHover");
  });
  $('#investor').on('click', function () {
    $('#employer').removeClass("section7BlocksHover"),
    $('#investor').addClass("section7BlocksHover"),
    $('#startaper').removeClass("section7BlocksHover"),
    $('#expert').removeClass("section7BlocksHover");
  });
  $('#startaper').on('click', function () {
    $('#employer').removeClass("section7BlocksHover"),
    $('#investor').removeClass("section7BlocksHover"),
    $('#startaper').addClass("section7BlocksHover"),
    $('#expert').removeClass("section7BlocksHover");
  });
  $('#expert').on('click', function () {
    $('#employer').removeClass("section7BlocksHover"),
    $('#investor').removeClass("section7BlocksHover"),
    $('#startaper').removeClass("section7BlocksHover"),
    $('#expert').addClass("section7BlocksHover");
  });
  $('#variant1').css('background-image' ,'url(img/hexagonWithLine.png)')
});
