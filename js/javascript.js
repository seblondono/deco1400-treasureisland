function characterName(userInput){
	/*
	Gets the input from user and stores it is the local storage
	for later use in different pages
	snippet by Christian C. Salvadó, published at stack overflow, 01/06/2010
	modified by me.
	*/
	
 	localStorage.setItem("userName", userInput);
}

function getUserName(){
	//returns the name of the user, for use in chapter pages
	var userName = localStorage.getItem("userName");
	return userName;
}

function deleteUserName(){
	/*deletes the user name stored in local storage
	snippet by Christian C. Salvadó, published at stack overflow, 01/06/2010
	modified by me.
	*/
	localStorage.setItem("userName", "");
}

function googleSearch(unknownWord){
	//Allows the user to find the significate of unknown words
	window.open("https://www.google.com/search?q=define+"+unknownWord);
}