import { ControllerCardsPromotion } from "../controllers/ControllerCardsPromotion.ts";
import { defaultParamsChart } from "../maps/defaultParamsChart.ts";

export const ServiceChart = {
	getListsHistories: async(
		startDate = defaultParamsChart.startDate,
		endDate = defaultParamsChart.endDate,
		tickers = defaultParamsChart.listTickers
	) => {
		const URL = [
			`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${tickers[0]}.json?from=${startDate}&till=${endDate}&limit=100&start=0`,
			`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${tickers[1]}.json?from=${startDate}&till=${endDate}&limit=100&start=0`,
			`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${tickers[2]}.json?from=${startDate}&till=${endDate}&limit=100&start=0`,
			`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${tickers[3]}.json?from=${startDate}&till=${endDate}&limit=100&start=0`,
			`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities/${tickers[4]}.json?from=${startDate}&till=${endDate}&limit=100&start=0`
		]

		try {
			const responses = await Promise.all(URL.map(url => fetch(url)));
			const data = await Promise.all(responses.map(response => response.json()));

			return data
		} catch (error) {
			console.error('Ошибка в одном из запросов:', error);
		}
	},
	getInfoPromotions:async (tickers) => {
		const URL = `https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json?securities=${tickers.join(',')}`;
		const response = await fetch(URL);
		const data = await response.json();

		return data
	}
}