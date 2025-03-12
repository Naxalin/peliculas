<script setup>
import { ref, onMounted } from 'vue';
import Form from "@components/Form.vue";
import PropsCatalogo from '@/components/PropsCatalogo.vue';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
const peliculas = ref({});

const carga = ref(true);


const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;

const url = `${API_URL}/Serie/Popular?Page=1&Language=en-US`;
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': API_KEY,
    'x-rapidapi-host': API_HOST
  }
};


const cargarPeliculanas = async () => {
  try {
    carga.value = true;
    const response = await fetch(url, options);
    const result = await response.json();

    peliculas.value = result;
    let i = 0
    let limitador = true
    // while (limitador) {
    //   console.log(result);
    //   i++;
    //   if (i < 10) {
    //     limitador = false;
    //   }
    // }

    console.log(result);
    carga.value = false;
  } catch (error) {
    console.error(error);
    carga.value = false;
  }
}

onMounted(() => {

  cargarPeliculanas();
}) 
</script>
<template>
  <Menu />
  <section class="flex-1   w-full pl-64">
    <iframe class="w-full" width="760" height="615" src="https://www.youtube.com/embed/oDmOReViIbs?si=-VLiZ8J9Meh46Dc9"
      title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </section>
  <br>
  <hr>
  <div class="ml-[260px] mb-20 ">
    <section class="grid md:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4 gap-3">
      <PropsCatalogo v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image" :adult="pelicula.adult"
        :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres" :id="pelicula.id" :name="pelicula.name"
        :original-name="pelicula.originalName" :overview="pelicula.overview" :popularity="pelicula.popularity"
        :vote-average="pelicula.voteAverage" :vote-count="pelicula.voteCount" />
    </section>
  </div>
  <Form />
  <Footer />
</template>

<style scoped></style>
