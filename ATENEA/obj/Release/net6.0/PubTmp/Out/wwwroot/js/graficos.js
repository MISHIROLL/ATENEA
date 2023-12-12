function barraLineaMax(x, y, max, acum, id, tit1) {
  // Initialize the echarts instance based on the prepared dom
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  var option;
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
    },
    legend: {
      bottom: 0,
      left: "center",
      data: ["Acumulado", tit1],
      textStyle: { fontSize: 9 },
    },
    toolbox: {
      feature: {
        //saveAsImage: { title: 'Salvar Imagen' },
      },
    },

    series: [
      {
        name: "Acumulado",
        label: {
          normal: {
            show: false,
            position: "inside",
            rotate: 90,
            fontSize: 8,
            verticalAlign: "middle",
            formatter: function (d) {
              return echarts.format.addCommas(d.data) + "";
            },
          },
          emphasis: {
            show: false,
          },
        },
        type: "line",
        yAxisIndex: 1,
        //color: ['#FFA000'],
        symbol: "circle",
        symbolSize: 0,
        itemStyle: {
          normal: {
            areaStyle: { color: "#FFA000", opacity: 0.4 },
          },
        },
        data: acum,
      },
      {
        name: tit1,
        label: {
          normal: {
            show: true,
            position: "inside",
            rotate: 90,
            fontSize: 12,
            verticalAlign: "middle",
            formatter: function (d) {
              return echarts.format.addCommas(d.data) + "";
            },
          },
          emphasis: {
            show: true,
          },
        },
        type: "bar",
        yAxisIndex: 0,
        //color: ['#492FE5'],
        smooth: true,
        itemStyle: { normal: { areaStyle: { type: "default" } } },
        symbol: "none",
        data: y,
      },
    ],
    xAxis: {
      type: "category",
      data: x,
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        formatter: "{value}",
        textStyle: {
          color: "#fsdfff",
          fontSize: 10,
        },
      },
    },
    yAxis: [
      {
        type: "value",
        name: tit1,
        label: {
          fontSize: 8,
        },
        min: 0,
        max: max,
        show: true,
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: "{value}",
          fontSize: 10,
        },
      },
      {
        type: "value",
        name: "Acumulado",
        show: true,
        splitLine: { show: false },
        axisLabel: {
          formatter: "{value}",
          fontSize: 9,
        },
      },
    ],
    grid: {
      left: "2%",
      right: "2%",
      bottom: "10%",
      top: "30%",
      containLabel: true,
    },
  };

  option && myChart.setOption(option);
}

function graficoPrueba(id) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    title: {
      text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        label: {
          show: true,
          position: "top",
        },
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320],
      },
    ],
  };

  option && myChart.setOption(option);
}

function tresLineas(
  id,
  tlineas,
  tanio,
  anio,
  tanioant,
  anioant,
  tanioant2,
  anioant2,
  xGraf,
  tit
) {
  var act = "#FFA000";
  var ant = "#492FE5";
  var ant2 = "#4E525A";
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      bottom: 0,
      left: "center",
      data: tlineas,
      textStyle: { fontSize: 15 },
    },

    series: [
      {
        name: tlineas[0],
        label: {
          normal: {
            show: true,
            position: "inside",
            rotate: 0,
            fontSize: 10,
            verticalAlign: "middle",
            formatter: function (d) {
              return echarts.format.addCommas(d.data) + "";
            },
          },
          emphasis: {
            show: false,
          },
        },
        type: "line",
        yAxisIndex: 0,
        color: act,
        symbol: "circle",
        symbolSize: 0,
        data: anio,
      },
      {
        name: tlineas[1],
        label: {
          normal: {
            show: true,
            position: "inside",
            rotate: 0,
            fontSize: 10,
            verticalAlign: "middle",
            formatter: function (d) {
              return echarts.format.addCommas(d.data) + "";
            },
          },
          emphasis: {
            show: false,
          },
        },
        type: "line",
        yAxisIndex: 0,
        color: [ant],
        smooth: true,
        symbol: "none",
        data: anioant,
      },
      {
        name: tlineas[2],
        label: {
          normal: {
            show: true,
            position: "inside",
            rotate: 0,
            fontSize: 12,
            verticalAlign: "middle",
            formatter: function (d) {
              return echarts.format.addCommas(d.data) + "";
            },
          },
          emphasis: {
            show: false,
          },
        },
        type: "line",
        yAxisIndex: 0,
        color: [ant2],
        smooth: true,
        symbol: "none",
        data: anioant2,
      },
    ],
    xAxis: {
      type: "category",
      data: xGraf,
      boundaryGap: true,
      axisLabel: {
        interval: 0,
        rotate: 45,
        formatter: "{value}",
        textStyle: {
          color: [ant],
          fontSize: 10,
        },
      },
    },
    yAxis: [
      {
        type: "value",
        name: tit,
        min: 0,
        show: true,
        splitLine: {
          show: true,
        },
      },
    ],
    grid: {
      left: "2%",
      right: "2%",
      bottom: "10%",
      top: "30%",
      containLabel: true,
    },
  };

  option && myChart.setOption(option);
}

function treslineasV2(id, datosEje, Linea1, linea2, linea3, comp) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);

  const fecha = new Date();
  let anio = parseInt(fecha.getFullYear());
  let aniAnt = anio - 1;
  let hoy = fecha.getDate();
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    // title: {
    //   text: 'Temperature Change in the Coming Week',
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {},
    toolbox: {
      show: false,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: datosEje,
      axisLabel: {
        fontSize: 10,
        fontWeight: "bold",
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 10,
        formatter: "${value}",
      },
    },
    series: [
      {
        name: comp[0],
        type: "line",
        data: Linea1,
      },
      {
        name: comp[1],
        type: "line",
        data: linea2,
      },
      {
        name: comp[2],
        type: "line",
        data: linea3,
      },
    ],
  };

  option && myChart.setOption(option);
}

