var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	
	if(mySrc === 'images/img_9885-umass-landscape_-_version_3.jpg'){
		myImage.setAttribute('src','images/umass_primary_logo.png');
	}
	
	else{
		myImage.setAttribute('src','images/img_9885-umass-landscape_-_version_3.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt("Please enter your name: ");
	localStorage.setItem('name', myName);
	myHeading.textContent = "Hey, " + myName + "! This is UMass Amherst!";
}

if(!localStorage.getItem('name')){
	setUserName();
}

else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Hey, " + storedName + "! This is UMass Amherst!";
}

myButton.onclick = function(){
	setUserName();
}