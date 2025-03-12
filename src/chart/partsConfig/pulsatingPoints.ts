import { computed } from "vue";

// Данные для пульсирующей точки (последняя точка)
export const controllerPulsatingPoints = (listValues,listDates, colorLine) => {

	const effectScatterData = computed(() => {
		if (listValues.length > 0) {
			const lastIndex = listValues.length - 1;
			return [[listDates[lastIndex], listValues[lastIndex]]];
		}
		return [];
	});

	return {
		objectPulsatingPoints: {
			type: 'effectScatter', // Пульсирующая точка
			data: effectScatterData,
			symbolSize: 15,
			rippleEffect: {
				brushType: 'stroke', // Тип эффекта (stroke или fill)
				scale: 2.5, // Масштаб пульсации
				period: 3, // Период пульсации (в секундах)
			},
			itemStyle: {
				color: colorLine
			},
		}
	}
}