function grafApiladaDos(id, periodos, dataA, dataB, titA, titB) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#95989B", "#FF8F1C", "#FF8F1C"];
  this.mySeries = [
    {
      name: titA,
      type: "bar",
      stack: "Stack 1",
      data: dataA,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: titB,
      type: "bar",
      stack: "Stack 1",
      data: dataB,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },

    {
      name: "",
      type: "bar",
      stack: "Stack 1",
      data: [0, 0, 0, 0, 0, 0, 0],
      label: {
        normal: {
          show: true,
          position: "top",
          formatter: (params) => {
            let total = 0;
            this.mySeries.forEach((serie) => {
              total += serie.data[params.dataIndex];
            });
            return echarts.format.addCommas(total) + "";
          },
        },
      },
    },
  ];
  option = {
    color: colors,
    textStyle: {
      color: "#FFFFFF",
    },

    legend: {
      textStyle: {
        color: "#2F2D74",
      },
      bottom: "0%",
    },
    grid: {
      top: "15%",
      left: "3%",
      right: "4%",
      bottom: "7%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: periodos,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    series: this.mySeries,
  };

  option && myChart.setOption(option);
}
function grafApiladaDosPct(id, dataA, dataB, titA, titB) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#1F2D79", "#FF8F1C"];
  option = {
    legend: { show: false },
    color: colors,
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: [""],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          formatter: "{value}%",
          textStyle: { fontSize: 9 },
        },
      },
    ],
    series: [
      {
        name: titA,
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        label: {
          show: true,
          position: "inside",
          fontSize: 10,
          formatter: "{c}% {a}",
        },
        data: dataA,
      },
      {
        name: titB,
        type: "bar",
        stack: "Ad",
        label: {
          show: true,
          position: "inside",
          // formatter: function (d) {
          //   return echarts.format.addCommas(d.data) + '';
          // }
          formatter: "{c}% {a}",
        },
        emphasis: {
          focus: "series",
        },
        data: dataB,
      },
    ],
  };

  option && myChart.setOption(option);
}

function grafColorEspInterior(id, dataX, dataY, tit) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];

  option = {
    tooltip: {
      trigger: "axis",
    },
    title: {
      text: tit,
      right: "top",
      textStyle: {
        color: "#FF8F1C",
      },
    },
    grid: {
      top: "4%",
    },
    color: colors,
    xAxis: {
      type: "category",
      axisLabel: {
        interval: 0,
        rotate: 30,
        textStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      },
      data: dataY,
    },
    yAxis: {
      type: "value",
      show: false,
      axisLabel: {
        textStyle: {
          fontSize: 7,
        },
      },
    },
    series: [
      {
        data: dataX,
        label: {
          show: false,
          position: "top",
          rotate: 45,
          fontSize: 11,
          fontWeight: "bold",
          formatter: function (params) {
            var val = format(params.value);

            return val;
          },
        },
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
}
function grafColorEsp(id, dataX, dataY, tit) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];

  option = {
    title: {
      text: tit,
      right: "top",
      textStyle: {
        color: "#FF8F1C",
      },
    },
    grid: {
      top: "4%",
    },
    color: colors,
    xAxis: {
      type: "category",
      axisLabel: {
        interval: 0,
        rotate: 30,
        textStyle: {
          fontSize: 10,
          fontWeight: "bold",
        },
      },
      data: dataY,
    },
    yAxis: {
      type: "value",
      show: false,
      axisLabel: {
        textStyle: {
          fontSize: 7,
        },
      },
    },
    series: [
      {
        data: dataX,
        label: {
          show: true,
          position: "top",
          fontSize: 11,
          fontWeight: "bold",
          formatter: function (params) {
            var val = format(params.value);

            return val;
          },
        },
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
}

function rose(id, data) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    legend: {
      bottom: "1%",
      textStyle: {
        color: "#2F2D74",
        fontSize: 12,
      },
    },

    grid: {
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "65%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "20",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}

function tresBarras(id, DataX, DataA, DataB, DataC, Identificador) {
  //function tresBarras()
  //var echarts = require('echarts');

  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },

    grid: {
      top: "15%",
      left: "3%",
      right: "5%",
      bottom: "2%",
      containLabel: true,
    },

    legend: {
      data: [DataX],
    },
    xAxis: [
      {
        type: "category",
        data: DataX,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          textStyle: {
            fontSize: 10,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "Monto",
        // min: 0,
        // max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} MDP",
          textStyle: {
            fontSize: 10,
          },
        },
      },
    ],
    series: [
      {
        name: DataX[0],
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " MDP";
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            fontSize: 10,
          },
        },
        data: DataA,
      },
      {
        name: DataX[1],
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " MDP";
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            fontSize: 10,
          },
        },
        data: DataB,
      },
      {
        name: DataX[2],
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " MDP";
          },
        },
        label: {
          show: true,
          position: "top",
          textStyle: {
            fontSize: 10,
          },
        },
        data: DataC,
      },
    ],
  };

  option && myChart.setOption(option);
}

function barrasDiferentes(id, datos) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    grid: {
      top: "15%",
      left: "3%",
      right: "5%",
      bottom: "2%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["1T 2020", "1T 2021", "1T 2022"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        label: {
          normal: {
            show: true,
            position: "inside",
            fontSize: 15,
            fontWeight: "bold",
          },
        },
        data: [
          {
            value: datos[0],
            itemStyle: {
              color: "#492FE5",
            },
          },
          {
            value: datos[1],
            itemStyle: {
              color: "#2F2D74",
            },
          },
          {
            value: datos[2],
            itemStyle: {
              color: "#FF8F1C",
            },
          },
        ],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
}

