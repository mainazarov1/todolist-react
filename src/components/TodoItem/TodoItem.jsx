import React from "react";
import style from './TodoItem.module.css'


function TodoItem({ todo, index, removeTodo, onChange }) {
	let checkItem = [style.item__text];
	if (todo.completed) {
		checkItem.push(' done');
	}
	return (
		<li key={index} className={style.todo__item}>
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={()=>onChange(index)}
			/>
			<strong>{index + 1}</strong>
			<p className={checkItem.join(' ')}>{todo.text}</p>
			<button className={style.todo__btn} onClick={() => removeTodo(index)}><i className="bi bi-trash-fill"></i></button>
		</li>
	)
}
export default TodoItem