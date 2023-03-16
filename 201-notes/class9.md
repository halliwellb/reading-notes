# Forms and JS Events

## HTML Forms

1. `Web forms` are one of the main points of contact between users and websites or applications [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form). They allow you to collect vital data on your user and either store that data on a server, or process it to update the interaction with the user in real time. This makes the site feel much more responsive and dynamic, which can help to draw users in. You can use various widgets for interaction with the user, such as dropdown boxes, buttons, checkboxes, or radio buttons.

2. One of the main points to remember is that "the bigger the form, the more risk there is of frustrating people and losing users". I saw this multiple times in Financial Planning with our information gathering form. It was 2-3 pages with many intricate details. It certainly helped us understand the prospect, but about 50% of the prospects only filled out a few lines and left the rest blank! As [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form) says, "Keep it simple and stay focused".

3. Five form elements are `form`, `label`, `input`, `textarea`, and `button`.
+ `Form` is the element to formally define a `form` in your page. 
    + It's similar to a `section` or `footer` element. 
    + It's best practice to set at least the `action` and `method` attributes when creating a `form`.
        + `action` defines the URL that will collect the data after the form is submitted.
        + `method` defines the HTTP method to send the data, with typical methods being `get` or `post`.
    
+ `Label` defines the text to show the user in the form.

+ `Input` lets the user have space to enter their data either in a text box or with buttons. There a many button options available.

+ `Textarea` allows you to offer the user multiple lines to write more complex data. With `textarea` you can set the number of lines to show, while `input` generally only allows a single line.

+ `Button` gives the user the option to submit their data or reset their data as needed. You can also place a blank (custom) button to be defined in your JavaScript, later.

## Learn JS

1. Events are the systems way of reacting to an initiating action. "You did this, therefore I need to do *this*"

[Homepage](https://halliwellb.github.io/reading-notes/)
