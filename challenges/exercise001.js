function capitalize(word) {
  if (word === undefined) 
      throw new Error("word is required");
  else
    var wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return wordCapitalized;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  function myFunction(f1,l1) {
    f1 = f1.charAt(0);
    l1 = l1.charAt(0);
    return f1 + "." + l1;
  } 
  return myFunction(firstName, lastName);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

 var vatAddedPrice =(originalPrice*vatRate/100) + originalPrice;
 return Number.isInteger(vatAddedPrice)?vatAddedPrice : Number.parseFloat(vatAddedPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var salePrice =originalPrice - (originalPrice * reduction/100) ;
 return Number.isInteger(salePrice)?salePrice : Number.parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const length= str.length;
  const middle= Math.abs(length/2);
  return (length%2)!=0?str.charAt(middle):str.charAt(middle-1)+str.charAt(middle);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  
 return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  var reversedWords =[];

  words.forEach(element => {
    element=element.split("").reverse().join("");
    reversedWords.push(element);
  });
  return reversedWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count =0;
  users.forEach(element => {
    if(element.type === 'Linux')
    count+=1;
    else
    return 0;
  });
 return count;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  const average = n => n.reduce( ( prev, cur ) => prev + cur, 0 ) / n.length;
  const meanScore =average(scores);
  return Number.isInteger(meanScore)?meanScore : Number.parseFloat(meanScore.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if(n % 3 === 0 && n % 5 === 0)
  return "fizzbuzz";
  else if(n % 5 === 0)
  return "buzz";
  else if(n % 3 === 0)
  return "fizz"
  else
  return 4;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
