/*
Created by Bartosz Kosakowski
01/11/2018
js code to add new books to the list of books on the front page  
*/

/*
Takes data out of the form, turns it into a list, then adds it into the
list of books.
*/
function submitForm(){
	const textboxInput = document.getElementById("addbook");
	var rating = "";
	for (var i = 0; i < textboxInput.length; i++){
		if (textboxInput[i].checked == true){
			rating = textboxInput[i].value;
		}
	}
	addbook([textboxInput[0].value, textboxInput[1].value, rating, textboxInput[8].value]);
	resetForm();
}

//used to reset the add book form once the user submits their info
function resetForm(){
	document.getElementById("addbook").reset();
}

//
function addbook(formContent){
	var bookinfo = '<li>';
	for (var i = 0; i < formContent.length; i++){
		bookinfo += formContent[i] + '<br>';
	}
	bookinfo += '</li>';
	document.getElementById("books").innerHTML += bookinfo;
}
