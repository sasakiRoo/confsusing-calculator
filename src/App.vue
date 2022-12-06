<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Main from './components/Main.vue'
// import TestAds from './components/TestAds.vue'
</script>
<template>
    <div class="wrapper flex justify-center items-center flex-col bg-blue-500">
        <h1>ConfusedLator /*+-</h1>
        <Main />
        <!-- <TestAds/> -->
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

.wrapper {
    height: 100vh;
}

.wrapper h1 {
    font-family: 'Rubik Mono One', sans-serif;
    /*background: -webkit-linear-gradient(#7E22CE, #CBD5E1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    color: #CBD5E1;
    font-size: 1.2em;
}
</style>