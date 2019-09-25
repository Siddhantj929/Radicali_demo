import STATUS from "../constants/todo_status";

class ToDo {
	constructor({ title, description, due_date, status }) {
		this.id = "#" + Math.floor(Math.random() * 100000);
		this.title = title;
		this.description = description;
		this.due_date = new Date(due_date);
		this.status = STATUS.find(status);
	}
}

export default ToDo;
