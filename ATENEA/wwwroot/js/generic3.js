function get(idcontrol) {
  return document.getElementById(idcontrol).value
}

function set(idcontrol, valor) {
  document.getElementById(idcontrol).value = valor
}

function setN(namecontrol, valor) {
  document.getElementsByName(namecontrol)[0].value = ''
}

function getN(namecontrol, valor) {
  return document.getElementsByName(namecontrol)[0].value
}

function LimpiarDatos(idformulario) {
  var elementosName = document.querySelectorAll('#' + idformulario + ' [name]')
  var elementoActual
  var elementoName
  for (var i = 0; i < elementosName.length; i++) {
    elementoActual = elementosName[i]
    elementoName = elementoActual.name
    setN(elementoName, '')
  }
}

async function fetchGet(url, tiporespuesta, callback) {
  try {
    var raiz = document.getElementById('hdfOculto').value
    //http://localhost........
    var urlCompleta =
      window.location.protocol + '//' + window.location.host + '/' + raiz + url
    // console.log(urlCompleta)
    var res = await fetch(urlCompleta)
    if (tiporespuesta == 'json') res = await res.json()
    else if (tiporespuesta == 'text') res = await res.text()
    //JSON (Object)
    callback(res)
  } catch (e) {
    console.log(e)
  }
}

function llenarCombo(
  data,
  idcontrol,
  propiedadId,
  propiedadNombre,
  textoprimeraopcion = '---Seleccione---',
  valueprimeraopcion = '',
) {
  var hoy = new Date()
  var anio = String(hoy.getFullYear())
  var mes = String(hoy.getMonth()+1)
  if(mes < 10)
  {
    mes = '0'+mes
  }
  var periodo = anio+mes

  var contenido = ''
  var objActual
  contenido +=
    "<option value='" +
    valueprimeraopcion +
    "'>" +
    textoprimeraopcion +
    '</option>'
  for (var i = 0; i < data.length; i++) {
    objActual = data[i]
    if(objActual.idCombo == periodo)
    {
      contenido +=
      "<option value='" +
      objActual[propiedadId] +
      "' selected>" +
      (objActual[propiedadNombre]) +
        
      '</option>'
    }else{

      contenido +=
        "<option value='" +
        objActual[propiedadId] +
        "'>" +
        (objActual[propiedadNombre])+
        '</option>'
    }
  }

  document.getElementById(idcontrol).innerHTML = contenido
}

function llenarComboSinSeleccion(
  data,
  idcontrol,
  propiedadId,
  propiedadNombre,
  // textoprimeraopcion = '',
  // valueprimeraopcion = '',
) {
  var hoy = new Date()
  var anio = String(hoy.getFullYear())
  var mes = String(hoy.getMonth()+1)
  if(mes < 10)
  {
    mes = '0'+mes
  }
  var periodo = anio+mes

  var contenido = ''
  var objActual
  // contenido +=
  //   "<option value='" +
  //   valueprimeraopcion +
  //   "'>" +
  //   textoprimeraopcion +
  //   '</option>'
  for (var i = 0; i < data.length; i++) {
    objActual = data[i]
    if(objActual.idCombo == periodo)
    {
      contenido +=
      "<option value='" +
      objActual[propiedadId] +
      "' selected>" +
      (objActual[propiedadNombre]) +
        
      '</option>'
    }else{

      contenido +=
        "<option value='" +
        objActual[propiedadId] +
        "'>" +
        (objActual[propiedadNombre])+
        '</option>'
    }
  }

  document.getElementById(idcontrol).innerHTML = contenido
}

async function fetchPost(url, tiporespuesta, frm, callback) {
  try {
    var raiz = document.getElementById('hdfOculto').value
    //http://localhost........
    var urlCompleta =
      window.location.protocol + '//' + window.location.host + '/' + raiz + url
    var res = await fetch(urlCompleta, {
      method: 'POST',
      body: frm,
    })
    if (tiporespuesta == 'json') res = await res.json()
    else if (tiporespuesta == 'text') res = await res.text()
    //JSON (Object)
    callback(res)
  } catch (e) {
    console.log(e)
    alert('Ocurrio un error: '+e)
  }
}

