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