var Photo = function(path) {
 this.path = "img/" + path + ".jpg";
 this.votes = 0;
 this.number = path;
};

var cat1 = new Photo(1);
var cat2 = new Photo(2);
var cat3 = new Photo(3);
var cat4 = new Photo(4);
var cat5 = new Photo(5);
var cat6 = new Photo(6);
var cat7 = new Photo(7);
var cat8 = new Photo(8);
var cat9 = new Photo(9);
var cat10 = new Photo(10);
var cat11 = new Photo(11);
var cat12 = new Photo(12);
var cat13 = new Photo(13);
var cat14 = new Photo(14);

var cats = [];
cats.push(cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10, cat11, cat12, cat13, cat14);

var Tracker = function(cats) {
   this.cats = cats;
   this.left = document.getElementById("pic1");
   this.right = document.getElementById("pic2");
   this.leftrandom = this.generateRandom();
   this.rightrandom = this.generateRandom();
};

Tracker.prototype.generateRandom = function() {
   var randNum = Math.floor(Math.random() * (this.cats.length - 1));
   var randCat = this.cats[randNum];
   return randCat;
};

Tracker.prototype.displayImages = function() {
   this.left.src = this.leftrandom.path;
   console.log(this.left.src);

   this.right.src = this.rightrandom.path;
   console.log(this.right.src);

   while (this.left.src == this.right.src) {
      console.log("It's the same cat!");
      this.displayImages();
   }
   console.log(this.leftrandom, this.rightrandom);
   return [this.left.src, this.right.src];
};

var getCats = new Tracker(cats);
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
   getCats.left.setAttribute("class", "winner");
   getCats.right.removeAttribute("class");

   cats[getCats.leftrandom.number].votes++;
   console.log(cats[getCats.leftrandom.number]);
   console.log(cats[getCats.leftrandom.number].votes);
 });

getCats.right.addEventListener("click", function() {
   getCats.right.setAttribute("class", "winner");
   getCats.left.removeAttribute("class");

   cats[getCats.rightrandom.number].votes++;
   console.log(cats[getCats.rightrandom.number]);
   console.log(cats[getCats.rightrandom.number].votes);
});

var pieData = [
   {
      value: 3,
      color:"#FF9F00"
   },
   {
      value : 7,
      color : "#F41C54"
   },
];

var pieOptions = {
   segmentShowStroke : false,
   animateScale : true
};

var myChart= document.getElementById("myChart").getContext("2d");
new Chart(myChart).Pie(pieData, pieOptions);


