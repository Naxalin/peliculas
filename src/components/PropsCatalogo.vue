<script setup>

import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
defineProps({
    adult: {
        type: Boolean,
        default: false
    },
    firstAirDate: {
        type: String,
        default: ""
    },
    genres: {
        type: Array,
        default: () => []
    },
    id: {
        type: Number,
        default: 0
    },
    imagen: {
        type: URL,
        default: "https://picsum.photos/200"
    },
    name: {
        type: String,
        default: ""
    },
    originalLanguage: {
        type: String,
        default: "ES"
    },
    originalName: {
        type: String,
        default: ""
    },
    overview: {
        type: String,
        default: ""
    },
    popularity: {
        type: Number,
        default: 0
    },
    voteAverage: {
        type: Number,
        default: 0
    },
    voteCount: {
        type: Number,
        default: 0
    }
})

const skeleton = ref(null);

onMounted(() => {
    // setTimeout(() => {
    //     if (skeleton.value) {
    //         skeleton.value.hidden = true;
    //     }
    // }, 2000);
});
</script>

<template>

    <!-- <Carta /> -->

    <article class="p-5 shadow-xl bg-white rounded-3xl   gap-2 text-center">
        <img class="object-cover w-full aspect-auto" :src="imagen" alt="imagen de una isla">
        <h2 class="w-full font-bold">{{ name }}</h2>
        <!-- <p>{{ overview }} </p> -->
        <span>Popularidad: {{ popularity }}</span>
        <br>
        <span>Valoración: {{ voteAverage }}</span>
        <br>
        <!-- <span>Votos: {{ voteCount }}</span> -->

        <!-- <span>Idioma: {{ originalLanguage }}</span> -->

        <span>Fecha de estreno: {{ firstAirDate }}</span>
        <br>
        <span>Generos: {{ genres.toString() }}</span>
        <br>
        <br>

        <RouterLink :to="`/detalles/${id}`"
            class="text-white bg-gradient-to-r from-blue-500 pt via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            Ver Ahora
        </RouterLink>
    </article>


</template>