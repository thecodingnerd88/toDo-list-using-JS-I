var todos = [];
var input = prompt("What would you like to do?");
window.setTimeout(function(){
    while (input !== "quit"){
    //   handle input
    if ( input === "list"){
        console.log(todos);
    }else if (input === "new") {
        // ask for a new todo
        var newTodo = prompt ("Enter a new Todo:")
        // add to todos arry
        todos.push(newTodo);
    }
    //   ask for a new input
    var input = prompt("What would you like to do?");
    }
    console.log ("Ok, App. is going to close!");
},500);