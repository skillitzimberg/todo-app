# Steps to complete

1. Display a single static todo item
2. Dynamically insert a todo item with JavaScript
    - create JavaScript file
    - link JS file to HTML
    - Wrap the static todo element in a containing element (todo list)
    - Give the todo list an id
    - Insert the todo into the todo list
3. Dynamically insert a todo item from a collection consisting of one todo
    - Create a collection with one todo
    - Retrieve the todo from the collection
    - Insert the todo into the todo list
4. Programmatically insert two or more todo items from a collection of todos
    - Add a few more items to the todos collection
    - Create a function that inserts items from the collection into the todo list
5. Display a form field and button for adding new todo items to the list
    - Create a form element
    - Give the form an input field
    - Give the form a submit button
6. Add todos entered into the form to the todo collection & in the UI
    - Add an event handler for the submit button
    - Create a reference to the todo input so we can get the value submited
    - Add the value to the collection of todos
    - Insert in the todo list
7. Display a "mark as complete" UI element
8. Programmatically mark an item as complete when a user clicks the "mark as complete" UI element
    - When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)
9. Display a "delete todo" UI element for todo items that have been marked as complete
10. Programmatically delete a todo item when a user clicks the "delete todo" UI element

## Things I didn't plan for or know about
- Elem.innerHTML replaces all the child elements with the given string. I'm going to need to create elements, then insert them.
- I should have started with a `ul` instead of a `div` for the todo list display
- How to do forms - building the HTML properly, sending/getting the form data when there is no server involved, form validation.
- Saving the collection of todos - some kind of storage

## How I should have done it
1. As a user I want to see a form for inputting todos
    - Create a form element
    - Give the form an input field
    - Give the form a submit button
2. As a user I want to be able to add todos with the form
    - Create an element to hold todos
    - Give that element an id
    - Add an event handler for the form's submit button
    - Create a reference to the form input so we can get the value submitted
    - Create an element to hold the todo
    - Validate that the input is not empty
    - Insert the element into the todo list
    - Clear the form input of content
3. As a user I want to be able to mark a todo as complete
    - Add an element to each `li` with the text "mark complete"
    - Create a reference to the todos `ul`
    - Attach an event handler to the todos `ul`
    - Use the event to target the todo `span`
    - Add a `complete` class to the todo `span`
    - Create `styles.css` file
    - Link the stylesheet to the HTML
    - Add a CSS rule to line-through the todo text
4. As a user I want to be able to delete todos that have been completed
    - Add a delete `span` to the todo `li`
    - give it a class of `hidden`
    - Add a `.hidden` rule to the stylesheet
    - Use `toggle` instead of `add()` and `remove()` on the first & last child elements of the `li`

## Googled  
`mdn document add children` - Didn't get what I thought I needed from this. Turns out I was just creating a new todo node and successively updating its innerText, instead of creating new todo nodes and giving them their own innterText.  
`mdn javascript forms`
`form event`
`clickable child bubble`
`clickable child bubbling`
`css pseudo element`
`click on sibling change sibling`

## Resources 
https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
Head First JavaScript: pages - 323, 358 - 361  
https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event  
https://www.quirksmode.org/js/events_order.html  
https://css-tricks.com/slightly-careful-sub-elements-clickable-things/;
https://dev.to/shimphillip/handing-javascript-events-efficiently-with-bubble-and-capture-4ha5;
https://stackoverflow.com/questions/38861601/how-to-only-trigger-parent-click-event-when-a-child-is-clicked/38861760; 
https://developer.mozilla.org/en-US/docs/Web/CSS/::before; 
https://www.quirksmode.org/js/events_order.html;  
https://stackoverflow.com/questions/51688421/how-to-trigger-event-on-targets-sibling;  

## Potential problems
[cross-site scripting attack due to `innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)  