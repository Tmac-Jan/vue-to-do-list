const axios = require('axios');
const mutations = {
    addToDoItemList(state, toDoItemList) {
        state.todoItemList = toDoItemList.list;
    },
    addToDoItem(state, toDoItem) {
        axios.post("http://localhost:3001/todos", {
            'id': toDoItem.id,
            'content': toDoItem.content,
            'completed': toDoItem.completed,
            'editable': toDoItem.editable
        }).then((response) => {
            state.todoItemList.push(toDoItem);
        }).catch(e => {
        });
    },
    changeToDoItem(state, toDoItem) {
        axios.put("http://localhost:3001/todos/" + toDoItem.data.id, {
            'id': toDoItem.data.id,
            'content': toDoItem.data.content,
            'completed': toDoItem.completed,
            //'editable': toDoItem.data.editable
        }).then((response) => {
            //state.todoItemList.push(toDoItem);
            state.todoItemList.forEach(function (e) {
                if (e.id === toDoItem.data.id) {
                    e.content = toDoItem.data.content;
                    e.completed = toDoItem.completed;
                    e.editable = toDoItem.data.editable;
                }
            });
        }).catch(e => {
        });

    }
    //state.todoItemList.splice(index,0,todoItem);
}

export default mutations
