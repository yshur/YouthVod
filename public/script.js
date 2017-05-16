
function getAllVodDB() {
  $.get("https://youthvod.herokuapp.com/getAllVodDB",
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
  });
};
function getAllYouthItems() {
  $.get("https://youthvod.herokuapp.com/getAllYouthItems",
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function getStarData() {
  var star1=$('#star').val();
  console.log(star1);
  $.post("https://youthvod.herokuapp.com/getStarData/",
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
  $.get("https://youthvod.herokuapp.com/getItemsByYearAndMinDuration/"+year+"/"+time,
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
function putItemsByYearAndMinDuration() {
  var year=$('#putyear').val();
  var time=$('#puttime').val();
  var arr ={'year':year,'time':time};
  console.log('https://youthvod.herokuapp.com/getItemsByYearAndMinDuration/'+year+'/'+time);
  $.ajax({
    url : 'https://youthvod.herokuapp.com/getItemsByYearAndMinDuration/'+year+'/'+time,
    type : 'PUT',
    data: arr,
    success : function(data){
        $(".result").empty();
        $(".result").append(JSON.stringify(data));
        console.log("Return data: "+JSON.stringify(data));
    },
    error: function () {
        console.log("error From Put");
    }
  });
};
function postItemsByYearAndMinDuration() {
  var year1=$('#postyear').val();
  var time1=$('#posttime').val();
  $.post("https://youthvod.herokuapp.com/getItemsByYearAndMinDuration/",
    {year:year1, time:time1},
    function(data) {
      $(".result").empty();
      $(".result").append(JSON.stringify(data));
      console.log("Return data: "+JSON.stringify(data));
    });
};
