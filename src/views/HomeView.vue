<script setup>
import Main from '@/components/Main.vue';
import { ref, onMounted, watch } from 'vue'



// const app = new Vue({
//   el: '#app',
//   data: {
//     name: ''
//   },
//   onMounted() {
//     console.log('Component mounted.');
//     name.value = localStorage.getItem('name');
//   },
//   watch: {
//     name: function (val) {
//       console.log(val)
//     }
//   }
// })
</script>

<template>
  <main>

    <div id="app">
      <Main />
    </div>
  </main>
</template>
