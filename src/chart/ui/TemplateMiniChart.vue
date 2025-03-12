<template>
	<v-chart
		class="chart"
		:option="option"
		autoresize
	/>
</template>

<script setup lang="ts">
import { zoom ,tooltip, fnTitle, controllerPulsatingPoints} from '../../chart'
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart, BarChart, CandlestickChart, PictorialBarChart, EffectScatterChart } from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	DataZoomComponent,
	ToolboxComponent,
	GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide, computed } from "vue";
// import { useControllerPulsatingPoints } from ".//pulsatingPoints";/**/

use([
	CanvasRenderer,
	LineChart,
	BarChart,
	CandlestickChart,
	EffectScatterChart,
	TitleComponent,
	TooltipComponent,
	PictorialBarChart,
	LegendComponent,
	DataZoomComponent,
	ToolboxComponent,
	GridComponent
]);

provide(THEME_KEY, 'light');

const props = defineProps<{
	payloadDate?: any
	payloadValues?: any
	title?: string
	colorLine?: any
	typeChart?:any
}>()

const colorLine = computed(() => {
	return props.colorLine
})

const listValues = computed(() => {
	return props.payloadValues;
})

const listDates = computed(() => {
	return props.payloadDate
})

const title = computed(() => {
	return props.title
})

const { objectPulsatingPoints } = controllerPulsatingPoints(listValues.value,listDates.value, colorLine)

const typeChart = computed(() => props.typeChart)
const option = ref({
	title: fnTitle(title),
	dataZoom: zoom,
	tooltip: tooltip,
	xAxis: [
		{
			data: listDates,
		},
	],
	yAxis: [
		{
			position: 'right',
			splitLine: {
				show: false
			}
		},
	],
	series: [
		{
			type: typeChart,
			showSymbol: false, // Скрываем символы для линии
			data: listValues,
			areaStyle: {
				opacity: 0.05
			},
			itemStyle: {
				color: colorLine
			},
			name: 'Email',
		},
		objectPulsatingPoints
	]
});
</script>

<style scoped>
.chart {
	height: 250px;
	width: 100%;
	border-radius: 8px;
	box-shadow: 0 4px 24px rgba(0, 0, 0, .12);
}
</style>