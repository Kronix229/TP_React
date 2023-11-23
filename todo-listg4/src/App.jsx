import { useState } from 'react'
import './App.css'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import {TodoList} from './components/TodoList/TodoList'
import { useTodo } from './hooks/useTodo'
import { TodoNavbar } from './components/TodoNavbar/navbar'
import TodoFecha from './components/TodoFecha/todoFecha';

function App() {
    const{
        todos,
		todosCount,
		pendingTodosCount,
		handleNewTodo,
		handleDeleteTodo,
		handleCompleteTodo,
		handleUpdateTodo,
	} = useTodo();

    return(
        <>
			<div className='card-to-do'>
			
				<div className='counter-todos'>
					<TodoNavbar 
					todosCount= {todosCount}
					pendingTodosCount = {pendingTodosCount}
					/>
					<TodoFecha/>
				</div>
				
				<div className='add-todo'>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
				
				<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
				
			</div>
        </>
    );
}


export default App