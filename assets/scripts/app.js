'use strict'

// SCROLL TO ANCHOR MAIN FUNCTION
// SCROLL TO ANCHOR MAIN FUNCTION

const scrollToAnchor = (anchorid) => {
  var aTag = $("a[name='"+ anchorid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

// SCROLL TO SPOTS ON PAGE FUNCTIONS USING MAIN NAV
// SCROLL TO SPOTS ON PAGE FUNCTIONS USING MAIN NAV

const scrollToHome = () => {
  scrollToAnchor('home-page-anchor');
}

const scrollToCoffee = () => {
    scrollToAnchor('coffee-page-anchor');
  }

const scrollToWaffles = () => {
  scrollToAnchor('waffles-page-anchor');
}

const scrollToWine = () => {
  scrollToAnchor('wine-page-anchor');
}

const scrollToPress = () => {
  scrollToAnchor('press-page-anchor');
}

const scrollToHours = () => {
  scrollToAnchor('hours-page-anchor');
}

// SCROLL TO SPOTS ON PAGE USING BURGER NAV
// SCROLL TO SPOTS ON PAGE USING BURGER NAV

const scrollToHomeBurger = () => {
  scrollToAnchor('home-page-anchor');
  closeNav()
}

const scrollToCoffeeBurger = () => {
    scrollToAnchor('coffee-page-anchor');
    closeNav()
  }

const scrollToWafflesBurger = () => {
  scrollToAnchor('waffles-page-anchor');
  closeNav()
}

const scrollToWineBurger = () => {
  scrollToAnchor('wine-page-anchor');
  closeNav()
}

const scrollToPressBurger = () => {
  scrollToAnchor('press-page-anchor');
  closeNav()
}

const scrollToHoursBurger = () => {
  scrollToAnchor('hours-page-anchor');
  closeNav()
}


// HAMBURGER NAV EVENTS
// HAMBURGER NAV EVENTS

const openNav = () => {
  document.getElementById('burger-menu').style.width = '50%'
}

const closeNav = () => {
  document.getElementById('burger-menu').style.width = '0'
}

// EVENT HANDLERS
// EVENT HANDLERS

const addHandlers = () => {
  // Main Nav bar scroll to anchor
  $("#home-page-button").on('click', scrollToHome) 
  $('#coffee-page-button').on('click', scrollToCoffee)
  $("#waffles-page-button").on('click', scrollToWaffles)
  $("#wine-page-button").on('click', scrollToWine)
  $("#press-page-button").on('click', scrollToPress)
  $("#hours-page-button").on('click', scrollToHours)
    
  // Burger menu open/close handlers
  $('.close-btn').on('click', closeNav)
  $('.open-btn').on('click', openNav)

  // Burger menu nav link handlers
  $('.home-page-burger-button').on('click', scrollToHomeBurger)
  $('.coffee-page-burger-button').on('click', scrollToCoffeeBurger)
  $('.waffles-page-burger-button').on('click', scrollToWafflesBurger)
  $('.wine-page-burger-button').on('click', scrollToWineBurger)
  $('.press-page-burger-button').on('click', scrollToPressBurger)
  $('.hours-page-burger-button').on('click', scrollToHoursBurger)
}

// ON PAGE LOAD
// ON PAGE LOAD

$(() => {
  // clickEvents.addHandlers()
  addHandlers()
})
