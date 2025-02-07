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

// String combine
// (i) Concate by operator  +
let string1 = "Hai ",
  string2 = "how ",
  string3 = "are ",
  string4 = "you ",
  string5 = "?";
console.log(
  "Combine the string using + operator : " +
    string1 +
    string2 +
    string3 +
    string4 +
    string5
);
// ========================================================

// (ii) Concate by method or function  concat()
let string6 = "Hai ",
  string7 = "how ",
  string8 = "are ",
  string9 = "you ",
  string10 = "?";
console.log(
  "Combine the string using concat method or function : " +
    string6.concat(string7, string8, string9, string10)
);
// --------------------------------------------------------

// String separation				This is not include the last index this stop before the given last index
// (i) Slice method
let string11 = "I think I am good.";
console.log(
  "Slice method used for separate the character from start by positive index : " +
    string11.slice(8, 18)
);
console.log(
  "Slice method used for separate the character from start by positive index : " +
    string11.slice(1)
);
console.log(
  "Slice method used for separate the character from end by using negative index : " +
    string11.slice(-16)
);
console.log(
  "Slice method used for separate the character from end by using negative index : " +
    string11.slice(-10, -6)
);
// ========================================================

// (ii) Substring method
let string12 = "How about you?";
console.log(
  "Substring method used for separate the character from start by positive index : " +
    string12.substring(4, 9)
);
console.log(
  "Substring method used for separate the character from start by positive index : " +
    string12.substring(0)
);
console.log(
  "Substring method used for separate the character : " +
    string12.substring(9, 2)
); // Here the indexs are swaped because of small index must placed first
// --------------------------------------------------------

// String replacement
let string13 = "Good to see you.";
console.log(
  "Replace method used for change the character or string from one to another : " +
    string13.replace("see", "meet")
);
// --------------------------------------------------------

// Change the case of the character
// (i) Touppercase method
let string14 = "Changed to upper-case";
console.log(
  "Touppercase method used for change the character from lower case to upper case : " +
    string14.toUpperCase()
);
// ========================================================

// (ii) Tolowercase method
let string15 = "CHANGED TO LOWER-CASE";
console.log(
  "Tolowercase method used for change the character from upper case to lower case : " +
    string15.toLowerCase()
);
// --------------------------------------------------------

// Find the length of the sentence
// length property
let string16 = "Find the length of the sentence.";
console.log(
  "Length property used for find the length of the senctence :",
  string16.length
);
// --------------------------------------------------------

// (i) Remove the extra space in sentence
// Trim method
let string17 = " Remove the extra space in the sentence. ";
console.log(
  "Trim method used for remove the space in the sentence : " + string17.trim()
);
// ========================================================

// (ii) Remove the extra space at the start of the sentence
// Trimstart method
let string18 = "  Remove the extra space at the start of the sentence.  ";
console.log(
  "Trimstart method used for remove the space at the starting position in sentence : " +
    string18.trimStart()
);
// ========================================================

// (iii) Remove the extra space at the end of the sentence
// Trimend method
let string19 = "  Remove the extra space at the end of the sentence.   ";
console.log(
  "Trimend method used for remove the space at the ending position in sentence : " +
    string19.trimEnd()
);
// --------------------------------------------------------

// (i) Add the character or number at the start of the string
let pad_num1 = 1000;
console.log(
  "Padstart method used for add the letter or number to the only string " +
    pad_num1.toString().padStart(6, "9")
);

let pad_num2 = "1000";
console.log(
  "Padstart method used for add the letter or number to the only string : " +
    pad_num2.padStart(6, 9)
);
// ========================================================

// (ii) Add the character or number at the end of the string
let pad_num3 = 3947;
console.log(
  "Padend method used for add the letter or number to the only string : " +
    pad_num3.toString().padEnd(6, "7")
);

let pad_num4 = "3947";
console.log(
  "Padend method used for add the letter or number to the only string : " +
    pad_num4.padEnd(6, 7)
);
// --------------------------------------------------------

// Search the character by index
// (i) [index]
let string20 = "Search the character.";
console.log("[index] used for search the character : " + string20[5]);
// ========================================================

