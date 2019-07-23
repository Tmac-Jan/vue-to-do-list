<template>
    <Card class="mainContainer" style="width:320px">
        <div style="text-align:center">
            <Avatar class="user-img" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
            <h3>Name:{{$store.state.userName}}</h3>
            <h3>Phone:86-13192266960</h3>
        </div>
    </Card>
</template>
<script>
    export default {

    }
</script>
<style scoped>
    .mainContainer{
        margin: 0 auto;
    }
    .user-img{
        width: 100px;
        height: 100px;
        border-radius: 100px ;
    }
</style>
