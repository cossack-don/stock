import moment from "moment/moment";

export const defaultParamsChart = {
	startDate: moment().subtract(3, 'months').format('YYYY-MM-DD'),
	endDate:moment().format('YYYY-MM-DD'),
	listTickers : ['SBER','MTSS', 'TATN','LSRG','BSPB'],
	colorsLines:['#298709','#e80533','#c8cace', '#c8193a', '#2d2e2e' ]
}