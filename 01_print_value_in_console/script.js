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

// Maths object
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

// Exersice
let array14 = [5, 8, 10, 7, 9, 11];

// Replace 7, 9, 11 with 17, 19, 111
console.log("Before replace exercise :", array14);
console.log("Replace exercise :", array14.splice(3, 3, 17, 19, 111));
console.log("After replaced exercise :", array14);
// ========================================================

// Insert 100 in the beginning
console.log("Before insert at beginning :", array14);
console.log("Insert exercise :", array14.unshift(100));
console.log("After inserted at beginning :", array14);
// ========================================================

// Insert 200 in last but one position
console.log("Before insert last before one position :", array14);
console.log("Insert exercise :", array14.splice(6, 0, 200));
console.log("After inserted last before one position :", array14);
// ========================================================

// Add 1000 at the end
console.log("Before added at the end :", array14);
console.log("Add exercise :", array14.push(1000));
console.log("After added at the end", array14);
// ========================================================

// Insert 0 in the middle
console.log("Before insert in the middle :", array14);
console.log(
  "Insert exercise :",
  array14.splice(Math.floor(array14.length / 2), 0, 0)
);
console.log("After inserted in the middle :", array14);
// --------------------------------------------------------

// If..else condition           This is used for check the condition true or false if true then run the given code otherwise skip the code
if (22 == 22) {
  // Here the condition is true
  console.log("This is true");
} else {
  console.log("This is false");
}
// ========================================================

// Here the condition is false
if (23 == 3) {
  console.log("This is true");
} else {
  console.log("This is false");
}
// --------------------------------------------------------

// Object
let object1 = {
  product_name: "car",
  product_model: 2022,
  product_price: 20000,
  product_color: "blue",
  product_warranty: "2 years",
  object1_1: {
    product_name1: "cycle",
    product_model1: 2013,
    product_color1: "yellow",
    product_price1: 2100,
  },
  object1_arr1: ["cell", 2023, "brown"],
  object1_func1: function () {
    console.log("Hey this is object1's function1.");
  },
  object1_func2() {
    console.log("Hey this is object1's function2.");
  },
};
console.log("Object :", object1);
// We can access individual properties using dot notation
console.log("Object's property : " + object1.product_name);
// ========================================================

// We can also change the individual property
object1.product_name = "bus";
console.log("Object's property : " + object1.product_name);
// ========================================================

// We can also add new property using dot notation
object1.product_quantity = 10;
console.log("Object :", object1);
// ========================================================

// We can use square bracket notation for access the individual property
console.log("Object's property :" + object1["product_color"]);
// ========================================================

// We can also use square bracket notation for change the individual value
object1["product_color"] = "black";
console.log("Object's property : " + object1["product_color"]);
// ========================================================

// We can use variable to assign or access the individual property but this is only use for square bracket notation
let object1_var1 = "product_price"; // We can name that variable whatever we want
object1[object1_var1] = 2700000;
console.log("Object's property :", object1[object1_var1]);
// ========================================================

// We can access the object inside the object
console.log("Object's object :", object1.object1_1);
// ========================================================

// We can also access the object inside object's property
console.log(
  "Object inside object's property :",
  object1.object1_1.product_price1
);
// ========================================================

// We can use array in object
console.log("Array in object : ", object1.object1_arr1);
console.log("Object :", object1);
// ========================================================

// We can access the function that is inside the function
object1.object1_func1();
object1.object1_func2();
// ========================================================

// Another way of create the object
let object2 = new Object();
object2.product_name = "train";
object2.product_model = 2000;
object2.product_price = 100000000;
object2.product_color = "green";
object2.product_warranty = "22 years";
console.log("Object :", object2);
// We can access individual properties using dot notation
console.log("Object's property :", object2.product_model);
// ========================================================

// We can also change the individual property
object2.product_model = 2005;
console.log("Object's property :", object2.product_model);
// ========================================================

// We can also add the new property
object2.product_quantity = 4;
console.log("Object :", object2);
// ========================================================

// We can use square bracket notation for access the individual property
console.log("Object's property : " + object2["product_quantity"]);
// ========================================================

// We can also use square bracket notation for change the individual value
object2["product_quantity"] = 7;
console.log("Object's property :", object2["product_quantity"]);
// ========================================================

// We can use variable to assign or access the individual property but this is only use for square bracket notation
let object2_var1 = "product_warranty"; // We can name that variable whatever we want
object2[object2_var1] = "28 years";
console.log("Object's property : " + object2[object2_var1]);
// ========================================================

// We can create the another object inside the object
object2.object2_1 = new Object();
object2.object2_1.product_name1 = "flight";
object2.object2_1.product_model1 = 2015;
object2.object2_1.product_color1 = "white";
console.log("Object :", object2);
console.log("Object inside object :", object2.object2_1);
// ========================================================

