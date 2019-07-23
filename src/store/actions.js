import * as type from "./mutations-type";
import {addTodoItem, getTodoItems, updateTodoItem, deleteTodoItem} from "../api";

const actions = {
    async addTodoItem({ commit }, toDoItem) {
        commit(type.ADD_TODO_ITEM, await addTodoItem(toDoItem));
    },
    async requestTodoItems({ commit }) {
        commit(type.SAVE_TODO_ITEMS, await getTodoItems());
    },
    async updateTodoItem({ commit }, toDoItem) {
        commit(type.UPDATE_TODO_ITEMS, await updateTodoItem(toDoItem.id, toDoItem));
    },
    async deleteTodoItem({ commit }, id) {
        await deleteTodoItem(id);
        commit(type.DELETE_TODO_ITEM, id);
    }
}


export default actions
