# Js-Morning-Challenge-02

**Problem Statement**

Your task is to implement a function named `missingLetters` that returns an array containing all the characters present in one string but not in the other. The characters in each string are separated by a space.

The `missingLetters` function should accept two parameters:
1. `input01`: a string of characters separated by a space.
2. `input02`: a string of characters separated by a space.

Here are some examples:

- `missingLetters("a b c d e f g", "a c d f")` should return `["b","e","g"]`, because these characters are present in `input01` but not in `input02`.

{Try It!}(node .guides/try-it-01.js)

- `missingLetters("1 2 3 4 5 6 7 8 9 10 11 12", "1 3 5 7 9 11")` should return `["2","4","6","8","10","12"]`, because these characters are present in `input01` but not in `input02`.

{Try It!}(node .guides/try-it-02.js)

**Hint**

You can use the `split()` method to convert each input string into an array of characters. Then, use the `filter()` method on the first array to return only the characters that do not exist in the second array.

## Submit 

**Test Runner**
```
node .guides/secure/01-MissingLetters/testRunner.js "a b c d e f g" "a c d f"
node .guides/secure/01-MissingLetters/testRunner.js "1 2 3 4 5 6 7 8 9 10 11 12" "1 3 5 7 9 11"
```

Note: Before running the commands, please replace `.guides/secure/testRunner.js` with the actual path to your test runner file.