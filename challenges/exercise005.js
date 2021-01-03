const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
 const i=nums.indexOf(n)
 return i<0 || i === nums.length-1 ? null : nums[i+1]
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  let countZeros =0;
  let countOnes =0;
const arr = [...str];
arr.forEach(item => item === '0' ? countZeros++ :   countOnes++)
return { 1 : countOnes, 0 : countZeros}
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
   return Number(n.toString().split('').reverse().join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
 const newArr = arrs.map(arr => arr.reduce((a, b) => a + b, 0))
 return newArr.reduce((a, b) => a + b, 0)
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let lastval = arr[arr.length-1];
  arr[arr.length - 1] = arr[0];
  if (arr.length > 1){
    arr[0] = lastval;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  const values =Object.values(haystack);
return values.some(item => item.toString().toLowerCase().search(searchTerm.toLowerCase()) <0 ?false :true) ;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
    str = str.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    let words = str.split(/\s+/);
    const wordcount = words.reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = 1;
        return acc;
      } 
      else {
        acc[val] = acc[val] + 1;
        return acc;
      }
    }, {});
    return wordcount;
  };


module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
