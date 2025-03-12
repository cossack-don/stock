
import { BaseController } from "../../BaseController.ts";
import { ServiceChart } from "../api";
import { defaultParamsChart } from "../maps/defaultParamsChart.ts";
import { ControllerFactoryCompanies } from "./ControllerFactoryCompanies.ts";

export class ControllerHistoriesCharts extends BaseController{
	private FactoryCompanies:any;

	constructor() {
		super();
		this.FactoryCompanies = new ControllerFactoryCompanies();
	}

	async adapterToChartsData() {
		const response = await ServiceChart.getListsHistories()

		const result = response.map((item,index) => {
			return {
				key:item.history.data[index][3],
				title:item.history.data[index][2],
				colorLine:defaultParamsChart.colorsLines[index],
				listDate: item.history.data.map((el)=> el[1]),
				listValues: item.history.data.map((el)=> el[11])
			}
		})

		return result;
	}

	// Геттер для доступа к companyHistories
	get companyHistories() {
		return this.FactoryCompanies.companyHistories;
	}

	// Метод для получения и обработки данных
	async getListsHistories() {
		const clearData = await this.adapterToChartsData();

		clearData.forEach((item) =>
			this.FactoryCompanies.createCompany(
				item.key,
				item.listDate,
				item.listValues,
				item.title,
				item.colorLine
			)
		);
	}
}