// We can add array inside the object
object2.object2_arr1 = ["bike", 2024, "maron"];
console.log("Object :", object2);
console.log("Array inside object :", object2.object2_arr1);
// ========================================================

// We can write function inside the object
object2.object2_func1 = function () {
  console.log("Hey this is object2's function1.");
};

object2.object2_func2 = function () {
  console.log("Hey this is object2's function2.");
};
object2.object2_func1();
object2.object2_func2();
// --------------------------------------------------------

// Loops
// (i) For loop						// In this loop initialization, condition and updation
// Run only condition is true
for (let for_loop_1 = 1; for_loop_1 < 6; for_loop_1++) {
  console.log("for_loop_1 :", for_loop_1);
}
// ========================================================

// (ii) While loop					// In this loop initialization before the loop block starts, condition in first line of the loop and then updation inside the loop block
// Run only condition is true
let while_loop_1 = 1;
while (while_loop_1 < 6) {
  console.log("while_loop_1 :", while_loop_1);
  while_loop_1++;
}
// ========================================================

// (iii) Do-while loop				// In this loop initialization before the loop block starts, updation is inside the loop block and then condition after outside the loop block
// Run definitely once condition also false
let do_while_loop_1 = 1;
do {
  console.log("do_while_loop_1 :", do_while_loop_1);
  do_while_loop_1++;
} while (do_while_loop_1 < 6);
// --------------------------------------------------------

// Break
// This loop is run until user enter number
while (true) {
  let break_1 = Number(prompt("Enter the number :"));
  if (!isNaN(break_1)) {
    console.log("You entered :", break_1);
    break;
  }
}
// --------------------------------------------------------

// Continue
// This loop skip the particular execution
let continue_1 = 0;
while (true) {
  continue_1++;
  if (continue_1 === 3) {
    continue;
  }
  console.log("continue_1 :", continue_1);
  if (continue_1 === 5) {
    break;
  }
}
// --------------------------------------------------------

// (iv) For-of loop				// This loop is used for array type datas
let for_of_1 = ["hey", "hai", "how", "are", "you", "?"],
  for_of_count_1 = 1;
for (let for_of_2 of for_of_1) {
  console.log(for_of_count_1 + ".for_of_1 : " + for_of_2);
  for_of_count_1++;
}
// ========================================================

// (v) For-in loop				// This loop is used for object type datas
let for_in_1 = {
    user_id: 34,
    user_name: "Sara",
    user_contact: 6302740270,
    user_email: "sarasweety55@gmail.com",
    user_job_role: "Developer",
    user_experience: "3 years",
  },
  for_in_count_1 = 1;
for (let for_in_property_1 in for_in_1) {
  console.log(for_in_count_1 + ".for_in_1_property : " + for_in_property_1);
  for_in_count_1++;
}

let for_in_count_2 = 1;
for (let for_in_property_2 in for_in_1) {
  console.log(
    for_in_count_2 +
      ".for_in_1_property's value : " +
      for_in_1[for_in_property_2]
  );
  for_in_count_2++;
}
// --------------------------------------------------------

// Function
// (i) Function declaration	 -  Hoisting working only with this function declaration type
// Hoisting means	-	We can use or call this function wherever in this file. Before or after the function code no issues or errors and also function work well.
// Javascript's interpret moves this function to the top of the file.

// function add (This area called parameter or argument)
function add(decla_num1, decla_num2) {
  return decla_num1 + decla_num2;
}

// Call the function
// add(This area called argument or parameter)
console.log("Fuction declaration :", add(23, 9));

// If we use only function's name then it will return the function's code
console.log("Only function name : " + add);

// We can call the function before the function code
console.log(
  "Function call before the function code : " + before_func_call("vijay")
);

function before_func_call(before_call_name) {
  return "Hai you called me before my instruction " + before_call_name;
}

// If we check the function's type that is also function
console.log("Function's type is : " + typeof before_func_call);

// If we create the function without default values to the argument or parameter for function even use the parameter it will assigned the variable value as undefined
function without_default_parameter(not_default_user_name) {
  console.log(
    "This is not default parameter's user name : " + not_default_user_name
  );
}

// Call the function without argument or parameter
without_default_parameter();

// We can create the function with default values to the argument or parameter for function then the function use that default value if user not give the parameter
function with_default_parameter(default_user_name = "vijay") {
  console.log(
    "This is the default parameter's user name : " + default_user_name
  );
}

// Call the function without argument or parameter
with_default_parameter();

// Factorial function
function factorial(facto_num) {
  if (facto_num === 1) {
    return 1;
  } else {
    return facto_num * factorial(facto_num - 1);
  }
}

