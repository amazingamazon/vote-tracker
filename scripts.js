var catPics = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg", "img/06.jpg", "img/07.jpg", "img/08.jpg", "img/09.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg"];

function displayImage1() {
  var pic1 = document.getElementById("pic1");
  var num1 = Math.floor(Math.random() * (14 - 1) + 1);
  pic1.src = catPics[num1];
}

function displayImage2() {
  var pic2 = document.getElementById("pic2");
  var num2 = Math.floor(Math.random() * (14 - 1) + 1);
  pic2.src = catPics[num2];
}

displayImage1();
displayImage2();



var reroll = document.getElementById("submit");
reroll.addEventListener("click", function() {
  displayImage1();
  displayImage2();
  if (displayImage1 == displayImage2) {
    displayImage1();
    displayImage2();
  }
});


var count = 0;
var vote = document.getElementById("pic1");
vote.addEventListener("click", function() {
  count += 1;
});



var Photo = function(path) {
  this.path = "img/" + path + ".jpg";
  this.votes = 0;
  this.receiveVote = function() {
    this.votes += 1;
    console.log(this.votes);
  };
};

var cat1 = new Photo("01");
var cat2 = new Photo("02");
var cat3 = new Photo("03");
var cat4 = new Photo("04");
var cat5 = new Photo("05");
var cat6 = new Photo("06");
var cat7 = new Photo("07");
var cat8 = new Photo("08");
var cat9 = new Photo("09");
var cat10 = new Photo("10");
var cat11 = new Photo("11");
var cat12 = new Photo("12");
var cat13 = new Photo("13");
var cat14 = new Photo("14");

var cats = [];
cats.push(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14);

console.log(cat1.path);



































