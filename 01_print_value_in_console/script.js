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
let preincre_sum = ++preincre_num; // Here value 5 is assigned to the preincre_sum variable and also self assigned the value 5 to the preincre_num variable
console.log("Pre-increment :", preincre_sum);
console.log("Pre-increment :", preincre_num);
// ========================================================

// (viii) Pre-decrement  --(variable)
// First decrement the value and then assign the value to the variable ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let predecre_num = 8;
let predecre_sum = --predecre_num; // Here value 7 is assigned to the preincre_sum variable and also self assigned the value 7 to the predecre_num variable
console.log("Pre-decrement :", predecre_sum);
console.log("Pre-decrement :", predecre_num);
// ========================================================

// (ix) Post-increment  (variable)++
// First assign the value to the variable and then increment the value ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let postincre_num = 3;
let postincre_sum = postincre_num++; // Here value 3 is assigned to the postincre_sum variable and then increment the value to 4 and then self assigned the value 4 to the postincre_num variable
console.log("Post-increment :", postincre_sum);
console.log("Post-increment :", postincre_num);
// ========================================================

// (x) Post-decrement (variable)--
// First assign the value to the variable and then decrement the value ONLY ONCE ASSIGN THE VALUE TO THE VARIABLE
let postdecre_num = 7;
let postdecre_sum = postdecre_num--; // Here value 7 is assigned to the postdecre_sum variable and then decrement the value to 6 and then self assigned the value 6 to the postdecre_num variable
console.log("Post-decrement :", postdecre_sum);
console.log("Post-decrement :", postdecre_num);
// --------------------------------------------------------

// Shorthand assignment operators -  =  +=  -=  *=  /=  %=  **=
// (i) Assignment operator =
let assign_num = 8;
console.log("Assignment :", assign_num);
// ========================================================

// (ii) Shorthand addition +=
let short_add_num = 4;
short_add_num += 3; // Shorthand of short_add_num = short_add_num + 3;
console.log("Shorthand addition :", short_add_num);
// ========================================================

// (iii) Shorthand subtraction -=
let short_sub_num = 5;
short_sub_num -= 2; // Shorthand of short_sub_num = short_sub_num - 2;
console.log("Shorthand subtraction :", short_sub_num);
// ========================================================

// (iv) Shorthand multiplication *=
let short_multi_num = 8;
short_multi_num *= 3; // Shorthand of short_multi_num = short_multi_num * 3;
console.log("Shorthand multiplication :", short_multi_num);
// ========================================================

// (v) Shorthand division /=
let short_div_num = 6;
short_div_num /= 4; // Shorthand of short_div_num = short_div_num / 4;
console.log("Shorthand division :", short_div_num);
// ========================================================

// (vi) Shorthand modulo %=
let short_mod_num = 3;
short_mod_num %= 6; // Shorthand of short_mod_num = short_mod_num % 6;
console.log("Shorthand modulo :", short_mod_num);
// ========================================================

// (vii) Shorthand exponent **=
let short_expo_num = 7;
short_expo_num **= 3; // Shorthand of short_expo_num = short_expo_num ** 3;
console.log("Shorthand exponent :", short_expo_num);
// ========================================================
// --------------------------------------------------------

// Special cases
// (i) Infinity
let spec_infini_num = 5 / 0; // Here answer is infinity (∞) symbol stored inside the spec_infini_num variable
console.log("Infinity value : " + spec_infini_num);
// ========================================================

// (ii) -Infinity
let spec_min_infini_num = -3 / 0; // Here answer is minus infinity (-∞) symbol stored inide the spec_infini_num variable
console.log("-Infinity value : " + spec_min_infini_num);
// ========================================================

// (iii) NaN - Not a Number
let spec_no_num = 0 / 0; // Here answer is NaN (Not a Number) stored in a spec_no_num variable
console.log("Not a Number : " + spec_no_num);

console.log("Not a Number : " + Math.sqrt(-1)); // Here also same answer NaN (Not a Number)
// ========================================================

// (iv) Undefined
let spec_undefi; // Here spec_undefi variable implicitly assigned undefined
console.log("Undefined : " + spec_undefi);
// ========================================================

