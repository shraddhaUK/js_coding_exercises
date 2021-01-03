function capitalize(word) {

  if (word === undefined) throw new Error("word is required");
  else
  return  word.charAt(0).toUpperCase() + word.slice(1);
  
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  else
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  let vatAddedPrice =(originalPrice*vatRate/100) + originalPrice;
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  else
  return Number.isInteger(vatAddedPrice)?vatAddedPrice : Number.parseFloat(vatAddedPrice.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  let salePrice =originalPrice - (originalPrice * reduction/100) ;
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
 else
 return Number.isInteger(salePrice)?salePrice : Number.parseFloat(salePrice.toFixed(2));
}

function getMiddleCharacter(str) {
  const length= str.length;
  const middle= Math.abs(length/2);
  if (str === undefined) throw new Error("str is required");
  else
  return (length%2)!=0?str.charAt(middle):str.charAt(middle-1)+str.charAt(middle);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  else
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  else
  return words.map(element => (element.split("").reverse().join("")));
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
  const average = n => n.reduce( ( prev, cur ) => prev + cur, 0 ) / n.length;
  const meanScore =average(scores);
  if (scores === undefined) throw new Error("scores is required");
  else
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
