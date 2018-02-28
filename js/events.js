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
  $('form input#typing').on('keydown', function (key) {
    if (key.which == 71) {
      alert('You pressed it!');
    }
  })
}

function submitIt() {
  $("form").on('submit', function(event) {
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();
// call functions here

});
