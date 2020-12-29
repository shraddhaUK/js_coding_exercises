const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
  } = require("../challenges/exercise007");
  
  describe("sumDigits", () => {
   
    test("return the sum of all digit of given number", () => {   
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(479)).toBe(20);
      expect(sumDigits(1234)).toBe(10);
    });
  });
  
  describe("createRange", () => {
    
    test("creates a range of numbers as an array where step is the gap between numbers in the range and both the start and the end numbers are inclusive.", () => {
        expect(createRange(0, 10, 5)).toEqual([0, 5, 10]);
    });

    test("creates a range of numbers as an array where step is the gap between numbers in the range and both the start and the end numbers are inclusive.", () => {
        expect(createRange(3, 11,2)).toEqual([3, 5, 7, 9, 11]);
    });

    test("creates a range of numbers as an array where there is no step ", () => {
      expect(createRange(1, 10)).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });

});
  
  describe("getScreentimeAlertList", () => {
    const  input = [
      {
       username: "beth_1234",
       name: "Beth Smith",
        screenTime: [
                     { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                     { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                    ]
     },
       {
       username: "sam_j_1989",
       name: "Sam Jones",
        screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                     { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                   ]
     },]
     test("The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
      expect(getScreentimeAlertList(input,"2019-05-04")).toStrictEqual(["beth_1234"]);
    });
    const  input1 = [
        {
         username: "beth_1234",
         name: "Beth Smith",
          screenTime: [
                       { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                       { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                      { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                      { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                      ]
       },
         {
         username: "sam_j_1989",
         name: "Sam Jones",
          screenTime: [
                      { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                       { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                      { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                     ]
       },{
        username: "sui_l_1990",
        name: "Sui Lam",
         screenTime: [
                     { date: "2019-05-02", usage: { mapMyRun: 20, whatsApp: 30, facebook: 40, safari: 20} },
                      { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                    ]
      },
      ]
  
  
      test("The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
        expect(getScreentimeAlertList(input1,"2019-05-02")).toStrictEqual(["beth_1234","sui_l_1990"]);
      }); 
  });
  
  
  describe("hexToRGB", () => {
    test("hexadec color code in the format #FF1133 rgb(255,17,51)", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    });
    test("hexadec color code in the format #0000FF rgb", () => {
        expect(hexToRGB("#FF0055")).toEqual("rgb(255,0,85)");
    });
    test("hexadec color code in the format #CCCCCC rgb", () => {
        expect(hexToRGB("#AAAAAA")).toEqual("rgb(170,170,170)");
    });
});
  
describe("findWinner", () => {
  const board1 = [
      ["X", "0", null],
      ["X", null, "0"],
      ["X", null, "0"]
  ];
  test("should return X if player X has won", () => {
      expect(findWinner(board1)).toEqual("X");   
  })

  const board2 = [
      [null, "X", "0"],
      ["X", null, "0"],
      ["X", null, "0"]
  ];
  test("should return 0 if player 0 has won", () => {
      expect(findWinner(board2)).toEqual("0");   
  });

  const board3 = [
      [null, "0", "0"],
      ["X", "0", null],
      ["X", null, "X"]
  ];
  test("should return null if no player has won", () => {
      expect(findWinner(board3)).toEqual(null);   
  });

  const board5 = [
      ["X", "0", null],
      ["0", "X", "0"],
      [null, null, "X"]
  ];
  test("should return X if player X has won diagonally", () => {
      expect(findWinner(board5)).toEqual("X");   
  })
});
  
  

  