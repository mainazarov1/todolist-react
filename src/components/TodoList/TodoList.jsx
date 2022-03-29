import React, { useState } from 'react'
import Form from '../Form/Form'
import Todos from '../Todos/Todos'
import style from './TodoList.module.css'

function TodoList() {
	const [todos, setTodos] = useState(
		(JSON.parse(localStorage.getItem('Todos')) || [])
	);

	const addTodo = todo => {
		const newTodos = [...todos, todo];
		localStorage.setItem('Todos', JSON.stringify(newTodos));
		setTodos(newTodos);
	}

	const toggleTodo = index => {
		const toggleTodos = todos.map((todo,i) => {
			if (index === i) {
				todo.completed = !todo.completed;
			}
			return todo;
		})
		localStorage.setItem('Todos', JSON.stringify(toggleTodos));
		setTodos(toggleTodos);
	}
	const removeTodo = index => {
		const removedTodos = todos.filter((todo, i) => i !== index);
		localStorage.setItem('Todos', JSON.stringify(removedTodos));
		setTodos(removedTodos);
	}
	console.log(localStorage);
	return (
		<div className={style.todo__list}>
			<h1>Today was a good day</h1>
			<Form onSubmit={addTodo} />
			<Todos todos={todos} removeTodo={removeTodo} onToggle={toggleTodo} />
		</div>
	)
}

export default TodoList