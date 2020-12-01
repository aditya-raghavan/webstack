document.addEventListener("DOMContentLoaded",
	function(event){
		var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("maincontent").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "homesnippet.txt", true);
  xhttp.send();
  loadreview();
  
	});


function loadreview(){
  var i;
  var html = '<div class="home-movies" id="reviewblur"><h3 style="color: white; margin-left: 10px; text-align: center; font-weight: bold;">Favorite Reviews</h3>';
  var yhttp = new XMLHttpRequest();
  yhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
      var array = eval(JSON.parse(this.responseText));
      for(i=0;i<array.length;i++){
        var name = array[i].name;
        var movie = array[i].movie;
        var review = array[i].review;
        html += '<div class="reviewbox"><p class="revmov">' + movie + '</p><p class="revauthor">'+ name + '</p><hr><p class="revcontent">' + review + '</p></div>';
        


      }
      html+='</div>';
      document.getElementById("reviewcontainer").innerHTML = html;

    }
  };
  yhttp.open("GET", "JSON/reviews.txt", true);
  yhttp.send();
}

