<script setup>
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="container">
        <header>
            <Menu />
        </header>
        <main>
            <slot></slot>
        </main>

        <Footer />

    </div>
</template>

<style scoped></style>
