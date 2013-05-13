// update document count
var update = function(){
  $.ajax({
    url: db_url,
    dataType: "jsonp"
  }).done(function(data){
    $("#doc_count").text(data.doc_count);
  });
}

$(function(){
  update();
  setInterval(update, 10000);
});