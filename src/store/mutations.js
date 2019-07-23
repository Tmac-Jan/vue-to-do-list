import Vue from "vue";
import * as type from "./mutations-type";

const mutations = {
    // addToDoItemList(state, toDoItemList) {
    //     //     state.todoItemList = toDoItemList.list;
    //     // },
    //     // addToDoItem(state, toDoItem) {
    //     //
    //     //     state.todoItemList.push(toDoItem);
    //     // },
    //     // changeToDoItem(state, toDoItem) {
    //     //     state.todoItemList.forEach(function (e) {
    //     //         if (e.id === toDoItem.data.id) {
    //     //             e.content = toDoItem.data.content;
    //     //             e.completed = toDoItem.completed;
    //     //             e.editable = toDoItem.data.editable;
    //     //         }
    //     //     });
    //     // }
    //state.todoItemList.splice(index,0,todoItem);
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
