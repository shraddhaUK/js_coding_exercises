function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
 return nums.map(num=> Math.pow(num, 2))
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  var arr =words.map((item,index) =>
  index === 0 ? item.toLowerCase() : item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
  )
  return arr.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var arr =people.map(element => element.subjects.length === 0 ? 0 :  element.subjects.length )
  return arr.reduce((a,b) => a + b, 0);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  var arr =menu.map(item => item.ingredients.includes(ingredient) ? true:false)
  return arr.includes(true) ? true:false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
 const arr =arr1.map(item => arr2.includes(item) ? item : '')
 const filtered= arr.filter(Boolean).sort()
 const sorted =filtered.sort()

 const unique =new Set(sorted);
 return [...unique]
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
