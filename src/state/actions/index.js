import ACTIONS from "../../constants/actions";

export const todo_create = (title, description, due_date, status) => {
	return {
		type: ACTIONS.TODO_CREATE,
		title,
		description,
		due_date,
		status
	};
};

export const edit_status = (id, status) => {
	return {
		type: ACTIONS.TODO_EDIT_STATUS,
		status,
		id
	};
};
