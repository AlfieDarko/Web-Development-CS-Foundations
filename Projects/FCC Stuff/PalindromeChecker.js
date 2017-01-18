//Return true if string is a palindrom
// palindrome is word or sentence spelled same way reversed.

//ignore all non alphanumeric characters.
//make everything lowercase.

//take string.
//store as variable 
//take copy 

//take string.
//store as var
//remove all non alphanumeric characters.
//change to lowercase
//reverse
//if reversed string == original string
//return true
//if not  return false



function palindrome(str) {
  // Good luck!
  var strReversed = str.replace(/[^A-Za-z0-9]/gi, "");
  var lowercase = strReversed.toLowerCase();
  
  function reverseString(lowercase){
    var result2 = lowercase.split("").reverse().join("");
  return result2;
  }

  
  if (reverseString(lowercase) === lowercase) {
    return true;
  } else {
    return false;
  }
  
}



palindrome("0_0 (: /-\ :) 0-0");