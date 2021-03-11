var hamburger = $('.header-right > a'); // variabile icona hamburger
var hamburgerMenu = $('.hamburger-menu'); // variabile menù nascosto
var chiudiMenu = $('.close'); // variabile 'X' per la chiusura dell'hamburgerMenu

// Al click dell'icona hamburger si apre il menù nascosto
hamburger.click(
  function() {
    hamburgerMenu.slideDown();
  }
);
// Al click della crocetta si chiude il menù
chiudiMenu.click(
  function() {
    hamburgerMenu.slideUp();
  }
);
