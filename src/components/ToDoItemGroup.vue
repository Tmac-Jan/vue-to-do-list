<template>
    <div class="container">
        <div class="header">
            <h2>Vue To Do List</h2>
            <p><em>Simple Todo list with adding and filter by diff status</em></p>
        </div>
        <div class="center">
            <div class="addToDoList">
                <input type="text" v-model="todoItem" placeholder="add to do item"
                       @keyup.enter="enterAddToDoItem(todoItem)"
                />
                <Button id="addBtn" @click="addToDoItem(todoItem)">add</Button>
            </div>
            <div class="todolist">
                <ul>
                    <li v-for="(item,index) in generateFilterList" :key="item.id">
                        <to-do-item :item="item" :itemIndex="index"></to-do-item>
                    </li>
                </ul>
            </div>
            <div class="todoTab">
                <ul class="item-count">
                    <li class="action">
                        <a :class="{active:tabType==='ALL'}" href="javascript:void(0);"
                           @click="switchTab('ALL')">ALL</a>
                    </li>
                    <li class="action">
                        <a :class="{active:tabType==='Active'}" href="javascript:void(0);"
                           @click="switchTab('Active')">Active</a>
                    </li>
                    <li class="action">
                        <a :class="{active:tabType==='completed'}" href="javascript:void(0);"
                           @click="switchTab('completed')">Complete</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import toDoItem from './ToDoItem'
    const axios = require('axios');
    export default {
        name: 'TodoList',
        components: {
            toDoItem
        },
        data() {
            return {
                todoList: [],
                filterList: this.$store.state.todoItemList,
                todoItem: '',
                tabType: 'ALL',
                visibility: "ALL"
            }
        },
        created() {
            axios.get("http://localhost:3001/todos").then((response) => {
                this.$store.commit('addToDoItemList', {
                list:response.data
                });
            });
        },
        computed: {
            generateFilterList() {
                if (this.tabType === 'ALL') {
                    return this.$store.state.todoItemList;
                } else if (this.tabType === 'Active') {
                    console.log("Active");
                    const a = this.$store.state.todoItemList.filter((e) =>
                        !e.completed);
                    return a;
                } else {
                    console.log("Completed");
                    const a = this.$store.state.todoItemList.filter((e) =>
                        e.completed);
                   a.forEach(e=>{
                       console.log(a);
                   })
                    return a;
                }
            }
        },
        methods: {
            enterAddToDoItem(todoItem) {
                this.addToDoItem(todoItem);
            },
            addToDoItem(todoItem) {
                if (todoItem === '' || todoItem == null) {
                    return;
                } else {
                    this.$store.dispatch('addToDoItem', {
                        content: this.todoItem,
                        completed: false,
                        editable: false
                    });
                    this.todoItem = '';
                }
            },
            switchTab(value) {
                this.tabType = value;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    body {
        font: normal normal 13px/16px "Open Sans", sans-serif;
        background: #ccc;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
    }

    .todoTab ul {
        padding: 0;
        display: inline-block;
        overflow: auto;
    }

    .addToDoList input {
        width: 80%;
        -web-kit-appearance: none;
        -moz-appearance: none;
        font-size: 1em;
        /*height: 1.8em;*/
        border-radius: 4px;
        border: 1px solid #c8cccf;
        color: #6a6f77;
        outline: 0;
    }

    #addBtn {
        display: inline-block;
        background-color: #fc999b;
        color: #ffffff;
        border-radius: 5px;
        text-align: center;
        margin-top: 2px;
        padding: 5px 15px;
    }

    #addBtn:hover {
        cursor: pointer;
        opacity: .8;
    }

    .todolist ul li:nth-child(even) {
        background: #f4ecec;
    }

    li:hover {
        cursor: pointer;
    }

    .todoTab li a.selected {
        border-color: rgba(175, 47, 47, 0.2);
    }

    .todoTab li a.selected, #filters li a:hover {
        border-color: rgba(175, 47, 47, 0.1);
    }

    .todoTab li {
        display: inline;
        margin: 0 0 5px 0;
        padding: 8px;
        list-style: none;
        outline: none;
    }

    .checked {
        color: #999;
        text-decoration: line-through;
    }

    /*.addTodoList Button {*/
    /*    background: none;*/
    /*    border: none;*/
    /*    padding: 0 3px;*/
    /*}*/

    .item-count li {
        display: inline-block;
        margin: 0 10px;
    }

    .todoitem {
        text-align: left;
    }

    .container {
        padding: 20px;
        width: 600px;
        margin: 0 auto;
        margin-top: 40px;
        background: white;
        border-radius: 5px;
    }

    .todoTab {
        text-align: center;
    }

    .action {
        float: left;
        list-style: none;
    }

    a {
        border-radius: 5px;
        color: #fc999b;
        width: 140px;
        height: 30px;
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        display: block;
    }

    .finish {
        color: goldenrod;
        text-decoration: line-through
    }

    .active {
        border: 1px solid rgb(247, 234, 234);
    }
</style>
