'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

console.log(document.querySelector('.message').textContent);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
  }
});
