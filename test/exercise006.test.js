const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");
  
  describe("sumMultiples", () => {
   
    test("return the sum of any numbers which are a multiple of 3", () => {
        const arr=[3, 6, 9]
      expect(sumMultiples(arr)).toBe(18);
    });
  
    test("return the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([1,2,3,4,5,6,7,8,9])).toBe(23);
      });

    test("return the sum of any numbers which are a multiple of 5 ", () => {
      expect(sumMultiples([5, 10,15])).toBe(30);
    });
  
  });
  
  describe("isValidDNA", () => {
    test("receive a string containing only C, G, T or A return true", () => {
      expect(isValidDNA("GCTA")).toBe(true);
    }); 
  
    test("receive a string containing only C, G, T or A return true", () => {
      expect(isValidDNA("ATGC")).toBe(true);
    }); 
  
    test("receive a string containing no C, G, T or A return false", () => {
      expect(isValidDNA("DAZZ")).toBe(false);
    });  
  
  });
  
  describe("getComplementaryDNA", () => {
    test("string of ACTG would have a complementary DNA string of TGAC", () => {
      expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
  
    test("string of many ACTG mixed up returns correct complementary DNA pair", () => {
      expect(getComplementaryDNA("AATTCCGG")).toBe("TTAAGGCC");
    });  
  });
  describe("isItPrime", () => {
    test("return true depending on whether it is a prime number or not", () => {
    
      expect(isItPrime(2)).toBe(true);
      expect(isItPrime(7)).toBe(true);
      expect(isItPrime(11)).toBe(true);
      expect(isItPrime(67)).toBe(true);
    });
    test("return false depending on whether it is a prime number or not", () => {
        expect(isItPrime(4)).toBe(false);
      });
      test("return true depending on whether it is a prime number or not", () => {
        expect(isItPrime(71)).toBe(true);
      });
  });
  
  describe("createMatrix", () => {
    test("return an array of 3 arrays, each filled with Merry value", () => {
    const expected =       [
            ["Merry", "Merry", "Merry"],
            ["Merry", "Merry", "Merry"],
            ["Merry", "Merry", "Merry"]
          ]
       
     let results = createMatrix(3, "Merry");
     expect(results.toString()).toBe(expected.toString());  
    });

    test("return an array of 2 arrays, each filled with christmas value", () => {
          const expected =       [
            ["christmas", "christmas"],
            ["christmas", "christmas"]
           
          ]
          let results = createMatrix(2, "christmas");
          expect(results.toString()).toBe(expected.toString());  
    });
  
   
  });
  
  describe("areWeCovered", () => {
    test("The function should return true/false depending on whether there are enough staff scheduled for the given day", () => {
      const staff = [
         { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
         { name: "Pedro", rota: ["Saturday", "Sunday", "Friday", "Wednesday"] },
         { name: "Mike", rota: ["Tuesday", "Sunday"] },
         { name: "Matt", rota: ["Saturday", "Thursday"] },
         { name: "Ken", rota: ["Monday", "Sunday"] },
         { name: "Rodrik", rota: ["Saturday", "Sunday", "Tuesday"] },
         { name: "Michael", rota: ["Monday", "Sunday", "Friday", "Wednesday"] }
         ]
      expect(areWeCovered(staff, "Monday")).toBe(true);
      expect(areWeCovered(staff, "Tuesday")).toBe(true);
      expect(areWeCovered(staff, "Wednesday")).toBe(false);
      expect(areWeCovered(staff, "Thursday")).toBe(false);
    });
  
  });
  
  

  