

1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
var max = function(x, y) {
  if (x == y) {
    console.log("The same");
  }
  else if (x > y) {
    return x
  }
  else { return y }
};

var temp = max(5, 2)
console.log(temp)


2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
var maxOfThree = function(x, y, z) {
  if (x == y == z) {
    console.log("The same")
  }
  if ((x > y) && (x > z)) {
    return x
  };
  if ((y > x) && (y > z)) {
    return y
  }
  if ((z > x) && (z >y)) {
    return z
  }
};

var temp = maxOfThree(4, 1, 2)
console.log(temp)

var temp = maxOfThree(4, 5, 2)
console.log(temp)

var temp = maxOfThree(4, 1, 7)
console.log(temp);

3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelCheck = function(x) {
    if ((x == "a") || (x == "e") || (x == "i") || (x == "o") || (x == "u")) {
        return true
    }
    else { return false };
};

var temp = vowelCheck("e");
console.log(temp);

var temp = vowelCheck("f");
console.log(temp);

4 - Write a function translate() that will translate a text into "rövarspråket". (http://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket) That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

var vowelCheck = function(x) {
    if ((x == "a") || (x == "e") || (x == "i") || (x == "o") || (x == "u")) {
        return true
    }
    else { return false };
};


var translate = function(string) {
    var results = [];
    for (var i = 0; i < string.length; i++) {
        var letter = string[i];
        if (!vowelCheck(letter) && (letter !== " ")) {
            results.push(letter + "o" + letter);
        }
        else {
            results.push(letter);
        }
    }
    return results.join("");
};

var test = "this is fun";

console.log(translate(test));

5 - Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

var sum = function(x){
    var total = 0;
    for (var i = 0; i < x.length; i++) {
        total += x[i];
    }
    return total;
};

var multi = function(x) {
    var total = 1;
    for (var i = 0; i < x.length; i++) {
        total *= x[i];
    }
    return total;
};


var testArray = [4, 2, 5, 6];

console.log(sum(testArray));
console.log(multi(testArray));

6 - Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

var reverse = function(x) {
    var results = [];
    x.split("");
    for (var i = 0; i < x.length; i++) {
        results.unshift(x[i]);
    }
    return results.join("");
};

console.log(reverse("Hello There!"));

7 - Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.



8 - Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

var findLongestWord = function(arr){
    var result;
    var counter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length > counter) {
            counter = arr[i].length;
            result = arr[i];
        }
    }
    return result;
};

console.log(findLongestWord(["small", "longer", "longest"]));

9 - Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

var filterLongWords = function(arr, integer) {
    var results = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length > integer) {
            results.push(arr[i]);
        }
    }
    return results;
};

var test = ["12", "123", "1234", "12345"];
console.log(filterLongWords(test, 2));
console.log(filterLongWords(test, 3));

10 - Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


var charFrequency = function (string) {
    var results = {};
    for (var i = 0; i < string.length; i++) {
        results[string[i]] = results[string[i]] || 1;
    }
    return results;
};

var temp = "sdfwegwegewawaeewafdssdfawe";
console.log(charFrequency(temp));
