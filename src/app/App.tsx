import React from 'react';
import { TodoSearch } from '../componets/TodoSearch';
import { CreateTodoButton } from '../componets/CreateTodoButton';
import { TodoCounter } from '../componets/TodoCounter';
import { TodoItem } from '../componets/TodoItem';
import { TodoList } from '../componets/TodoList';

const todos: Array<any> = [
	{ text: 'Aprender React', completed: true },
	{ text: 'Aprender Angular', completed: true },
	{ text: 'Aprender Vue', completed: false }
];

function App() {
	return (
		<React.Fragment>
			<h1>Todo List</h1>
			<TodoCounter />
			<TodoSearch />
			<TodoList>
				{todos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</React.Fragment>
	);
}

export default App;
