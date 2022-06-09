import React from 'react';
import './css/TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

function TodoItem(props: any) {
	return (
		<li className='TodoItem'>
			<span
				className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
			>
				<FontAwesomeIcon icon={faCheck} />
			</span>
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}>
				{props.text}
			</p>
			<span className='Icon Icon-delete'>
				<FontAwesomeIcon icon={faXmark} />
			</span>
		</li>
	);
}

export { TodoItem };
