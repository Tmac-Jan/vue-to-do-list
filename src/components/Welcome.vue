<template>
    <div class="container">
        <h1>Hello App!</h1>
        <p><label>请输入姓名:</label><input type="text" v-model="userName"></p>
        <p><button @click="getStarted" id="addBtn">开始</button></p>
    </div>
</template>

<script>
    import {mapActions} from "vuex";
    export default {
        data() {
            return {
                userName: ''
            }
        },
        methods: {
            ...mapActions(["setUserName"]),
            getStarted() {
                if (this.userName===null||this.userName===''){
                    alert("UserName can not be null!");
                    return;
                }
                this.setUserName(this.userName);
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
