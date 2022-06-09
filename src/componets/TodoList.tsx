import React from 'react';
import './css/TodoList.scss';

function TodoList(props: any) {
	return (
		<section>
			<ul className='container'>{props.children}</ul>
		</section>
	);
}

export { TodoList };