// Call the factorial function
console.log("Factorial function :", factorial(5));
// ========================================================

// (ii) Function expression		- Hoisting doesn't work for this function type. So, we can only call this function after this function code
const FUNC_EXPRE_MULTIPLE = function (func_expre_num1, func_expre_num2) {
  return func_expre_num1 * func_expre_num2;
};

// Call the expression function
console.log("Function expression :", FUNC_EXPRE_MULTIPLE(5, 8));
// ========================================================

// (iii) Arrow function			- Hoisting doesn't work for this function type. So, we can only call this function after thid function code
// {len * brea * heigh}		- We can write code without return statement if the code only in single line
const FUNC_ARROW_FIND_RECT_VOLUME = (len, brea, heigh) => {
  return len * brea * heigh;
};

// Call the arrow function
console.log("Arrow function :", FUNC_ARROW_FIND_RECT_VOLUME(4, 3, 9));

// Sum the array elements and print by using arrow function
const ARROW_ARR = [34, 98, 874, 20, 5];
// const FUNC_ARROW_SUM_ARR_ELEMENT = arr_arro		- We can use the function argument or parameter without parentheses if the argument or parameter is single and also if no parameter or argument for the function then we must give the parentheses
const FUNC_ARROW_SUM_ARR_ELEMENT = (arr_arro) => {
  let arr_ele_sum = 0;
  for (let arr_element of arr_arro) {
    arr_ele_sum = arr_ele_sum + arr_element;
  }
  return arr_ele_sum;
};

// Call the sum of array element
console.log("Sum of array element :", FUNC_ARROW_SUM_ARR_ELEMENT(ARROW_ARR));

// Find the area of circle using arrow function
const FUNC_ARROW_FIND_AREA_OF_CIRCLE = (circle_radius) =>
  Math.PI * circle_radius ** 2;

// Call the area of circle function
console.log(
  "Area of circle :",
  Number(FUNC_ARROW_FIND_AREA_OF_CIRCLE(3).toFixed(3))
);

// We can pass dynamic arguments or parameters to function and get the all parameters or arguments using spread(...) operator
const DYNAMIC_ARGUMENT_1 = function (...dyna_arr_1) {
  let dyna_arr_1_ele_count = 0;
  for (let dyna_arr_1_ele of dyna_arr_1) {
    dyna_arr_1_ele_count++;
    console.log(
      `Dynamic array element 1 ${dyna_arr_1_ele_count}.`,
      dyna_arr_1_ele
    );
  }
};

// Call the DYNAMIC_ARGUMENT_1
DYNAMIC_ARGUMENT_1(4, 65, 0x9, 7, 1);

// Here we get the multiple arguments or parameters and store the first element into the dyna_arr_2_first_ele
const DYNAMIC_ARGUMENT_2 = function (dyna_arr_2_first_ele, ...dyna_arr_2) {
  console.log(
    "Dynamic array element 2's first element :",
    dyna_arr_2_first_ele
  );
  for (let dyna_arr_2_ele of dyna_arr_2) {
    console.log(
      "Dynamic array element 2's element (without first element) :",
      dyna_arr_2_ele
    );
  }
};

// Call the DYNAMIC_ARGUMENT_2
DYNAMIC_ARGUMENT_2(23, 98, 67, 6, 2);

// We can get the multiple arguments or parameters without spread(...) operator
// Here the values are stored in arguments object
const DYNAMIC_ARGUMENT_3 = function () {
  for (let dyna_arr_3_ele of arguments) {
    console.log(
      "Dynamic element 3's without parameter or argument :",
      dyna_arr_3_ele
    );
  }
};

// Call the DYNAMIC_ARGUMENT_3
DYNAMIC_ARGUMENT_3(32, 9, 12, "hey", "u");
// ========================================================

// (iv) Generator function		- This function is work like an iterator it return a value like an object
function* count_gener() {
  let genra_count = 1;
  while (true) {
    yield genra_count++;
  }
}

// Call the alphabet_gener function
const FUNC_GENER_COUNT = count_gener();
console.log("Generator function count :", FUNC_GENER_COUNT.next().value);
console.log("Generator function count :", FUNC_GENER_COUNT.next().value);
console.log("Generator function count :", FUNC_GENER_COUNT.next().value);
console.log("Generator function count :", FUNC_GENER_COUNT.next().value);

// Alphabet generate using generator function
function* alpha_gener() {
  let genera_alpha = "a".charCodeAt(0);
  while (genera_alpha <= "z".charCodeAt(0)) {
    yield String.fromCharCode(genera_alpha++);
  }
}

