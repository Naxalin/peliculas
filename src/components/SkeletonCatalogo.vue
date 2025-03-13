<script>

</script>

<template>
    <div class="animate-pulse">
        <slot />
    </div>
</template>

<style>
.animate-pulse {
    transform: scale(70%);
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1)infinite;

}
</style>