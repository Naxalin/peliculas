<script setup>
import Menu from "@components/Menu.vue";
import Footer from "@components/Footer.vue";
import Form from "@components/Form.vue";

</script>
<template>
  <Menu />
  <section class="flex-1   w-full pl-64">
    <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/oDmOReViIbs?si=-VLiZ8J9Meh46Dc9"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
  <Form />
  <Footer />
</template>

<style scoped></style>
