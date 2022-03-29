import React, { useState } from 'react'
import style from './Form.module.css'
function Form(props) {
	const [input, setInput] = useState('');
	const handleChange = e => {
		setInput(e.target.value);
	}
	const handleSubmit = e => {
		e.preventDefault();
		if (input.trim()) {
			props.onSubmit({
				text: input,
				completed: false,
			})
		}
		setInput('');
	}
	return (
		<form className={style.form} onSubmit={handleSubmit}>
			<input className={style.form__input} type="text" value={input} onChange={handleChange} placeholder='Add todo' />
			<button className={style.form__button}><i className="bi bi-plus-circle-fill"></i></button>
		</form>
	)
}

export default Form