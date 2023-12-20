$(function(e) {
	'use strict'

	/*-----sparkline-----*/
	$(".sparkline22").sparkline([2, 4, 3, 4, 7, 5, 4, 3, 5, 6, 2, 4, 3, 4, 5, 4, 5, 4, 3, 4, 6], {
		type: 'line',
		height: '40',
		width: '100',
		lineColor: '#1572e8',
		fillColor: '#ffffff',
		lineWidth: 3,
		spotColor: '#fdb901',
		minSpotColor: '#fdb901'
	});

	/*-----Updating charts-----*/
	$("span.graph").peity("pie")
	var updatingChart = $(".updating-chart1").peity("line", {
		width: "100%",
		height: 140
	})
	setInterval(function() {
		var random = Math.round(Math.random() * 20)
		var values = updatingChart.text().split(",")
		values.shift()
		values.push(random)
		updatingChart.text(values.join(",")).change()
	}, 2500)

	/*-----LineChart echart2-----*/
	var chartdata5 = [{
		name: 'data',
		type: 'line',
		smooth: true,
		data: [20, 20, 36, 18, 15, 20, 25, 20],
		symbolSize: 0,
		lineStyle: {
			normal: {
				width: 5,
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: '#1572e8'
				}, {
					offset: 1,
					color: '#1572e8'
				}])
			}
		},
	}];
	var option8 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		xAxis: {
			data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
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
		color: ['#ff9e27']
	};
	var chart9 = document.getElementById('echart9');
	var lineChart2 = echarts.init(chart9);
	lineChart2.setOption(option8);

	/*-----Barchart-----*/

	/*-----Echart-----*/
    var ctx = document.getElementById( "echart" );
	var myCanvasContext = ctx.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, '#1572e8');
	gradientStroke1.addColorStop(1, '#1572e8');

	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke2.addColorStop(0, '#ff9e27');
	gradientStroke2.addColorStop(1, '#ff9e27');

	ctx.height = 135;
    var myChart = new Chart( ctx, {
        type: 'line',
        data: {
            labels: ['10am', '11am' ,'12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm'],
            type: 'line',
            datasets: [ {
                data: [32, 63, 24, 63, 37, 66, 38, 60, 35],
                label: 'Total Budget',
                backgroundColor:gradientStroke1,
                borderColor: gradientStroke1,
				hoverBackgroundColor:gradientStroke1,
            }, {
                data: [ 56, 26, 64, 33, 86, 34, 54, 34, 62],
                label: 'Total Expenses',
                backgroundColor:gradientStroke2,
                borderColor: gradientStroke2,
				hoverBackgroundColor:gradientStroke2,
            },]
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
					barPercentage: 0.5,
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
                    borderWidth: 0
                },
                point: {
                    radius: 0,
                    hitRadius: 0,
                    hoverRadius: 0
                }
            }
        }
    } );

	/*-----AreaChart1-----*/
    var ctx = document.getElementById( "Chart1" );
	var myCanvasContext = ctx.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke1.addColorStop(0, '#1572e8');
	gradientStroke1.addColorStop(1, '#1572e8');

	ctx.height = 135;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: ['10am', '11am' ,'12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm'],
            type: 'bar',
            datasets: [ {
                data: [65, 59, 84, 84, 51, 25, 16, 35, 63],
                label: 'New Users',
                backgroundColor:gradientStroke1,
                borderColor: gradientStroke1,
				hoverBackgroundColor:gradientStroke1,
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
					barPercentage: 0.5,
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
                    borderWidth: 0
                },
                point: {
                    radius: 0,
                    hitRadius: 0,
                    hoverRadius: 0
                }
            }
        }
    } );

	/*-----AreaChart2-----*/
    var ctx = document.getElementById( "Chart2" );
	var myCanvasContext = ctx.getContext("2d");
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke2.addColorStop(0, '#ff9e27');
	gradientStroke2.addColorStop(1, '#ff9e27');

	ctx.height = 135;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: ['10am', '11am' ,'12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm'],
            type: 'bar',
            datasets: [ {
                data: [1, 18, 9, 17, 34, 22, 11, 24, 32],
                label: 'Working Employees',
				backgroundColor:gradientStroke2,
                borderColor: gradientStroke2,
				hoverBackgroundColor:gradientStroke2,
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
					barPercentage: 0.5,
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
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 0,
                    hoverRadius: 0
                }
            }
        }
    } );

	/*-----AreaChart3-----*/
    var ctx = document.getElementById( "Chart3" );
	var myCanvasContext = ctx.getContext("2d");
	var gradientStroke3 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke3.addColorStop(0, '#17c1f4');
	gradientStroke3.addColorStop(1, '#17c1f4');
	ctx.height = 135;
    var myChart = new Chart( ctx, {
        type: 'bar',
        data: {
            labels: ['10am', '11am' ,'12pm', '1pm', '2pm', '3pm','4pm', '5pm', '6pm'],
            type: 'bar',
            datasets: [ {
                data: [20, 25, 10, 9, 29, 19, 25, 9, 12, 7, 19 ],
                label: 'Page Views',
				backgroundColor:gradientStroke3,
                borderColor: gradientStroke3,
				hoverBackgroundColor:gradientStroke3,
            }, 	]
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
					barPercentage: 0.5,
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
                    borderWidth: 2
                },
                point: {
                    radius: 0,
                    hitRadius: 0,
                    hoverRadius: 0
                }
            }
        }
    });

	/*-----AreaChart Echart-----*/
	var ctx = document.getElementById("widgetChart1");
	var myCanvasContext = ctx.getContext("2d");
	var gradientStroke4 = myCanvasContext.createLinearGradient(0, 0, 0, 200);
	gradientStroke4.addColorStop(0, '#1572e8');
	gradientStroke4.addColorStop(1, '#1572e8');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
			type: 'line',
			datasets: [{
				data: [24, 30, 25, 28, 39, 22, 40],
				label: '',
				backgroundColor:gradientStroke4,
                borderColor: gradientStroke4,
				hoverBackgroundColor:gradientStroke4,
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
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 0,
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
					borderWidth: 2
				},
				point: {
					radius: 0,
					hitRadius: 10,
					hoverRadius: 4
				}
			}
		}
	});
});