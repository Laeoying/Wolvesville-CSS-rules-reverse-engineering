# Wolvesville-CSS-rules-reverse-engineering
Get elements CSS classes on each reload based on their rules.

## How to use it ?
First, copy paste the utility functions in the console, this will help you.
Search for the element classes from the element you want to get each reload and copy it classes string.
Example : `css-1f78fiq r-1eu3h6n r-1ugt0ll r-zbyyct r-edb13d`

Now, paste this string into the getObject() function of the utilities in the console.
So you may want to type in the console something like :
`getObject('css-1f78fiq r-1eu3h6n r-1ugt0ll r-zbyyct r-edb13d');`

You should get an object as an array/list (should start by `[` and ends by `]`).

Now, go to your tampermonkey script, and name the object so you can get it later in your script. 
Example :
```
let lib = {
  myObject : {}
}
```

In this object, paste the array you got from the console under the name of `cssRules`. It should look like this :
```
let lib = {
  myObject : {
    cssRules: [
      "{ align-items: stretch; background-color: rgba(0, 0, 0, 0); border: 0px solid black; box-sizing: border-box; display: flex; flex-basis: auto; flex-direction: column; flex-shrink: 0; list-style: none; margin: 0px; min-height: 0px; min-width: 0px; padding: 0px; position: relative; text-decoration: none; z-index: 0; }",
      "{ border-radius: 3px; }",
      "{ max-height: 80%; }",
      "{ overflow: hidden; }",
      "{ width: 90%; }"
    ]
  }
}
```

And there you go, you can get your classes string each reload. 
You can get them by `lib.myObject`, it will return a string.

## Notes
- Avoid using `document.querySelectorAll(lib.myObject)` because the string made by `lib.myObject` won't necessarily be in the right order, which is required to use `querySelector`. Use `document.getElementsByClassName` instead.
- The number of classes will define the number of strings there is in the array. If you selected 6 classes, you should have 6 strings of CSS rules in your array.
