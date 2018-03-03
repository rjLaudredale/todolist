/* version 1.0 Arrays
1) It should have a place to store todos.
--var todos =['item1', 'item2', 'item3','item4','item5'];
2)It should have a way to display todos.
--console.log('my todos', todos);
3) It should have a way to add new todos.
--todos.push('new todos');
4) It should have a way to change a todo.
- Example changing the 1st item in the array.
--todos[0] ="Changed!";
5) It should have a way to delete a todo.
- Example deleting the first item by stating its position and how many to delete.
todos.splice(0,1);*/

/*Version 2.0 Functions 
var todos =['item 1', 'item 2', 'item 3']
1)it should have a function to display todos
function displayTodos() {
    console.log('My todos:', todos);}
2)it should have a function to add todos
function addTodo(todo){ //addTodo('new todo')
    todos.push(todo);
    displayTodos();
}
addTodos('working out');
3)it should have a function to change todos
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(1, cooking);
4)it should have a function to delete todos
function deleteTodo(position){
    todos.splice(position, 1);
    displayTodos();
}
deleteTodos(0); //deletes the first item
*/



/*Interlude-Functions and variables, below doesn't work
var myName ='Gordon';

function sayName() {
    var secret = 'watchandcode';
    console.log(myName);
}
sayName();
console.log(secret);

// if you're inside of function, you can look out and see data, 
but the opposite isn't true. If you are outside, you can't look in.
*/

/*Objects




*/