//{url:"",columnas:[],propiedades:[]}

var objConfiguracionGlobal

function pintar(objConfiguracion) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  fetchGet(objConfiguracion.url, 'json', function (res) {
    var contenido = ''

    contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
    //........................................................
    contenido += generarTabla(res)
    contenido += '</div>'
    document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
  })
}

function pintar2(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarTabla(data)
  contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function pintarCartera(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarTablaCartera(data)
  contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function pintarDataReportes(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'
  var contenido = ''
  //........................................................
  contenido += generarDataTablaReportes(data)
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function pintarTablaSeleccionable(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarTablaSeleccionable(data)
  contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}
function pintarDataMovCartera(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  // contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarDataTablaMovCartera(data)
  // contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function pintarConsejoAzul(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarTablaConsejoAzul(data)
  contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function generarTabla(res) {
  
  var contenido = ''
  var cabeceras = objConfiguracionGlobal.cabeceras  
  var nombrepropiedades = objConfiguracionGlobal.propiedades
  var alineacion = objConfiguracionGlobal.alineacion
  var numeros = objConfiguracionGlobal.numeros
  var porcentajes = objConfiguracionGlobal.pct
  var enteros = objConfiguracionGlobal.enteros

  contenido += "<table class='table table-hover table-sm dato-tabla '>"
  contenido += "<thead class='bg-primary text-white text-center'>"
  contenido += '<tr>'

  for (var i = 0; i < cabeceras.length; i++) {
    contenido += '<td>' + cabeceras[i] + '</td>'
  }

  contenido += '</tr>'
  contenido += '</thead>'

  var nregistros = res.length
  var obj
  var stl
  var propiedadActual
  var columna
  var celda
  contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    obj = res[i]
    
    if (
      obj.concepto == 'Totales' ||
      obj.semanaesc == 'Totales' ||
      obj.mes == 'Totales' ||
      obj.tipoCartera == 'Total'
    )
    {
      contenido += '<tr class="table-dark" >'
    } 
    else if(obj.vta_neta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.vta_nta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.tipoCartera == 'HIR CASA')
    {
      contenido += '<tr class=" bg-secondary" >'
    }
    
    else {
      contenido += '<tr >'
    }
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j]
      celda = obj[propiedadActual]
      
      if (numeros) {
        for (var k = 0; k < numeros.length; k++) {
          columna = numeros[k]
          
          if (propiedadActual == columna) {            
            if(!celda)
            {              
              celda = '$'+0              
            }else{
            celda = parseInt(celda)
            celda = '$' + celda.toLocaleString('es-MX')
            }
          }
        }
      }
      if (porcentajes) {
        for (var k = 0; k < porcentajes.length; k++) {
          columna = porcentajes[k]
          if (propiedadActual == columna) {
            //celda = Number.parseFloat(celda * 100).toFixed(1) + '%'
            celda = parseInt(Math.round( celda*100))
            celda = celda +'%'
          }
        }
      }
      if (enteros) {
        for (var k = 0; k < enteros.length; k++) {
          columna = enteros[k]
          if (propiedadActual == columna) {            
            celda = celda.toLocaleString('es-MX')
            
          }
        }
      }
      stl = alineacion[j]
      contenido += `<td class="dato-tabla text-${stl}">` + celda + '</td>'
    }

    contenido += '</tr>'
  }

  contenido += '</tbody>'
  contenido += '</table>'
  return contenido
}

function generarTablaCartera(res) {
  
  var contenido = ''
  var cabeceras = objConfiguracionGlobal.cabeceras  
  var nombrepropiedades = objConfiguracionGlobal.propiedades
  var alineacion = objConfiguracionGlobal.alineacion
  contenido += "<table class='table table-hover table-sm dato-tabla '>"
  contenido += "<thead class='bg-primary text-white text-center'>"
  contenido += '<tr>'

  for (var i = 0; i < cabeceras.length; i++) {
    contenido += '<td>' + cabeceras[i] + '</td>'
  }

  contenido += '</tr>'
  contenido += '</thead>'

  var nregistros = res.length
  var obj
  var stl
  var propiedadActual
  var columna
  var celda
  contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    obj = res[i]
    contenido += '<tr >'
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j]
      celda = obj[propiedadActual]
      stl = alineacion[j]
      if (propiedadActual=='incremento' & celda>0) {
        contenido += `<td class="dato-tabla text-success text-${stl}"><i class="fa fa-angle-double-up"></i>` + celda.toLocaleString('es-MX') + '</td>'
      }else if(propiedadActual=='cancelacion' & celda<0){
        contenido += `<td class="dato-tabla text-danger text-${stl}"><i class="fa fa-angle-double-down"></i>` + celda.toLocaleString('es-MX') + '</td>'
      }
      else{
      contenido += `<td class="dato-tabla text-${stl}">` + celda.toLocaleString('es-MX') + '</td>'
      }
    }

    contenido += '</tr>'
  }

  contenido += '</tbody>'
  contenido += '</table>'
  return contenido
}

