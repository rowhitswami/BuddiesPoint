$(document).ready(function(){
		$("#register").click(function(){
			$("#signupModal").modal();
		});
});

$(document).ready(function(){
		$("#login").click(function(){
			$("#loginModal").modal();
		});
});

$(document).ready(function(){
		$("#friend-btn").click(function(){
			$("#friendlist").modal();
		});
});

function newLocation(){
	window.open("profile.html");
}

function demo(){
	alert("This is a demo site having limited functionality.")
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

function searching(){
	var input_query = document.getElementById("search-field").onkeydown = function(event) {
    if (event.keyCode == 13) {
        alert('5');
    };
}
}