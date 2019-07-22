const actions = {
    addToDoItem ({ commit }, toDoItem) {
        commit('addToDoItem', toDoItem)
    },
    changeToDoItem ({ commit },index,newToDoItemName) {
        commit('changeToDoItem', index,newToDoItemName)
    },
}

export default actions
