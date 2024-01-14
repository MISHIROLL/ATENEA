
const attendanceData = [
    { IdCheck: 33, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Entrada' },
    { IdCheck: 34, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Español' },
    { IdCheck: 35, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Matematicas' },
    { IdCheck: 36, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Historia' },
    { IdCheck: 37, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Inglés' },
    { IdCheck: 38, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Geografía' },
    { IdCheck: 39, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Biología' },
    { IdCheck: 40, Numero: 76492, Dia: 'viernes', Fecha: '12/01/2023', Hora: '22:48', Tipo: 'Fin de clases' },
    { IdCheck: 1, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:40', Tipo: 'Entrada' },
    { IdCheck: 2, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Español' },
    { IdCheck: 3, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Matematicas' },
    { IdCheck: 4, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Historia' },
    { IdCheck: 5, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Inglés' },
    { IdCheck: 6, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Geografía' },
    { IdCheck: 7, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Biología' },
    { IdCheck: 8, Numero: 76492, Dia: 'jueves', Fecha: '11/01/2024', Hora: '00:41', Tipo: 'Fin de clases' },
    { IdCheck: 17, Numero: 76492, Dia: 'miércoles', Fecha: '10/01/2023', Hora: '22:48', Tipo: 'Entrada' },
    { IdCheck: 18, Numero: 76492, Dia: 'miércoles', Fecha: '10/01/2023', Hora: '22:48', Tipo: 'Español' },
    { IdCheck: 19, Numero: 76492, Dia: 'miércoles', Fecha: '10/01/2023', Hora: '22:48', Tipo: 'Matematicas' },
    { IdCheck: 20, Numero: 76492, Dia: 'miércoles', Fecha: '10/01/2023', Hora: '22:48', Tipo: 'Historia' },
    // ... puedes continuar agregando más registros si es necesario
  ];

// Agrupar datos por día
const groupedByDay = {};
attendanceData.forEach(item => {
  if (!groupedByDay[item.Dia]) {
    groupedByDay[item.Dia] = [];
  }
  groupedByDay[item.Dia].push(item);
});

// Definir el cuerpo del documento con estilos
var docDefinition = {
  content: [
    {
      text: 'REPORTE DE ASISTENCIAS',
      style: 'title'
    }
  ],
  styles: {
    title: {
      fontSize: 22,
      bold: true,
      alignment: 'center',
      margin: [0, 20, 0, 20] // Margen arriba y abajo del título
    },
    header: {
      fontSize: 18,
      bold: true,
      margin: [0, 10, 0, 10] // Margen arriba y abajo de cada cabecera de día
    },
    tableHeader: {
      bold: true,
      fontSize: 13,
      color: 'white',
      fillColor: '#4CAF50',
      margin: [0, 5, 0, 5]
    },
    tableBodyEven: {
      fillColor: '#f3f3f3'
    },
    tableBodyOdd: {
      fillColor: '#e6e6e6'
    }
  },
  defaultStyle: {
    margin: [10, 5, 10, 5] // Margen para todo el contenido
  }
};

// Añadir datos a la definición del documento
Object.keys(groupedByDay).forEach((day, index) => {
  docDefinition.content.push({ text: `Día: ${day}`, style: 'header' });
  
  let body = [];
  body.push(['IdCheck', 'Numero', 'Fecha', 'Hora', 'Tipo'].map(header => ({ text: header, style: 'tableHeader' })));
  
  groupedByDay[day].forEach((item, idx) => {
    let rowStyle = idx % 2 === 0 ? 'tableBodyEven' : 'tableBodyOdd';
    body.push([{ text: item.IdCheck, style: rowStyle },
               { text: item.Numero, style: rowStyle },
               { text: item.Fecha, style: rowStyle },
               { text: item.Hora, style: rowStyle },
               { text: item.Tipo, style: rowStyle }]);
  });

  docDefinition.content.push({
    style: 'tableExample',
    table: {
      body: body
    },
    layout: 'noBorders'
  });
});

// Crear el PDF
pdfMake.createPdf(docDefinition).download('registro-de-asistencia.pdf');