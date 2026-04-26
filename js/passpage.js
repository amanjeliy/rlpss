$(function () {

  let pin = '';
  let isScanning = false;

  $('.passpage').hide();
  $('.container').hide(); // hide main content until PIN is entered

  // Loader simulation
  setTimeout(function () {
    $('.loader').fadeOut(200, function () {
      $('.passpage').fadeIn(200);
    });
  }, 3000);

  // Render filled dots based on PIN length
  function renderPin() {
    $('.pin-dot').removeClass('filled');

    $('.pin-dot').each(function (index) {
      if (index < pin.length) {
        $(this).addClass('filled');
      }
    });
  }

  // Unlock screen: hide PIN page and show main content
  function unlockScreen() {
    setTimeout(function () {

      $('.passpage').fadeOut(200, function () {
        $('.container').fadeIn(200);
      });

    }, 400);
  }

  // Set PIN programmatically (used for FaceID simulation)
  function setPin(value) {
    pin = String(value).slice(0, 4);
    renderPin();

    if (pin.length === 4) {
      console.log('PIN:', pin);
      unlockScreen();
    }
  }

  // Handle number button clicks
  $('.pin-number').on('click', function () {

    if (isScanning || pin.length >= 4) return;

    pin += $(this).data('number');
    renderPin();

    if (pin.length === 4) {
      console.log('PIN:', pin);
      unlockScreen();
    }

  });

  // Delete last digit
  $('#deleteBtn').on('click', function () {

    if (isScanning) return;

    pin = pin.slice(0, -1);
    renderPin();

  });

  // Keyboard input support
  $(document).on('keydown', function (e) {

    if (/^[0-9]$/.test(e.key)) {

      if (pin.length < 4) {

        pin += e.key;
        renderPin();

        if (pin.length === 4) {
          console.log('PIN:', pin);
          unlockScreen();
        }

      }

    }

    if (e.key === 'Backspace') {
      pin = pin.slice(0, -1);
      renderPin();
    }

  });

  // FaceID simulation
  $('#faceBtn').on('click', function () {

    if (isScanning) return;

    isScanning = true;
    const $btn = $(this);

    $btn.addClass('scanning');

    setTimeout(function () {

      setPin('1234');

      $btn.removeClass('scanning');
      isScanning = false;

    }, 1200);

  });

  // EXIT BUTTON (lock screen again)
  $('#exit').on('click', function () {

    pin = ''; // reset PIN
    renderPin(); // clear dots

    $('.container').fadeOut(200, function () {
      $('.passpage').fadeIn(200);
    });

  });

});