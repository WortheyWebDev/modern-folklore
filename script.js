//This code provides the randomize quotes on the bottom of each page
var quotes = new Array();
	quotes[0] = ("\"It's as much fun to scare as to be scared.\" ~Vincent Price");
	quotes[1] = ("\"We make up horrors to help us cope with the real ones.\" ~Stephen King");
	quotes[2] = ("\"Where there is no imagination, there is no horror.\" ~Arthur Conan Doyle");
	quotes[3] = ("\"The real world is where the monsters are.\" ~Rick Riordan");
	quotes[4] = ("\"I delight in what I fear.\" ~Shirley Jackson");
				
function randomQuote() {
	var chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return chosenQuote;
}

//This code provides the drag and drop functionality of the puzzle:
function allowDrop(ev) {
	ev.preventDefault();
}
			
function drag(ev) {
	ev.dataTransfer.setData("Text",ev.target.id);
}
			
function drop(ev) {
	var data = ev.dataTransfer.getData("Text");
	ev.target.appendChild(document.getElementById(data));
	ev.preventDefault();
}