function pieAnidadoTres(id, periodos, metro, inter) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const colors = ["#FFA000", "#2F2D74", "#2F2D74"];
  option = {
    tooltip: {
      trigger: "item",
    },
    color: colors,
    legend: {
      top: "5%",
      left: "center",
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "4%",
      bottom: "5%",
      containLabel: true,
    },
    series: [
      {
        name: periodos[0],
        type: "pie",
        radius: ["5%", "25%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{a} {c}%",
          fontSize: 11,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: inter[0], name: "Interior" },
          { value: metro[0], name: "Metro" },
        ],
      },
      {
        name: periodos[1],
        type: "pie",
        radius: ["30%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{a} {c}%",
          fontSize: 11,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: inter[1], name: "Interior" },
          { value: metro[1], name: "Metro" },
        ],
      },
      {
        name: periodos[2],
        type: "pie",
        radius: ["55%", "75%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inner",
          formatter: "{a} {c}%",
          fontSize: 11,
          fontWeight: "bold",
          //rotate:-45
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: [
          { value: inter[2], name: "Interior" },
          { value: metro[2], name: "Metro" },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
}

function pieAnidadoDos(id, periodos, metro, inter) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const colors = ["#FFA000", "#2F2D74", "#2F2D74"];
  option = {
    tooltip: {
      trigger: "item",
    },
    color: colors,
    legend: {
      top: "5%",
      left: "center",
    },
    grid: {
      top: "5%",
      left: "3%",
      right: "4%",
      bottom: "5%",
      containLabel: true,
    },
    series: [
      {
        name: periodos[0],
        type: "pie",
        radius: ["15%", "35%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{a} {c}%",
          fontSize: 11,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: inter[0], name: "Interior" },
          { value: metro[0], name: "Metro" },
        ],
      },
      {
        name: periodos[1],
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "inside",
          formatter: "{a} {c}%",
          fontSize: 11,
          fontWeight: "bold",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "25",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: inter[1], name: "Interior" },
          { value: metro[1], name: "Metro" },
        ],
      },
    ],
  };

  option && myChart.setOption(option);
}

function grafApiladaTres(id, periodos, dataA, dataB, DataC, titA, titB, titC) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];
  this.mySeries = [
    {
      name: titA,
      type: "bar",
      stack: "Stack 1",
      data: dataA,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: titB,
      type: "bar",
      stack: "Stack 1",
      data: dataB,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: titC,
      type: "bar",
      stack: "Stack 1",
      data: DataC,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: "",
      type: "bar",
      stack: "Stack 1",
      data: [0, 0, 0, 0, 0, 0, 0],
      label: {
        normal: {
          show: true,
          position: "top",
          formatter: (params) => {
            let total = 0;
            this.mySeries.forEach((serie) => {
              total += serie.data[params.dataIndex];
            });
            return echarts.format.addCommas(total) + "";
          },
        },
      },
    },
  ];
  option = {
    color: colors,
    textStyle: {
      color: "#FFFFFF",
    },

    legend: {
      textStyle: {
        color: "#2F2D74",
      },
      bottom: "0%",
    },
    grid: {
      top: "12%",
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: periodos,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    series: this.mySeries,
  };

  option && myChart.setOption(option);
}
function grafApiladaTresSinEscala(id, periodos, dataA, dataB, DataC, titA, titB, titC) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];
  this.mySeries = [
    {
      name: titA,
      type: "bar",
      stack: "Stack 1",
      data: dataA,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: titB,
      type: "bar",
      stack: "Stack 1",
      data: dataB,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: titC,
      type: "bar",
      stack: "Stack 1",
      data: DataC,
      label: {
        show: true,
        position: "inside",
        formatter: function (d) {
          return echarts.format.addCommas(d.data) + "";
        },
      },
    },
    {
      name: "",
      type: "bar",
      stack: "Stack 1",
      data: [0, 0, 0, 0, 0, 0, 0],
      label: {
        normal: {
          show: true,
          position: "top",
          formatter: (params) => {
            let total = 0;
            this.mySeries.forEach((serie) => {
              total += serie.data[params.dataIndex];
            });
            return echarts.format.addCommas(total) + "";
          },
        },
      },
    },
  ];
  option = {
    color: colors,
    textStyle: {
      color: "#FFFFFF",
    },

    legend: {
      textStyle: {
        color: "#2F2D74",
      },
      bottom: "0%",
    },
    grid: {
      top: "12%",
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: periodos,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        show:false,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    series: this.mySeries,
  };

  option && myChart.setOption(option);
}

