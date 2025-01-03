// Variable
// Print the variable value to the console
let amount = 1000;
console.log("Your bill amount is Rs." + amount);
// ========================================================

const PI = 3.14; // Const variable initialize the value when declaration
console.log("The PI value is", PI);
// ========================================================

var weight = 44;
weight = 33;
console.log("The weight is", weight);
// --------------------------------------------------------
// Arithmetic operators -    +  -  *  **  /  %  ++  --

// (i) Addition  +
let add_num1 = 44;
let add_num2 = 23;
let add_sum = add_num1 + add_num2;
console.log("Addition :", add_sum);
console.log("Addition :", add_sum + 4);
// ========================================================

// (ii) Subtraction  -
let sub_num1 = 3;
let sub_num2 = 1;
let sub_sum = sub_num1 - sub_num2;
console.log("Subtraction :", sub_sum);
console.log("Subtraction :", sub_sum - 2);
// ========================================================

// (iii) Multiplication  *
let multi_num1 = 5;
let multi_num2 = 2;
let multi_sum = multi_num1 * multi_num2;
console.log("Multiplication :", multi_sum);
console.log("Multiplication :", multi_sum * 3);
// ========================================================

// (iv) Exponent  **
let expo_num1 = 3;
let expo_num2 = 2;
let expo_sum = expo_num1 ** expo_num2;
console.log("Exponent :", expo_sum);
console.log("Exponent :", expo_sum ** 4);
// ========================================================

// (v) Division /
let div_num1 = 7;
let div_num2 = 3;
let div_sum = div_num1 / div_num2;
console.log("Division :", div_sum);
console.log("Division :", div_sum / 6);
// ========================================================

// (vi) Modulo  %
let mod_num1 = 8;
let mod_num2 = 3;
let mod_sum = mod_num1 % mod_num2;
console.log("Modulo :", mod_sum);
console.log("Modulo :", mod_sum % 1);
// ========================================================

// (vii) Pre-increment  ++(variable)
// First increment the value and then assign the value to the variable ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let preincre_num = 4;
let preincre_sum = ++preincre_num;  // Here value 5 is assigned to the preincre_sum variable and also self assigned the value 5 to the preincre_num variable
console.log("Pre-increment :", preincre_sum);
console.log("Pre-increment :", preincre_num);
// ========================================================

// (viii) Pre-decrement  --(variable)
// First decrement the value and then assign the value to the variable ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let predecre_num = 8;
let predecre_sum = --predecre_num;  // Here value 7 is assigned to the preincre_sum variable and also self assigned the value 7 to the predecre_num variable
console.log("Pre-decrement :", predecre_sum);
console.log("Pre-decrement :", predecre_num);
// ========================================================

// (ix) Post-increment  (variable)++
// First assign the value to the variable and then increment the value ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let postincre_num = 3;
let postincre_sum = postincre_num++;    // Here value 3 is assigned to the postincre_sum variable and then increment the value to 4 and then self assigned the value 4 to the postincre_num variable
console.log("Post-increment :", postincre_sum);
console.log("Post-increment :", postincre_num);
// ========================================================

// (x) Post-decrement (variable)--
// First assign the value to the variable and then decrement the value ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let postdecre_num = 7;
let postdecre_sum = postdecre_num--;    // Here value 7 is assigned to the postdecre_sum variable and then decrement the value to 6 and then self assigned the value 6 to the postdecre_num variable
console.log("Post-decrement :", postdecre_sum);
console.log("Post-decrement :", postdecre_num);
// --------------------------------------------------------