function generarDataTablaReportes(res) {
  var contenido = "";
  var nombrepropiedades = objConfiguracionGlobal.propiedades;
  var alineacion = objConfiguracionGlobal.alineacion;
  var nregistros = res.length;

  for (var i = 0; i < nregistros; i++) {
    obj = res[i];
    contenido += "<tr >";
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j];
      celda = obj[propiedadActual];
      stl = alineacion[j];
      if(propiedadActual == 'destinatarios' || propiedadActual == 'destinatariosCopia'){
        var destArray = celda.split(',');
        contenido += `<td class="dato-tabla text-${stl} fixed-width-column"><ul>`;
        destArray.forEach(function(email) {
          contenido +=  `<li>${email}</li>`
        });
        contenido +="</ul><button type='button' onclick='editarDestinatarios(event)' class='btn btn-icon btn-primary btn-success text-center'><i class='fa fa-edit'></i></button></td>";
      }else if(propiedadActual == 'linkEjecucion'){
        contenido += `<td class="dato-tabla text-success text-${stl}" class="fixed-width-column" >` +celda+'</td>'+`<td class="dato-tabla text-success text-${stl}" class="fixed-width-column">` + '<button class="btn btn-primary" onclick="ejecutarReporte(\''+celda+'\')">Ejecutar</button>' +'</td>'
      }else{
      contenido += `<td class="dato-tabla text-${stl} fixed-width-column">` + celda + "</td>";
      }
    }
    contenido += "</tr>";
  }
  return contenido;
}

