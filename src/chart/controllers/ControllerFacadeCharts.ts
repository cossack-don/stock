import { BaseController } from "../../BaseController";
import { defaultParamsChart } from "../maps/defaultParamsChart.ts";
import { ControllerCardsPromotion } from "./ControllerCardsPromotion.ts";
import { ControllerHistoriesCharts } from "./ControllerHistoriesCharts.ts";

export class ControllerFacadeCharts extends BaseController {
	private controllerPromotion:any;
	private controllerHistoriesCharts:any;

	constructor() {
		super();
		this.controllerPromotion = new ControllerCardsPromotion();
		this.controllerHistoriesCharts = new ControllerHistoriesCharts()
	}

	async FacadeChartsGetData() {
		await this.controllerPromotion.getCurrentPricesPromotions(defaultParamsChart.listTickers)
		await this.controllerHistoriesCharts.getListsHistories()
	}

	// Геттер для доступа к companyHistories
	get State() {
		return this.controllerPromotion.listPricesPromotions
	}
	get State2() {
		return this.controllerHistoriesCharts.companyHistories
	}
}