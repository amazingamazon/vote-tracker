$(document).ready(function() {

  var photo = function (path, number) {
   this.path = path;
   this.number = number;
   this.votes = 0;
  };

  var cats = [];
  var left = undefined;
  var right = undefined;

  var pieData = [
     {
        // value: cats[left].votes,
        value: 1,
        color: "#F41C54",
        highlight: "#F3AF5A",
        label: "Image 1"
     },
     {
        // value: cats[right].votes,
        value: 1,
        color: "#FF9F00",
        highlight: "#F3AF5A",
        label: "Image 2"
     }
  ];

  var pieOptions = {
     segmentShowStroke: false,
     animateScale: true
  };


  var myChart = document.getElementById("myChart").getContext("2d");
  var chart = new Chart(myChart).Pie(pieData, pieOptions);


  for (var i = 1; i <= 14; i++) {
   cats.push(new photo("img/" + i + ".jpg", i));
  }

  console.log(cats);

  function randomNum(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
  }

  function display() {
   $('#pic1').attr("src", cats[left].path);
   $('#pic2').attr("src", cats[right].path);
  }
  newDisplay();
  display();

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
    console.log(cats[right].votes);
    chart.segments[0].value = cats[right].votes;
    console.log(chart.segments[0].value);
    chart.segments[1].value = cats[left].votes;
    chart.update();
  });

  $('#reroll').click(function(){
      $('#pic1').attr("src", "").removeClass("winner");
      $('#pic2').attr("src", "").removeClass("winner");
      newDisplay();
      display();
  });
});

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