// Call the alpha_genr function
const GEN_ALPHA = alpha_gener();
console.log("Generator function alphabet : " + GEN_ALPHA.next().value);
console.log("Generator function alphabet : " + GEN_ALPHA.next().value);
console.log("Generator function alphabet : " + GEN_ALPHA.next().value);
console.log("Generator function alphabet : " + GEN_ALPHA.next().value);
console.log("Generator function alphabet : " + GEN_ALPHA.next().value);
// --------------------------------------------------------

// Callback function
// This callback means pass the function as an argument or parameter to function
// Main callback function
function callback_func_1(usr_message) {
  console.log(usr_message);
}

// Here get the Main callback function name and user message
function callback_func_2(call_func, usr_mess) {
  call_func(usr_mess);
}

// Here send the function name and message as an argument or parameter
function callback_func_3() {
  callback_func_2(
    callback_func_1,
    "Hey, this callback_func_1 function called from callback_func_3 function used by callback_func_2 function.\n"
  );
}

// Call the callback_func_3
callback_func_3();
// --------------------------------------------------------

// Foreach method
// This method get the element from the array and send the element one by one to function inside the foreach object's parameter or argument but this is not create new array implicitly
const FORE_ARR_1 = ["Hey,", "this", "is", "forEach", "method."];

// Send the FORE_ARR_1 elements to the for_ea_func function using by forEach method
FORE_ARR_1.forEach(for_ea_func);

// Print the array elements sent from forEach method
function for_ea_func(for_ea_ele_1) {
  console.log("Array element_1 from forEach : " + for_ea_ele_1);
}

// We can also write the code inside the forEach's argument or parameter
const FORE_ARR_2 = ["Hi", "this", "is", "also", "forEach", "method."];

// Print the array elements using forEach method by arrow function
FORE_ARR_2.forEach((for_ea_ele_2) =>
  console.log("Array element_2 from forEach : " + for_ea_ele_2)
);

// We can also change the value inside the array using forEach method
// In forEach method we can send upto 3 arguments or parameters that first one is array element, second one is index of the array element and third one is array
const FORE_ARR_3 = ["Hey", "this", "is", "smaller", "case."];

// Print the array elements before change the array elements
FORE_ARR_3.forEach((for_ea_ele_3) =>
  console.log("Array element_3 from forEach before change : " + for_ea_ele_3)
);

// Change the array elements
FORE_ARR_3.forEach((for_ea_ele_4, arr_elem_index, forea_arr_1) => {
  forea_arr_1[arr_elem_index] = for_ea_ele_4.toUpperCase();
});

// Print the array elements after changed the array elements
FORE_ARR_3.forEach((for_ea_ele_5) =>
  console.log("Array element_3 from forEach after change : " + for_ea_ele_5)
);
// --------------------------------------------------------

// Map method
// This method is work like a For Each method but this is create the new array and in this method we use method the array variable for store the newly created array by map method
const MAP_ARR_1 = [3, 4, 43, 9, 4];

console.log("Before the map method using original array1 :", MAP_ARR_1);

// We can use arrow function for map method
const MAP_ARR_1_1 = MAP_ARR_1.map((map_arr_1_ele) => map_arr_1_ele + 1);
console.log("After the map method created new array1 :", MAP_ARR_1_1);

// We can also use the function for the map method
const MAP_ARR_2 = [23, 97, 43, 87, 98, 67];

console.log("Before the map method using original array2 :", MAP_ARR_2);

const MAP_ARR_2_CHANGE_FUNC = function (map_arr_2_ele) {
  if (map_arr_2_ele < 100) {
    while (1) {
      map_arr_2_ele++;
      if (map_arr_2_ele === 100) {
        break;
      }
    }
  } else if (map_arr_2_ele > 100) {
    while (1) {
      map_arr_2_ele--;
      if (map_arr_2_ele === 100) {
        break;
      }
    }
  }
  return map_arr_2_ele;
};

const MAP_ARR_2_1 = MAP_ARR_2.map(MAP_ARR_2_CHANGE_FUNC);

console.log("After the map method using original array2 :", MAP_ARR_2_1);
// --------------------------------------------------------

// Filter method
// This method work like a map method but this method work based on particular condition
const FILTER_ARR_1 = [23, 78, 24, 87, 89];

console.log("Before the filter method used on original array1 :", FILTER_ARR_1);

const FILTER_ARR_1_1 = FILTER_ARR_1.filter(
  (filter_arr_1_ele) =>
    // if(filter_arr_1_ele > 50) {
    //   return filter_arr_1_ele;
    // }
    filter_arr_1_ele > 50
);

console.log(
  "After the filter method used on original array1 and remove the less than 50 :",
  FILTER_ARR_1_1
);

// We can use the function for the filter method
const FILTER_ARR_2 = [298, 3487, 239, 9238, 39, 676, 768];

