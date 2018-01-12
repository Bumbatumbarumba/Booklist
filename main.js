/*
Created by Bartosz Kosakowski
01/11/2018
Simple js code to add some features to my website, namely adding new books to the
list of books on the front page 
*/

/*
*/
var fs = require("fs");

function submitForm(){
	const textboxInput = document.getElementById("addbook");
	var rating = "";
	for (var i = 0; i < textboxInput.length; i++){
		if (textboxInput[i].checked == true){
			rating = textboxInput[i].value;
		}
	}

	/*var addBookParams = JSON.stringify({"title": textboxInput[0].value, 
		"author": textboxInput[1].value, 
		"rating": rating, 
		"comments":textboxInput[8].value});
	window.alert(addBookParams);
	window.alert(JSON.parse(addBookParams).title);*/

	/*var newBook = new bookData(textboxInput[0].value, textboxInput[1].value, rating, textboxInput[8].value);
	window.alert(JSON.stringify(newBook));
	resetForm();
	window.alert("Book added to list!");*/
}

//used to reset the add book form once the user submits their info
function resetForm(){
	document.getElementById("addbook").reset();
}
/*
class bookData{
	constructor(title, author, rating, comment){
		this.title = title;
		this.author = author;
		this.rating = rating;
		this.comment = comment;
	}
}*/