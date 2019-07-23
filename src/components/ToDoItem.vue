<template>
    <div class="todoItem">
        <div class="content" id="toDoContent">
            <label><span>{{itemIndex+1}}.</span></label>
            <input type="checkbox" v-model="completed" checked="item.completed?'checked':''"
                   @change="changeStatus"/>
            <label v-show="!editable"
                   @dblclick="startEditTodoItem"
                   :class="completed ? 'finish' : 'notFinish'">{{content}}</label>
            <input type="text" class="editor" v-model="content"
                   v-show="editable"
                   @keyup.enter="editTodoItem"/>
        </div>

        <div class="content">
            <Button id="delBtn" @click="deleteItem">delete</Button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        props: {
            item: Object,
            itemIndex: Number
        },
        data() {
            return {
                id: this.item.id,
                content: this.item.content,
                completed: this.item.completed,
                editable: this.item.editable
            }
        },
        methods: {
            ...mapActions(["updateTodoItem","deleteTodoItem"]),
            startEditTodoItem() {
                this.editable = true;
            },
            editTodoItem() {
                this.editable = false;
                this.updateTodoItem({
                    id: this.id,
                    content: this.content, completed: this.completed
                    , editable: this.editable
                });
            },
            changeStatus() {
                this.$nextTick(() => {
                    this.updateTodoItem({
                        id: this.id,
                        content: this.content, completed: this.completed
                        , editable: this.editable
                    });
                });
            },
            deleteItem(){
                this.deleteTodoItem(this.id);
            }
        }
    }

</script>
<style scoped>

    .finish {
        color: goldenrod;
        text-decoration: line-through
    }
    .del-btn-div{

    }
    .content{
        position: relative;
        float: left;
        width: 50%;
    }
    #toDoContent{
        text-align: left;
    }
    #delBtn {
        display: inline-block;
        background-color: #fc999b;
        color: #ffffff;
        border-radius: 5px;
        text-align: center;
        margin-top: 2px;
        padding: 5px 8px;
    }
    .active {
        border: 1px solid rgb(247, 234, 234);
    }
</style>
