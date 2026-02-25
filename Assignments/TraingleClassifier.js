let a = 10;
let b = 20;
let c = 30;

if (a <= 0 || b <= 0 || c <= 0)
    console.log("Invalid Triangle");
else if (a + b < c || a + c < b || b + c < a)
    console.log("Not a Triangle");
else if (a === b && b === c && c === a)
    console.log("Equilateral Triangle");
else if (a === b || b === c || c === a)
    console.log("Isosceles Triangle");
else if (a !== b && b !== c && c !== a)
    console.log("Scalene Triangle");