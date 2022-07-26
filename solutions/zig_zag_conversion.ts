/*
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:

  P      A        H       N
    A   P   L   S   I   I    G
      Y       I       R

  And then read line by line: "PAHNAPLSIIGYIR"

  Write the code that will take a string and make this conversion given a number of rows:

  string convert(string s, int numRows);
*/



function convertVer1(s: string, numRows: number): string {
  if (numRows === 1) return s;
  
  const rows: string[] = new Array(numRows).fill('');
  let currRow = 0;
  let goingUp = false;
  
  for (let i = 0; i < s.length; i++){
    rows[currRow] += s[i];
    goingUp ? currRow-- : currRow++;
    if (currRow === 0 || currRow === numRows - 1) goingUp = !goingUp;
  }
  return [...rows].join('');
};



function convertVer2(s: string, numRows: number): string {
  if (numRows === 1) return s;
  
  let result = '';
  const cycle = (numRows * 2) - 2;
  
  for (let i = 0; i < numRows; i++){   
    for (let j = 0; j + i < s.length; j += cycle){  
      result += s[j + i];     
      if (i !== 0 && i !== numRows - 1 && j + cycle - i < s.length){
         result += s[j + cycle - i]; 
      }
    }   
  }
  return result;
};

console.log(convertVer1('PAYPALISHIRING', 3)) //PAHNAPLSIIGYIR
console.log(convertVer2('PAYPALISHIRING', 3)) //PAHNAPLSIIGYIR

