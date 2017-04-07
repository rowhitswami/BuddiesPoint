//function to invoke signup modal
$(document).ready(function(){
		$("#register").click(function(){
			$("#signupModal").modal();
		});
});

//function to invoke login modal
$(document).ready(function(){
		$("#login").click(function(){
			$("#loginModal").modal();
		});
});

//function to invoke friend-list modal
$(document).ready(function(){
		$("#friend-btn").click(function(){
			$("#friendlist").modal();
		});
});

//Alerts for dummy button
function demo(){
	alert("This is a demo site having limited functionality.")
}

//Login Validation Start
function newLocation(){
	window.open("profile.html");
}

function validating(){
	var username = document.getElementById("username").value;
	var x = document.getElementById("passwor").value;
	if (username == "rowhitswami" && x == "1234") {
		newLocation();
	}
	else{
   		alert("Please enter correct credentials...");
	}
}
//Login Validation End

//Searching Start
function checkingTheEnterKey(e){
        if(e.keyCode === 13){
        	return true;
        }
    }

function concatenating(){
	var addingPlus = document.getElementById("search-field").value;
	addingPlus = addingPlus.replace(/ /g, "+");
	addingPlus = "https://www.google.co.in/#q="+addingPlus+"&*&btnK=Google%20Search"
	window.open(addingPlus);
	
}

function searching(){
    var x = checkingTheEnterKey(event);
    if (x == true) {
    	concatenating();
    }
}
//Searching End