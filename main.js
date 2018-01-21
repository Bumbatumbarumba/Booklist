/*
Created by Bartosz Kosakowski
01/11/2018
js code to add new books to the list of books on the front page  
*/

//holds the list of books
var booklist = [];
//booklist gets turned into a string with html tags so that we can display it
var bookinfo = '';
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
	booklist.unshift([textboxInput[0].value, textboxInput[1].value, rating, textboxInput[8].value]);
	addbook();
	resetForm();
}

//used to reset the add book form once the user submits their info
function resetForm(){
	document.getElementById("addbook").reset();
}

function addbook(){
	for (var i = 0; i < booklist.length; i++){
		bookinfo += '<li>'
		for (var j = 0; j < booklist[i].length; j++){
			bookinfo += booklist[i][j] + '<br>';
		}
		bookinfo += '</li>';
	}
	document.getElementById("books").innerHTML = bookinfo;
}
