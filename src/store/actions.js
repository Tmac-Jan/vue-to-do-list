const actions = {
    addToDoItem ({ commit }, toDoItem) {
        commit('addToDoItem', toDoItem)
    },
    changeToDoItem ({ commit },toDoItem) {
        commit('changeToDoItem', toDoItem)
    },
}

export default actions
