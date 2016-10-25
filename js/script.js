var sentence = "The quick red fox jumped over the lazy brown dog.";
var letters = new Array();
var newLetters = new Array();
var newSentence = new Array();

$(document).ready(function() {

var letters = sentence.split("");
for (var i = 0; i < letters.length; i++) {
	if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u")	{
	letters[i] = "-"
	newLetters.push(letters[i]);
	} else {
	newLetters.push(letters[i]);
	}
}
var newSentence = newLetters.join("");
alert(newSentence);
});
