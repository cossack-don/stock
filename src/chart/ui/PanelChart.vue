<script setup lang="ts">

const emit = defineEmits(['change'])
</script>

<template>
	Panel
	<button @click="emit('change', 'line')">Line</button>
	<button @click="emit('change', 'bar')">Bar</button>
</template>