// (ii) Charat(index)
console.log(
  "Charat method used for search the character : " + string20.charAt(9)
);
// ========================================================

// (iii) Charcodeat(index)
console.log(
  "Charatcode method used for find the ASCII code of the searched character :",
  string20.charCodeAt(10)
);
// --------------------------------------------------------

// Search the index by character or word
// (i) indexOf()
let string21 = "Here search the index by character";
console.log(
  "Indexof method used for search the index of given character from start :",
  string21.indexOf("i")
);
console.log(
  "Indexof method used for search the index of given word from start :",
  string21.indexOf("by")
);
// ========================================================

// (ii) lastindex()
console.log(
  "Lastindexof method used for search the index of given character from end :",
  string21.lastIndexOf("n")
);
console.log(
  "Lastindexof method used for search the index of given word from end :",
  string21.lastIndexOf("index")
);
// --------------------------------------------------------

// Search the index of the word
// Search()
let string22 = "Here search the index by word.";
console.log(
  "Search method used for search the index of the given word :",
  string22.search("the")
);
console.log(
  "Search method used for search the index of the given character :",
  string22.search("h")
);
// --------------------------------------------------------

// Check the string or letter in the sentence
// Includes()
let string23 = "Check if the letter or word available in sentence.";
console.log(
  "Includes method used for check the letter or word in the sentence : " +
    string23.includes("if")
);
console.log(
  "Includes method used for check the letter or word in the sentence : " +
    string23.includes("w")
);
// --------------------------------------------------------

// Check the word start by letter
// Startswith()
let string24 = "Check the starting letter.";
console.log(
  "Startwith method used for check the word by starting letter : " +
    string24.startsWith("l")
);
// --------------------------------------------------------

// Check the word end by letter
// Endswith()
let string25 = "Check the ending letter.";
console.log(
  "Endswith method used for check the word by ending letter : " +
    string25.endsWith("g")
);
// --------------------------------------------------------

// Template literals      This is used for write the string with symbols in easy way
// This is introduced in 2015 with ECMAScript6 or ES6
let string26 = "Hey hai I am",
  string27 = "about you.";
console.log(`Template literals : ${string26} going to think ${string27}`);
// ========================================================

// We can also write multiple line string
let string28 = `You're doing
home"s work.`;
console.log("Template literals : " + string28);
// --------------------------------------------------------

// Excersice for template literals
let templa_num1 = 5,
  templa_total = 95;
console.log(`"You have ${templa_num1} items in your cart.`);
console.log(`Your bill amount is $${templa_total}"`);
// --------------------------------------------------------

// Array
// 1 Dimensional array
let array1 = [23, 25, 45, 34];
console.log("Array :", array1[0]);
// ========================================================

// We can also add different type of the variables in array
let array2 = [34, "e", "34", `as`];
console.log("Array : " + array2[1]);
// ========================================================

// Access the last string's last letter
console.log(
  "Array : " + array2[array2.length - 1][array2[array2.length - 1].length - 1]
);
// ========================================================

// We can also include multi-level array inside the array
let array3 = [23, [34, 41], "How", 842];
console.log(`Array : ${array3[1][0]}`);
// --------------------------------------------------------

// 2 Dimensional array
let array4 = [
  [34, 98],
  [83, 3],
  [98, 5],
  [45, 0o4],
];
console.log(
  `Array : ${array4[array4.length - 1][array4[array4.length - 1].length - 1]}`
);
// --------------------------------------------------------

// Array methods
// Push					This is used for add the element to array at last and it will return the size of the new array
let array5 = ["a", "g", "e", "h"];
console.log(
  "Push method used for add the element to the last :",
  array5.push("j")
);
console.log("Array :", array5);
// ========================================================

// Pop					This is used for remove the element from array at last index and it will return the removed element
console.log(
  "Pop method used for remove the element from the last index : " + array5.pop()
);
console.log("Array :", array5);
// ========================================================

