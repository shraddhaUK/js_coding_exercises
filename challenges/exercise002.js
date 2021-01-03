function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === 'Manchester';
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  else
  return Math.ceil(people/40);
}

function countSheep(arr) {
  let count=0;
  if (arr === undefined) throw new Error("arr is required");
  arr.forEach(element => element === 'sheep' ? count++ : count);
  return count;
}

function hasMPostCode(person) {
  const address= person.address;
  if (person === undefined) throw new Error("person is required");
  else
  return address.postCode.charAt(0) === 'M' && address.city ==='Manchester';
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