function grafApiladaCuatroPorc(id, periodos, dataA, dataB, DataC, DataD, titA, titB, titC, titD) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#492FE5", "#2F2D74", "#FF8F1C"];
  // Calcula el total para cada punto de datos (esto asume que todos los arrays tienen la misma longitud)
  const totals = dataA.map((_, idx) => dataA[idx] + dataB[idx] + DataC[idx] + DataD[idx]);
  this.mySeries = [
    {
      name: titA,
      type: "bar",
      stack: "Stack 1",
      data: dataA,
    },
    ,
    {
      name: titB,
      type: "bar",
      stack: "Stack 1",
      data: dataB,
    },
    {
      name: titC,
      type: "bar",
      stack: "Stack 1",
      data: DataC,
    },
    {
      name: titD,
      type: "bar",
      stack: "Stack 1",

      data: DataD,
    }
  ];
  option = {
    color: colors,
    textStyle: {
      color: "#FFFFFF",
    },

    legend: {
      textStyle: {
        color: "#2F2D74",
      },
      // bottom: "-3%",
    },
    grid: {
      top: "12%",
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: periodos,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        show:false,
        axisLabel: {
          textStyle: {
            color: "#2F2D74",
            fontSize: 12,
          },
        },
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function (params) {
        let tooltipContent = params[0].name + '<br/>';
        let total = totals[params[0].dataIndex];
        params.reverse().forEach(function (item) {
          let percentage = (item.value / total * 100).toFixed(2);
          tooltipContent += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${echarts.format.addCommas(item.value)} (${percentage}%)<br/>`;
        });
        return tooltipContent;
      }
    },
    series: this.mySeries,
  };

  option && myChart.setOption(option);
}


function format(data) {
  data = parseInt(data);
  data = data.toLocaleString("es-MX");
  return data;
}

function unaLinea(id, encabezado, data, tit, rotacion = false) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#1F2D79"];
  let opciones;

  if (rotacion) {
    opciones = {
      textStyle: {
        color: "#fsdfff",
        fontSize: 8,
      },
    };
  } else {
    opciones = {
      interval: 0,
      rotate: 45,
      formatter: "{value}",
      textStyle: {
        // color: '#fsdfff',
        fontSize: 8,
      },
    };
  }

  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
    },
    title: {
      text: tit,
      // left: "center",
      // top: "center",
    },
    xAxis: {
      type: "category",
      data: encabezado,

      axisLabel: opciones,
      // {
      //   textStyle: {
      //     color: '#fsdfff',
      //     fontSize: 8,
      //   },
      // }
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          // color: '#fsdfff',
          fontSize: 8,
        },
      },
    },
    series: [
      {
        data: data,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
        type: "line",
        smooth: true,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            // color: '#fsdfff',
            fontSize: 8,
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}

function apiladoHorizontalTres(id, data, tit) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  colors = ["#FF8F1C", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: ["ventas"],
    },
    series: [
      {
        name: tit[0],
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        // data: 20
        data: [data[0]],
      },
      {
        name: tit[1],
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [data[1]],
      },
      {
        name: tit[2],
        type: "bar",
        stack: "total",
        label: {
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: [data[2]],
      },
    ],
  };

  option && myChart.setOption(option);
}

function grafCarteras(id, tit, encabezados, datos) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      textStyle: { fontSize: 7 },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}%",
        textStyle: {
          color: "#fsdfff",
          fontSize: 8,
        },
      },
    },
    yAxis: {
      type: "category",
      data: [tit],
      axisLabel: {
        formatter: "{value}",
        textStyle: {
          color: "#fsdfff",
          fontSize: 10,
        },
      },
    },
    series: [
      {
        name: encabezados[0],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[0]],
      },
      {
        name: encabezados[1],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[1]],
      },
      {
        name: encabezados[2],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[2]],
      },
      {
        name: encabezados[3],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[3]],
      },
      {
        name: encabezados[4],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[4]],
      },
      {
        name: encabezados[5],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[5]],
      },
      {
        name: encabezados[6],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[6]],
      },
      {
        name: encabezados[7],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 8,
        },
        emphasis: {
          focus: "series",
        },
        data: [datos[7]],
      },
    ],
  };

  option && myChart.setOption(option);
}

function grafDosBarrasHorizontal(id, tit, data, encabezado) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow", // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: [tit],
    },
    series: [
      {
        name: encabezado[0],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 10,
        },
        emphasis: {
          focus: "series",
        },
        data: [data[0].toFixed(1)],
      },
      {
        name: encabezado[1],
        type: "bar",
        stack: "total",
        label: {
          show: true,
          formatter: "{c}%",
          fontSize: 10,
        },
        emphasis: {
          focus: "series",
        },
        data: [data[1].toFixed(1)],
      },
    ],
  };

  option && myChart.setOption(option);
}

function DosBarrasVertical(
  id,
  data_a,
  data_b,
  max,
  encabezados,
  ejex,
  formater = "",
  leyenda = true
) {

  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    animationDuration: 0,
    grid: {
      left: "3%",
      right: "12%",
      bottom: "1%",
      top: "11%",
      containLabel: true,
    },
    title: {
      // text: title,
      // align:center
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: { show: leyenda },

    textVerticalAlign: "bottom",
    xAxis: {
      type: "value",
      show: false,
      max: max,
      min: 0,
      // boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: "category",
      data: ejex,
    },
    series: [
      {
        name: encabezados[0],
        type: "bar",
        data: data_a,
        label: {
          show: true,
          position: "outside",
          fontWeight: "bold",
          formatter: function (d) {
            return formater + echarts.format.addCommas(d.data);
          },
        },
      },
      {
        name: encabezados[1],
        type: "bar",
        data: data_b,
        label: {
          show: true,
          position: "outside",
          fontWeight: "bold",
          formatter: function (d) {
            return formater + echarts.format.addCommas(d.data);
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}

function barraVertical(id, color, encabezado, data, titulo = "Gráfico") {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors[color],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    // title: {
    //   text: titulo,
    // },
    grid: {
      grid: {
        left: "1%",
        right: "1%",
        bottom: "1%",
        top: "1%",
        containLabel: true,
      },
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          interval: 0,
          rotate: 45,
          formatter: "{value}",
          textStyle: {
            // color: '#fsdfff',
            fontSize: 8,
          },
        },
        data: encabezado,
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            fontSize: 8,
          },
        },
      },
    ],
    series: [
      {
        // name: 'Direct',
        type: "bar",
        barWidth: "80%",
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}

function dosConceptos(id, dataA, dataB, dataC, ejeX, Conceptos, Titulos) {
  // return
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
    },

    toolbox: {
      feature: {
        saveAsImage: { show: true },
        left: "3%",
      },
    },
    legend: {
      data: Titulos,
    },
    xAxis: [
      {
        type: "category",
        data: ejeX,
        axisPointer: {
          type: "shadow",
        },
        axisLabel: {
          rotate: 25,
          fontSize: 8,
          fontWeight: "bold",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        name: Conceptos[0],
        //min: 0,
        //max: 250,
        //interval: 50,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#fsdfff",
            fontSize: 9,
          },
        },
      },
      {
        type: "value",
        name: Conceptos[1],
        //min: 0,
        //max: 25,
        //interval: 5,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#fsdfff",
            fontSize: 9,
          },
        },
      },
    ],
    series: [
      {
        name: Titulos[0],
        type: "bar",

        tooltip: {
          valueFormatter: function (value) {
            return "$" + value.toLocaleString("es-MX");
          },
        },
        data: dataA,
      },
      {
        name: Titulos[1],
        type: "bar",

        tooltip: {
          valueFormatter: function (value) {
            return "$" + value.toLocaleString("es-MX");
          },
        },
        data: dataB,
      },
      {
        name: Titulos[2],
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value.toLocaleString("es-MX");
          },
        },
        data: dataC,
      },
    ],
  };

  option && myChart.setOption(option);
}

function linealDos(id, datosEje, acumulado, acumuladoAnt, comp) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);

  const fecha = new Date();
  let anio = parseInt(fecha.getFullYear());
  let aniAnt = anio - 1;
  let hoy = fecha.getDate();
  var option;
  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    // title: {
    //   text: 'Temperature Change in the Coming Week',
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {},
    toolbox: {
      show: false,
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: datosEje,
      axisLabel: {
        fontSize: 8,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        fontSize: 8,
        formatter: "${value}",
      },
    },
    series: [
      {
        name: comp[0],
        type: "line",
        data: acumulado,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
      },
      {
        name: comp[2],
        type: "line",
        data: acumuladoAnt,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}

function dosBarrasApiladasLinea(id, eje, barra1, barra2, linea) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
    },
    grid: {},
    toolbox: {},
    legend: {
      data: ["IR", "Metro", "Acumulado"],
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 8,
        },
        data: eje,
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          formatter: "${value}",
          fontSize: 8,
        },
        min: 0,
      },
      {
        type: "value",

        position: "left",
        alignTicks: true,

        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          fontSize: 9,
          formatter: "${value}",
        },
      },
      {
        type: "value",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          fontSize: 9,
          formatter: "${value}",
        },
      },
    ],
    series: [
      {
        name: "IR",
        type: "bar",
        stack: "one",
        data: barra1,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
      },
      {
        name: "Metro",
        type: "bar",
        stack: "one",
        data: barra2,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
      },
      {
        name: "Acumulado",
        type: "line",
        yAxisIndex: 2,
        data: linea,
        tooltip: {
          valueFormatter: function (value) {
            return "$" + parseInt(value).toLocaleString("es-MX");
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}
//Segunda parte
function dosBarrasApiladasLineaPorcentaje(id, eje, barra1, barra2, linea) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const colors = ["#FFA000", "#492FE5", "#2F2D74"];
  option = {
    color: colors,
    tooltip: {
  trigger: 'axis',
  axisPointer: {
    type: 'shadow'
  },
  formatter: function(params) {
    var tooltipString = '';
    for (var i = 0; i < params.length; i++) {
      tooltipString += params[i].seriesName + ': ' + params[i].value + '#' + '<br/>';
    }
    return tooltipString;
  }
}
,
    grid: {},
    toolbox: {},
    legend: {
      data: ["Calidad", "Por corregir", "Historico"],
    },
    xAxis: [
      {
        type: "category",
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          fontSize: 8,
        },
        data: eje,
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          formatter: "{value}%",
          fontSize: 8,
        },
        min: 0,
      },
      {
        type: "value",

        position: "left",
        alignTicks: true,

        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          fontSize: 9,
          formatter: "${value}",
        },
      },
      {
        type: "value",
        position: "right",
        alignTicks: true,
        axisLine: {
          show: true,
          lineStyle: {
            color: "#000000",
          },
        },
        axisLabel: {
          fontSize: 9,
          formatter: "{value}%",
        },
      },
    ],
    series: [
      {
        name: "Calidad",
        type: "bar",
        stack: "one",
        data: barra1,
        tooltip: {
          valueFormatter: function (value) {
            return value + "%";
          },
        },
      },
      {
        name: "Por corregir",
        type: "bar",
        stack: "one",
        data: barra2,
        tooltip: {
          valueFormatter: function (value) {
            return value + "%";
          },
        },
      },
      {
        name: "Historico",
        type: "line",
        yAxisIndex: 2,
        data: linea,
        tooltip: {
          valueFormatter: function (value) {
            return value + "%";
          },
        },
      },
    ],
  };

  option && myChart.setOption(option);
}

//Esta gráfica solo son tres barras de diferente color(sin usar)
function graficoTresBarras(id, dataX, dataY, title) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  const colors = ["#FFA000", "#492FE5"];
  var option;
  option = {
    title: {
      text: title,
      left: "center",
      top: 20,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: dataX[0],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Total",
        type: "bar",
        //barWidth: '100%',
        data: [
          { value: dataY[0], itemStyle: { color: "#FF8F1C" } },
          { value: dataY[1], itemStyle: { color: "#492FE5" } },
          { value: dataY[2], itemStyle: { color: "#000000" } },
        ],
        large: false,
        barCategoryGap: "20",
      },
    ],
  };

  option && myChart.setOption(option);
  myChart.on("mousemove", function (params) {
    myFunction();
  });
}
//Gráfico de barras horizontales apiladas
function graficoTresBarrasApiladas(id, areas, data1, data2) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  const colors = ["#FFA000", "#492FE5"];
  var option;
  option = {
    color: colors,
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
    },
    yAxis: {
      type: "category",
      data: areas,
    },
    series: [
      {
        name: "Calidad",
        type: "bar",
        stack: "total",
        label: {
          formatter: "{c}%",
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: data1,
      },
      {
        name: "Por Corregir",
        type: "bar",
        stack: "total",
        label: {
          formatter: "{c}%",
          show: true,
        },
        emphasis: {
          focus: "series",
        },
        data: data2,
      },
    ],
  };

  option && myChart.setOption(option);
}
//Grafico de pastel con modificaciones visuales
function PastelDosPartes(id, data, titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: titulo,
      left: "center",
      top: 20,
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "1%",
      textStyle: {
        color: "#2F2D74",
        fontSize: 12,
      },
    },

    grid: {
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    series: [
      {
        name: "Calidad Global",
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "50",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}

//Grafico de pastel genérico
function PastelDosPartesSexo(id, data, titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: titulo,
      left: "center",
      top: 20,
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "1%",
      textStyle: {
        color: "#2F2D74",
        fontSize: 12,
      },
    },

    grid: {
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    series: [
      {
        name: "Sexo",
        type: "pie",
        radius: ["45%", "75%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "50",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}
//Grafico de pastel genérico
function grafPastelGenerico(id, data, titulo,subtitulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: titulo,
      left: "center",
    },
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return `${params.seriesName}<br/>${params.name}: ${params.value}%`;
      }
    },
    legend: {
      bottom: "1%",
      textStyle: {
        color: "#2F2D74",
        fontSize: 12,
      },
    },

    grid: {
      top: "0%",
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    series: [
      {
        name: subtitulo,
        type: "pie",
        radius: ["25%", "55%"],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 1,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "30",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
        },
        data: data,
      },
    ],
  };

  option && myChart.setOption(option);
}

function graficoBarraCategoria(id, data1, data2, condicional) {
  var app = {};
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;

  const posList = [
    "left",
    "right",
    "top",
    "bottom",
    "inside",
    "insideTop",
    "insideLeft",
    "insideRight",
    "insideBottom",
    "insideTopLeft",
    "insideTopRight",
    "insideBottomLeft",
    "insideBottomRight",
  ];
  app.configParameters = {
    rotate: {
      min: -90,
      max: 90,
    },
    align: {
      options: {
        left: "left",
        center: "center",
        right: "right",
      },
    },
    verticalAlign: {
      options: {
        top: "top",
        middle: "middle",
        bottom: "bottom",
      },
    },
    position: {
      options: posList.reduce(function (map, pos) {
        map[pos] = pos;
        return map;
      }, {}),
    },
    distance: {
      min: 0,
      max: 100,
    },
  };
  app.config = {
    rotate: 90,
    align: "left",
    verticalAlign: "middle",
    position: "insideBottom",
    distance: 15,
    onChange: function () {
      const labelOption = {
        rotate: app.config.rotate,
        align: app.config.align,
        verticalAlign: app.config.verticalAlign,
        position: app.config.position,
        distance: app.config.distance,
      };
      myChart.setOption({
        series: [
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
          {
            label: labelOption,
          },
        ],
      });
    },
  };
  const labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: function (params) {
      const seriesIndex = params.seriesIndex; // Índice de la serie actual
      const dataIndex = params.dataIndex; // Índice del dato actual
      // Obtener el valor del dato actual
      const value = params.value;
      if (seriesIndex === 0) {
        // Obtener el valor de la segunda serie
        const referenceValue = myChart.getOption().series[1].data[dataIndex];
        // Calcular el porcentaje relativo con respecto a la segunda serie
        const percentage = ((referenceValue / value) * 100).toFixed(0);
        return `${100-percentage}%`;
      } else {
        // Obtener el valor de la primera serie
        const referenceValue = myChart.getOption().series[0].data[dataIndex];
        // Calcular el porcentaje relativo con respecto a la primera serie
        const percentage = ((value / referenceValue) * 100).toFixed(0);
        return `${percentage}%`;
      }
    },
    fontSize: 16,
    rich: {
      c: {
        color: "black", // Cambia el color del texto , solo funciona con formatos sencillos.
      },
    },
  };
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["Totales", "Por corregir"],
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center",
    },
    xAxis: [
      {
        type: "category",
        axisTick: { show: false },
        data: ["Contratos", "Clientes", "Garantias"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Totales",
        type: "bar",
        barGap: 0,
        label: {
          ...labelOption,
          textStyle: {
            color: "black",
            fontWeight: "100"
          },
        },
        emphasis: {
          focus: "series",
        },
        data: data1,
        color: "#FFA000",
      },
      {
        name: "Por corregir",
        type: "bar",
        label: {
          ...labelOption,
          textStyle: {
            color: "black",
            fontWeight: "100"
          },
        },
        emphasis: {
          focus: "series",
        },
        data: data2,
        color: "#492FE5",
      },
    ],
  };
  option && myChart.setOption(option);
  if (condicional != "no"){
  myChart.on("click", function (params) {
    myFunction(params);
  });
 }
}
//Grafica con animación sin usar
function graficaHistorico(id, datos, titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  var datosCorrectos = datos;
  run(datosCorrectos);
  function run(_rawData) {
    const countries = [
      "General",
      "Finland",
      "France",
      "Germany",
      "Iceland",
      "Norway",
      "Poland",
      "Russia",
      "United Kingdom",
    ];
    const datasetWithFilters = [];
    const seriesList = [];
    echarts.util.each(countries, function (Titulo) {
      var datasetId = "dataset_" + Titulo;
      datasetWithFilters.push({
        id: datasetId,
        fromDatasetId: "dataset_raw",
        transform: {
          type: "filter",
          config: {
            and: [
              { dimension: "FechaConsulta", gte: 20220825 },
              { dimension: "Titulo", "=": Titulo },
            ],
          },
        },
      });
      seriesList.push({
        type: "line",
        datasetId: datasetId,
        showSymbol: false,
        name: Titulo,
        endLabel: {
          show: true,
          formatter: function (params) {
            return params.value[1] + ": " + params.value[0];
          },
        },
        labelLayout: {
          moveOverlap: "shiftY",
        },
        emphasis: {
          focus: "series",
        },
        encode: {
          x: "FechaConsulta",
          y: "Porcentaje",
          label: ["Titulo", "Porcentaje"],
          itemName: "FechaConsulta",
          tooltip: ["Porcentaje"],
        },
      });
    });
    option = {
      animationDuration: 10000,
      dataset: [
        {
          id: "dataset_raw",
          source: _rawData,
        },
        ...datasetWithFilters,
      ],
      title: {
        text:
          titulo == null
            ? "Calidad global desde el 25 de octubre del 2022"
            : titulo,
      },
      tooltip: {
        order: "valueDesc",
        trigger: "axis",
      },
      xAxis: {
        type: "category",
        nameLocation: "middle",
      },
      yAxis: {
        name: "Porcentaje",
      },
      grid: {
        right: 140,
      },
      series: seriesList,
    };
    myChart.setOption(option);
  }

  option && myChart.setOption(option);
}
//Grafica horizontal sencilla
function graficaBarraHorizontal(id, ejey, data, indicador) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      boundaryGap: [0, 0.01],
      axisLabel: {
        show: false
      }
    },
    yAxis: {
      type: "category",
      data: ejey,
    },
    series: [
      {
        name: indicador,
        type: "bar",
        data: data,
        color: "#492FE5",
      },
    ],
  };

  option && myChart.setOption(option);
}
//Grafica horizontal con condiciones 3 seríes
function graficaTresBarraHorizontal(id, ejey, contratos, clientes , garantias) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ejey
    },
    series: [
      {
        name: 'Contratos',
        type: 'bar',
        stack: 'total',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#492FE5'
        },
        data: contratos
      },
      {
        name: 'Clientes',
        type: 'bar',
        stack: 'total',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle : {
          color : '#FFA000'
        },
        data: clientes
      },
      {
        name: 'Garantias',
        type: 'bar',
        stack: 'total',
        label: {
          show: false
        },
        emphasis: {
          focus: 'series'
        },
        itemStyle: {
          color: '#2F2D74'
        },
        data: garantias
      }
    ]
  };

  option && myChart.setOption(option);
}
//Grafica horizontal con condiciones 3 seríes
function graficaLineasSolidas2(id, ejey, series,titulo,legend) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    title: {
      text: titulo
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ejey
    },
    yAxis: {
      type: 'value'
    },
    series: series
  };
  
  option && myChart.setOption(option);
  
}
//Grafica horizontal con condiciones 3 seríes
function graficaLineasSolidas(id, ejey, series,titulo,subtitulo,legend) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  const colors = ["ffd080","#232153","#FFA000","#492FE5","#ed7d31"]; 
  var option;
  option = {
    color : colors,
    title: {
      text: titulo,
      subtext: subtitulo,
      textStyle: {
          color: 'black',
          fontSize: 24
      },
      subtextStyle: {
          color: 'gray',
          fontSize: 16
      },
      itemGap: 5 
  },
   tooltip: {
     trigger: 'axis'
   },
   legend: {
     data: legend,
     top: '8%'
   },
   grid: {
     left: '3%',
     right: '4%',
     bottom: '3%',
     containLabel: true
   },
   xAxis: {
     type: 'category',
     boundaryGap: false,
     data: ejey
   },
   yAxis: {
     type: 'value'
   },
   series: series
 };
  
  option && myChart.setOption(option);
  
}
//Grafica de barras, muestra disminuciones e incrementos.
function graficaMovimientos(id, ejex, data1,data2,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    color: '#fe8f1d',
    title: {
      text: 'Movimientos',
      subtext: titulo
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      },
      formatter: function(params) {
          // Filtrar solo las series que quieres mostrar
          var filteredParams = params.filter(function(item) {
              return item.seriesName === 'Movimiento'; // Aquí seleccionas las series que deseas mostrar
          });
  
          var tooltipString = '';
          filteredParams.forEach(function(item) {
              var formattedData = item.data.toLocaleString();
              tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData}<br/>`;
          });
  
          return tooltipString;
      }
  },   
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      splitLine: { show: false },
      data: ejex,
      axisLabel: {
        interval: 0,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Anterior',
        type: 'bar',
        stack: 'Total',
        itemStyle: {
          borderColor: 'transparent',
          color: 'transparent'
        },
        data: data1
      },
      {
        name: 'Movimiento',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        data: data2
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
//grafica de burbujas para participacion
function participacionSucursal(data){
  const total = data.reduce((acc, item) => acc + item.value, 0);
  data.forEach(item => {
    item.value = ((item.value / total) * 100).toFixed(0);
  });
  d3.select("#prueba").selectAll("svg").remove();
  var width = 960;
    var height = width;
    var margin = 1;
    const colores = ["#232153","#492FE5","#FFA000","#D9D9D9"];
    var format = d3.format(",d");
    var color = d3.scaleOrdinal().range(colores);
    var pack = d3.pack().size([width - margin * 2, height - margin * 2]).padding(3);
    var root = pack(d3.hierarchy({children: data}).sum(d => d.value));

    var svg = d3.select("#prueba").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-margin, -margin, width, height])
        .attr("style", "max-width: 100%; height: auto; font: 20px sans-serif;")
        .attr("text-anchor", "middle");
      
        svg.append("text")
        .attr("x", width / 2)
        .attr("y", 30)
        .attr("font-size", "36px")
        .attr("text-anchor", "middle")
        .text("Participación de sucursales");

    var node = svg.append("g")
      .selectAll("g")
      .data(root.leaves())
      .join("g")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("title")
        .text(d => `${d.data.id}\n${format(d.value)}`);

    node.append("circle")
        .attr("fill-opacity", 0.7)
        .attr("fill", d => color(d.data.id))
        .attr("r", d => d.r);

    var text = node.append("text")
        .attr("clip-path", d => `url(#clip-${d.data.id})`);

    text.append("tspan")
        .attr("x", 0)
        .attr("y", "0.3em")
        .text(d => d.data.id);

    text.append("tspan")
        .attr("x", 0)
        .attr("y", "1.5em")
        .attr("fill-opacity", 0.7)
        .text(d => format(d.value)+"%");
}
//Grafica de barras horizontales a corregir
function grafHorizontalDinamica1(id, dataMoral,data1,data2,data3,data4,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color: colors,
    title: {
      text: 'Vivienda',
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},

    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: 'Vivienda propia',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: 'Vivienda rentada',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: 'Vivienda familiar',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: 'Vivienda hipotecada',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: 'indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica2(id, dataMoral,data1,data2,data3,data4,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Producto',
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: 'Casa departamento',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: 'Oficina comercio',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: 'Industrial',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: 'Terreno',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: 'indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica3(id, dataMoral,data1,data2,data3,data4,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Servicio',
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: 'Adquisición',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: 'Construcción',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: 'Remodelación',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: 'Ampliación',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica4(id, dataMoral,data1,data2,data3,data4,data5,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Estado civil', 
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: 'Soltero',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: 'Casado',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: 'Viudo',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: 'Divorciado',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: 'Union libre',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data5
      },
      {
        name: 'Indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica5(id, dataMoral,data1,data2,data3,data4,data5,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Numero de Dependientes', 
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: '0-2',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: '3-4',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: '5-7',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: '8-10',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: '11-más',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data5
      },
      {
        name: 'Indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica6(id, dataMoral,data1,data2,data3,data4,data5,data6,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Rango de Edad',
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: '0-18',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: '19-30',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: '31-30',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: '41-50',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: '51-60',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data5
      },
      {
        name: '60-más',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data6
      },
      {
        name: 'Indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}
function grafHorizontalDinamica7(id, dataMoral,data1,data2,data3,data4,data5,data6,dataInd,titulo) {
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color:colors,
    title: {
      text: 'Estudios',
      subtext: titulo
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
    formatter: function(params) {
        // Calcular la suma total para ese punto
        var total = params.reduce(function(sum, item) {
            return sum + item.data;
        }, 0);

        // Función para formatear números con comas
        function numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }

        // Formatear el tooltip
        var tooltipString = '';
        params.forEach(function(item) {
            var formattedData = numberWithCommas(item.data);
            var percentage = (item.data / total * 100).toFixed(0);
            tooltipString += `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${item.color};"></span>${item.seriesName}: ${formattedData} (${percentage}%)<br/>`;
        });
        return tooltipString;
    }
},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%', 
      containLabel: true
    },
    xAxis: {
      type: 'value',
      show: false
    },
    yAxis: {
      type: 'category',
      data: ['Moral', 'Hombre', 'Mujer']
    },
    series: [
      {
        name: 'Moral',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataMoral
      },
      {
        name: 'Primaria',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data1
      },
      {
        name: 'Secunaria',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data2
      },
      {
        name: 'Medio superior',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data3
      },
      {
        name: 'Técnico',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data4
      },
      {
        name: 'Licenciatura',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data5
      },
      {
        name: 'Otro',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: data6
      },
      {
        name: 'Indefinido',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
          formatter: function(params) {
            return params.data.toLocaleString();
          }
        },
        emphasis: {
          focus: 'series'
        },
        data: dataInd
      }
    ]
  };
  
  option && myChart.setOption(option);
  
}

