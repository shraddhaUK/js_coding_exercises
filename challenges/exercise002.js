function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === 'Manchester' ? true:false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const buscapacity =40;
  let noOfbuses =Math.ceil(people/buscapacity)
  return noOfbuses;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let count=0;
  arr.find(element => element === 'sheep' ? console.log(count++) : console.log(count));
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  const address= person.address;
  console.log(address); 
  const flag= address.postCode.charAt(0) === 'M' && address.city ==='Manchester' ?true:false;
  return flag;
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
