import { reactive } from "vue";
import { BaseController } from "../../BaseController.ts";

export class ControllerFactoryCompanies extends BaseController{
	companyHistories = reactive({})

	_createHistory() {
		return {
			historyDate:[],
			historyValues: [],
			title:'',
			colorLine:''
		};
	}

	_getOrCreateHistory = (key) => {
		if (this.companyHistories[key]) return this.companyHistories[key];

		const newHistory = this._createHistory();
		this.companyHistories[key] = newHistory;

		return newHistory;
	}

	createCompany (key, listDates, listValues, title, colorLine){
		const history = this._getOrCreateHistory(key);

		if (!history) {
			console.error(`История для компании "${key}" не была создана.`);
			return;
		}

		history.historyDate = [...history.historyDate, ...listDates];
		history.historyValues = [...history.historyValues, ...listValues];
		history.title = title;
		history.colorLine = colorLine;
	}
}