function graficoBarrasSencillo(id,ejeX,ejeY,titulo){
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  option = {
    color: "#FFA000",
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data:  ejeX,
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: ejeY
      }
    ]
  };
  option && myChart.setOption(option);
  
}

function graficosBarrasApiladasVertical(id,ejeX,series,titulo){
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    color : colors,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter: function(params) {
        var tooltipString = '';
        for (var i = 0; i < params.length; i++) {
          tooltipString += `${params[i].marker}${params[i].seriesName}: ${params[i].value}%<br/>`;
        }
        return tooltipString;
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: "{value}%",
        fontSize: 8,
      }
    },
    xAxis: {
      type: 'category',
      data: ejeX
    },
    series: series
  };
  option && myChart.setOption(option);
  
}
function graficaBarrasVerticales(id,ejeX,datos,titulo){
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  var datosConColores = datos.map((dato, index) => ({
    value: dato,
    itemStyle: {
      color: colors[index % colors.length]
    },
    label: {
      show: true, // Muestra la etiqueta
      formatter: '{c}' // Formato de la etiqueta, {c} se refiere al valor de la barra
  }
  }));
  var option = {
    title: {
      text: titulo,
    },
    xAxis: {
      type: 'category',
      data: ejeX,
      axisLabel: {
        interval: 0,
        fontSize: 12 
      }
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [{
      data: datosConColores,
      type: 'bar'
    }]
  };
  option && myChart.setOption(option);
  
}

function graficaTresLineas(id,ejeX,data1,data2,data3,titulo){
  var chartDom = document.getElementById(id);
  var myChart = echarts.init(chartDom);
  var option;
  const ejeXCombinado = ejeX.map((elemento, index) => `{a|${elemento}}\n{b|${data3[index]}%}`);
  const colors = ["#232153","#492FE5","#FFA000","#D9D9D9"];
  option = {
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'cross',
    //     crossStyle: {
    //       color: '#999'
    //     }
    //   }
    // },
    legend: {
      data: ['Recibos enviados', 'Recibos cobrados', '% Efectividad de cobranza']
    },
    xAxis: [
      {
        type: 'category',
        data: ejeXCombinado,
        axisLabel: {
          interval: 0,
          rich: {
            a: {
              // Estilos para la primera línea (ejeX)
              color: '#333',
              lineHeight: 20
            },
            b: {
              // Estilos para la segunda línea (porcentajes)
              color: '#333',
              lineHeight: 20,
              align: 'center'
            }
          },
          formatter: function (value) {
            // Usar el valor formateado con etiquetas enriquecidas
            return value;
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Recibos cobrados',
        show:false,
        // min: 0,
        // max: 100,
        // interval: 50,
        axisLabel: {
          formatter: '{value}'
        }
      },
      // {
      //   type: 'value',
      //   name: '% Efectividad de cobranza',
      //   min: 0,
      //   max: 100,
      //   interval: 20,
      //   axisLabel: {
      //     formatter: '{value} %'
      //   }
      // }
    ],
    series: [
      {
        name: 'Recibos enviados',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value ;
          }
        },
        label: {
          show: true, // Mostrar la etiqueta
          position: 'top', // Posición de la etiqueta
          formatter: function (params) {
            return params.value; // Mostrar el valor de cada punto
          }
        },
        data: data2
      },
      {
        name: 'Recibos cobrados',
        type: 'line',
        tooltip: {
          valueFormatter: function (value) {
            return value;
          }
        },
        data: data1
      },
      // {
      //   name: '% Efectividad de cobranza',
      //   type: 'line',
      //   yAxisIndex: 1,
      //   tooltip: {
      //     valueFormatter: function (value) {
      //       return value + ' %';
      //     }
      //   },
      //   data: data3
      // }
    ]
  };
  option && myChart.setOption(option);
  
}