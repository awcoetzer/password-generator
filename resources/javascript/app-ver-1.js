'use strict';

/*
  Not much notes on this document, fairly simple, 
  the 2 meaningful things to mention here is probably 
  the function takes has a parameters whereby you can 
  set the length. This will be used later when looking
  for user input.
  
  The other is the looping over an array node list, instead
  of selecting both display texts individually.

  the other .js file has more notes than this one.
*/

const generateReqBtnEl = document.querySelector('.btn--pg-req');
const displayReqTextsEl = document.querySelectorAll('.display-text--req');


const charactersReq = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
];

const randomPassReq = function (length) {
  let pass = ''
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * charactersReq.length);
    pass += charactersReq[randomNum]
  }
  return pass
}

generateReqBtnEl.addEventListener('click', function () {
  for (let i = 0; i < displayReqTextsEl.length; i++) {
    displayReqTextsEl[i].textContent = randomPassReq(15);
  }
})

