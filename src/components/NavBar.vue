<template>

    <nav class="navbar navbar-expand-xl navbar-light bg-light">
        <div class="container">
            <router-link class="navbar-brand" :to="{ name: 'mine' }">Myspace</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse show" id="navbarText">
                <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" :to="{ name: 'friend' }">好友</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" active-class="active" :to="{ name: 'forum' }">论坛</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav" v-if="$store.state.is_login">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'mine' }">01_Dreamer</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" style="cursor: pointer">退出</a>
                    </li>
                </ul>
                <ul class="navbar-nav" v-else>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'login' }">登录</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'register' }">注册</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>



<script>

export default {
    name: "NavBar",

}


</script>


<style scoped></style>