$(function(e) {
	'use strict'
	
	var chartdata1 = [{
		name: 'Tournments',
		type: 'line',
		smooth: true,
		data: [25,14,58,45,15,75,63,45,85,63,24,35,52,43,21,42,36],
		symbolSize: 0,
	}];
	var option1 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '5',
		},
		xAxis: {
			data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			show: false,
			splitLine: {
				lineStyle: {
					color: 'none'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata1,
		color: ['#510fa7']
	};
	var chart1 = document.getElementById('echart1');
	var lineChart1 = echarts.init(chart1);
	lineChart1.setOption(option1);
	
	
	var chartdata2 = [{
		name: 'Participants',
		type: 'line',
		smooth: true,
		data: [35,52,43,21,42,36,47,25,14,58,45,15,75,63,45,85,63,24],
		symbolSize: 0,
	}];
	var option2 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '5',
		},
		xAxis: {
			data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			show: false,
			splitLine: {
				lineStyle: {
					color: 'none'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata2,
		color: ['#0fa751']
	};
	var chart2 = document.getElementById('echart2');
	var lineChart2 = echarts.init(chart2);
	lineChart2.setOption(option2);
	
	
	var chartdata3 = [{
		name: 'Contribution',
		type: 'line',
		smooth: true,
		data: [25,14,58,85,63,24,35,52,45,15,75,63,45,43,21,42,36,54],
		symbolSize: 0,
	}];
	var option3 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '5',
		},
		xAxis: {
			data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			show: false,
			splitLine: {
				lineStyle: {
					color: 'none'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata3,
		color: ['#17c1f4']
	};
	var chart3 = document.getElementById('echart3');
	var lineChart3 = echarts.init(chart3);
	lineChart3.setOption(option3);
	
	var chartdata4 = [{
		name: 'Weekly Players',
		type: 'line',
		smooth: true,
		data: [85,63,24,35,52,43,21,42,36,25,25,14,58,45,15,75,63,45],
		symbolSize: 0,
	}];
	var option4 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '5',
		},
		xAxis: {
			data: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am', '2am', '3am'],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			show: false,
			splitLine: {
				lineStyle: {
					color: 'none'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata4,
		color: ['#ff9002']
	};
	var chart4 = document.getElementById('echart4');
	var lineChart4 = echarts.init(chart4);
	lineChart4.setOption(option4);
	
	var chartdata5 = [{
		name: 'Today Signups',
		type: 'line',
		smooth: true,
		data: [85,63,24,35,52,75,63,45],
		symbolSize: 0,
	}];
	var option5 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '5',
		},
		xAxis: {
			show: false,	
			data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			axisLine: {
				show: false,
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			},
			boundaryGap: false,
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			show: false,
			splitLine: {
				lineStyle: {
					color: 'none'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata5,
		color: ['#ff9002']
	};
	var chart5 = document.getElementById('echart5');
	var lineChart5 = echarts.init(chart5);
	lineChart5.setOption(option5);
	
	
	/*--echart6--*/
	var chartdata2 = [{
		name: 'Game Installs',
		type: 'line',
		smooth: true,
		data: [6854, 8578, 6354, 7896, 6548, 7856, 9654, 8569, 7854, 3564, 7563, 9578],
		symbolSize: 0,
		lineStyle: {
			normal: {
				width: 0,
			}
		},
		itemStyle: {
			normal: {
				areaStyle: { type: 'default' ,
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset: 0, color: '#3701ff'},
							{offset: 1, color: '#510fa7'}
						]
						)
					}
				}
			}
		},
	{
	name: 'New Players',
	type: 'line',
	areaStyle: {},
	smooth: true,
	data: [2856, 6695, 6354, 7458, 6534, 6354, 7584, 6589, 3654, 6324, 4578 ,6584],
	symbolSize: 0,
	lineStyle: {
		normal: {
			width:0,
		}
	},
	itemStyle: {
		normal: {
			areaStyle: { type: 'default' ,
				color: new echarts.graphic.LinearGradient(
					0, 0, 0, 1,
					[
						{offset: 0, color: '#ff9002'},
						{offset: 1, color: '#d47d13'}
					]
					)
				}
			}
		}
	
	}];
	var chart2 = document.getElementById('echart6');
	var barChart2 = echarts.init(chart2);
	var option2 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '15',
		},
		xAxis: {
			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			},
			boundaryGap: false,
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			splitLine: {				
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				show:false,
				fontSize: 10,
				color: '#000'
			}
		},		
		series: chartdata2,
		color: ['#510fa7','#ff9002']
	};
	barChart2.setOption(option2);
	/*--echart6--*/
	
	/*--echart7--*/
	var chartdata6 = [{
		name: 'Game Performance',
		type: 'line',
		smooth: true,
		data: [3, 5, 8, 9, 12, 10, 9, 14, 12, 16, 18, 21, 18, 21, 24, 26, 26, 28],
		symbolSize: 0,
		lineStyle: {
			normal: {
				width: 1,
			}
		},
		itemStyle: {
			normal: {
				areaStyle: { type: 'default' ,
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
							{offset: 0, color: '#3701ff'},
							{offset: 1, color: '#510fa7'}
						]
						)
					}
				}
			}
		}
	];
	var option6 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008','2009','2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			},
			boundaryGap: false,
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		yAxis: {
			splitLine: {				
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#eaeaea'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#000'
			}
		},
		series: chartdata6,
		color: ['#510fa7']
	};
	var chart6 = document.getElementById('echart7');
	var lineChart6 = echarts.init(chart6);
	lineChart6.setOption(option6);
	/*--echart7--*/
});