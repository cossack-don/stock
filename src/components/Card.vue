<script setup lang="ts">
const props = defineProps<{
	payload?: any
}>()
</script>


<template>
	<div :style="{background:props.payload.background}" class="card-container">

		<div style="display: flex; justify-content: space-between;">
			<div>
				<h3 style="margin-right: 6px;">{{props.payload.name}}</h3>
				<p class="font-size-16">Сектор - {{props.payload.sector}}</p>
				<p class="font-size-16 mt-6">Средняя цена - {{props.payload.average}}</p>
				<p class="font-size-16 mt-6 current-price">Текущая цена - {{props.payload.lastPrice}} руб.</p>
			</div>

			<div>
				<img class="img" width="80px" height="80px" :src="props.payload.urlLogo"/>
			</div>
		</div>


	</div>
</template>

<style scoped>
.card-container {
	color:white;
	padding: 20px;
	width: 100%;
	border-radius: 8px;

}
.current-price {
	color:#00a328;
	background: white;
	font-weight: bold;
	padding: 8px;
	border-radius: 8px;

}

.mt-6 {
	margin-top:6px;
}
.font-size-16 {
	font-size: 14px;
}

.img {
	border-radius: 8px;
}
</style>