import { BaseController } from "../../BaseController";
import { mapUtilsTickers } from "../mapUtilsTickers.ts";
import { ServiceChart } from "../api";
import {reactive} from 'vue'

export class ControllerCardsPromotion extends BaseController{

	listPricesPromotions = reactive([])

	async getCurrentPricesPromotions(tickers) {
		const data = await ServiceChart.getInfoPromotions(tickers)

		// Обработка данных
		const securities = data.securities.data;
		const marketData = data.marketdata.data;

		// Собираем данные по каждому тикеру
		const stocksData = tickers.map((ticker) => {
			const securityInfo = securities.find((item) => item[0] === ticker);
			const marketInfo = marketData.find((item) => item[0] === ticker);

			if (securityInfo && marketInfo) {
				return {
					ticker: securityInfo[0],
					name: securityInfo[2],
					lastPrice: marketInfo[2], // текущая цена
				};
			} else {
				return {
					ticker,
					error: `Данные по тикеру ${ticker} не найдены.`,
				};
			}
		});


		const result = 	stocksData.map((item,index) => {
			return {
				name:item.name,
				key:item.ticker,
				lastPrice:item.lastPrice,
				background:mapUtilsTickers[index].background,
				sector:mapUtilsTickers[index].sector,
				urlLogo:mapUtilsTickers[index].urlLogo,
				average:mapUtilsTickers[index].average
			}
		})

		this.listPricesPromotions = result

		return this.listPricesPromotions
	}
}