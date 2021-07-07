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
6. Add todos entered into the form to the todo collection
7. Display a "mark as complete" UI element
8. Programmatically mark an item as complete when a user clicks the "mark as complete" UI element
    - When a user mark’s a TO-DO as completed the message of the TO-DO should be crossed out (using strikethrough font)
9. Display a "delete todo" UI element for todo items that have been marked as complete
10. Programmatically delete a todo item when a user clicks the "delete todo" UI element

## Things I didn't plan for or know about
- Elem.innerHTML replaces all the child elements with the given string. I'm going to need to create elements, then insert them.
- I should have started with a `ul` instead of a `div`

## Googled  
`mdn document add children` - Didn't get what I thought I needed from this. Turns out I was just creating a new todo node and successively updating its innerText, instead of creating new todo nodes and giving them their own innterText.

## Resources 