var todos = [];

var input = prompt('What would you like to do?');

function listTodos(){
  console.log('********');
  todos.forEach(function(todo, t){
    console.log(t + ': ' + todo);
  });
  console.log('********');
}

function addTodo(){
  // ask for new todo
  var newTodo = prompt('Enter new todo');
  // add to todos array
  todos.push(newTodo);
}

function deleteTodo(){
  // ask for index of todo to be deleted
  var i = prompt('Enter index of todo to delete');
  // delete todo
  if(todos[i] !== undefined){
    var item = todos.splice(i, 1);
    console.log('Item deleted: ' + item);
  }else{
    console.log('The index is invalid. Aborting operation...');
  }
}

while(input !== 'quit'){
  switch(input){
    case 'list':
      listTodos();
      break;
    case 'new':
      addTodo();
      break;
    case 'delete':
      deleteTodo();
      break;
    default:
      console.log('You can\'t do that');
  }
  // ask again for new input
  input = prompt('Would you like to do anything else?');
}
console.log('Goodbye!');
