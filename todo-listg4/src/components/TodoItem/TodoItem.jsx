import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from '../TodoUpdate/TodoUpdate';

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<h4>DONE</h4>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`}
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
