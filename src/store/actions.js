import * as type from "./mutations-type";
import {addTodoItem, getTodoItems, updateTodoItem} from "../api";

const axios = require('axios');
const actions = {
    // addToDoItem({commit}, toDoItem) {
    //     axios.post("http://localhost:3001/todos", {
    //         'id': toDoItem.id,
    //         'content': toDoItem.content,
    //         'completed': toDoItem.completed,
    //         'editable': toDoItem.editable
    //     }).then((response) => {
    //         commit('addToDoItem', toDoItem)
    //     }).catch(e => {
    //     });
    //
    // },
    // changeToDoItem({commit}, toDoItem) {
    //     axios.put("http://localhost:3001/todos/" + toDoItem.data.id, {
    //         'id': toDoItem.data.id,
    //         'content': toDoItem.data.content,
    //         'completed': toDoItem.completed,
    //         //'editable': toDoItem.data.editable
    //     }).then((response) => {
    //         //state.todoItemList.push(toDoItem);
    //         commit('changeToDoItem', toDoItem)
    //     }).catch(e => {
    //     });
    //
    // },
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
