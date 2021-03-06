// experimental conditions
//     str += str
//     str += num 
//     num += str 
//     num += num


// pass all tests without using "+=" in your blocks

debugger;

let str_1 = "1";
let str_str;
{ // str_1 += "1";
  let step_1 = str_1 + "1";
  str_str = step_1; 
};
let actual = "1";
actual += "1";
console.assert(str_str === actual, "fail: str_str");

debugger;

str_1 = "1";
let str_num;
{ // str_1 += 1;
  let Step_1 = String(1);
  str_num = str_1 + Step_1;
};
actual = "1";
actual += 1;
console.assert(str_num === actual, "fail: str_num");

debugger;

let num_1 = 1;
let num_str;
{ // str_1 += "1";
 let Step_1 =  String(num_1)
 num_str = Step_1 + "1";
};
actual = 1;
actual += "1";
console.assert(num_str === actual, "fail: num_str");


debugger;

num_1 = 1;
let num_num;
{ // str_1 += 1;
  num_num = num_1 + 1;
};
actual = 1;
actual += 1;
console.assert(num_num === actual, "fail: num_num");
