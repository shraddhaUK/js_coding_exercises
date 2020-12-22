function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  const arr =nums.map(num => num < 1 ? num : '')
  const filter = arr.filter(Boolean)
 return filter;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const arr = names.map(name => name.startsWith(char) ? name : '')
  return arr.filter(Boolean);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const arr = words.map(word => word.startsWith('to ') ? word : '')
  return arr.filter(Boolean);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  const onlyInteger = nums.map(num => Number.isInteger(num) ? num : '')
  return onlyInteger.filter(Boolean);
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  return users.map(user => user.data.city.displayName)
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
 return nums.map(num => Number.parseFloat((Math.sqrt(num)).toFixed(2)))
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const arr= sentences.map(sentence => sentence.toLowerCase().includes(str.toLowerCase()) ? sentence : '')
  return arr.filter(Boolean)
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  return triangles.map(triangle => Math.max(...triangle))
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
