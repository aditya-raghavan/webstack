function signupvalidate(){
	var fname = document.forms["signup"]["fname"].value;
	var userid = document.forms["signup"]["userid"].value;
	var email = document.forms["signup"]["email"].value;
	var password = document.forms["signup"]["psw"].value;
	var cpassword = document.forms["signup"]["psw-repeat"].value;

	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	

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
	else if(password.length<6){
		alert("Password must be atleast 6 characters long");
		return false;
	}

	else if(email.match(mailformat)==null){
		alert("Enter valid Email ID");
		return false;
	}
	
		for(var i=0;i<userid.length;i++){
			if(userid[i]== " "){
				alert("User ID cannot contain spaces");
				return false;
			}
		}


}

	





	