function generarTablaSeleccionable(res) {
  var contenido = ''
  contenido += "<table class='table table-hover table-sm dato-tabla '>"
  contenido += "<thead class='bg-primary text-white text-center'>"
  contenido += '<tr>'
  contenido += '<td>Seleccione la sucursal</td>'
  contenido += '</tr>'
  contenido += '</thead>'

  var nregistros = res.length
  var celda
  contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    celda = res[i]
    contenido += '<tr >'
    contenido += `<td class="dato-tabla text-left" onclick="selectRow(this)">` + celda + '</td>'
    contenido += '</tr>'
  }
  contenido += '</tbody>'
  contenido += '</table>'
  return contenido
}
function generarDataTablaMovCartera(res) {
  
  var contenido = ''
  var cabeceras = objConfiguracionGlobal.cabeceras  
  var nombrepropiedades = objConfiguracionGlobal.propiedades
  var alineacion = objConfiguracionGlobal.alineacion
  var numeros = objConfiguracionGlobal.numeros
  var porcentajes = objConfiguracionGlobal.pct
  var enteros = objConfiguracionGlobal.enteros

  // contenido += "<table class='table table-hover table-sm dato-tabla '>"
  // contenido += "<thead class='bg-primary text-white text-center'>"
  // contenido += '<tr>'

  // for (var i = 0; i < cabeceras.length; i++) {
  //   contenido += '<td>' + cabeceras[i] + '</td>'
  // }

  // contenido += '</tr>'
  // contenido += '</thead>'

  var nregistros = res.length
  // var obj
  // var stl
  // var propiedadActual
  // var columna
  // var celda
  // contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    obj = res[i]
    if (
      obj.concepto == 'Totales' ||
      obj.semanaesc == 'Totales' ||
      obj.mes == 'Totales' ||
      obj.tipoCartera == 'Total' ||
      obj.concepto == 'Total Disminuciones'	||
      obj.concepto == 'Total Incremento'
    )
    {
      contenido += '<tr class="table-dark" >'
    } 
    else if(obj.vta_neta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.vta_nta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.tipoCartera == 'HIR CASA')
    {
      contenido += '<tr class=" bg-secondary" >'
    }
    
    else {
      contenido += '<tr >'
    }
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j]
      celda = obj[propiedadActual]
      if (numeros) {
        for (var k = 0; k < numeros.length; k++) {
          columna = numeros[k]
          
          if (propiedadActual == columna) {            
            if(!celda)
            {              
              celda = '$'+0              
            }else{
            celda = parseInt(celda)
            celda = '$' + celda.toLocaleString('es-MX')
            }
          }
        }
      }
      if (porcentajes) {
        for (var k = 0; k < porcentajes.length; k++) {
          columna = porcentajes[k]
          if (propiedadActual == columna) {
            celda = (celda).toFixed(2) + '%'
          }
        }
      }
      if (enteros) {
        for (var k = 0; k < enteros.length; k++) {
          columna = enteros[k]
          if (propiedadActual == columna) {            
            celda = celda.toLocaleString('es-MX')
            
          }
        }
      }
      stl = alineacion[j]
      if(i == nregistros-1 && (propiedadActual== 'movimientoMensual' || propiedadActual== ' ')){
        contenido += `<td class="dato-tabla bg-amarilloClaro text-${stl}">` + celda + '</td>'
      }
      else if(propiedadActual == 'cttosInicioMes' || propiedadActual == 'montoInicioMes' || propiedadActual == 'montoCarteraCierre' || propiedadActual =='cttosCarteraCierre'){
        contenido += `<td class="dato-tabla align-middle bg-azulClaro text-black text-${stl}" text-white>` + celda + '</td>'
      }
      else if(celda === '0' || celda === '$0' || celda === '0%'){
        contenido += `<td class="dato-tabla text-${stl}" text-white>` + '---' + '</td>'
      }else if(parseFloat(celda.replace(/[$,]/g, ''))<0){
          contenido += `<td class="dato-tabla text-${stl} text-danger">` + celda + '</td>'
      }
      else if(celda == 'Cartera al inicio de mes'||celda == 'Saldo Mensual Final'||celda == 'Saldo Acumulado Final'){
        contenido += `<td class="dato-tabla bg-amarilloClaro text-${stl}">` + celda + '</td>'
      }
      else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Adjudicatario a Adjudicado'&& (propiedadActual=='montoAdjudicatarios' || propiedadActual=='contratosAdjudicatarios')){
          contenido += `<td class="dato-tabla bg-danger text-${stl}">` + celda + '</td>'        
      }else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Adjudicatario a Adjudicado'&& (propiedadActual=='montoAdjudicados' || propiedadActual=='contratosAdjudicados')){
        contenido += `<td class="dato-tabla bg-success text-${stl}">` + celda + '</td>'        
      }
      else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Declinaciones'&& (propiedadActual=='montoIntegrantes' || propiedadActual=='contratosIntegrantes')){
        contenido += `<td class="dato-tabla bg-success text-${stl}">` + celda + '</td>'        
      }else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Declinaciones'&& (propiedadActual=='montoAdjudicatarios' || propiedadActual=='contratosAdjudicatarios')){
        contenido += `<td class="dato-tabla bg-danger text-${stl}">` + celda + '</td>'        
      }
      else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Integrante a Adjudicatario'&& (propiedadActual=='montoIntegrantes' || propiedadActual=='contratosIntegrantes')){
        contenido += `<td class="dato-tabla bg-danger text-${stl}">` + celda + '</td>'        
      }else if(obj.tipoMovimiento=='Transicion' && obj.concepto=='Integrante a Adjudicatario'&& (propiedadActual=='montoAdjudicatarios' || propiedadActual=='contratosAdjudicatarios')){
        contenido += `<td class="dato-tabla bg-success text-${stl}">` + celda + '</td>'        
      }
      else{
        contenido += `<td class="dato-tabla text-${stl}">` + celda + '</td>'

      }
    }

    contenido += '</tr>'
  }

  // contenido += '</tbody>'
  // contenido += '</table>'
  return contenido
}

