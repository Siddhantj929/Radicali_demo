import ToDo from "../../models/todo";
import STATUS from "../../constants/todo_status";
import ACTIONS from "../../constants/actions";

const todo = (state = [], action) => {
	switch (action.type) {
		case ACTIONS.TODO_CREATE:
			state.unshift(new ToDo(action));
			return state;

		case ACTIONS.TODO_EDIT_STATUS:
			const i = state.findIndex(e => e.id === action.id);
			state[i].status = STATUS.find(action.status);
			return state;

		default:
			return state;
	}
};

export default todo;
