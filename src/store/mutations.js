const mutations = {
    addToDoItem(state, toDoItem) {
        state.todoItemList.push(toDoItem);
    },
    changeToDoItem(state,index,newToDoItemName){
        // console.log(index+"  "+newToDoItemName);
        let todoItem = state.todoItemList[index];
        todoItem.todoItemName=newToDoItemName;
        state.todoItemList.splice(index,0,todoItem);
    }
}

export default mutations
