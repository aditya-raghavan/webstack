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
	});

function checkcookie(){
  var x = document.cookie.split(';');
  if(x.length != 0){
    for(var i=0;i<x.length;i++){
      var pair = x[i].split("=");
      if("username" == pair[0].trim()){
        alert("Welcome " + pair[1]);
        document.getElementById("signout").innerHTML = "<a href='index.html' onclick='deletecookie()'><span>Signout</span></a>"
      }
    }
  }
}




function deletecookie(){
  
  
  
               
  document.cookie = "username=" + ";" + "expires=Thu, 01 Jan 1970 00:00:01 GMT";
  
}