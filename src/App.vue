<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
	TemplateMiniChart,
	PanelChart
} from "./chart";
import ListCards from './components/ListCards.vue'
import { ControllerFacadeCharts } from "./chart/controllers/ControllerFacadeCharts.ts";

import Card from './components/Card.vue'
import WrapperCard from './components/WrapperCard.vue'

const f = new ControllerFacadeCharts()
onMounted(async ()=> {

	await f.FacadeChartsGetData()
})

const stateTypesCharts = ref('line')
const onChangeTypeChart = (e) => stateTypesCharts.value = e
</script>

<template>
	<h1>Инвестиции</h1>
<!--	<ListCards :payload="f.State" />-->

	<PanelChart @change="onChangeTypeChart"/>
	<div class="grid-container">
	<template v-for="(item,company, index) in f.State2">

		<WrapperCard class="grid-item">
			<Card :payload="f.State[index]"/>

			<TemplateMiniChart

				v-if="company"
				:colorLine="item.colorLine"
				:title="item.title"
				:typeChart="stateTypesCharts"
				:payloadDate="item.historyDate"
				:payloadValues="item.historyValues"
			/>
		</WrapperCard>


	</template>
	</div>

</template>
