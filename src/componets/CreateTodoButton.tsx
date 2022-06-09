import React from 'react';
import './css/CreateTodoButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
function CreateTodoButton() {
	return (
		<button className='CreateTodoButton'>
			<FontAwesomeIcon icon={faPlus} color={'FFFFFF'} />
		</button>
	);
}
export { CreateTodoButton };
