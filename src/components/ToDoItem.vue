<template>
  <div class="todoitem">
    <label><span>{{itemIndex+1}}.</span></label>
    <input type="checkbox" v-model="completed" checked="item.completed?'checked':''"
    @change="changeStatus"/>
    <label v-show="!editable"
           @dblclick="startEditTodoItem(item)"
           :class="completed ? 'finish' : 'notFinish'">{{content}}</label>
    <input type="text" class="editor" v-model="content"
           v-show="editable"
           @keyup.enter="editTodoItem(item)"/>
  </div>
</template>

<script>
  import {mapActions } from "vuex";
  export default {
    props: {
      item: Object,
      itemIndex: Number
    },
    data() {
      return {
        id:this.item.id,
        content:this.item.content,
        completed:this.item.completed,
        editable:this.item.editable
      }
    },
    methods: {
      ...mapActions(["updateTodoItem"]),
      startEditTodoItem(todoItem) {
        console.log("startEditTodoItem");
        this.editable = true;
      },
      editTodoItem(todoItem) {
        console.log("editTodoItem");
        this.editable = false;
        this.updateTodoItem({id:this.id,
            content:this.content,completed:this.completed
            ,editable:this.editable});
      },
        changeStatus(){
        console.log("status:"+this.completed);
            this.$nextTick(() => {
              this.updateTodoItem({id:this.id,
                content:this.content,completed:this.completed
                ,editable:this.editable});
            })
        }
    }
  }

</script>
<style scoped>
  .finish {
    color: goldenrod;
    text-decoration: line-through
  }

  .active {
    border: 1px solid rgb(247, 234, 234);
  }
</style>
