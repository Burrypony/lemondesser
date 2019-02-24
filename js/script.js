$(document).ready(function() {

  $('.third-button').on('click', function() {
    $('.animated-icon3').toggleClass('open');
  });

  $('#employer').on('click', function() {
    $('#employer').addClass("section7BlocksHover"),
      $('#investor').removeClass("section7BlocksHover"),
      $('#startaper').removeClass("section7BlocksHover"),
      $('#expert').removeClass("section7BlocksHover"),
      $('#formEmployer').removeClass("displayNone"),
      $('#formInvestor').addClass("displayNone"),
      $('#formStartaper').addClass("displayNone"),
      $('#formExpert').addClass("displayNone");
  });
  $('#investor').on('click', function() {
    $('#employer').removeClass("section7BlocksHover"),
      $('#investor').addClass("section7BlocksHover"),
      $('#startaper').removeClass("section7BlocksHover"),
      $('#expert').removeClass("section7BlocksHover"),
      $('#formEmployer').addClass("displayNone"),
      $('#formInvestor').removeClass("displayNone"),
      $('#formStartaper').addClass("displayNone"),
      $('#formExpert').addClass("displayNone");
  });
  $('#startaper').on('click', function() {
    $('#employer').removeClass("section7BlocksHover"),
      $('#investor').removeClass("section7BlocksHover"),
      $('#startaper').addClass("section7BlocksHover"),
      $('#expert').removeClass("section7BlocksHover"),
      $('#formEmployer').addClass("displayNone"),
      $('#formInvestor').addClass("displayNone"),
      $('#formStartaper').removeClass("displayNone"),
      $('#formExpert').addClass("displayNone");
  });
  $('#expert').on('click', function() {
    $('#employer').removeClass("section7BlocksHover"),
      $('#investor').removeClass("section7BlocksHover"),
      $('#startaper').removeClass("section7BlocksHover"),
      $('#expert').addClass("section7BlocksHover"),
      $('#formEmployer').addClass("displayNone"),
      $('#formInvestor').addClass("displayNone"),
      $('#formStartaper').addClass("displayNone"),
      $('#formExpert').removeClass("displayNone");
  });
  $('#variant2').on('click', function() {
    $('#variant2').addClass("secondPhoto"),
      $('#variant1').removeClass("secondPhoto"),
      $('#variant3').removeClass("secondPhoto"),
      $('#forVariant2').removeClass("displayNone"),
      $('#forVariant1').addClass("displayNone");
  });
  $('#variant3').on('click', function() {
    $('#variant3').addClass("secondPhoto"),
      $('#variant2').removeClass("secondPhoto"),
      $('#variant1').removeClass("secondPhoto")
  });
  $('#variant1').on('click', function() {
    $('#variant1').addClass("secondPhoto"),
      $('#variant2').removeClass("secondPhoto"),
      $('#variant3').removeClass("secondPhoto"),
      $('#forVariant1').removeClass("displayNone"),
      $('#forVariant2').addClass("displayNone");
  });

  $('#sidebarCollapse').on('click', function() {
    $('#sidebar').toggleClass('active');
    $('.collapse.in').toggleClass('in');
  });


});
