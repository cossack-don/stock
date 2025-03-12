<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
	TemplateMiniChart,
	ControllerCardsPromotion,
	ControllerHistoriesCharts,
	defaultParamsChart,
	PanelChart
} from "./chart";
import ListCards from './components/ListCards.vue'
import { ControllerFacadeCharts } from "./chart/controllers/ControllerFacadeCharts.ts";

const controllerPromotion = new ControllerCardsPromotion()
const controllerHistoriesCharts = new ControllerHistoriesCharts()

const f = new ControllerFacadeCharts()
onMounted(async ()=> {
	// await controllerPromotion.getCurrentPricesPromotions(defaultParamsChart.listTickers)
	// await controllerHistoriesCharts.getListsHistories()
	await f.FacadeChartsGetData()
})

const stateTypesCharts = ref('line')
const onChangeTypeChart = (e) => stateTypesCharts.value = e
</script>

<template>
	<h1>Инвестиции</h1>
	<ListCards :payload="f.State" />

	<PanelChart @change="onChangeTypeChart"/>
	<div class="grid-container">
	<template v-for="(item,company) in f.State2">
		<TemplateMiniChart
			class="grid-item"
			v-if="company"
			:colorLine="item.colorLine"
			:title="item.title"
			:typeChart="stateTypesCharts"
			:payloadDate="item.historyDate"
			:payloadValues="item.historyValues"
		/>
	</template>
	</div>
</template>
