<script setup>
import { ref, onMounted } from 'vue';
import CartaPeliculasView from '@/components/PropsCatalogo.vue';
const peliculas = ref({});

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_HOST = import.meta.env.VITE_API_HOST;
console.log(API_URL, API_KEY, API_HOST);

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
        const response = await fetch(url, options);
        const result = await response.json();

        peliculas.value = result
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
onMounted(() => {
    cargarPeliculanas();
}) 
</script>

<template>
    <div class="pl-46">
        <h1>PRUEBA DE FUNCIONAMIENTO</h1>
        <section class="grid grid-cols-1 bg-white rounded-3xl shadow-xl p-21 
    md:grid-cols-2
    lg:grid-cols-4
    sm:grid-cols-1 gap-4 w-full">
            <CartaPeliculasView v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image"
                :adult="pelicula.adult" :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres"
                :id="pelicula.id" :name="pelicula.name" :original-language="pelicula.originalLanguage"
                :original-name="pelicula.originalName" :overview="pelicula.overview" :popularity="pelicula.popularity"
                :vote-average="pelicula.voteAverage" :vote-count="pelicula.voteCount" />

        </section>
    </div>
</template>

<style scoped></style>