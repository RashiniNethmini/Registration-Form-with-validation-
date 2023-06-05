	
	function validateUserId(u) {
		var x1=u.length;
		if(x1<5 || x1>12)
		{
			return false;
		}
		else return true;
	}

	function validatePassword(p) {
		var x2=p.length;
		if(x2<7 || x2>12)
		{
			return false;
		}
		else return true;
	}

	function validateName(n) {
		var z=/^[A-Za-z]+$/;
		if(z.test(n)==true) {
		 	return true;
		}
		 else return false;
	}

	function validateEmail(email) {
		 var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		 var address = email;
		 if(reg.test(address) == false) {
		 
		 return false;
		 }
		 else return true;
	}
	
	function validateForm(form) {
		var user_id=document.forms["form"]["user_id"].value;
		var password=document.forms["form"]["pWord"].value;
		var name=document.forms["form"]["name"].value;
		var address=document.forms["form"]["address"].value;
		var email=document.forms["form"]["email"].value;
		var sex=document.forms["form"]["s"].value;
		var e1=document.forms["form"]["e1"].checked;
		var e2=document.forms["form"]["e2"].checked;
		var english= (e1=="" && e2=="");
		var country=document.forms["form"]["country"].value;

		//User-id ....
		if(user_id==""){
			document.getElementById('error1').innerHTML="Required";
		}

		if (user_id!="" && validateUserId(user_id)==false){ 
			document.getElementById('error1').innerHTML="Sorry.Invalid User Id.Must be between 5 and 12 characters long.";
		}
		
		if (user_id!="" && validateUserId(user_id)==true){ 
			document.getElementById('error1').innerHTML=" ";
		}
		//Password ....
		if (password==""){
			document.getElementById('error2').innerHTML="Required"; 
		}
		if (password!="" && validatePassword(password)==false){
			document.getElementById('error2').innerHTML="Sorry.Invalid Password.Must be between 7 and 12 characters long"; 
		}
		if (password!="" && validatePassword(password)==true){
			document.getElementById('error2').innerHTML=""; 
		}
		//Name....
		if (name=="" ){
			document.getElementById('error3').innerHTML="Required";
		}

		if (name!="" && validateName(name)==false){
			document.getElementById('error3').innerHTML="Sorry.Invalid Name.Use only alphabates.";
		}
		if (name!="" && validateName(name)==true){
			document.getElementById('error3').innerHTML="";
		}

		//Country...
		if (country=="0"){
			document.getElementById('error4').innerHTML="Required.Select the country.";
		}
		if (country!="0"){
			document.getElementById('error4').innerHTML="";
		}

		//Email...
		if (email==""){
			document.getElementById('error5').innerHTML="Required";
		}
		if (email!="" && validateEmail(email)==false){
			document.getElementById('error5').innerHTML="Invalid email address";
		}
		if (email!="" && validateEmail(email)==true){
			document.getElementById('error5').innerHTML=" ";
		}

		//Gender....
		if(sex=="") {
			document.getElementById('error6').innerHTML="Required";
		}
		if(sex!="") {
			document.getElementById('error6').innerHTML=" ";
		}

		//Language....
		if(english==true) {
			document.getElementById('error7').innerHTML="Required";
		}
		if(english==false) {
			document.getElementById('error7').innerHTML=" ";
		}

	}

	