/* REPLACE LINES 1-28 WITH THIS BLOCK */

let faceSvg, successSvg, faceIdBox, loader;

function initElements() {
    faceSvg = document.getElementById('face-id-svg');
    successSvg = document.getElementById('success-svg');
    faceIdBox = document.querySelector('.faceid-box');
    loader = document.querySelector('.loader');
}

// 1. Initial Load Animation
document.addEventListener('DOMContentLoaded', function() {
    initElements();

    // Start locked
    if(loader) loader.classList.add('locked');
    document.body.classList.add('app-locked');

    // Sequence
    setTimeout(() => {
        // Step 1: Show Success Checkmark (1.2s)
        if(faceSvg) faceSvg.style.display = 'none';
        if(successSvg) successSvg.classList.add('visible');
    }, 1200);

    setTimeout(() => {
        // Step 2: Fade out the BLACK BOX (2.2s)
        if(faceIdBox) faceIdBox.classList.add('fade-out');
    }, 2200);

    setTimeout(() => {
        // Step 3: Remove Loader & Change Background (3.0s)
        document.body.style.backgroundColor = '#dfdeca';

        if (loader) {
            loader.style.display = 'none';
            document.body.classList.remove('app-locked');
        }
    }, 3000);
});

/* END OF REPLACEMENT BLOCK */

$('.m_Copydevice').on('click', function() {
    const el = $(this);
    el.addClass('active');

    setTimeout(function() {
        el.removeClass('active');
    }, 3000);
}); 

(function($){
  function setWrapWidth(){
    var w = $(window).width() - 64;
    if (w < 0) w = 0;
    $('.wrap, .wrap2').css('width', w + 'px');
  }
  $(document).ready(setWrapWidth);
  $(window).on('resize', setWrapWidth);
})(jQuery);

function flipCard() {
    $('.wrap-flipcard').toggleClass('flipped');
}

$(document).ready(function () {
  const wrapFlipcard = $('.wrap-flipcard')[0];
  const hammer = new Hammer(wrapFlipcard);
  hammer.on('swipeleft swiperight', function (event) {
    flipCard();
  });
  $('.wrap-flipcard').on('click', function () {
    flipCard();
  });
});

$(document).ready(function () {
    const elements = document.querySelectorAll('.notificationText');
    if (!elements.length) return;

    const pad = n => String(n).padStart(2, '0');

    const getStableRandomTime = () => {
        const now = new Date(Date.now() - 4 * 60 * 60 * 1000);
        const SLOT_MINUTES = 15;
        const slot = Math.floor((now.getHours() * 60 + now.getMinutes()) / SLOT_MINUTES);
        const randomMinute = (slot * 37) % 60;

        now.setMinutes(randomMinute, 0, 0);

        return `${pad(now.getHours())}:${pad(now.getMinutes())} | ${pad(now.getDate())}.${pad(now.getMonth() + 1)}.${now.getFullYear()}`;
    };

    const time = getStableRandomTime();
    const regex = /\d{2}:\d{2}\s\|\s\d{2}\.\d{2}\.\d{4}/g;

    elements.forEach(el => {
        if (regex.test(el.textContent)) {
            el.textContent = el.textContent.replace(regex, time);
        }
    });

    // 🔥 restart marquee AFTER text is final
    setTimeout(restartMarquee, 0);
});

