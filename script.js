$(document).ready(function(){
  $("#search").click(function(){
    var word=$("#searchTerm").val();
    var link= "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ word +"&format=json&callback=?";
    //calling ajax
    
    $.ajax({
      type: "GET",
      url: link,
      async: false,
      dataType: "json",
        success: function (data) {
          //fun testing
          console.log(data[1][0]);
          console.log(data[2][0]);
          console.log(data[3][0]);
          console.log(data[1][1]);
          console.log(data[1][2]); 
          
          //reset the result
          $(".out-result").html("");
          //print out result
          for(var i=0;i<data[1].length;i++){
            $(".out-result").prepend("<li><a href= "+data[3][i]+" target='blank'>"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
          }
          $("#searchTerm").val('');
          //end of four
        },
        error: function (errorMessage) {
          $(".out-result").html("Error");
        }
    });
    //ajax end

    
  });
  //end function click
  
  
  $("#searchTerm").keypress(function(q){
      if(q.which==13){
        $("#search").click();
      }
    });
  //end function enter
});