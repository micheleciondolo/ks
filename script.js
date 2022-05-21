var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3], 
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
]

document.addEventListener('DOMContentLoaded', function() {
  var _hours = document.querySelectorAll('.hours');
  var _minutes = document.querySelectorAll('.minutes');
  var _seconds = document.querySelectorAll('.seconds');
  var date1 = "22/05/2022".split("/");
  var compleanno  = new Date(date1[2], date1[1] - 1, date1[0]);

  setInterval(function() {
    var date = new Date();
	var diff = compleanno.getTime() - date.getTime();
 if(diff<0) window.location.replace("file.html");
    var hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds();  
	
	var seconds2 =  Math.floor((diff / 1000) % 60 );
var minutes2 = Math.floor((diff / (1000*60)) % 60);
var hours2   =  Math.floor((diff / (1000*60*60)) );


    setNumber(_hours[0], Math.floor(hours2/10), 1);
    setNumber(_hours[1], hours2%10, 1);

    setNumber(_minutes[0], Math.floor(minutes2/10), 1);
    setNumber(_minutes[1], minutes2%10, );

    setNumber(_seconds[0], Math.floor(seconds2/10), 1);
    setNumber(_seconds[1], seconds2%10, 1);
  }, 1000);
});

var setNumber = function(digit, number, on) {
  var segments = digit.querySelectorAll('.segment');
  var current = parseInt(digit.getAttribute('data-value'));


  if (!isNaN(current) && current != number) {
    // unset previous number
    digitSegments[current].forEach(function(digitSegment, index) {
      setTimeout(function() {
        segments[digitSegment-1].classList.remove('on');
      }, index*45)
    });
  }
  
  if (isNaN(current) || current != number) {
    // set new number after
    setTimeout(function() {
      digitSegments[number].forEach(function(digitSegment, index) {
        setTimeout(function() {
          segments[digitSegment-1].classList.add('on');
        }, index*45)
      });
    }, 250);
    digit.setAttribute('data-value', number);
  }
}
