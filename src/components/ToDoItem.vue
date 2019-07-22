<template>
  <div class="todoitem">
    <label><span>{{itemIndex+1}}.</span></label>
    <input type="checkbox" v-model="item.isComplete" checked="item.isComplete?'checked':''"/>
    <label v-show="!item.editable"
           @dblclick="startEditTodoItem(item)"
           :class="item.isComplete ? 'finish' : 'notFinish'">{{item.todoItemName}}</label>
    <input type="text" class="editor" v-model="item.todoItemName"
           v-show="item.editable"
           @blur="editTodoItem(item)" @keyup.enter="editTodoItem(item)"/>
  </div>
</template>

<script>
  export default {
    props: {
      item: Object,
      itemIndex: Number
    },
    data() {
      return {
      }
    },
    methods: {
      startEditTodoItem(todoItem) {
        todoItem.editable = true;
      },
      editTodoItem(todoItem) {
        todoItem.editable = false;
      },
    },
    // watch: {
    //   itemName: function (newValue) {
    //     this.$store.commit('changeToDoItem',this.itemIndex,newValue);
    //   }
    // }
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
