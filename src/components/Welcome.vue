<template>
    <div class="todoitem">
        <h1>Hello App!</h1>
        <p><label>请输入姓名</label><input type="text" v-model="userName"></p>
        <p>
            <!-- <router-link :to="{path:'/Home',query:{'userName':this.userName}}">ToDoItemGroup</router-link>-->
            <button @click="getStarted">开始！</button>
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userName: ''
            }
        },
        methods: {
            getStarted() {
                this.$router.push({
                    path: '/Home',
                    query: {
                        userName: this.userName
                    }
                });
            }
        }
    }
</script>
<style scoped>
</style>
