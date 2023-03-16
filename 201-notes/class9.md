# Forms and JS Events

## HTML Forms

1. `Web forms` are one of the main points of contact between users and websites or applications [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form#:~:text=Web%20forms%20are%20one%20of%20the%20main%20points%20of%20interaction%20between%20a%20user%20and%20a%20website%20or%20application.). They allow you to collect vital data on your user and either store that data on a server, or process it to update the interaction with the user in real time. This makes the site feel much more responsive and dynamic, which can help to draw users in. You can use various widgets for interaction with the user, such as dropdown boxes, buttons, checkboxes, or radio buttons.

2. One of the main points to remember is that "the bigger the form, the more risk there is of frustrating people and losing users". I saw this multiple times in Financial Planning with our information gathering form. It was 2-3 pages with many intricate details. It certainly helped us understand the prospect, but about 50% of the prospects only filled out a few lines and left the rest blank! As [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form#:~:text=Keep%20it%20simple%20and%20stay%20focused%3A%20ask%20only%20for%20the%20data%20you%20absolutely%20need.) says, "Keep it simple and stay focused".

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

1. Events are the systems way of reacting to an initiating action. "You did this, therefore I need to do *this*".

2. When using `addEventListener()` we need to pass two arguments in. They are, `click`, which alerts the program that we can to listen to the `click` event, (or another if specified) and **a function to call** when the `click` (or other) event happens.

3. The `event object` is a parameter that's passed to event handlers to provide extra features and information when the event handler is called on. Depending on where the `event object` is placed, it will change the functionality of the event. This can be useful if that is the intention, or cause issues if not.

4. `Event bubbling` fires the inner-most element first and moves outwards, while `Event capture` fires the outer-most element first and moves inwards.
    + According to [Mozilla](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#:~:text=By%20default%20almost%20all%20event%20handlers%20are%20registered%20in%20the%20bubbling%20phase%2C%20and%20this%20makes%20more%20sense%20most%20of%20the%20time.), almost all event handlers are registered in the bubbling phase at this time.

[Homepage](https://halliwellb.github.io/reading-notes/)
