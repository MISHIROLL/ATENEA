$(function(e){
  'use strict'
    /*-----MorriesBarChart-----*/
    var ctx = document.getElementById("lineChart5");
	  ctx.height = 300;
	    var myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [ 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: "Administration",
					borderColor: "#510fa7",
					borderWidth: "2",
					backgroundColor: "transparent",
					pointHighlightStroke: "rgba(81, 15, 167,0.5)",
					data: [27, 28, 30, 26, 20, 21],
					pointRadius: 0,
				}, {
					label: "Development",
					borderColor: "#ff9002",
					borderWidth: "2",
					backgroundColor: "transparent",
					pointHighlightStroke: "#ff9002",
					data: [25, 20, 21, 23, 27, 24],
					pointRadius: 0,
				},{
					label: "Infrastructure",
					borderColor: "#0fa751",
					borderWidth: "2",
					backgroundColor: "transparent",
					pointHighlightStroke: "#0fa751",
					data: [24, 25, 31, 24, 27, 24,30],
					pointRadius: 0,
				}, {
					label: "Maintanance",
					borderColor: "#17c1f4",
					borderWidth: "2",
					backgroundColor: "transparent",
					pointHighlightStroke: "#17c1f4",
					data: [21, 25, 18, 25, 24, 26, 35],
					pointRadius: 0,
				}, {
					label: "Support",
					borderColor: "#ec2d38",
					borderWidth: "2",
					backgroundColor: "transparent",
					pointHighlightStroke: "#ec2d38",
					data: [25, 18, 27, 25, 23, 24,30],
					pointRadius:0,
				}
				]
			},
			options: {
				scales: {
					xAxes: [{
						barPercentage: 0.3,
						ticks: {
							fontColor: "#6b6f80",
						 },
						display: true,
						gridLines: {
							color: 'rgba(0,0,0,0.061)'
						}
					}],
					yAxes: [{
						ticks: {
							fontColor: "rgba(0,0,0,0.5)",
						 },
						display: true,
						gridLines: {
							display: false,
						},
						scaleLabel: {
							display: true,
							labelString: 'Price',
							fontColor: '#6b6f80'
						}
					}]
				},
				legend: {
					labels: {
						fontColor: "#6b6f80"
					},
				},
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				tooltips: {},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				elements: {
					line: {
						borderWidth: 2
					},
					point: {
						radius: 2,
						hitRadius: 0,
						hoverRadius: 0
					}
				}
			}
		});
		
		 /*-----MorriesBarChart-----*/
    var ctx = document.getElementById("lineChart6");
	  ctx.height = 300;
	    var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: [ 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
					label: "Revenue Growth",
					borderColor: "#510fa7",
					borderWidth: "2",
					backgroundColor: "#510fa7",
					pointHighlightStroke: "rgba(81, 15, 167,0.5)",
					data: [27, 28, 30, 26, 20, 21],
					pointRadius: 0,
				}, {
					label: "Profit Growth",
					borderColor: "#ff9002",
					borderWidth: "2",
					backgroundColor: "#ff9002",
					pointHighlightStroke: "#ff9002",
					data: [25, 22, 23, 23, 27, 24],
					pointRadius: 0,
				},{
					label: "Profit Margin",
					borderColor: "#17c1f4",
					borderWidth: "2",
					backgroundColor: "#17c1f4",
					pointHighlightStroke: "#17c1f4",
					data: [24, 25, 31, 24, 27, 24],
					pointRadius: 0,
				}]
			},
			options: {
				scales: {
					xAxes: [{
						barPercentage: 0.2,
						ticks: {
							fontColor: "#6b6f80",
						 },
						display: true,
						gridLines: {
							color: 'rgba(0,0,0,0.061)'
						}
					}],
					yAxes: [{
						ticks: {
							fontColor: "rgba(0,0,0,0.5)",
						 },
						display: true,
						gridLines: {
							display: false,
						},
						scaleLabel: {
							display: true,
							labelString: 'Price',
							fontColor: '#6b6f80'
						}
					}]
				},
				legend: {
					labels: {
						fontColor: "#6b6f80"
					},
				},
				responsive: true,
				maintainAspectRatio: false,
				tooltips: {
					mode: 'index',
					intersect: false,
				},
				tooltips: {},
				hover: {
					mode: 'nearest',
					intersect: true
				},
				elements: {
					line: {
						borderWidth: 2
					},
					point: {
						radius: 2,
						hitRadius: 0,
						hoverRadius: 0
					}
				}
			}
		});

    /*-----AreaChart1-----*/
    var ctx = document.getElementById( "AreaChart1" );
	ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [65, 59, 84, 84, 51, 55, 40],
                label: 'Market value',
                backgroundColor: 'rgba(81, 15, 167, 0.9)',
                borderColor: 'rgba(81, 15, 167)',
				pointRadius: 0,
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
                titleFontColor: '#6b6f80',
                bodyFontColor: '#6b6f80',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
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
    } );

	/*-----AreaChart2-----*/
    var ctx = document.getElementById( "AreaChart2" );
	 ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [1, 18, 9, 17, 34, 22, 11],
                label: 'Market value',
                backgroundColor: 'rgba(15, 167, 81, 0.9)',
                borderColor: 'rgba(15, 167, 81)',
				pointRadius: 0,
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
                titleFontColor: '#6b6f80',
                bodyFontColor: '#6b6f80',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
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
    } );

	/*-----AreaChart3-----*/
    var ctx = document.getElementById( "AreaChart3" );
	ctx.height = 100;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            type: 'line',
            datasets: [ {
                data: [20, 25, 10, 9, 29, 19, 25, 9, 12, 7, 19 ],
                label: 'Market value',
                backgroundColor: 'rgba(255, 144, 2, 0.9)',
                borderColor: 'rgba(255, 144, 2)',
				pointRadius: 0,
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
                titleFontColor: '#6b6f80',
                bodyFontColor: '#6b6f80',
                backgroundColor: '#fff',
                titleFontFamily: 'Montserrat',
                bodyFontFamily: 'Montserrat',
                cornerRadius: 3,
                intersect: false,
            },
            scales: {
                xAxes: [ {
                    gridLines: {
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    },
                    ticks: {
                        fontSize: 2,
                        fontColor: 'transparent'
                    }
                } ],
                yAxes: [ {
                    display:false,
                    ticks: {
                        display: false,
                    }
                } ]
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

	function generateDayWiseTimeSeries(s, count) {
		var values = [
			[
				4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
			]

		];
		var i = 0;
		var series = [];
		var x = new Date("20 Oct 2018").getTime();
		while (i < count) {
			series.push([x, values[s][i]]);
			x += 86400000;
			i++;
		}
		return series;
	}
	
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
			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
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
	
	var chartdata4 = [{
		name: 'Monthly Budget',
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
			data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
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

});








