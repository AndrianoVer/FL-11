let rootNode = document.getElementById('root');
const form = document.querySelector('.form-group');
const alertMsg = document.querySelector('.alert-msg');
const msg = 'Maximum item per list are created';
const btn_add = document.getElementById('button_add');
const input_text = document.querySelector('.add_someaction');
const text = 'text';
let numbers = {
	ten: 10
}

let storage = {
	current_todos: [],
	deleted_todos: [],
	current_edit_task: {}
};

const generate_id = () => {
	const words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
	let id = '';

	for (let i = 0; i < numbers.ten; i++) {
		let index = Math.floor(Math.random() * words.length);
		id += words[index];
	}
	return id;
};

const add_new_todo = (text) => {	
	if (!text) {
		return console.log('Add new action');
	} 
	const new_todo = { text, id: generate_id() };
	storage.current_todos.push(new_todo);
	add_new_item_template(new_todo);
	return storage.current_todos;
};

const add_new_item_template = (todo) => {
	const template = create_todo_template(todo);
	form.insertAdjacentHTML('beforeend', template);
	if (template > numbers.ten) {
		alert_message('msg', 'alert-msg');
	}
};

const create_todo_template = (todo) => {
	return `
		<div class="row" data-todo-id='${todo.id}'>
			<div class="row-content-left">
				<i class="material-icons" id="check">check_box_outline_blank</i>
				<label>${todo.text}</label>
				<i class="material-icons edit">create</i>
			</div>
			<div class="row-content-right">
				<i class="material-icons delete">delete</i>
			</div>	
		</div>
	`;
};
const create_todo_template_edit = (todo) => {
	return `
		<div class="for_edit">
			<input type="text">
			<i class="material-icons save">save</i>
		</div>
	`
} 

const delete_todo_item = id => {
	if (!id) { 
		return console.log('Передайте id удаляемой задачи');
	}
	const check_id = storage.current_todos.some(todo => todo.id === id);
	if (!check_id) {
		return console.log('Передайте id задачи');
	}
	storage.current_todos = storage.current_todos.filter(todo => todo.id !== id);
	delete_todo_from_html(id);
	return storage.current_todos;
};

const delete_todo_from_html = id => {
	const target = document.querySelector(`[data-todo-id='${id}']`);
	const parent_target = target.parentElement;
	parent_target.removeChild(target);	
};

const alert_message = (msg, class_name) => {
	const current_alert = document.getElementById('blink');
	if (current_alert) {
		alertMsg.removeChild(current_alert);
	}
	const template = alert_template(msg, class_name);
	alertMsg.insertAdjacentHTML('afterbegin', template)
};

const alert_template = (msg, class_name) => {
	return `
		<div class='${class_name}'>${msg}</div>
	`
};

const edit_todo_item = (id, text) => {
	if (!id) {
		return console.log('Передайте id удаляемой задачи');
	}
	const check_id = storage.current_todos.some(todo => todo.id === id);
	if (!check_id) {
		return console.log('Передайте id задачи');
	}
	if (!text) {
		return console.log('Add new action');
	} 

	storage.current_todos.forEach(todo => {
		if(todo.id === id) {
			todo.input_text = input_text;
		}

	});
	return storage.current_todos;

};

const set_to_edit_todo = id => {
	if (!id) {
		return console.log('Передайте id редактируемой задачи');
	}
	storage.current_edit_task = storage.current_todos.find(todo => todo.id === id);
	edit_todo_item(storage.current_edit_task.id, storage.current_edit_task.input_text);
	change_view_for_edit(storage.current_edit_task);
}

const change_view_for_edit = todo => {
	input_text.value = todo.input_text;
	// create_todo_template_edit();
}

btn_add.addEventListener('click', () => {
	add_new_todo(input_text.value);
	input_text.value = '';	
});

input_text.addEventListener('keyup', () => {
	if (input_text.value) {
		btn_add.style = 'color: deepskyblue; cursor: pointer';
	} else {
		btn_add.style.color = '';
		btn_add.style.cursor = '';
	}
});

form.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		const id = e.target.closest('.row').dataset.todoId;
		delete_todo_item(id);	
	}

	if (e.target.classList.contains('edit')) {
		const id = e.target.closest('.row').dataset.todoId;
		set_to_edit_todo(id);
	}
})



