/* understanding datatypes in javaScript
Null	      "object"	    N/A
Undefined	  "undefined"	  N/A
Boolean	    "boolean"	    Boolean
Number	    "number"	    Number
BigInt	    "bigint"	    BigInt
String	    "string"	    String
Symbol	    "symbol"	    Symbol
*/

/*difference between var and let keyword 
One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

var camper = "James";
var camper = "David";
console.log(camper);
In the code above, the camper variable is originally declared as James, and is then overridden to be David. The console then displays the string David.
*/

/** const vs let
 * 
 * const has all the awesome features that let has, with the added bonus that variables declared using const are read-only. They are a constant value, which means that once a variable is assigned with const, it cannot be reassigned:
 * const FAV_PET = "Cats";
 * FAV_PET = "Dogs";
 * The console will display an error due to reassigning the value of FAV_PET.
 * 
 */

