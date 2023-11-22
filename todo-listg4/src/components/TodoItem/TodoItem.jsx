import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaStar } from "react-icons/fa";
import { TodoUpdate } from '../TodoUpdate/TodoUpdate';

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li className='list-items'>
			<span 
				className={`stars ${todo.done ? 'text-decoration-dashed' : ''}`}>
					<FaStar />
					<FaStar />
			</span>

			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<h4 
				className={`stars ${todo.done ? 'button-done-disabled' : ''}`} 
				onClick={() => handleCompleteTodo(todo.id)}
				>DONE</h4>
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};