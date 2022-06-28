// let countDate = new Date('June 8, 2022 10:58:00').getTime();

// function newYear(){
// 	if( h == 0 && j == 0 && m == 0 && d == 0){
// 		document.getElementById('body').style.background = "url('./Keren__Pesata_Kembang_Api_Tahun_Baru_Di_Jepang.gif');"
// 	} else {
// 		let now = new Date().getTime();
// 		gap = countDate - now;

// 		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// 		document.getElementById('hari').innerText = days;
// 		document.getElementById('jam').innerText = hours;
// 		document.getElementById('menit').innerText = minutes;
// 		document.getElementById('detik').innerText = seconds;
// 	}
// }

// setInterval( function(){
// 	newYear();
// }, 1000);



// Set the date we're counting down to
var countDownDate = new Date("Juni 10, 2022 12:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  let hari = document.getElementById('hari');
  hari.innerText = days;

  let jam = document.getElementById('jam');
  jam.innerText = hours;

  let menit = document.getElementById('menit');
  menit.innerText = minutes;

  let detik = document.getElementById('detik');
  detik.innerText = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    hari.innerText = "L";
    jam.innerText = "U";
    menit.innerText = "LU";
    detik.innerText = "S";
    document.getElementById('body').style.background = "url('Keren__Pesata_Kembang_Api_Tahun_Baru_Di_Jepang.gif')"
  }
}, 1000);
