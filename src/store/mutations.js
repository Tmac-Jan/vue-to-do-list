import Vue from "vue";
import * as type from "./mutations-type";

const mutations = {

    [type.UPDATE_TODO_ITEMS](state, toDoItem) {
        Vue.set(state.todoItemList, toDoItem.id, toDoItem);
    },

    [type.ADD_TODO_ITEM](state, toDoItem) {
        state.todoItemList.push(toDoItem);
    },

    [type.UPDATE_STATUS](state, newStatus) {
        state.status = newStatus;
    },

    [type.SAVE_TODO_ITEMS](state, toDoItems) {
        state.todoItemList = toDoItems;
    },

    [type.DELETE_TODO_ITEM](state, id) {
        const deleteIndex = state.todoItemList.findIndex(x => x.id === id);
        state.todoItemList.splice(deleteIndex, 1);

    }
}
export default mutations
