<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <NavBar />
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <router-view />
    </div>
</template>
<script>
import NavBar from './components/NavBar'
export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>