function pintarData(objConfiguracion, data) {
  objConfiguracionGlobal = objConfiguracion
  if (objConfiguracion.divContenedorTabla == undefined)
    objConfiguracion.divContenedorTabla = 'divContenedorTabla'
  if (objConfiguracion.divPintado == undefined)
    objConfiguracion.divPintado = 'divTabla'

  var contenido = ''

  // contenido += "<div id='" + objConfiguracion.divContenedorTabla + "'>"
  //........................................................
  contenido += generarDataTabla(data)
  // contenido += '</div>'
  document.getElementById(objConfiguracion.divPintado).innerHTML = contenido
}

function generarDataTabla(res) {
  
  var contenido = ''
  var cabeceras = objConfiguracionGlobal.cabeceras  
  var nombrepropiedades = objConfiguracionGlobal.propiedades
  var alineacion = objConfiguracionGlobal.alineacion
  var numeros = objConfiguracionGlobal.numeros
  var porcentajes = objConfiguracionGlobal.pct
  var enteros = objConfiguracionGlobal.enteros
  var sinDecimal = objConfiguracionGlobal.sinDecimal

  // contenido += "<table class='table table-hover table-sm dato-tabla '>"
  // contenido += "<thead class='bg-primary text-white text-center'>"
  // contenido += '<tr>'

  // for (var i = 0; i < cabeceras.length; i++) {
  //   contenido += '<td>' + cabeceras[i] + '</td>'
  // }

  // contenido += '</tr>'
  // contenido += '</thead>'

  var nregistros = res.length
  // var obj
  // var stl
  // var propiedadActual
  // var columna
  // var celda
  // contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    obj = res[i]
    
    if (
      obj.concepto == 'Totales' ||
      obj.semanaesc == 'Totales' ||
      obj.mes == 'Totales' ||
      obj.tipoCartera == 'Total' ||
      obj.cuenta == 'TOTAL' ||
      obj.tipoPago == 'TOTAL' ||
      obj.etapa == 'TOTALES'
    )
    {
      contenido += '<tr class="table-dark" >'
    } 
    else if(obj.vta_neta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.vta_nta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    else if(obj.tipoCartera == 'HIR CASA')
    {
      contenido += '<tr class=" bg-secondary" >'
    }
    
    else {
      contenido += '<tr >'
    }
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j]
      celda = obj[propiedadActual]
      
      if (numeros) {
        for (var k = 0; k < numeros.length; k++) {
          columna = numeros[k]
          
          if (propiedadActual == columna) {            
            if(!celda)
            {              
              celda = '$'+0              
            }else{
            celda = parseInt(celda)
            celda = '$' + celda.toLocaleString('es-MX')
            }
          }
        }
      }
      if (porcentajes) {
        for (var k = 0; k < porcentajes.length; k++) {
          columna = porcentajes[k]
          if (propiedadActual == columna) {
            //celda = Number.parseFloat(celda * 100).toFixed(1) + '%'
            celda = parseInt(Math.round( celda))
            celda = celda +'%'
          }
        }
      }
      if (enteros) {
        for (var k = 0; k < enteros.length; k++) {
          columna = enteros[k]
          if (propiedadActual == columna) {            
            celda = celda.toLocaleString('es-MX')
            
          }
        }
      }
      if (sinDecimal) {
        for (var k = 0; k < sinDecimal.length; k++) {
          columna = sinDecimal[k]
          if (propiedadActual == columna) {            
            celda = parseInt(celda).toLocaleString('es-MX')
          }
        }
      }
      stl = alineacion[j]
      if(celda === '0' || celda === '$0' || celda === '0%'){
        contenido += `<td class="dato-tabla text-${stl}" text-white>` + '---' + '</td>'
      }else{
        contenido += `<td class="dato-tabla text-${stl}">` + celda + '</td>'

      }
    }

    contenido += '</tr>'
  }

  // contenido += '</tbody>'
  // contenido += '</table>'
  return contenido
}


