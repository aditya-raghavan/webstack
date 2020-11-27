


function signupvalidate(){
	var fname = document.forms["signup"]["fname"].value;
	var userid = document.forms["signup"]["userid"].value;
	var email = document.forms["signup"]["email"].value;
	var password = document.forms["signup"]["psw"].value;
	var cpassword = document.forms["signup"]["psw-repeat"].value;
	var bname = document.forms["signup"]["bname"].value;
	var uname = document.forms["signup"]["uname"].value;
	var ageval = document.forms["signup"]["age"].value;
	var phone = document.forms["signup"]["phno"].value;


	var newuniv = uname.replace(/\s+/g, "");

	
	var passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

	

	if(fname==""||fname==null){
		alert("Enter Name");
		return false;
	}
	else if(userid == ""||userid == null){
	
		alert("Enter User ID ");
		return false;
	}

	else if(email== ""||email==null){
		alert("Enter Email ID ");
		return false;
	}
	else if(password== ""||password==null){
		alert("Enter Password");
		return false;
	}
	else if(cpassword== ""||cpassword==null){
		alert("Enter Confirm Password");
		return false;
	}
	else if(cpassword != password){
		alert("Passwords does not match");
		return false;
	}
	else if(password.length<5){
		alert("Password must be atleast 5 characters long");
		return false;
	}
	else if(password.match(passformat)==null){
		alert("Invalid password");
		return false;
	}
	else if(!(newuniv in email)){
		alert("Only official emailID accepted");
		return false;
	}
	else if(Math.sign(ageval)==-1){
		alert("Invalid Age");
		return false;
	}
	else if(!(userid[0] == userid[0].toUpperCase())){
		alert("First letter of username should be capital");
		return false;
	}


	
		for(var i=0;i<userid.length;i++){
			if(userid[i]== " "){
				alert("User ID cannot contain spaces");
				return false;
			}
		}

	document.cookie = "username=" + fname +"; path=/;";
	document.cookie = "phonenumber=" + phone + "; path=/;";
	alert("Registration successful");

	return true;

}


function preventNumberInput(e){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 47 && keyCode < 58 || keyCode > 95 && keyCode < 107 ){
        e.preventDefault();
    }
}

function preventCharInput(e){
    var keyCode = (e.keyCode ? e.keyCode : e.which);
    if (keyCode > 64 && keyCode < 91 || keyCode > 96 && keyCode < 123 ){
        e.preventDefault();
    }
}



function loadXML()
        {
            var xhttp=new XMLHttpRequest();
            xhttp.onreadystatechange=function()
            {
                if(this.readyState==4&&this.status==200)
                {
                    myFunction(this);
                }
            };
            xhttp.open("GET","student.xml",true);
            xhttp.send();
        }
        function myFunction(xml)
        {
            var i;
            var xmlDoc=xml.responseXML;
            var t="<tr><th>Student Name</th><th>College</th></tr>";
            var x=xmlDoc.getElementsByTagName("cs");
            for(i=0;i<x.length;i++)
            {
                t +="<tr><td>" +
                x[i].getElementsByTagName("stu-name")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("stu-college")[0].childNodes[0].nodeValue +
                "</td></tr>";
            }
            document.getElementById("demo").innerHTML=t;
        }



	





	