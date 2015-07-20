var catPics = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg"];

function displayImage1() {
  var pic1 = document.getElementById("pic1");
  var num1 = Math.floor(Math.random() * (14 - 1) + 1);
  pic1.src = catPics[num1];
  console.log(pic1.src);
}

function displayImage2() {
  var pic2 = document.getElementById("pic2");
  var num2 = Math.floor(Math.random() * (14 - 1) + 1);
  pic2.src = catPics[num2];
  console.log(pic2.src);
}

displayImage1();
displayImage2();



var push = document.getElementById("submit");
push.addEventListener("click", function() {
  displayImage1();
  displayImage2();
  if (displayImage1 == displayImage2) {
    displayImage1();
    displayImage2();
  }
  console.log("This ran");
});





