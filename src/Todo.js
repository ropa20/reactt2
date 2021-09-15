import React from 'react'


const Todo = ({todo, toggleTodo}) => 
{
    function handleTodoClick(){
        toggleTodo(todo.id) //onChange->toggleTodo with id of the to do we are in site of->todoList->App->toggkeTodo()->resets
    }
        return (
            <div>
                <label>
                    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/> {/* ticked*/}
                    {todo.name}
                </label>
            </div> 
        );
}
export default Todo;