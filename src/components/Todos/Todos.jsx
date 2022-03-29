import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import style from './Todos.module.css'
function Todos(props) {
	if (props.todos.length !== 0) {
		return (
			<ul>
				{props.todos.map((todo, index) => {
					return (
						<TodoItem
							todo={todo}
							key={index}
							index={index}
							removeTodo={props.removeTodo}
							onChange={props.onToggle}
						/>
					)
				})}
			</ul>
		)
	} else {
		return <div className={style.list__icon}><i class="bi bi-journal-minus"></i></div>
	}
}
export default Todos;