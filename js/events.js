function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('form input:first-child').on('keydown', function (key) {
    if (key.which == 103) {
      alert('You pressed it!');
    }
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
// call functions here

});
