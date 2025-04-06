<template>

    <Content>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form @submit.prevent="login">
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-model="username" type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-model="password" type="password" class="form-control" id="password">
                    </div>
                    <div style="color: red">{{ error_login }}</div>
                    <button type="submit" class="btn btn-primary w-100">登录</button>
                </form>
            </div>
        </div>
    </Content>

</template>

<script>
import Content from '../components/ContentBase.vue'
import router from '@/router';
import { ref } from 'vue';
import store from '@/store';


export default {
    name: 'LoginView',
    components: {
        Content,
    },

    setup() {

        let username = ref('');
        let password = ref('');
        let error_login = ref('');
        const login = () => {
            error_login.value = '';
            if (username.value === 'test' && password.value === '123123') {
                store.dispatch('login', {
                    userId: 1,
                    userName: username.value,
                    is_login: true,
                });
                router.push("/");
            }
            else {
                error_login.value = '用户名或密码错误';
            }
        }

        return {
            username,
            password,
            error_login,
            login,
        }

    }
}


</script>


<style scoped></style>