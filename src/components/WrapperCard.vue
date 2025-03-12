<script setup lang="ts">

</script>


<template>
	<div class="container" style="display: flex; flex-wrap: wrap">
		<slot></slot>
	</div>
</template>

<style scoped>
.container {
	box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
}
</style>