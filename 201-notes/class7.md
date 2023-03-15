# Object-Oriented Programming & HTML Tables

## Domain Modeling

1. We need domain modeling because it simplifies our ability to solve a specific problem and removes a large portion of the potential errors because we can review the "mother" function once and reuse it multiple times. We can store the new object, made from the "mother" function, in a variable and then call the variable wherever we need to access the properties and methods within the inital function.

## HTML Table Basics

1. One important reason to not use tables for page layouts is that screen readers will have more difficulty when giving readouts. The screen reader may have to look at the features of the table seperately, rather than collectively, which can be very confusing.

The code is also harder to write, maintain, and debug according to [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

2. <#table></#table> is one element that encloses the content of the table, the <#td></#td> element is another which stands for 'table data', and <#tr></#tr> is a third table element, which stands for 'table row' [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics).

## Introducing Constructors

1. A constructor is a function called using the `new` keyword. It is helpful when we are creating multiple objects with different values for the properties within. Each new constructor function will be able to assign values to the properties within the "mother" object, when it is called. Constructor functions streamline some of the repetitive processes that we have been using until now.

2. Within object literals, the `this` keyword calls the value that comes after it and is restricted to the object it is called within. With constructors, `this` can be used for each constructor object we make and uses the value for each just like in an object literal, although it is not constrained to the original property value of the mother method.

Object Prototypes Using a Constructor

1. Prototypes are a way to assign a backup object to use if the called on method is not available in the original object. For example, I want to buy VOO (Vanguard's S&P 500 index fund packaged as an ETF). First I'll check at Schwab's brokerage house. If it's not available there, I'll check Fidelity. I'll check Schwab first, not because it's 'better' but because that's where I'm starting. Schwab and Fidelity serve the same function, with one being my go-to and the other being a back-up go-to to check.

Inheritance is like sharing my preferred list of ETFs with Fidelity, when they're housed at Schwab. All of the methods used in the original class or object are shared throigh the `extends` keyword to the new class. (Schwab being the original class and Fidelity being the new class).

[Homepage](https://halliwellb.github.io/reading-notes/)
