import * as type from "./mutations-type";
import {addTodoItem, getTodoItems, updateTodoItem} from "../api";

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
}


export default actions