console.log("Before the filter method used on original array2 :", FILTER_ARR_2);

const FILTER_ARR_2_1 = FILTER_ARR_2.filter(FILTER_ARR_2_CHANGE_FUNC);

function FILTER_ARR_2_CHANGE_FUNC(filter_arr_2_ele) {
  return filter_arr_2_ele < 1000;
}

console.log(
  "After the filter method used on original array2 and removed the greater than 1000 :",
  FILTER_ARR_2_1
);
// --------------------------------------------------------

// Reduce method
// This method is used to shrink the multiple values to single value
// This method generate the single value from multiple value
// We should give the initial value to the return value after the callback function
const REDUCE_ARR_1 = [34, 24, 98, 87, 45];

console.log("Before the reduce method used on original array1 :", REDUCE_ARR_1);

// Here the reduce method contains minimum two parameters first one is contains calculation's total value and then second parameter is contains the array value one by one
// And also first parameter contain the first element of the array by default and second parameter collect from the second element
const REDUCE_ARR_1_1 = REDUCE_ARR_1.reduce(
  (reduce_arr_1_total, reduce_arr_1_ele) =>
    reduce_arr_1_total + reduce_arr_1_ele
);

console.log(
  "After the reduce method used on original array1 :",
  REDUCE_ARR_1_1
);

// We can also give the starting value by dynamically after the function
const REDUCE_ARR_1_2 = REDUCE_ARR_1.reduce(
  (reduce_arr_1_total_1, reduce_arr_1_ele_1) =>
    reduce_arr_1_total_1 + reduce_arr_1_ele_1,
  100
);

console.log(
  "After the reduce method used on original array1 and initial value dynamically add as a 100 :",
  REDUCE_ARR_1_2
);

// We can count the number of duplicates in given array using reduce method and also use the function
const REDUCE_ARR_2 = [31, 98, "s", 89, "a", 8, "a", 98];
console.log("Array with duplicate value :", REDUCE_ARR_2);

const REDUCE_ARR_2_1 = REDUCE_ARR_2.reduce(REDUCE_COUNT_DUP, {});

// Here this function calculate the duplicate of the array element
// And also here this reduce method not create the single value instead of create the object and also if we want array we can create
function REDUCE_COUNT_DUP(reduce_arr_2_total_1, reduce_arr_2_ele_1) {
  if (reduce_arr_2_total_1[reduce_arr_2_ele_1]) {
    reduce_arr_2_total_1[reduce_arr_2_ele_1]++;
  } else {
    reduce_arr_2_total_1[reduce_arr_2_ele_1] = 1;
  }
  return reduce_arr_2_total_1;
}
console.log("Count of the array element using reduce method :", REDUCE_ARR_2_1);

// We can also use the reduce method to combine the array of the string
const REDUCE_ARR_3 = [
  "This",
  "sentence",
  "is",
  "combined",
  "from",
  "array",
  "using",
  "reduce",
  "method",
  "and",
  "also",
  "that",
  "reduce",
  "method",
  "called",
  "the",
  "callback",
  "function",
  "as",
  "a",
  "function",
  "parameter",
];

// Function create the sentence from array
function COMBINE_WORD(reduce_arr_3_total_1, reduce_arr_3_ele_1) {
  return (reduce_arr_3_total_1 += reduce_arr_3_ele_1 + " ");
}

// Function for check the string have ending symbol at the end of the string
function CHECK_END_CHARACTER() {
  const REDUCE_ARR_3_SENTENCE_1 = REDUCE_ARR_3.reduce(COMBINE_WORD, "").trim();
  if (
    /[.?!]$/.test(REDUCE_ARR_3_SENTENCE_1) ||
    REDUCE_ARR_3_SENTENCE_1.endsWith("...")
  ) {
    return REDUCE_ARR_3_SENTENCE_1;
  } else {
    return REDUCE_ARR_3_SENTENCE_1 + ".";
  }
}

console.log(
  "Create the sentence from array elements using reduce method : " +
    CHECK_END_CHARACTER()
);

// We can add the unique positive numbers
const REDUCE_ARR_4 = ["i", "7", 6, -4, 0, 5, 8, "8", 5, 1, 6];

console.log("Array with duplicate before the reduce method :", REDUCE_ARR_4);

// Here this function add the unique positive numbers
const REDUCE_ARR_4_1 = REDUCE_ARR_4.reduce(
  (reduce_arr_4_total_1, reduce_arr_4_ele_1, reduce_arr_4_index_1) => {
    if (typeof reduce_arr_4_ele_1 === "number" && reduce_arr_4_ele_1 >= 0) {
      if (REDUCE_ARR_4.indexOf(reduce_arr_4_ele_1) === reduce_arr_4_index_1) {
        reduce_arr_4_total_1 += reduce_arr_4_ele_1;
      }
    }
    return reduce_arr_4_total_1;
  },
  0
);

