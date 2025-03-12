<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
	payload: any
}>()

</script>

<template>
	<div class="grid-container">

		<div :style="{background:item.background}"  class="grid-item " v-for="(item,index ) in props.payload">

			<div style="display: flex; justify-content: space-between;">
				<div>
					<h3 style="margin-right: 6px;">{{item.name}}</h3>
					<p class="font-size-16">Сектор - {{item.sector}}</p>
					<p class="font-size-16 mt-6">Средняя цена - {{item.average}}</p>

					<p class="font-size-16 mt-6 current-price">Текущая цена - {{item.lastPrice}} руб.</p>

				</div>

				<div>
					<img class="img" width="80px" height="80px" :src="item.urlLogo"/>
				</div>
			</div>


		</div>

	</div>


</template>


<style scoped>


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


.grid-container  {
	display: grid;
	gap: 20px; /* Отступы между элементами */
	padding: 20px; /* Отступы внутри контейнера */


}

.grid-item {
	color:white;
	padding: 20px;
	gap:20px;
	min-width: 400px;

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
		grid-template-columns: repeat(3, 1fr); /* 4 колонки на экранах от 1200px */
	}
}
</style>