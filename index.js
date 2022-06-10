/** @format */
var flag = 0;

// var numberOfRating = document.querySelectorAll('.btn').length;

var choosenRating;

let activeRating = null;

const numberOfRating = document.querySelectorAll('.btn');
numberOfRating.forEach((rating) => {
  rating.addEventListener('click', () => {
    if (activeRating === rating) {
      return;
    }

    if (activeRating != null) {
      activeRating.classList.toggle('active');
      choosenRating = activeRating.innerHTML;
      flag = 1;
    }
    rating.classList.toggle('active');
    choosenRating = rating.innerHTML;
    flag = 1;
    activeRating = rating;
  });
});

// for (var i = 0; i < numberOfRating; i++) {
//   console.log(document.querySelectorAll('.btn')[i]);
//   document.querySelectorAll('.btn')[i].addEventListener('click', function () {
//     this.classList.add('active');
//   });
// }

document.querySelector('.submit-btn').addEventListener('click', function () {
  if (flag == 1) {
    displayRating(choosenRating);
  }
});

function displayRating(choosenRating) {
  document.querySelector('.score').innerHTML = choosenRating;
  document.querySelector('.survey').style.display = 'none';
  document.querySelector('.thank').style.display = 'block';
  //   var select = `You selected ${choosenRating} out of 5`;
  //   console.log(select);
}
