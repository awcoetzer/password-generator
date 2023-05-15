'use strict';
// selecting the range input content.
const rangeSliderEl = document.querySelector('.range-slider');
const rangeSliderTextEl = document.querySelector('.range-slider--text');

// selecting all toogle buttons content.
const toggleBtnsEl = document.querySelectorAll('.toggle--input');
const toggleFillsEl = document.querySelectorAll('.toggle--fill')
const toggleTextsEl = document.querySelectorAll('.toggle-text')

// selecting the generator button.
const generateStretchBtnEl = document.querySelector('.btn--pg-stretch');
const displayStretchTextsEl = document.querySelectorAll('.display-text--stretch');

// selecting the copy button.
const btnsCopyEl = document.querySelectorAll('.btn--copy');
const copyTextEl = document.querySelectorAll('.copy-text');

// setting the defaults for some variables use later.
let sliderValue, uppercase, number, symbol;

/*
  below holds different arrays housing either, lovercase, uppercase, numbers or symbols seperately.
*/
const lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
const uppercaseArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersArr = '0123456789'
const symbolsArr = '~`!@#$%^&*()_-+={[}],|:;<>.?'

/*
  the first function here is to initialize the
  page to a default state.
*/
const init = function () {
  rangeSliderTextEl.textContent = rangeSliderEl.value
  rangeSliderTextEl.style.color = 'var(--clr-dt-grey)';

  sliderValue = rangeSliderEl.value;
  uppercase = false;
  number = false;
  symbol = false;
  
}

// here I am calling the init function to set the page.
init()

/*
  the function below has a parameter slider to compensate for
  the length chosen by the user.
*/
const randomPassStretch = function (slider) {
  let pass = ''

  /*
    defining a new variable that only pertains to the
    scope of this function. We also set the function equal 
    to lowercase as a default set of characters.

    this so the generate button can on initiate generate 
    at least lowercase letters.
  */
  let allCharacters = lowercaseArr;

  /*
    below is just a sequence of statements checking if
    the above varaibles are true and then adding them to 
    this newly created variable above.
  */
  if (uppercase) {
    allCharacters = allCharacters.concat(uppercaseArr);
  }

  if (number) {
    allCharacters = allCharacters.concat(numbersArr)
  }

  if (symbol) {
    allCharacters = allCharacters.concat(symbolsArr)
  }

  /*
    loops the amount set by the slider, each time generating
    a new number based on the length of the newly created varaible
    above.
  */
  for (let i = 0; i < slider; i++) {
    const randomNum = Math.floor(Math.random() * allCharacters.length);
    pass += allCharacters[randomNum]
  }
  return pass
}

// range slider for mouse input
rangeSliderEl.addEventListener('mousemove', function () {
  // this updates the slider varaible above
  sliderValue = rangeSliderEl.value
  // sets the text next to the slider to the range input value
  rangeSliderTextEl.textContent = sliderValue;

  /*
    simple if statement,
    this just controls the size of the text when sliding
    the slider, not something that is needed, but a nice little touch.
  */
  if (rangeSliderEl.value < 30) {
    rangeSliderTextEl.style.color = 'var(--clr-dt-grey)';
    rangeSliderTextEl.style.transform = 'scale(1)'
  } else if (rangeSliderEl.value < 75) {
    rangeSliderTextEl.style.color = 'yellow';
    rangeSliderTextEl.style.transform = 'scale(1.45)'
  } else {
    rangeSliderTextEl.style.color = 'var(--clr-dt-accent-tint)';
    rangeSliderTextEl.style.transform = 'scale(1.75)'
  }
})

/*
  range slider for finger/touch input, same as above 
  just for screens/mobile devices
*/
rangeSliderEl.addEventListener('touchmove', function () {
  rangeSliderTextEl.textContent = rangeSliderEl.value;
  sliderValue = rangeSliderEl.value

  if (rangeSliderEl.value < 30) {
    rangeSliderTextEl.style.color = 'var(--clr-dt-grey)';
    rangeSliderTextEl.style.transform = 'scale(1)'
  } else if (rangeSliderEl.value < 75) {
    rangeSliderTextEl.style.color = 'yellow';
    rangeSliderTextEl.style.transform = 'scale(1.45)'
  } else {
    rangeSliderTextEl.style.color = 'var(--clr-dt-accent-tint)';
    rangeSliderTextEl.style.transform = 'scale(1.75)'
  }
})

/*
  Looping over the toggle buttons, as I selected all of
  them in a node list/array, instead of selecting them one
  by one.
*/
for (let i = 0; i < toggleBtnsEl.length; i++) {
  toggleBtnsEl[i].addEventListener('click', function (evt) {
    /*
      I am using evt.target to select the element the pointer is actively clicking. Im looking to see the state of the checkbox.

      it adds a css class as well as goes deeper and sets the 
      toggle varaibles above for use within the random function.
    */
    if (evt.target.checked) {
      toggleFillsEl[i].classList.add('toggle-active')
      toggleTextsEl[i].classList.add('toggle-active')
      if (evt.target.id === 'toggle--uppercase') {
        uppercase = true
      } else if (evt.target.id === 'toggle--number') {
        number = true
      } else {
        symbol = true
      }
    } else {
      toggleFillsEl[i].classList.remove('toggle-active')
      toggleTextsEl[i].classList.remove('toggle-active')

      if (evt.target.id === 'toggle--uppercase') {
        uppercase = false
      } else if (evt.target.id === 'toggle--number') {
        number = false
      } else {
        symbol = false
      }
    }
  })
}

/*
  generates the passwords, just loops over the text areas 
  and calls the random function.
*/
generateStretchBtnEl.addEventListener('click', function () {
  for (let i = 0; i < displayStretchTextsEl.length; i++) {
    displayStretchTextsEl[i].textContent = randomPassStretch(sliderValue);
  }
})

/*
  copy password on btn click
*/
for (let i = 0; i < btnsCopyEl.length; i++) {
  btnsCopyEl[i].addEventListener('click', function () {

    /*
      small note on the navigator, needs a secure connection
      to can work, so if it doesn't work on scrimba check out
      password-generator-awcoetzer.netlify.app
    */
    let copy = displayStretchTextsEl[i].textContent;
    console.log(copy)
    navigator.clipboard.writeText(copy)

    /*
      this just display a message and sets it back to its 
      original state.
    */
    copyTextEl[i].textContent = 'Copied';

    setTimeout(function () {
      copyTextEl[i].textContent = 'Copy';
    }, 500)
  })
}