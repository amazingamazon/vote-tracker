var photo = function (path) {
  this.path = path;
  this.votes = 0;
};

var cats = [];
var left = undefined;
var right = undefined;

$.ajax({
  url: 'https://api.imgur.com/3/album/DDoWy.json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID 9dcdf01cc75f3c1'
  }
})
.done(function(res) {
  cats = res.data.images;
  console.log(cats);
})
.fail(function(err) {
  console.log(err);
});

console.log(cats);

var pieData = [
   {
      value: 1,
      color: "#F41C54",
      highlight: "FF3C70",
      label: "Image 2"
   },
   {
      value: 1,
      color: "#FF9F00",
      highlight: "#FF9F58",
      label: "Image 1"
   }
];

var pieOptions = {
   segmentShowStroke: false,
   animateScale: true
};

var myChart = document.getElementById("myChart").getContext("2d");
var chart = new Chart(myChart).Pie(pieData, pieOptions);

function randomNum(min, max) {
 return Math.floor(Math.random() * (max - min) + min);
}

function display() {
  $('#pic1').attr("src", cats[left].path);
  $('#pic2').attr("src", cats[right].path);
}
// newDisplay();
// display();

function newDisplay() {
   left = randomNum(1, 14);
   right = randomNum(1, 14);
   if (left == right) {
      right = randomNum(1, 14);
   }
   console.log(left, right);
 }

$('#pic1').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic2').attr("class", "");
  cats[left].votes++;
  localStorage.setItem("catVotes", JSON.stringify(cats));
  console.log(cats[left].votes);
  chart.segments[0].value = cats[right].votes;
  chart.segments[1].value = cats[left].votes;
  chart.update();
});

$('#pic2').click(function(){
  console.log("clicked");
  $(this).attr("class", "winner");
  $('#pic1').attr("class", "");
  cats[right].votes++;
  localStorage.setItem("catVotes", JSON.stringify(cats));
  console.log(cats[right].votes);
  chart.segments[0].value = cats[right].votes;
  chart.segments[1].value = cats[left].votes;
  chart.update();
});

$('#reroll').click(function(){
    $('#pic1').attr("src", "").removeClass("winner");
    $('#pic2').attr("src", "").removeClass("winner");
    newDisplay();
    display();
});

if (!(localStorage.getItem("catVotes"))) {
  localStorage.setItem("catVotes", JSON.stringify(cats));
} else {
  cats = JSON.parse(localStorage.getItem("catVotes"));
}

newDisplay();
display();

// for (i = 0; i < 14; i++) {
//    pieData[i].value = cats[i].votes;
//    Chart.update();
// }





// var pieData = [
//    {
//       value: 0,
//       color:"FA0064"
//    },
//    {
//       value: 0,
//       color: "#C8004B"
//    },
//     {
//       value: 0,
//       color: "#960032"
//    },
//     {
//       value: 0,
//       color: "#640019"
//    },
//     {
//       value: 0,
//       color: "#320000"
//    },
//     {
//       value: 0,
//       color: "EC2800"
//    },
//     {
//       value: 0,
//       color: "#ED4E0C"
//    },
//     {
//       value: 0,
//       color: "#F26B1D"
//    },
//     {
//       value: 0,
//       color: "#F28F38"
//    },
//     {
//       value: 0,
//       color: "#F3AF5A"
//    },
//     {
//       value : 0,
//       color : "#108F0B"
//    },
//     {
//       value : 0,
//       color : "#44AB1F"
//    },
//     {
//       value : 0,
//       color : "#66CC1F"
//    },
//     {
//       value : 0,
//       color : "#8CDB50"
//    },
// ];



