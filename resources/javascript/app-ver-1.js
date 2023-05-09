'use strict';

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
  const passwords = [
    randomPassReq(15),
    randomPassReq(15)
  ]

  for (let i = 0; i < displayReqTextsEl.length; i++) {
    displayReqTextsEl[i].textContent = passwords[i];
  }
})

