import { useState } from 'react'
import './App.css'
import { TodoAdd } from './components/TodoAdd/TodoAdd'
import {TodoList} from './components/TodoList/TodoList'
import { useTodo } from './hooks/useTodo'
import { TodoNavbar } from './components/TodoNavbar/navbar'
import TodoFecha from './components/TodoFecha/todoFecha';
import { Route, Routes } from 'react-router-dom'

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
					{/* <TodoFecha/> */}
					<TodoNavbar 
					todosCount= {todosCount}
					pendingTodosCount = {pendingTodosCount}
					/>
					
				</div>
				
				<div className='add-todo'>
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
				<Routes>
					<Route path='/' element={<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>}></Route>
					<Route path='/All' element={<TodoList
					todos={todos}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>}></Route>
					<Route path='/Active' element={<TodoList
					todos={todos.filter((todo) => !todo.done)}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>}></Route>
					<Route path='/Finished' element={<TodoList
					todos={todos.filter((todo) => todo.done)}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>}></Route>
				</Routes>
			</div>
        </>
    );
}


export default App