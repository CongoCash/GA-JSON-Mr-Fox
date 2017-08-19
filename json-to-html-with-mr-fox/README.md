# Meet Mr. Fox -- JSON to HTML Challenge

<img src="https://media.giphy.com/media/10ZhR5rwzcSnyU/giphy.gif" placeholder="mr fox">

Your goal is to fill in the blanks in Mr. Fox's profile using jQuery, and data from a JSON object.

## Setup
Please clone this repo.

Open `index.html` in your browser, and launch your Chrome Javascript Console.

You will be coding in the `scripts/app.js` file (and a bit in `index.html`).

Please note that the JSON object is accessible by typing `data` in your console. Each time you refresh it will change a little bit (just to keep you on your toes!).

#### Pre-Requisite Skills
* Getting Values from Objects and Arrays
    - Using Bracket Notation
    - Using Dot Notation
* Looping over Arrays/Lists
    - Using the current index of the loop
* Combining Strings using Concatenation
    - Creating HTML strings

## What is JSON?
JSON is a convenient format for transferring data. It is supported in many languages, not just Javascript!

Although Javascript Objects and JSON have a lot in common, JSON follows a slightly more strict format.

Here is an example of a JSON object:

``` json
{
    "key": "value"
}
```

We can assign the object to a variable `o`.

```js
var o = {
    "key": "value",
    "list": ["a", "b", "c"]
}
```

To access values, we need to know the name of the key. We can use either **dot notation** or **bracket notation**:
``` js
// dot notation
o.key;      //=> "value"

// bracket notation
o["key"];   //=> "value"
o['key'];   //=> "value"
```

Sometimes you'll need to "drill" down into an object to get the value you want.

<details>
<summary>How would you get the value `"c"` from the list? (Click Here)</summary>

```js
o.list[2];      //=> "c"
o["list"][2];   //=> "c"
o['list'][2];   //=> "c"
o["list"]["2"]; //=> "c"
o['list']['2']; //=> "c"
```

But note that `o.list.2` will *never* work. Why is that?

</details>

## Looping Lists
Often we want to do this same thing multiple times, but with values at different indexes.

```
var list = ["a", "b", "c"];
for(var i=0; i<list.length; i++){
  console.log(i, list[i]);
}
// 0 a
// 1 b
// 2 c
```

We can do the same thing with the new ES6 [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) loop:

```
let list = ["a", "b", "c"];
for(let item of list){
  console.log(item);
}
// a
// b
// c
```

And we can do the same thing with the powerful `forEach` Array method:
```
var list = ["a", "b", "c"];
list.forEach(function(value, i){
    console.log(i, value);
})
// 0 a
// 1 b
// 2 c
```


## What is Concatenation? (Hard!)
When we combine strings together, it's known as "concatenation". Here's an example:

```
"1" + "1";                  //=> "11"
"what's" + "up?";           //=> "what'sup?"
"hello" + " " + "world";    //=> "hello world"
```

<details>
<summary>""What'll happen when you "quote" a quote?", he asked, helplessly" (Click Here)</summary>

```js
'this "works"'
"and this'll work"
'but don't do this!' // SyntaxError
"He said \"don't\" do this, but I'm clever" // escape inner quotes with forward slash
```

</details>

We can create *HTML strings* by simpling creating a string containing HTML, but we have to be *very careful*(!):

```
var p = "<p>simple paragraph</p>";

var words = "words words words";
var dynamic_paragraph = (
    "<p>" +
        words + "!" +
    "</p>"
);

dynamic_paragraph //=> "<p>words words words!</p>"
```

## What is a Template String? (Easy!)
New to ES6 are template strings. Once you get the hang of it, these are a lot easier than the string concatenation method above.

```
let foo = "bar";
`${foo}`;                  //=> "bar"
`${foo} ${foo}`            //=> "bar bar"
```

```
let words = "words words words";
let html_string = `<p>${words}!</p>`;

html_string //=> "<p>words words words!</p>"
```

## Solution
Please see the `solution` branch!
