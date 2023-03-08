//Extract the last four characters from the string below;
//"extravaganza"
let text ="extravaganza"
let firstfour = text.slice(8,12)
console.log(firstfour)

//Insert the following string at the fourth index of the below variable:
//"eat"
//const food = "The quick fox jumped over the lazy dog"
"eat"
const food = "The quick fox jumped over the lazy dog" 
var stri = "The quick fox jumped over the lazy dog"
var ch = "eat"
var index = [4]
stri = stri.substring(0,index) + ch + stri.substring(index,stri.length)
console.log(stri)
//Count how many times the following string appears in the string variable:
//1. "the"
//2."brown"
//const story= "The quick brown fox jumps over the lazy dog"

// program to check the number of occurrence of a character
const story ="The quick brown fox jumped on the lazy dog"
const letter = (story.match(/the/g)||[]).length;
const word=(story.match(/brown/g)||[]).length;
console.log(letter);
console.log(word);
//Using JavaScript, find the following words from the following strings:
//1. "are"
//const string1 = "The pupils are reading in the library";
//2. "sitting"
//const string2 = "The child was sitting on the table before it fell"
const huge="wonderful"
const huger=huge.toUpperCase()
console.log(huger)
const less="amazing"
const lesser=less.toLowerCase()
console.assert(lesser)
const tiny="BEneath"
const tiner=tiny.toLowerCase()
console.log(tiner)
const title="A wonderful world"
const title2=title.toLocaleUpperCase()
console.log(title2)