import Vue from "vue";
import * as type from "./mutations-type";

const mutations = {

    [type.UPDATE_TODO_ITEMS](state, toDoItem) {
        Vue.set(state.todoItemList, toDoItem.id - 1, toDoItem);
    },

    [type.ADD_TODO_ITEM](state, toDoItem) {
        state.todoItemList.push(toDoItem);
    },

    [type.SAVE_TODO_ITEMS](state, toDoItems) {
        state.todoItemList = toDoItems;
    },

    [type.DELETE_TODO_ITEM](state, id) {
        const deleteIndex = state.todoItemList.findIndex(x => x.id === id);
        state.todoItemList.splice(deleteIndex, 1);

    },
    [type.SET_USER_NAME](state,userName){
        state.userName=userName;
    }

}
export default mutations
