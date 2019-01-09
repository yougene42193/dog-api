'use strict';
function getDogImage(imgNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${imgNum}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson.message);
  //replace the existing image with the new one
  let result = responseJson.message
  $('.hidden').append('<h2>Look at this dog!</h2>');
  for (let i = 0; i < result.length; i++){
  $('.hidden').append(
    `<img src="${responseJson.message[i]}" class="results-img">`
  );
  }
 
}

function watchForm() {
  $('button').on('click', function(event) {
    event.preventDefault();
    let imgNum = $('.js-results').val();
    $('.hidden').empty();
    getDogImage(imgNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});