var todos = [];

var input = prompt('What would you like to do?');

while(input !== 'quit'){
  switch(input){
    case 'list':
      console.log(todos);
      break;
    case 'new':
      // ask for new todo
      var newTodo = prompt('Enter new todo');
      // add to todos array
      todos.push(newTodo);
      break;
    default:
      console.log('You can\'t do that');
  }
  // ask again for new input
  input = prompt('Would you like to do anything else?');
}
console.log('Goodbye!');