console.log(
  "Sum of unique positive numbers using reduce method :",
  REDUCE_ARR_4_1
);
// --------------------------------------------------------

// Closure
// The children functions remember the value of parent functions's also after the parent functions's execution. This is called Closures
// We can write the multiple functions inside the function and those nested function can access the that's parent's values
function closure_outer_func_1() {
  let closure_outer_func_1_ele_1 = "outer function_1's string.";
  function closure_inner_func_1() {
    let closure_inner_func_1_ele_1 = "inner function_1's string.";
    console.log(
      "Access the outer function_1's value from inner function : " +
        closure_outer_func_1_ele_1
    );
    console.log(
      "Access the inner function_1's value from inner function : " +
        closure_inner_func_1_ele_1
    );
  }

  // We should call the inner function_1 in outer function_1's scope. Because of we can't call the inner function_1 outside the outer function_1
  closure_inner_func_1();
}

// Here we call the closure_outer_func_1
closure_outer_func_1();

// We can access the inner function outside the outer function for that we should return the inner function from outer function so we can access the inner function from outside the outer function
function closure_outer_func_2() {
  let closure_outer_func_2_ele_1 = "outer function_2's string.";
  function closure_inner_func_2() {
    let closure_inner_func_2_ele_1 = "inner function_2's string.";
    console.log(
      "Access the outer function's value from inner function : " +
        closure_outer_func_2_ele_1
    );
    console.log(
      "Access the inner function's value from outer function : " +
        closure_inner_func_2_ele_1
    );
  }

  // Here return the closure_inner_func_2 for access from outside of the closure_outer_func_2
  return closure_inner_func_2;
}

// Here we call that closure_outer_func_2 and store the returning value in variable because of that closure_outer_func_2 return a closure_inner_func_2 function
let closure_outer_func_2_var_1 = closure_outer_func_2();

// And then we can call the closure_inner_func_2 function using closure_outer_func_2_var_1 variable because of it contains the closure_inner_func_2 function
closure_outer_func_2_var_1();

// We can also give the parameter to the outer function and then access from inner function
function closure_outer_func_3(closure_outer_func_3_param_1) {
  function closure_inner_func_3() {
    console.log(
      "Access the outer function's parameter : " + closure_outer_func_3_param_1
    );
  }

  // Here return the clousure_inner_func_3 for access from outside of the closure_outer_func_3
  return closure_inner_func_3;
}

// Here we call that closure_outer_func_3 and store the returning value in variable because of that closure_outer_func_3 return the closure_inner_func_3
let closure_outer_func_3_var_1 = closure_outer_func_3(
  "outer function's parameter."
);

// And then we can call the closure_inner_func_3 function using closure_outer_func_3_var_1 variable because of it contains the closure_inner_func_3 function
closure_outer_func_3_var_1();

// This closure feature also contain the value statically
function closure_outer_func_4() {
  let closure_outer_func_4_ele_1 = 4;

  // Here return the clousure_inner_func_4 for access from outside of the closure_outer_func_4 and also we can write the function in return statement line we don't need to return the function separately
  return function closure_inner_func_4() {
    console.log("Keep the value as statically :", closure_outer_func_4_ele_1++);
  };
}

// Here we call that closure_outer_func_4 and store the returning value in variable because of that closure_outer_func_4 return the closure_inner_func_4
let closure_outer_func_4_var_1 = closure_outer_func_4();

// And then we can call the closure_inner_func_4 function using closure_outer_func_4_var_1 variable because of it contains the closure_inner_func_4 function
// And also keep the value changes statically
closure_outer_func_4_var_1();
closure_outer_func_4_var_1();
closure_outer_func_4_var_1();
closure_outer_func_4_var_1();

// We can create a flexible function for multiple similar tasks
// We can also write an N number of nested function
function closure_outer_func_5(closure_outer_func_5_ele_1) {
  return function closure_inner_func_5(closure_inner_func_5_ele_1) {
    return closure_outer_func_5_ele_1 + closure_inner_func_5_ele_1;
  };
}

// Here we call the closure_outer_func_5 function that will return the closure_inner_func_5_ele_1 function's value not a function or itself so we store that in variable
// First argument go to closure_outer_func_5's parameter and second argument go to closure_inner_func_5's argument
// And also we should give arguments separately because of separate function
let closure_outer_func_5_var_1 = closure_outer_func_5(8)(5);
console.log(
  "Add two numbers using nested functions :",
  closure_outer_func_5_var_1
);