// (v) null
let spec_null = null; // Here we assigned explicitly null value to the spec_null variable
console.log("Null : " + spec_null);
// ========================================================

// (vi) typeof - This is used to find the data type of the variable
let spec_type_var1 = 3;
console.log("Number type : " + typeof spec_type_var1);

let spec_type_var2 = "Hai";
console.log("String type : " + typeof spec_type_var2);
// ========================================================
// --------------------------------------------------------

// Comparison operators -  ==  ===  !=  !==  >  <  >=  <=  ?:
// (i) Equality operator ==     This is used for compare the two values only not their data types for same
let equali_num = 6;
console.log("Equality : " + (equali_num == 6));
console.log("Equality : " + (equali_num == "6"));
// ========================================================

// (ii) Strict equality operator ===    This is used for compare the two values and their data types for same
let strict_equali_num = 4;
console.log("Strict equality : " + (strict_equali_num === 4));
console.log("Strict equality : " + (strict_equali_num === "4"));
// ========================================================

// (iii) Not equality operator !=   This is used for compare the two values for not same but don't compare their data types
let not_equali_num = 6;
console.log("Not equality : " + (not_equali_num != 9));
console.log("Not equality : " + (not_equali_num != "9"));
// ========================================================

// (iv) Strict not equality operator !==    This is used for compare the two values amd their data types for not same
let strict_not_equali_num = 4;
console.log("Strict not equality : " + (strict_not_equali_num !== 4));
console.log("Strict not equality : " + (strict_not_equali_num !== "4"));
// ========================================================

// (v) Greater than operator >  This is used for compare the two values by first element is greater than the second element
let great_num1 = 5,
  great_num2 = 2;
console.log("Greater than : " + (great_num1 > great_num2));
// ========================================================

// (vi) Less than operator <    This is used for compare the two values by first element is less than the second element
let less_num1 = 8,
  less_num2 = 13;
console.log("Less than : " + (less_num1 < less_num2));
// ========================================================

// (vii) Greater than or Equal to operator >=   This is used for compare the two values by first element is greater than or equal to second element
let great_or_equal_num1 = 5,
  great_or_equal_num2 = 5;
console.log(
  "Greater than or Equal to : " + (great_or_equal_num1 >= great_or_equal_num2)
);
// ========================================================

// (viii) Less than or Equal to operator <=     This is used for compare the two values by first element is less than or equal to second element
let less_or_equal_num1 = 3,
  less_or_equal_num2 = 3;
console.log(
  "Less than or Equal to : " + (less_or_equal_num1 <= less_or_equal_num2)
);
// --------------------------------------------------------

// Logical operator -  &&  ||  !        These operators work like take the first element's value and take the second element's value and then process the two values
// AND operator &&  This is used for compare the two conditions for both conditions true
let logic_and_op_num = 8;
console.log("Logical AND : " + (logic_and_op_num < 12 && logic_and_op_num > 5));
// ========================================================

// OR operator ||       This is used for compare the two conditions for any one condition true or both conditions true
let logic_or_op_num = 5;
console.log("Logical OR : " + (logic_or_op_num < 8 || logic_or_op_num > 17));
// ========================================================

// NOT operator !       This is used for change the boolean value true to false or false to true
let logic_not_op_num = 0;
console.log("Logical NOT : " + !logic_not_op_num);
// --------------------------------------------------------

// Bitwise operator -  &  |  ^  ~  <<  >>  >>>       These operators work like take the first element's bit value and second element's bit value and then compare the each bit value
// (i) Bitwise AND operator &       This is used for compare the two value's bit for both true and then give the answer
let bit_and_op_num1 = 5,
  bit_and_op_num2 = 6;
console.log("Bitwise AND :", bit_and_op_num1 & bit_and_op_num2);
// ========================================================

// (ii) Bitwise OR operator |       This is used for compare the two value's bit for any one or both true and then give the answer
let bit_or_op_num1 = 7,
  bit_or_op_num2 = 3;
console.log("Bitwise OR :", bit_or_op_num1 | bit_or_op_num2);
// ========================================================

// (iii) Bitwise NOT operator ~     This is used for change the value's bit to 0 to 1 and 1 to 0 and theh give the answer
let bit_not_op_num = 9;
console.log("Bitwise NOT :", ~bit_not_op_num);
// ========================================================

