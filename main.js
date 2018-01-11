/*
Created by Bartosz Kosakowski
01/11/2018
Simple js code to add some features to my website, namely adding new books to the
list of books on the front page 
*/

/*
*/
function submitForm(){
	var textboxInput = document.getElementById("addbook");
	var someText = "";
	for (var i = 0; i < textboxInput.length; i++){
		someText += textboxInput[i].value;
	}
	window.alert(someText);
	

	resetForm();
	window.alert("Book added to list!");
}

//used to reset the add book form once the user submits their info
function resetForm(){
	document.getElementById("addbook").reset();
}