// We can also give the arguments separately for each function
function closure_outer_func_6(closure_outer_func_6_ele_1) {
  return function closure_inner_func_6(closure_inner_func_6_ele_1) {
    return closure_outer_func_6_ele_1 + closure_inner_func_6_ele_1;
  };
}

// Here we can give arguments separately
// First argument go to closure_outer_func_6's parameter
// Here we give the first argument as 9
// Ṭhis variable keeps the 9 as a first argument always if we call whenever it will add 9 and another number that is given by second argument
let closure_outer_func_6_var_1 = closure_outer_func_6(9);

// This second go to closure_inner_func_6's parameter
// Here we give the second argument as 78
console.log(
  "Here add the 78 with 9 using nested function :",
  closure_outer_func_6_var_1(78)
);

// Here we give the second argument as 37
console.log(
  "Here add the 37 with 9 using nested function :",
  closure_outer_func_6_var_1(37)
);

// Here we can also create new first argument value without change the existing first argument using new variable
// Here we give the first argument as 3
// This variable keeps the 3 as a first argument always if we will whenever it will add 3 and another number that is given by second argument
let closure_outer_func_6_var_2 = closure_outer_func_6(3);

// Here we give the second argument as 42
console.log(
  "Here add the 42 with 3 using nested function :",
  closure_outer_func_6_var_2(42)
);

// Here we give the second argument as 65
console.log(
  "Here add the 65 with 3 using nested function :",
  closure_outer_func_6_var_2(65)
);
// --------------------------------------------------------

// Memory Management
// 1. Primitive Data Type - String, NUmber, BigInt, Boolean, Undefined, Null, Symbol
// If we assign the one variable to another variable then assign the value to the variable not share the memory
// This data type is stored in stack memory
let primitive_data_type_num_1 = 69;

// Now we assign the primitive_data_type_num_1 value to the primitive_data_type_num_2
let primitive_data_type_num_2 = primitive_data_type_num_1;

console.log(
  "Primitive data type first variable value :",
  primitive_data_type_num_1
);
console.log(
  "Primitive data type second variable value :",
  primitive_data_type_num_2
);

// Now we change the primitive_data_type_num_2 value
primitive_data_type_num_2 = 38;

// Only changed primitive_data_type_num_2 variable value not change in primitive_data_type_num_1 variable value
console.log(
  "After change the primitive data type second variable value, primitive data type first variable value :",
  primitive_data_type_num_1
);
console.log(
  "After change the primitive data type second variable value, primitive data type second variable value :",
  primitive_data_type_num_2
);
// ========================================================

// 2. Non-Primitive Data Type - Object, Array, Function, Date, RegExp, Map, Set, WeakMap, WeakSet
// If we assign the one variable to another variable then assign the value and that value stored memory reference. So these two variables share the same memory
// This is data is stored the value in heap memory and that value's reference stored in stack memory
let non_primitive_data_type_obj_1 = {
  non_primitive_usr_name_1: "Kong",
  non_primitive_usr_age_1: 10,
};
let non_primitive_data_type_obj_2 = non_primitive_data_type_obj_1;

console.log(
  "Non primitive data type first variable value :",
  non_primitive_data_type_obj_1
);
console.log(
  "Non primitive data type second variable value :",
  non_primitive_data_type_obj_2
);

// Now we change the non_primitive_data_type_obj_2 value only not key so keep the same memory
non_primitive_data_type_obj_2.non_primitive_usr_name_1 = "Naomi";
non_primitive_data_type_obj_2.non_primitive_usr_age_1 = 25;

// Here both variables value changed
console.log(
  "After changed the Non primitive data type second variable value, non primitive data type first variable value :",
  non_primitive_data_type_obj_1
);
console.log(
  "After changed the Non primitive data type second variable value, non primitive data type second variable value :",
  non_primitive_data_type_obj_2
);
// --------------------------------------------------------

// Set Object
// This is create the set object with unique values remove the repeated values and also it will return as Set object format
let set_arr_1 = [1, 3, 4, 3, 9, 3, 9, 1];
let set_obj_1 = new Set(set_arr_1);
console.log("Removed the repeated values using Set object :", set_obj_1);

// We can also give the value one by one
let set_obj_2 = new Set();
set_obj_2.add(4);
set_obj_2.add(2);
set_obj_2.add(6);
set_obj_2.add("How");
set_obj_2.add(4);
set_obj_2.add(6);
set_obj_2.add([8, 7]);
console.log("Removed the repeated values using Set object :", set_obj_2);

// It is strictly work on primitive data type but little liberally work on non primitive data type because non primitive data type reference type so each value stored in individual memory address So it different from the each one
let set_obj_3 = new Set();
set_obj_3.add(3);
set_obj_3.add(2);
set_obj_3.add(8);
set_obj_3.add(2);

