## React Docs - Forms

1. What is a ‘Controlled Component’?

    - A `controlled component` is an html input element whose value is controlled by React, rather than by user inputs.

2. Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.

   - To keep the application faster and smoother it is better to store the users responses into state when they submit the form, rather than as they are entering keys. If we save to state as the user is typing, the application has additional work to do and may get bogged down if the application is large. It is also easier to check for errors after the user is finished.

3. How do we target what the user is entering if we have an event handler on an input field?

    - We can use `event.target.value` to get the value of the input field.

## The Conditional (Ternary) Operator Explained

1. Why would we use a ternary operator?

    - A `ternary operator` is a shorter and simpler way to use an if-else statement. It keeps the code clean and more clear.

2. Rewrite the following statement using a ternary statement:

    - xEqualToY = x===y ? 'Yes' : 'No;


[Homepage](https://halliwellb.github.io/reading-notes/)
