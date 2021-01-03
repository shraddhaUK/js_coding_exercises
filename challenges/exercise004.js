function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  else
  return nums.map(num => num < 1 ? num : '').filter(Boolean);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  else
  return names.map(name => name.startsWith(char) ? name : '').filter(Boolean);
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  else
  return words.map(word => word.startsWith('to ') ? word : '').filter(Boolean);
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  else
  return nums.map(num => Number.isInteger(num) ? num : '').filter(Boolean);
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
  else
  return sentences.map(sentence => sentence.toLowerCase().includes(str.toLowerCase()) ? sentence : '').filter(Boolean)
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
