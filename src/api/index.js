import axios from "./config";

export const getTodoItems = () => axios.get("/todos");

export const addTodoItem = todoItem => axios.post("/todos", todoItem);

export const updateTodoItem = (id, updateItem) => axios.put(`/todos/${id}`, updateItem);

export const deleteTodoItem = id => axios.delete(`/todos/${id}`);
