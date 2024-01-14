$(function(e) {
	'use strict'
	/* Chartjs (#area-chart1) */
	var myCanvas = document.getElementById("area-chart1");
	myCanvas.height = "100";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, 'rgb(81, 15, 167, 0.2)');
	var myChart = new Chart(myCanvas, {
		type: 'line',
		data: {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			type: 'line',
			datasets: [{
				label: 'Weekly sales',
				data: [100, 120, 90, 70, 90, 130, 100, 140],
				backgroundColor: gradientStroke1,
				borderColor: 'rgb(81, 15, 167) ',
				pointBackgroundColor: '#fff',
				pointHoverBackgroundColor: gradientStroke1,
				pointBorderColor: gradientStroke1,
				pointHoverBorderColor: gradientStroke1,
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverRadius: 0,
				borderWidth: 2
			}, ]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.9)',
				bodyFontColor: 'rgba(225,225,225,0.9)',
				backgroundColor: 'rgba(0,0,0,0.7)',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [{
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					display: false,
					ticks: {
						display: false,
					}
				}]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	});
	/* Chartjs (#area-chart1) closed */
	/* Chartjs (#area-chart2) */
	var myCanvas = document.getElementById("area-chart2");
	myCanvas.height = "100";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, 'rgb(23, 193, 244, 0.2)');
	var myChart = new Chart(myCanvas, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			type: 'line',
			datasets: [{
				label: 'Montly sales',
				data: [1240, 1847, 1428, 1325, 1475, 1869, 1936, 2482, 864, 1247, 1456, 1894],
				backgroundColor: gradientStroke1,
				borderColor: 'rgb(23, 193, 244) ',
				pointBackgroundColor: '#fff',
				pointHoverBackgroundColor: gradientStroke1,
				pointBorderColor: gradientStroke1,
				pointHoverBorderColor: gradientStroke1,
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverRadius: 0,
				borderWidth: 2
			}, ]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.9)',
				bodyFontColor: 'rgba(225,225,225,0.9)',
				backgroundColor: 'rgba(0,0,0,0.7)',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [{
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					display: false,
					ticks: {
						display: false,
					}
				}]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	});
	/* Chartjs (#area-chart2) closed */
	/* Chartjs (#area-chart3) */
	var myCanvas = document.getElementById("area-chart3");
	myCanvas.height = "100";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, 'rgb(78, 204, 72, 0.2)');
	var myChart = new Chart(myCanvas, {
		type: 'line',
		data: {
			labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
			type: 'line',
			datasets: [{
				label: 'Yearly sales',
				data: [25635, 25874, 24785, 32453, 18520, 34250, 26870, 36500],
				backgroundColor: gradientStroke1,
				borderColor: 'rgb(78, 204, 72) ',
				pointBackgroundColor: '#fff',
				pointHoverBackgroundColor: gradientStroke1,
				pointBorderColor: gradientStroke1,
				pointHoverBorderColor: gradientStroke1,
				pointBorderWidth: 0,
				pointRadius: 0,
				pointHoverRadius: 0,
				borderWidth: 2
			}, ]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			responsive: true,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: 'rgba(225,225,225,0.9)',
				bodyFontColor: 'rgba(225,225,225,0.9)',
				backgroundColor: 'rgba(0,0,0,0.7)',
				cornerRadius: 3,
				intersect: false,
			},
			scales: {
				xAxes: [{
					gridLines: {
						color: 'transparent',
						zeroLineColor: 'transparent'
					},
					ticks: {
						fontSize: 2,
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					display: false,
					ticks: {
						display: false,
					}
				}]
			},
			title: {
				display: false,
			},
			elements: {
				line: {
					borderWidth: 1
				},
				point: {
					radius: 4,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	});
	/* Chartjs (#area-chart3) closed */
	/* Apex Charts*/
	var options = {
		chart: {
			height: 350,
			type: 'area',
			animations: {
				enabled: false
			},
			zoom: {
				enabled: false
			},
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		series: [{
			name: 'sales',
			data: [{
				x: 'Dec 23 2018',
				y: null
			}, {
				x: 'Dec 24 2018',
				y: 44
			}, {
				x: 'Dec 25 2018',
				y: 31
			}, {
				x: 'Dec 26 2018',
				y: 38
			}, {
				x: 'Dec 27 2018',
				y: 36
			}, {
				x: 'Dec 28 2018',
				y: 32
			}, {
				x: 'Dec 29 2018',
				y: 55
			}, {
				x: 'Dec 30 2018',
				y: 51
			}, {
				x: 'Dec 31 2018',
				y: 67
			}, {
				x: 'Jan 01 2019',
				y: 22
			}, {
				x: 'Jan 02 2019',
				y: 34
			}, {
				x: 'Jan 03 2019',
				y: 58
			}, {
				x: 'Jan 04 2019',
				y: 45
			}, {
				x: 'Jan 05 2019',
				y: 11
			}, {
				x: 'Jan 06 2019',
				y: 4
			}, {
				x: 'Jan 07 2019',
				y: 15,
			}, {
				x: 'Jan 08 2019',
				y: null
			}, {
				x: 'Jan 09 2019',
				y: 9
			}, {
				x: 'Jan 10 2019',
				y: 34
			}, {
				x: 'Jan 11 2019',
				y: null
			}, {
				x: 'Jan 12 2019',
				y: 28
			}, {
				x: 'Jan 13 2019',
				y: 13
			}, {
				x: 'Jan 14 2019',
				y: null
			}],
		}],
		labels: ['Sales Monitoring'],
		colors: ['#510fa7'],
		fill: {
			opacity: 0.8,
			type: 'pattern',
			pattern: {
				enabled: true,
				style: ['verticalLines', 'horizontalLines'],
				width: 5,
				depth: 6
			},
		},
		markers: {
			size: 5,
			hover: {
				size: 9
			}
		},
		title: {
			text: '',
		},
		tooltip: {
			intersect: true,
			shared: false
		},
		theme: {
			palette: 'palette1'
		},
		xaxis: {
			type: 'datetime',
		},
		yaxis: {
			title: {
				text: 'Sales'
			}
		}
	}
	var chart = new ApexCharts(document.querySelector("#apexchart"), options);
	chart.render();
	
	/*line*/
	function trigoSeries(cnt, strength) {
		var data = [];
		for (var i = 0; i < cnt; i++) {
			data.push((Math.sin(i / strength) * (i / strength) + i / strength + 1) * (strength * 2));
		}
		return data;
	}
	var colorPalette = ['#510fa7', '#ff9002', '#FEB019', '#FF4560', '#775DD0']
	var optionsLine = {
		chart: {
			height: 340,
			type: 'line',
			zoom: {
				enabled: false
			}
		},
		plotOptions: {
			stroke: {
				width: 4,
				curve: 'smooth'
			},
		},
		colors: colorPalette,
		series: [{
			name: "Last Week",
			data: trigoSeries(68, 14)
		}, {
			name: "This Week",
			data: trigoSeries(62, 12)
		}, ],
		title: {
			floating: false,
			text: '',
			align: 'left',
			style: {
				fontSize: '18px'
			}
		},
		subtitle: {
			text: '',
			align: 'center',
			margin: 30,
			offsetY: 40,
			style: {
				color: '#222',
				fontSize: '24px',
			}
		},
		markers: {
			size: 0
		},
		grid: {},
		xaxis: {
			labels: {
				show: false
			},
			axisTicks: {
				show: false
			},
			tooltip: {
				enabled: false
			}
		},
		yaxis: {
			tickAmount: 2,
			labels: {
				show: false
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			min: 0,
		},
		legend: {
			position: 'top',
			horizontalAlign: 'center',
			offsetY: -20,
			offsetX: -30
		}
	}
	var chartLine = new ApexCharts(document.querySelector('#line'), optionsLine);
	// a small hack to extend height in website sample dashboard
	chartLine.render().then(function() {
		var ifr = document.querySelector("#wrapper");
	});
	var options = {
		chart: {
			height: 405,
			type: 'bar',
		},
		plotOptions: {
			bar: {
				horizontal: true,
				dataLabels: {
					position: 'top',
				},
			}
		},
		dataLabels: {
			enabled: false,
			offsetX: -6,
			style: {
				fontSize: '12px',
				colors: ['#fff']
			}
		},
		stroke: {
			show: true,
			width: 1,
			colors: ['#fff']
		},
		series: [{
			name: "High sales",
			data: [54, 62, 61, 58, 55, 60, 72, 70, 65]
		}, {
			name: "Low sales",
			data: [13, 12, 13, 12, 13, 14, 12, 15, 16]
		}],
		colors: ['#510fa7', '#ff9002'],
		xaxis: {
			categories: [2011, 2012, 20013, 2014, 2015, 2016, 2017, 2018, 2019],
		},
	}
	var chart = new ApexCharts(document.querySelector("#apexchart2"), options);
	chart.render();
});