function generarTablaConsejoAzul(res) {
  var contenido = ''
  var cabeceras = objConfiguracionGlobal.cabeceras
  var nombrepropiedades = objConfiguracionGlobal.propiedades
  var alineacion = objConfiguracionGlobal.alineacion
  var moneda = objConfiguracionGlobal.moneda
  var porcentajes = objConfiguracionGlobal.pct
  var numeros = objConfiguracionGlobal.numeros

  contenido += "<table class='table table-hover table-sm '>"
  contenido += "<thead'>"
  contenido += '<tr>'

  for (var i = 0; i < cabeceras.length; i++) {
    contenido += '<th class="table-th">' + cabeceras[i] + '</th>'
  }

  contenido += '</tr>'
  contenido += '</thead>'

  var nregistros = res.length
  var obj
  var stl
  var propiedadActual
  var columna
  var celda
  contenido += `<tbody >`

  for (var i = 0; i < nregistros; i++) {
    obj = res[i]
   
    if (
      obj.concepto == 'Totales' ||
      obj.semanaesc == 'Totales' ||
      obj.mes == 'Totales'
    )
    {
      contenido += '<tr class="table-total text-center" >'
    } 
    else if(obj.vta_neta == 0)
    {
      contenido += '<tr class=" text-red" >'
    }
    
    else {
      contenido += '<tr class="table-ini">'
    }
    for (var j = 0; j < nombrepropiedades.length; j++) {
      propiedadActual = nombrepropiedades[j]
      celda = obj[propiedadActual]
      if (moneda) {
        for (var k = 0; k < moneda.length; k++) {
          columna = moneda[k]
          if (propiedadActual == columna) {
            // celda = new Intl.NumberFormat('es-MX', {
            //   style: 'currency',
            //   currency: 'MXN',
            // }).format(celda)
            celda = celda/1000
            celda = parseInt(celda)
            celda = '$' + celda.toLocaleString('es-MX')
          }
        }
      }
      if (numeros) {
        for (var k = 0; k < numeros.length; k++) {
          columna = numeros[k]
          if (propiedadActual == columna) {
            // celda = new Intl.NumberFormat('es-MX', {
            //   style: 'currency',
            //   currency: 'MXN',
            // }).format(celda)
            // celda = celda/1000
            celda = parseInt(celda)
            celda =  celda.toLocaleString('es-MX')
          }
        }
      }
      if (porcentajes) {
        for (var k = 0; k < porcentajes.length; k++) {
          columna = porcentajes[k]
          if (propiedadActual == columna) {
            //celda = Number.parseFloat(celda * 100).toFixed(2) + '%'
            celda = parseInt(Math.round( celda*100))
            celda = celda +'%'
          }
        }
      }
      stl = alineacion[j]
      if (
        obj.concepto == 'Totales' ||
        obj.semanaesc == 'Totales' ||
        obj.mes == 'Totales'
      )
      {
        contenido += `<td class=" text-${stl}">` + celda + '</td>'
      }else{
      contenido += `<td class="table-ini text-${stl}">` + celda + '</td>'
      }
    }

    contenido += '</tr>'
  }

  contenido += '</tbody>'
  contenido += '</table>'
  return contenido
}



