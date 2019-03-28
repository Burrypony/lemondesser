$(document).ready(function() {

  $('.third-button').on('click', function() {
    $('.animated-icon3').toggleClass('open');
  });

  $('.section1RezSpan').on('click', function(){
    window.scroll(0,$(this).offset().top);
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
      $('#variant1').removeClass("secondPhoto"),
      $('#forVariant2').addClass("displayNone"),
      $('#forVariant1').addClass("displayNone"),
      $('#forVariant3').removeClass("displayNone");
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

  $('.pinkA').hover( function() {
    $('#pinkSecondTirangle').toggleClass('displayBlock');
    $('#pinkFirstTirangle').toggleClass('displayNone');
      console.log("pinkA");

  });

  $('.pirpleA').hover( function() {
    $('#pirpleSecondPhoto').toggleClass('displayBlock');
    $('#pirpleFirstPhoto').toggleClass('displayNone');
      console.log("pirpleA");
      $('#pirpleTriangle').toggleClass('pirpleBeforeHover')
  });

  $('.blueA').hover( function() {
    $('#blueSecondPhoto').toggleClass('displayBlock');
    $('#blueFirstPhoto').toggleClass('displayNone');
      console.log("BlueA");
    $('#blueTriangle').toggleClass('blueBeforeHover')
  });

  $('.greenA').hover( function() {
    $('#greenSecondPhoto').toggleClass('displayBlock');
    $('#greenFirstPhoto').toggleClass('displayNone');
      console.log("GreenA");
  });

  $('.yellowA').hover( function() {
    $('#yellowSecondPhoto').toggleClass('displayBlock');
    $('#yellowFirstPhoto').toggleClass('displayNone');
      console.log("YellowA");
  });

  $('.peachA').hover( function() {
    $('#peachSecondPhoto').toggleClass('displayBlock');
    $('#peachFirstPhoto').toggleClass('displayNone');
      console.log("PeachA");
  });

  $('#firstInvTable').on('click', function(){
    $("#invTable2").removeClass('dislayNone');
    if($(window).width() > 1024)
    {
      $(".invTable2").css("margin-top", "220px");
    }
    if(($(window).width() > 860)&&($(window).width() < 1024))
    {
      $(".invTable2").css("margin-top", "690px");
    }
    if(($(window).width() > 810)&&($(window).width() < 860))
    {
      $(".invTable2").css("margin-top", "570px");
    }
    if(($(window).width() > 480)&&($(window).width() < 810))
    {
      $(".invTable2").css("margin-top", "530px");
    }
    if(($(window).width() > 390)&&($(window).width() < 480))
    {
      $(".invTable2").css("margin-top", "480px");
    }
    if($(window).width() < 390){
      $(".invTable2").css("margin-top", "500px");
    }
    $("#section7InvTables1").addClass("section7Inv1000px");
  })

  $('#secondInvTable').on('click', function(){
    $("#invTable3").removeClass('dislayNone');
    if($(window).width() >= 1024)
    {
      $(".invTable3").css("margin-top", "220px");
    }
    if(($(window).width() > 860)&&($(window).width() < 1024))
    {
      $(".invTable3").css("margin-top", "700px");
    }
    if(($(window).width() > 480)&&($(window).width() < 860))
    {
      $(".invTable3").css("margin-top", "575px");
    }
    if(($(window).width() > 390)&&($(window).width() < 480))
    {
      $(".invTable3").css("margin-top", "485px");
    }
    if($(window).width() < 390){
      $(".invTable3").css("margin-top", "560px");
    }

    $("#section7InvTables2").addClass("section7Inv1000px");
  })

/*  for ( var i = 1 ; i < 7 ; i++ )
  {
      document.getElementById( "button" + i ).addEventListener( "click" , function() { console.log( this.id ); } );
  }*/
});
