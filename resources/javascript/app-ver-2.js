'use strict';

const rangeSliderEl = document.querySelector('.range-slider');
const rangeSliderTextEl = document.querySelector('.range-slider--text');
const toggleBtnsEl = document.querySelectorAll('.toggle--input');
const toggleFillsEl = document.querySelectorAll('.toggle--fill')
const toggleTextsEl = document.querySelectorAll('.toggle-text')

const generateStretchBtnEl = document.querySelector('.btn--pg-stretch');
const displayStretchTextsEl = document.querySelectorAll('.display-text--stretch');

const btnsCopyEl = document.querySelectorAll('.btn--copy');
const copyTextEl = document.querySelectorAll('.copy-text');

let sliderValue, uppercase, number, symbol;
let passCopy = []

const lowercaseArr = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const uppercaseArr = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
]

const numbersArr = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

const symbolsArr = [
  "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?"
]


const init = function () {
  rangeSliderTextEl.textContent = rangeSliderEl.value
  rangeSliderTextEl.style.color = 'var(--clr-dt-grey)';

  sliderValue = rangeSliderEl.value;
  uppercase = false;
  number = false;
  symbol = false;
  
}

init()

console.log(sliderValue)

const randomPassStretch = function (slider) {
  let pass = ''

  let allCharacters = lowercaseArr;

  if (uppercase) {
    allCharacters = allCharacters.concat(uppercaseArr);
  }

  if (number) {
    allCharacters = allCharacters.concat(numbersArr)
  }

  if (symbol) {
    allCharacters = allCharacters.concat(symbolsArr)
  }

  for (let i = 0; i < slider; i++) {
    const randomNum = Math.floor(Math.random() * allCharacters.length);
    pass += allCharacters[randomNum]
  }
  return pass
}

// range slider for mouse input
rangeSliderEl.addEventListener('mousemove', function () {
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

// range slider for finger/touch input
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

// toggle switches
for (let i = 0; i < toggleBtnsEl.length; i++) {
  toggleBtnsEl[i].addEventListener('click', function (evt) {
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

generateStretchBtnEl.addEventListener('click', function () {
  const passwords = [
    randomPassStretch(sliderValue),
    randomPassStretch(sliderValue)
  ]

  for (let i = 0; i < displayStretchTextsEl.length; i++) {
    displayStretchTextsEl[i].textContent = passwords[i];
  }
})

// copy password
for (let i = 0; i < btnsCopyEl.length; i++) {
  btnsCopyEl[i].addEventListener('click', function () {
    let copy = displayStretchTextsEl[i].textContent;
    navigator.clipboard.writeText(copy)
    const message = setInterval(function () {
      copyTextEl[i].textContent = 'Copied';
    }, 1)

    setTimeout(function () {
      clearInterval(message)
      copyTextEl[i].textContent = 'Copy';
    }, 2000)
  })
}