// (iv) Bitwise XOR operator ^     This is used for compare the two value's bit for only any one true and then give the answer
let bit_xor_op_num1 = 4,
  bit_xor_op_num2 = 6;
console.log("Bitwise XOR :", bit_xor_op_num1 ^ bit_xor_op_num2);
// ========================================================

// (v) Bitwise left shift operator <<   This is work like a move the each bit to left and right side last bit added 0
let bit_left_shift_op_num = 7;
console.log("Bitwise Left Shift :", bit_left_shift_op_num << 1);
// ========================================================

// (vi) Bitwise right shift operator >>     This is work like a move the each bit to right and left side last bit if already 1 then added 1 or already 0 then added 0. This behaviour's reason is don't change the sign (Positive or Negative)
let bit_right_shift_op_num = 4;
console.log("Bitwise Right Shift :", bit_right_shift_op_num >> 1);
// ========================================================

// (vii) Bitwise unsigned right shift operator >>>      This is work like a move the each bit to right and left side last bit added 0 here nothing consider that bit 0 or 1
let bit_unsign_right_shift_op_num = 8;
console.log(
  "Bitwise Unsigned Right Shift :",
  bit_unsign_right_shift_op_num >>> 1
);
// --------------------------------------------------------

// Geting user input by using prompt        This prompt always return the string datatype
/*let user_name = prompt("Enter the name ");
console.log("Your name is" + user_name);
console.log("Type is : " + typeof user_name);

// We can use type convertion method for change the datatype
let user_age = prompt("Enter the age ");
console.log("Your age is", Number(user_age));
console.log("Type is : " + typeof Number(user_age));*/
// --------------------------------------------------------

// DOM - Document Object Model
// We can access the HTML elements by using DOM
let hello_world = document.getElementById("h2_1");
hello_world.innerHTML = "Hey Hai";
// --------------------------------------------------------

// Maths obect
// Functions are must used with parentheses - ()
// (i) Round function			This is used for change the decimal point number to whole number by mathematical rules
console.log("Math.round :", Math.round(4.0));
console.log("Math.round :", Math.round(4.3));
console.log("Math.round :", Math.round(4.5));
console.log("Math.round :", Math.round(4.7));
// ========================================================

// (ii) Floor function			This is used for change the decimal point number to whole number by low value
console.log("Math.flour :", Math.floor(4.0));
console.log("Math.flour :", Math.floor(4.3));
console.log("Math.flour :", Math.floor(4.5));
console.log("Math.flour :", Math.floor(4.7));
// ========================================================

// (iii) Ceil function			This is used for change the decimal point number to whole number by high value
console.log("Math.ceil :", Math.ceil(4.0));
console.log("Math.ceil :", Math.ceil(4.3));
console.log("Math.ceil :", Math.ceil(4.6));
console.log("Math.ceil :", Math.ceil(4.7));
// ========================================================

// (iv) Sqrt function			This is used for find the square root of the given number
console.log("Math.sqrt :", Math.sqrt(83746));
// ========================================================

// (v) Abs function				This is used for change the negative number to positive number
console.log("Math.ahs :", Math.abs(-34));
console.log("Math.abs :", Math.abs(43));
// ========================================================

// (iv) Pow function			This is used for find the Exponential
console.log("Math.pow :", Math.pow(3, 44));
// ========================================================

// (v) Min function				This is used for find the minimum number in given numbers
console.log("Math.min :", Math.min(4, 2, 9, 0, 7));
// ========================================================

// (vi) Max function			This is used for find the maximum number in given numbers
console.log("Math.max :", Math.max(43, 3, 56, 45, 2));
// ========================================================

// (vii) Random function		This is used for generate the random number withing 0 to 1
console.log("Math.random :", Math.random());
console.log("Math.random :", Math.floor(Math.random() * 6) + 1);
// ========================================================

// These are called constant or property. This is use without parentheses - ()
// (viii) PI constant
console.log("Math.PI :", Math.PI);
// ========================================================

// (ix) E constant
console.log("Math.E :", Math.E);
// --------------------------------------------------------