// These below two stored in different memory address so it's not unique for JavaScript
set_obj_3.add([5, 3]);
set_obj_3.add([5, 3]);
console.log("Removed the repeated value using Set object :", set_obj_3);

// If we store the value in variable and until we use same variable for same value then Set object don't add the same value in set collection when work on non primitive data type
let set_obj_4 = new Set();

// Create the variable for non primitive data type
let set_arr_2 = [4, 8];
let set_arr_3 = [4, 8];
set_obj_4.add(set_arr_2);
set_obj_4.add(set_arr_2);
set_obj_4.add(set_arr_3);
set_obj_4.add(set_arr_3);
console.log("Removed the repeated value using Set object :", set_obj_4);

// We can find the size of the Set object
console.log(
  "Give the count of the elements in Set object using size method :",
  set_obj_4.size
);

// Check the given value placed or not in Set object
let set_obj_5 = new Set();
set_obj_5.add([3, 8]);
set_obj_5.add([7, 2]);
// set_obj_5.add(6);

console.log(
  "Return the boolean value for check the given element in Set object using has method :",
  set_obj_5.has(6)
);

// This is for array element
for (let set_obj_5_ele_1 of set_obj_5) {
  if (set_obj_5_ele_1.includes(3)) {
    console.log(
      "Return the boolean value for check the given element in Set object using size method :",
      set_obj_5_ele_1.includes(3)
    );
  }
}
// --------------------------------------------------------

// Map Object
// This is create the map object that contains the key, value pair and also only contain the unique key but value can duplicate for unique key
let map_obj_1 = new Map();

map_obj_1.set("key-1", 23);
map_obj_1.set("key-2", 94);
map_obj_1.set("key-3", 27);
console.log("Added the key, value to map_obj_1 :", map_obj_1);

// If we give the already existing key with other value then the existing key will be overwritten by new value not create the new key, value pair
map_obj_1.set("key-3", 194);
console.log(
  "Here, we added the new value with existing key name to map_obj_1 :",
  map_obj_1
);

// We can also give the array to create the map object but 2-dimensional array because of the map object take the key, value pair
let map_obj_arr_1 = [
  ["ele-1", 38],
  ["ele-2", 457],
  ["ele-3", 91],
];
let map_obj_2 = new Map(map_obj_arr_1);
console.log(
  "Here, we created the map_obj_2 using 2-dimentional array :",
  map_obj_2
);

// We can also give the object as key and also value. We can also add the key as object direct method but later we can't access. So, we assign the object to variable and then assign to the map object
let map_obj_3 = new Map();
let map_obj_obj_1 = { usr_1: "kowsik" };
let map_obj_obj_2 = { usr_1: "ken" };
let map_obj_obj_3 = { usr_1: "Danny" };

map_obj_3.set(map_obj_obj_1, 83);
map_obj_3.set(map_obj_obj_2, 74);
map_obj_3.set(map_obj_obj_3, 0);
console.log("Here, we created the map_obj_3's key is object :", map_obj_3);

// We can get the value using for..of loop
for (let map_obj_3_ele_1 of map_obj_3) {
  console.log("map_obj_3's key value pair :", map_obj_3_ele_1);
}

// We can get the key and value separately. Normally for..of loop will give the key and value separately because of that map_obj_3 contains the key value pair
for (let [map_obj_3_key_1, map_obj_3_val_1] of map_obj_3) {
  console.log(
    "map_obj_3's key",
    map_obj_3_key_1,
    "map_obj_3's value",
    map_obj_3_val_1
  );
}

// We can also get the all keys and all values separately
for (let map_obj_3_key_2 of map_obj_3.keys()) {
  console.log("map_obj_3's key :", map_obj_3_key_2);
}

for (let map_obj_3_val_2 of map_obj_3.values()) {
  console.log("map_obj_3's value :", map_obj_3_val_2);
}

// We can also check the key value pair available or not
console.log(
  "Use the 'has' property of map object and it will return the true or false :",
  map_obj_3.has(map_obj_obj_1)
);

// We can get the size of the map object
console.log(
  "Use the 'size' property of map object and it will return the size :",
  map_obj_3.size
);

// We can also use forEach method to get the value and key
map_obj_3.forEach((map_obj_3_val_3, map_obj_3_key_3) => {
  console.log("This is value", map_obj_3_val_3, "of the key", map_obj_3_key_3);
});

// If we use the spead operator(...) and then get the key and value pair it will return like 2-dimensional array format
console.log(
  "Here we use the spread operator(...) to get the key and value from map_obj_3 and then it will return in 2-dimentional array format :",
  ...map_obj_3
);
// --------------------------------------------------------