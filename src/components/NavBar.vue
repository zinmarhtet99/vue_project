<template>
    <div class="navBar">
        <img alt="Vue logo" src="../assets/logo.png">
        <div class="row justify-content-center">
            <nav class="navbar navbar-expand-lg navbar-light bg-dark p-3">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <!-- <router-link to='/'>Homework Components</router-link> -->
                            <router-link class="text-white" to='/'>Homework Components</router-link>
                        </li>
                        <span>|</span>
                        <li class="nav-item active">
                            <router-link class="text-white" to='/testing'>Testing Components</router-link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
<style>
.text-white {
    text-decoration: none;
    padding: 15px;
}

.text-white:hover {
    background-color: white;
    color: black !important;
}
</style>