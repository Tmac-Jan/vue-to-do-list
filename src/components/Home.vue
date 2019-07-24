
<template>
    <div class="layout">
        <Layout class="layout-child">
            <Header>
                <Button type="primary" class="left-btn" @click="goBack">Back</Button>
                <div class="user-div" >
                    <Avatar class="user-img" size="large" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <span class="userName-span">{{$store.state.userName}}</span>
                </div>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu @on-select="MenuSelect" active-name="1-2" theme="light" width="auto" :open-names="['1']">

                        <!--                            <template slot="title">-->
                        <!--                                <Icon type="ios-navigate"></Icon>-->
                        <!--                               操作-->
                        <!--                            </template>-->
                        <MenuItem name="ToDoItemGroup">To-Do-List</MenuItem>
                        <MenuItem name="User">User</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <router-view></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        methods: {
            MenuSelect(name) {
                this.$router.push({
                    name: name
                })
            },
            goBack(){
                const result = confirm("go back？");
                if (result && window.history.length > 1) {
                    this.$router.push({name: 'Welcome'});
                }
            }
        }

    }
</script>
<style scoped>
    .user-img{
     margin-right: 8px;
    }
    .user-div{
        float: right;
    }
    .left-btn{
        float: left;
        margin-top: 15px;
    }
    .userName-span{
        color: white;
    }
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
        width: 100%;
        position: fixed;
    }
.layout-child{
    height: 100%;
}
    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
</style>