function mes(arreglo) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].mes == 1) {
      arreglo[i].mes = 'Enero'
    }
    if (arreglo[i].mes == 2) {
      arreglo[i].mes = 'Febrero'
    }
    if (arreglo[i].mes == 3) {
      arreglo[i].mes = 'Marzo'
    }
    if (arreglo[i].mes == 4) {
      arreglo[i].mes = 'Abril'
    }
    if (arreglo[i].mes == 5) {
      arreglo[i].mes = 'Mayo'
    }
    if (arreglo[i].mes == 6) {
      arreglo[i].mes = 'Junio'
    }
    if (arreglo[i].mes == 7) {
      arreglo[i].mes = 'Julio'
    }
    if (arreglo[i].mes == 8) {
      arreglo[i].mes = 'Agosto'
    }
    if (arreglo[i].mes == 9) {
      arreglo[i].mes = 'Septiembre'
    }
    if (arreglo[i].mes == 10) {
      arreglo[i].mes = 'Octubre'
    }
    if (arreglo[i].mes == 11) {
      arreglo[i].mes = 'Noviembre'
    }
    if (arreglo[i].mes == 12) {
      arreglo[i].mes = 'Diciembre'
    }
    if (arreglo[i].mes == 100) {
      arreglo[i].mes = 'Totales'
    }
  }
}


function mesDato(mes) {
   
    if (mes== 1) {
      dato= 'Ene-'
      
    }
    if (mes== 2) {
      dato='Feb-'
    }
    if (mes== 3) {
      dato='Mar-'
    }
    if (mes== 4) {
      dato='Abr-'
    }
    if (mes== 5) {
      dato='May-'
    }
    if (mes== 6) {
      dato='Jun-'
    }
    if (mes== 7) {
      dato='Jul-'
    }
    if (mes== 8) {
      dato='Ago-'
    }
    if (mes== 9) {
      dato='Sep-'
    }
    if (mes== 10) {
      dato='Oct-'
    }
    if (mes== 11) {
      dato='Nov-'
    }
    if (mes== 12) {
      dato='Dic-'
    }
    if (mes== 100) {
      dato='Totales'
    }

    return dato
  
}
function comboAniosDos(id, act, ant, valueprimeraopcion) {
  if (valueprimeraopcion == undefined) {
    valueprimeraopcion = '------Seleccione------'
  }
  var contenido = ''

  contenido +=
    "<option value='" +
    valueprimeraopcion +
    "'>" +
    valueprimeraopcion +
    '</option>'
  contenido += "<option value='" + ant + "'>" + ant + '</option>'
  contenido += "<option value='" + act + "' selected>" + act + '</option>'
  document.getElementById(id).innerHTML = contenido
}

function alertaDatos() {
  //datosDcAdjudicado(peticionDcAdjudicado)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Datos cargados correctamente',
    showConfirmButton: false,
    timer: 1500,
  })
}

function mensajeCorrecto(msj)
{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: msj,
    showConfirmButton: false,
    timer: 2500,
  })
}

function mensajeCorrectoLargo(msj)
{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: msj,
    showConfirmButton: false,
    timer: 5000,
  })
}

function mensajeIncorrecto(msj)
{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: msj,
    showConfirmButton: true,
    timer: 2500,
  })
}

