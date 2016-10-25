var sentence = "The quick red fox jumped over the lazy brown dog.";
var letters = new Array();
var newLetters = new Array();
var newSentence = new Array();

$(document).ready(function() {

var letters = sentence.split("");
var newLetters = letters.map(function(letters) {
	for (var i = 0; i < letters.length; i++) {
		if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u")	{
			letters[i] = "-"
			newLetters.push(letters);
			} else {
			newLetters.push(letters);
			}
		}
});
var newSentence = newLetters.join("");
alert(newSentence);
});
