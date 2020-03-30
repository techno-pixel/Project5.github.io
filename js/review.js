// JavaScript Document

let reviewChoose = document.querySelector('select'); 
let reviewDisplay = document.getElementById('review'); 

reviewChoose.onchange = function() {
    let review = reviewChoose.value; 
    updateReview(review); 
  }; 
  
  
  function updateReview(review) {
    review = review.toLowerCase(); 
    let url = review + '.txt'; 
    
    fetch(url).then(function(response) {
        response.text().then(function(text) {
          reviewDisplay.textContent = text;
        });
      });
  }
  
  updateReview('Review 1'); 
  reviewChoose.value = 'Review 1'; 
