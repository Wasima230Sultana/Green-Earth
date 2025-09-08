<h2>Green Earth</h2>
<h3> Difference among var, let, and const:</h3>
<br>
<p>
<h4>var <h4>
<p>It is available throughout the function in which it is declared, regardless of block ({}).<br>
Re-declaration is allowed in the same scope.<br>
Can use it before declaring.<br><br>
</p>
<h4>let <h4>
<p>
Accessible only inside the {} where it is defined.<br>
Re-declaration is not allowed in same scope.<br>
Re-assignment is allowed.<br>
Using before declaration throws an error.<br>
</p>
<h4>const <h4>
<p>
Accessible only inside the {} where it is defined.<br>
Re-assignment is not allowed.<br>
Re-declaration is not allowed in same scope.<br>
</p>
</p>
<hr>


<h3>Difference among map(), forEach(), and filter() :</h3>
<p>
<h4>map()</h4>
<p>
Transforms each element in an array and returns a new array of the same length.<br>
Return a new array.<br>
Use for creating a new array by transforming elements.<br>
</p>

<h3>forEach()</h3>
<p>
Executes a function for each element in an array.<br>
Use iterating over elements, without returning a new array.<br>
</p>

<h3>filter()</h3>
<p>
Tests each element with a condition and returns a new array of elements that pass.<br>
Use remove/filter out elements based on a condition.<br>
</p>
</p>
<hr>



<h3>Arrow functions in ES6 :</h3>
<p>
<h4></h4>
<p>
Arrow functions are a shorter way to write functions introduced in ES6.Useful in callbacks and array methods (map, filter, forEach).<br>
Example:<br>
// Normal function <br>
function add(a, b) { <br>
  return a + b;<br>
}<br>
// Arrow function<br>
const add = (a, b) => a + b;<br>
</p>
</p>
<hr>

<h3>Destructuring assignment work in ES6 :</h3>
<p>
<p>
Destructuring allows to extract values from arrays or objects into variables in a clean and readable way.<br>
<h4>Array Destructuring:</h4>
Basic Assignment: Values are assigned based on their position within the array.<br>
Skipping Elements: Commas can be used to skip elements in the array.<br>
Default Values: Default values can be assigned if an element is undefined.<br>
Example :<br>
    let [first, second] = [10, 20];<br>
    console.log(first);   // 10<br>
    console.log(second);  // 20<br>
</p>
<p>
<h4>Object Destructuring:</h4>
Basic Assignment: Properties are assigned based on their key names.<br>
Renaming Variables: A colon (:) can be used to assign a property to a variable with a different name.<br>
Example :<br>
    let {name, age} = {name: 'Alice', age: 30};<br>
    console.log(name); // Alice<br>
    console.log(age);  // 30<br>
</p>
</p>
<hr>



<h3>Explain template literals in ES6. How they different from string concatenation</h3>
<p>
<p>
Template literals, introduced in ECMAScript 2015 (ES6), are a new way to define strings in JavaScript using backticks (``) instead of single or double quotes. They offer enhanced features like multi-line strings and embedded expressions. <br>
<h3>Key features of template literals:</h3>
Multi-line strings:
Template literals can span multiple lines without needing escape characters like \n.<br>
String interpolation:
They allow embedding expressions (variables, function calls, arithmetic operations, etc.) directly within the string using the ${expression} syntax. This is often referred to as "string interpolation."<br>

<h3>How they differ from string concatenation:</h3>
Readability & Maintainability:<br>
Concatenation: Becomes cumbersome with multiple variables or complex expressions.<br>
Template Literals: More concise and easier to read/maintain.<br>

Multi-line Support: <br>
Concatenation: Requires explicit \n for line breaks.<br>
Template Literals: Directly supports multi-line strings with preserved formatting.<br>

Expression Embedding: <br>
Concatenation: Requires breaking the string and joining variables or expressions manually.<br>
Template Literals: Allows seamless embedding of variables and expressions inside ${}.
<br>
</p>
</p>
<hr>
