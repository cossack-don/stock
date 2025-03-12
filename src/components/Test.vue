<script setup>

</script>

<template>
	<div class="grid-container">
		<div class="grid-item" v-for="item in 5">
			Chart
		</div>
	</div>
</template>

<style scoped>
.grid-container  {
	display: grid;
	gap: 20px; /* Отступы между элементами */
	padding: 20px; /* Отступы внутри контейнера */
}

.grid-item {
	color:white;
	padding: 20px;
	gap:20px;
	min-width: 300px;
	min-height: 100px;
	background: gray;
	border-radius: 8px;
}

/* Адаптивность для разных размеров экрана */
@media (min-width: 600px) {
	.grid-container {
		grid-template-columns: repeat(2, 1fr); /* 2 колонки на экранах от 600px */
	}
}

@media (min-width: 900px) {
	.grid-container {
		grid-template-columns: repeat(3, 1fr); /* 3 колонки на экранах от 900px */
	}
}

@media (min-width: 1200px) {
	.grid-container {
		grid-template-columns: repeat(4, 1fr); /* 4 колонки на экранах от 1200px */
	}
}
</style>