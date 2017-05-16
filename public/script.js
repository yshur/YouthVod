
function getAllVodDB() {
  $.get("http://localhost:3000/getAllVodDB",
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
  });
};
function getAllYouthItems() {
  $.get("http://localhost:3000/getAllYouthItems",
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function getStarData() {
  var star1=$('#star').val();
  console.log(star1);
  $.post("http://localhost:3000/getStarData/",
    {star:star1},    
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function getItemsByYearAndMinDuration() {
  var year=$('#getyear').val();
  var time=$('#gettime').val();
  $.get("http://localhost:3000/getItemsByYearAndMinDuration/"+year+"/"+time,
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function putItemsByYearAndMinDuration() {
  var year=$('#putyear').val();
  var time=$('#puttime').val();
  $.put("http://localhost:3000/getItemsByYearAndMinDuration/"+year+"/"+time,
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function postItemsByYearAndMinDuration() {
  var year1=$('#postyear').val();
  var time1=$('#posttime').val();
  $.post("http://localhost:3000/getItemsByYearAndMinDuration/",
    {year:year1, time:time1},
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};