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
  $('#typing').on('keydown', function () {
    if (key.which === 103) {
      alert('You pressed it!');
      return;
      alert('Press another key!');
    }
  })
}

$(document).ready(function(){
getIt();
frameIt();
// call functions here

});
