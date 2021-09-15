import React from 'react'
import Todo from './Todo';
const TodoList = ({todos, toggleTodo})  =>
{
        return (
                todos.map(todo => {
                    return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} /> /*unique key for rerendering only to the unique key mentioned*/
                    //passing todo and toggleTodo to Todo as props
           })
            
        );
}
export default TodoList;