/*
Created by Bartosz Kosakowski
01/11/2018
js code to add new books to the list of books on the front page  
*/

/*
Takes data out of the form, turns it into a list, then adds it into the
list of books.
*/

addbook(["A Song of Ice and Fire", "George RR Martin", "5", "Easily the best book series I have ever read, it is absolutely excellent."]);
addbook(["The Cosmos", "Carl Sagan", "5", "Such an amazing book, Sagan does a fantastic job detailing about real life historical events with the prose of a fantasy writer."]);
addbook(["The Kingkiller Chronicle", "Patrick Rothfuss", "5", "Wonderfully written, and the characters are really cool and interesting."]);
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

//adds 
function addbook(formContent){
	var bookinfo = '<ul id="bookinfo">';
	for (var i = 0; i < formContent.length; i++){
		if (i == 2){
			bookinfo += '<div id="info' + i + '">' + formContent[i] + '/5' + '<br>' + '</div>';
		}
		else{
			bookinfo += '<div id="info' + i + '">' + formContent[i] + '<br>' + '</div>';
		}
	}
	bookinfo += '</ul>' + '<br>';
	document.getElementById("books").innerHTML += bookinfo.toLowerCase();
}
