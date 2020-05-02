$('.carousel').carousel({

});

/*mis redes*/
$(document).ready(function() {
  $('.media_button').click(function() {
    $('*').animate(
      {
        scrollTop: $('#media').offset().top
      },
      1700
    );
  });
});


/*CONTACT_ME BUTTON*/
$(document).ready(function() {
  $('#contact_me').click(function() {
    $('body,html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*'ABOUT ME' MENU LINK*/
$(document).ready(function() {
  $('.About').click(function() {
    $('body, html').animate(
      {
        scrollTop: $('#about').offset().top
      },
      1700
    );
  });
});

/*'Sígueme' MENU LINK*/
$(document).ready(function() {
  $('.Media').click(function() {
    $('body,html').animate(
      {
        scrollTop: $('#media').offset().top
      },
      1700
    );
  });
});




/*'CONTACTO' MENU LINK*/
$(document).ready(function() {
  $('.Contact').click(function() {
    $('body,html').animate(
      {
        scrollTop: $('#contact').offset().top
      },
      1700
    );
  });
});

/*BACK TO TOP BUTTON*/
$(document).ready(function() {
  $('.top').click(function() {
    $('body, html').animate(
      {
        scrollTop: '0px'
      },
      2000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.top').slideDown(0);
    } else {
      $('.top').slideUp(0);
    }
  });
});

/*BACK TO TOP BUTTON mobile*/
$(document).ready(function() {
  $('.top2').click(function() {
    $('body').animate(
      {
        scrollTop: '0px'
      },
      2000
    );
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.top2').slideDown(0);
    } else {
      $('.top2').slideUp(0);
    }
  });
});

/*VALIDA EL NÚMERO DE TELÉFONO*/
function justNumbers(e) {
  var keynum = window.event ? window.event.keyCode : e.which;
  if (keynum == 8 || keynum == 46) return true;

  return /\d/.test(String.fromCharCode(keynum));
}

/*THIS SHOWS AND HIDES MENU ITEMS*/
$(document).ready(function() {
  $('.hamburguer-btn .fa-times').hide();

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1 a li').addClass('active');
  });

  /*cierra automaticamente menu luego de hacer clic en un enlace*/
  $('.mobile_menu1').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.hamburguer-btn .fa-times').hide();
  });

  $('.hamburguer-btn .fa-bars').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-times').show();
    $('.mobile_menu1').show();
  });

  $('.hamburguer-btn .fa-times').click(function() {
    $(this).hide();
    $('.hamburguer-btn .fa-bars').show();
    $('.mobile_menu1').hide();
  });
});

/*reCaptcha*/

function submitUserForm() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    document.getElementById('g-recaptcha-error').innerHTML =
      '<span style="color:red;">This field is required.</span>';
    return false;
  }
  return true;
}

function verifyCaptcha() {
  document.getElementById('g-recaptcha-error').innerHTML = '';
}
