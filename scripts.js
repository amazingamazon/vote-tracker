var Photo = function(path) {
  this.path = "img/" + path + ".jpg";
  this.votes = 0;
  // this.receiveVote = function() {
  //   this.votes += 1;
  //   console.log(this.votes);
  // };
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

var Tracker = function() {
  this.cats = cats;
  this.left = document.getElementById("pic1");
  this.right = document.getElementById("pic2");
};

Tracker.prototype.generateRandom = function() {
  var randNum = Math.floor(Math.random() * (this.cats.length));
  var randCat = this.cats[randNum];
  return randCat;
};

Tracker.prototype.displayImages = function() {
  this.left.src = this.generateRandom().path;
  console.log(this.left.src);
  this.right.src = this.generateRandom().path;
  console.log(this.right.src);
  while (this.left.src == this.right.src) {
    console.log("It's the same cat!");
    this.displayImages();
  }
};


var getCats = new Tracker();
getCats.displayImages();

var voteAgain = document.getElementById("reroll");
voteAgain.addEventListener("click", function() {
  getCats.left.src = getCats.generateRandom().path;
  console.log(getCats.left.src);
  getCats.right.src = getCats.generateRandom().path;
  console.log(getCats.right.src);
  while (getCats.left.src == getCats.right.src) {
    console.log("It's the same cat!");
    getCats.displayImages();
  }
  getCats.left.removeAttribute("class");
  getCats.right.removeAttribute("class");

});

getCats.left.addEventListener("click", function() {
    getCats.right.removeAttribute("class");
    getCats.left.setAttribute("class", "winner");
    var source = getCats.left.getAttribute("src");
    console.log(source);
    getCats.left.votes += 1;
    console.log(getCats.left + "has" + getCats.left.votes);
  });

getCats.right.addEventListener("click", function() {
  getCats.left.removeAttribute("class");
  getCats.right.setAttribute("class", "winner");
  getCats.right.votes += 1;
  console.log(getCats.right + "has" + getCats.right.votes);

});