function mensajeIncorrectoLargo(msj)
{
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: msj,
    showConfirmButton: true,
    timer: 5000,
  })
}

function soloNumeros() {
  //datosDcAdjudicado(peticionDcAdjudicado)
  Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'Solo se permiten numeros',
    showConfirmButton: false,
    timer: 1500,
  })
}

function comboAnios(id,base)
{
  let hoy = new Date()
  let anioActual = parseInt(hoy.getFullYear())  
  anioBase = base
  var contenido = ''

  contenido +=
    "<option value='" +
    undefined +
    "'>" +
    "------Seleccione------" +
    '</option>'

  for(let i = anioActual; i >= anioBase; i--)
  {
    if(i == anioActual)
    {

      contenido += "<option value='" + i + "'selected>" + i + '</option>'
    }
    else{
      contenido += "<option value='" + i + " '>" + i + '</option>'
    }
  }
  
  document.getElementById(id).innerHTML = contenido
}

function validarComportamiento(compor, valida) {
  let icono = ''
  if (compor == 0 && valida == 1) {
    icono = '<i class="icono-rojo fa fa-arrow-circle-down mb-0 " ></i>'
  }
  if (compor == 1 && valida == 1) {
    icono = '<i class="icono-verde fa fa-arrow-circle-up mb-0 " ></i>'
  }
  if (compor == 2 && valida == 1) {
    icono = '<i class="icono-amarillo fa fa-arrow-circle-right mb-0 " ></i>'
  }

  if (compor == 0 && valida == 0) {
    icono = '<i class="icono-verde fa fa-arrow-circle-down mb-0 " ></i>'
  }
  if (compor == 1 && valida == 0) {
    icono = '<i class="icono-rojo fa fa-arrow-circle-up mb-0 " ></i>'
  }
  if (compor == 2 && valida == 0) {
    icono = '<i class="icono-amarillo fa fa-arrow-circle-right mb-0 " ></i>'
  }

  return icono
}

function mesCompleto(mes) {
   
  if (mes== 1) {
    dato= 'Enero'
    
  }
  if (mes== 2) {
    dato='Febrero'
  }
  if (mes== 3) {
    dato='Marzo'
  }
  if (mes== 4) {
    dato='Abril'
  }
  if (mes== 5) {
    dato='Mayo'
  }
  if (mes== 6) {
    dato='Junio'
  }
  if (mes== 7) {
    dato='Julio'
  }
  if (mes== 8) {
    dato='Agosto'
  }
  if (mes== 9) {
    dato='Septiembre'
  }
  if (mes== 10) {
    dato='Octubre'
  }
  if (mes== 11) {
    dato='Noviembre'
  }
  if (mes== 12) {
    dato='Diciembre'
  }
  if (mes== 100) {
    dato='Totales'
  }

  return dato

}


function Limpiar(id){
  const elemento = document.getElementById(id) 

  while(elemento.firstChild){
      elemento.removeChild(elemento.firstChild)
  }
}

function ocultarDiv(id){
  let div = document.getElementById(id)
  div.classList.add("invisible")
}

function mostrarDiv(id){
  let div = document.getElementById(id)
  div.classList.remove("invisible")
}

function deshabilitarDiv(id){
  let div = document.getElementById(id)
  div.style.display="none";
}

function habilitarDiv(id){
  let div = document.getElementById(id)
  div.style.display="block";
}

function deshabilitarDivFlex(id){
  let div = document.getElementById(id)
  div.style.display="none";
}

function habilitarDivFlex(id){
  let div = document.getElementById(id)
  div.style.display="flex";
}

function agregarClase(id,clase){
  let div = document.getElementById(id)
  div.classList.add(clase);
}

function eliminarClase(id,clase){
  let div = document.getElementById(id)
  div.classList.remove(clase);
}

function format(data) {
  data = parseInt(data);
  data = data.toLocaleString("es-MX");
  return data;
}