// Shift				This is used for remove the element from array at first index and then other elements moves the position and it will return the removed element
console.log(
  "Shift method used for remove the element from the first index : " +
    array5.shift()
);
console.log("Array :", array5);
// ========================================================

// Unshift				This is used for add the element to array at first index and then other elements moves the position and it will return the size of the new array
console.log(
  "Unshift method used for add the element to the first index :",
  array5.unshift("a")
);
console.log("Array :", array5);
// ========================================================

// Delete				This is used for delete the element from array at particular given index but that place will be remain empty value and it will return the boolean value
console.log(
  "Delete method used for delete the element from the particular given index :",
  delete array5[2]
);
console.log("Array :", array5);
// ========================================================

// Splice				This is used for remove the element from array at given index to number of elements by number and it will move the element position and it will return the removed value
console.log(
  "Splice method used for remove the element from the given index to given number of elements :",
  array5.splice(1, 1)
);
console.log("Array :", array5);

// We can also replace the value used by splice method
console.log(
  "Splice method also used for replace the element :",
  array5.splice(1, 1, "b")
);
console.log("Array :", array5);

// We can also add the element to the array without delete or remove the element used by splice method
console.log(
  "Splice method also used for add the element :",
  array5.splice(2, 0, "c")
);
console.log("Array :", array5);
// ========================================================

// Slice				This is used for get the particular element from the array or string and this will return the gotted value
// And this is not include the last given index's element
console.log(
  "Slice method used for show the element by user given index : ",
  array5.slice(1, 3)
);
console.log("Array :", array5);

// We can also get the element from last
console.log(
  "Slice method also used for show the element from last by user given index : ",
  array5.slice(-3, -1)
);
console.log("Array :", array5);
// ========================================================

// Reverse				This is used for reverse the array and this will return the reversed array
console.log("Before the reverse :", array5);
console.log("Reverse method used for reverse the array :", array5.reverse());
console.log("After the reverse :", array5);
// ========================================================

// Join					This is used for create the string from array and this will return the joined string
// But last element's after nothing will add
console.log(
  "Join method used for join the array elements in single word with comma (,) this is default : " +
    array5.join()
);
console.log("Array :", array5);

// Here we join the array elements like a normal string
console.log(
  "Join method also used for join the array elements in single word like a normal string : " +
    array5.join("")
);
console.log("Array :", array5);

// Here we join the array elements like a space between the letters
console.log(
  "Join method also oused for join the array elements in single word with space between the letters : " +
    array5.join(" ")
);
console.log("Array :", array5);
// ========================================================

// Split			This is used for create the array from string and it will return the array
// This is work based on user given parameter otherwise it will create the array with single element that element is user given string
// Here we use the single quote ('') symbol used as a parameter it will separate the letter based individual letter
let string29 = "goodbye";
console.log(
  "Split method used for create the array from given string :",
  string29.split("")
);
console.log("String : " + string29);

// Here we use the comma (,) symbol used as a parameter it will separate the letter based comma
let string30 = "3, 5, , r, i, j";
console.log(
  "Split method also used for create the array from given string :",
  string30.split(",")
);
console.log("String : " + string30);
// ========================================================

// Concat				This is used for combine the two arrays
// Here we combine the two arrays
let array6 = [4, 6, 2, 90, 45],
  array7 = [34, 98, 0, 34, 7];
console.log(
  "Concat method used for combine the two or more array into single array :",
  array6.concat(array7)
);

// Here we combine the more two arrays
let array8 = [34, 80, 32, 98, 0o7],
  array9 = [34, 0x9, 3, 93, 7],
  array10 = [3, 0, 5, 98, 6];
console.log(
  "Concat method used for combine the two or more array into single array :",
  array6.concat(array7, array8, array9, array10)
);
// ========================================================

// Spread			This is used for extract the elements and it will return the extracted elements
// It is also combine the strings or arrays
let array11 = [3, 9, 0, 3, 7],
  array12 = [34, 0, 78, 983, 439],
  array13 = [0e3, 87, 56, 73, 98];
console.log(
  "Spread method used for extract the elements from the packed one :",
  [...array11, ...array12, ...array13]
);
// --------------------------------------------------------