<template>
    <div class="todoitem">
        <h1>首页</h1>
        <p>
        <p><span>用户名字:</span>{{userName}}</p>
        <p>
            <router-link to="/ToDoItemGroup">ToDoItemGroup</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: this.$route.query.userName
            }
        },
        methods: {}
    }

</script>
<style scoped>
</style>
