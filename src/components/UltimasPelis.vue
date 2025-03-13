<script setup>
import { ref, onMounted } from 'vue';
import PropsCatalogo from '@/components/PropsCatalogo.vue';
import SkeletonCatalogo from '@/components/SkeletonCatalogo.vue';
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

        peliculas.value = result.slice(0, 8);
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
    <div v-if="carga">
        <SkeletonCatalogo>
            <img class="object-cover w-full aspect-auto bg-gray-600">
            <h2 class="bg-gray-700 w-full"></h2>
            <!-- <p>{{ overview }} </p> -->
            <span class="w-full bg-gray-700"></span>
            <br>
            <span class="w-full bg-gray-700"></span>
            <br>
            <span class="w-full bg-gray-700"></span>
            <br>
            <span class="w-full bg-gray-700"></span>
            <br>
            <span class="w-full bg-gray-700"></span>
            <br>
            <span class="w-full bg-gray-700"></span>
            <br>
            <br>
            <button type="button"
                class="bg-gradient-to-r from-gray-500 pt via-gray-600 to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "></button>
        </SkeletonCatalogo>
    </div>
    <section>
        <h1 class="text-center text-29">¡ULTIMAS PELICULAS EN NUESTRA PAGINA!</h1>
    </section>
    <article>
        <div class="sm:ml-[30px] mb-20 ">
            <section class="grid md:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4 gap-3">
                <PropsCatalogo v-for="pelicula in peliculas" :key="pelicula.id" :imagen="pelicula.image"
                    :adult="pelicula.adult" :first-air-date="pelicula.firstAirDate" :genres="pelicula.genres"
                    :id="pelicula.id" :name="pelicula.name" :original-name="pelicula.originalName"
                    :overview="pelicula.overview" :popularity="pelicula.popularity" :vote-average="pelicula.voteAverage"
                    :vote-count="pelicula.voteCount" />
            </section>
        </div>
    </article>
</template>

<style scoped></style>