$(document).ready(function() {
    $('.menu').on('click', function() {
        $('.popup-menu').fadeIn(100);
        $('.popup-vac').fadeOut(100);
    });

    $('.vacancies').on('click', function() {
        $('.popup-vac').fadeIn(100);
        $('.popup-menu').fadeOut(100);
    });

    $('.mydoc').on('click', function() {
        $('.popup-menu, .popup-vac').fadeOut(100);
    });

    $('.nav').on('click', function() {
        $('.nav').removeClass('active');
        $(this).addClass('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("exit").addEventListener("click", function () {

        localStorage.clear();
        sessionStorage.clear();
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.trim().split("=")[0] +
                "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        });
        const url = window.location.pathname + "?nocache=" + Date.now();
        window.location.replace(url);
    });
});


$(document).ready(function() {

    const popup = $('.popup-fullmenu')[0];
    const hammer = new Hammer(popup);

    hammer.get('swipe').set({ direction: Hammer.DIRECTION_DOWN });
    hammer.on('swipedown', function() {
        $('.popup-fullmenu, .popup-fullmenu-1, .popup-fullmenu-2, .popup-fullmenu-3, .popup-fullmenu-4, .popup-fullmenu-5, .popup-fullmenu-6').removeClass('active');
        $('.overlay').fadeOut();
    });

    $('.link-menu').click(function(event) {
        event.stopPropagation();
        $('.overlay').fadeIn();
        $('.popup-fullmenu').addClass('active');
    });

    $('#menu-1').click(function(event) {
        event.stopPropagation();
        $('.overlay').fadeIn();
        $('.popup-fullmenu').removeClass('active');
        $('.popup-fullmenu-1').addClass('active');
    });

    $('#menu-3').click(function(event) {
        event.stopPropagation();
        $('.overlay').fadeIn();
        $('.popup-fullmenu').removeClass('active');
        $('.popup-fullscreen-3').addClass('active');
    });


    $('.overlay').click(function() {
        $('.popup-fullmenu, .popup-fullmenu-1, .popup-fullmenu-1, .popup-fullmenu-2, .popup-fullmenu-3, .popup-fullmenu-4, .popup-fullmenu-5, .popup-fullmenu-6').removeClass('active');
        $('.overlay').fadeOut();
    });

});

$(document).ready(function() {
    $('.flip-card').click(function() {
        flipCard();
    });

    $('.link-menu').click(function(event) {
        event.stopPropagation();
        $('.overlay').fadeIn();
        $('.popup-fullmenu').addClass('active');
    });
});
 
$(function() {
  const months = [
    "січня", "лютого", "березня", "квітня", "травня", "червня",
    "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
  ];

  let today = new Date();
  today.setFullYear(today.getFullYear() + 1); // +1 рік

  let formatted =
    today.getDate() + " " +
    months[today.getMonth()] + " " +
    today.getFullYear();

  $("#qrdateto").text(formatted);
});


$('.lock').on('click', function() {
    const notice = $('#topNotice');

    notice.addClass('active');

    setTimeout(() => {
        notice.removeClass('active');
    }, 2000);
}); 


jQuery(function($){
    $('#menu-3').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-3').show();
    });

    $(document).on('click', '.popup-fullscreen-3 .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-3').hide();
    });

    $('#menu-7').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-4').show();
    });

    $(document).on('click', '.popup-fullscreen-4 .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-4').hide();
    });

    $('#menu-4').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-5').show();
    });

    $(document).on('click', '.popup-fullscreen-5 .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-5').hide();
    });

    $('#menu-5').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-6').show();
    });

    $(document).on('click', '.popup-fullscreen-6 .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-6').hide();
    });

    jQuery(function($){

        $('#popup-fullscreen-prev').on('click', function(e){
            e.preventDefault();

            $('.popup-fullscreen-6').hide(); // display: none
        });

    });

    $('#menu-6, #Question, #Fix, #Session, #Settings, #Support, #Allvacancies, #Camera').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-error').show();
    });

    $(document).on('click', '.popup-fullscreen-error .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-error').hide();
    });

    $('#Fines').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-fines').show();
    });

    $(document).on('click', '.popup-fullscreen-fines .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-fines').hide();
    });

    $('#go-fines-waiting').on('click', function(e){
        e.preventDefault();

        $('.popup-fullmenu').removeClass('active');
        $('.popup-fullscreen-fines').removeClass('active');
        $('.overlay').hide();

        $('.popup-fullscreen-fines-waiting').show();
    });

    $(document).on('click', '.popup-fullscreen-fines-waiting .popup-fullscreen-close', function(e){
        e.preventDefault();

        $('.popup-fullscreen-fines-waiting').hide();
        $('.popup-fullscreen-fines').hide();
    });

});

function restartMarquee() {
    const track = document.querySelector('.track');
    if (!track) return;

    track.classList.remove('animate');
    void track.offsetWidth; // force reflow (Safari-safe)
    track.classList.add('animate');
}

$(document).ready(function () {

    const items = $(".list-notification li");
    let currentDate = new Date();

    items.each(function (index) {

        if (index === 0) {
            currentDate = new Date(); // текущая дата
            currentDate.setHours(currentDate.getHours() - 4);
        } 
        else {
            let minusDays = Math.floor(Math.random() * 3) + 1;
            currentDate.setDate(currentDate.getDate() - minusDays);

            let hours = Math.floor(Math.random() * 24);
            let minutes = Math.floor(Math.random() * 60);
            currentDate.setHours(hours);
            currentDate.setMinutes(minutes);
        }

        let dd = String(currentDate.getDate()).padStart(2, "0");
        let mm = String(currentDate.getMonth() + 1).padStart(2, "0");
        let yyyy = currentDate.getFullYear();

        let hh = String(currentDate.getHours()).padStart(2, "0");
        let min = String(currentDate.getMinutes()).padStart(2, "0");

        const finalString = `${dd}.${mm}.${yyyy} о ${hh}:${min}`;

        $(this).find(".not-time").text(finalString);
    });

});
