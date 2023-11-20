import { useState } from 'react'
import './App.css'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import {TodoList} from './components/TodoList/TodoList'
import { useTodo } from './hooks/useTodo'

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
					<h3>
						Total de tareas: <span>{todosCount}</span>
					</h3>
					<h3>
						A realizar: <span>{pendingTodosCount}</span>
					</h3>
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
