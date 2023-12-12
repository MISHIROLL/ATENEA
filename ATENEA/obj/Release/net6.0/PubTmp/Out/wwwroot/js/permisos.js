window.onload = function () {
  menu()
}

var contenido = ''
var rutasTot = 0
let accesos = []

let peticionPermisos = {
  url: 'Permisos/listarPermisos',
}
let peticionInicio = {
  controlador: ['DOperaciones', 'DOperaciones', 'DOperaciones'],
  accion: ['Index', 'DashboardIR', 'DashboardMetro'],
  rol: ['Operaciones', 'DashboardIR', 'DashboardMetro'],
  descipcion: ['Dashboard', 'Dashboard IR', 'Dashboard Metro'],
  //submenu: ['DashboardIR', 'DashboardMetro'],
  confSubmenu: [
    { nombre: 'DashboardIR', accion: 'peticionVentas2' },
    { nombre: 'DashboardMetro', accion: 'peticionVentas' },
  ],
  destino: 'menu',
  titulo: 'Inicio',
  icono: 'fa fa-flag-checkered',
}

let peticionVentas = {
  controlador: ['Venta', 'Venta', 'Venta', 'Venta', 'Venta'],
  accion: [
    'SeguimientoVentas',
    'VentaZona',
    'VentaMensual',
    'VentaQuincenal',
    'VentaDiario',
  ],
  rol: [
    'Operaciones',
    'VentaZona',
    'VentaMensual',
    'VentaQuincenal',
    'VentaDiario',
  ],
  descipcion: [
    'Seguimiento de Ventas',
    'Seguimiento Ventas Zona',
    'ComparativoMensualVentas',
    'Seguimiento Ventas Quincenales',
    'Reporte Diario',
  ],
  submenu: ['VentaDiario'],
  confSubmenu: [
    { nombre: 'VentaDiario', accion: 'peticionSubVentas' },
    { nombre: 'DashboardMetro', accion: 'peticionVentas' },
  ],
  destino: 'menu',
  titulo: 'Ventas',
  icono: 'fa fa-usd',
}

let peticionCredito = {
  controlador: ['Credito', 'Credito'],
  accion: ['Simulador', 'Index'],
  rol: ['Simulador', 'Operaciones'],
  descipcion: ['Simulador Pre Análisis', 'Guías de Referencia'],
  destino: 'menu',
  titulo: 'Riegos Crédito',
  icono: 'ti ti-alert',
}

let peticionEscrituracion = {
  controlador: ['Escrituraciones', 'Escrituraciones', 'Escrituraciones'],
  accion: ['Index', 'EscSemanal', 'EscNot'],
  rol: ['Operaciones', 'Operaciones', 'Operaciones'],
  descipcion: [
    'Escrituración',
    'Escrituracion Semanal',
    'Escrituracion Notaria',
  ],
  destino: 'menu',
  titulo: 'Escrituración',
  icono: 'ti ti-bookmark-alt',
}

let peticionCart = {
  controlador: ['DOperaciones', 'DOperaciones'],
  accion: ['General', 'ProcesoComite'],
  rol: ['Operaciones', 'ProcesoComite'],
  descipcion: ['Reporte General', 'Corre proceso Comité'],
  destino: 'menu',
  titulo: 'Cartera Administrada',
  icono: 'ti ti-bookmark-alt',
}

let peticionConsejo = {
  controlador: ['DOperaciones', 'DOperaciones'],
  accion: ['General', 'ProcesoComite'],
  rol: ['Operaciones', 'ProcesoComite'],
  descipcion: ['Reporte General', 'Corre proceso Comité'],
  destino: 'menu',
  titulo: 'Cartera Administrada',
  icono: 'ti ti-bookmark-alt',
}

let peticionSubVentas = {
  controlador: ['Ventas', 'Ventas', 'Ventas'],
  accion: ['VentaTotal', 'VentaMetro', 'VentaIR'],
  rol: ['VentaTotal', 'VentaMetro', 'VentaIR'],
  descipcion: ['Total', 'Metropolitana', 'Interior Rep'],
}

let perticionMenu = [
  // 'inicio',
  'dash',
  'dashGeneral',
  'dashOperativo',
  'dashCalidad',
  'dashVentas',
  'segVentaQuincenal',
  'segVentaAnual',
  'comparaElegible',
  'segCancela',
  'cancela',
  'ventas',
  'segVenta',
  'correVentas',
  'correMailling',
  'correComite',
  'segVentaSemanal',
  'segVentaMensual',
  'SegVentaDiario',
  'ventaTotal',
  'ventaTotal',
  'ventaMetro',
  'ventaIr',
  'Riesgos',
  'simulCredito',
  'guiaCred',
  'escrituracion',
  'EscReporte',
  'EscSemanal',
  'EscNot',
  'cartera',
  'carteraReporte',
  'carteraElegible',
  'procesoComite',
  'consejo',
  'consejoVentas',
  'consejoCarteras',
  'consejoAdjudicados',
  'consejoEscriturados',
  'movcart',
  'procesos',
  'experiencia',
  'originacion',
  'matricesSucursal',
  'cedulaVentas',
  'reportesCrea',
  'reporteCobranza',
  'reporteFlujoEfectivo'
]

function menu() {
  permisos(peticionPermisos)
  
}

function permisos(configuracion) {
  fetchGet(configuracion.url, 'json', function (res) {
    
    res.forEach((permisos) => {
      let { permiso } = permisos
      accesos = [...accesos, permiso]
    })

    menuProceso(perticionMenu)
  })
}

function menuProceso(peticion) {
  peticion.forEach((permiso) => {
    accesos.forEach((acceso) => {     
      if (permiso == acceso) {
        document.getElementById(permiso).hidden = false
        return       
      }

    })
  })
}

function menuComp(configuracion) {
  var roles = configuracion.rol
  var controladores = configuracion.controlador
  var acciones = configuracion.accion
  var descipciones = configuracion.descipcion
  var sub = configuracion.submenu
  var rutas = 0
  var confsub = configuracion.confSubmenu
 
  var raiz = document.getElementById('hdfOculto').value
  var urlCompleta =
    window.location.protocol + '//' + window.location.host + '/' + raiz

  for (var i = 0; i < roles.length; i++) {
    accesos.forEach((acceso) => {
      if (roles[i] == acceso) {
        rutas = rutas + 1
      }
    })
  }
  rutasTot = rutasTot + rutas

  if (rutas > 0) {
    contenido += `<li aria-haspopup="true"><a href="#" class="sub-icon"><i class="${configuracion.icono}"></i> ${configuracion.titulo} <i class="fa fa-angle-down horizontal-icon"></i></a>`
    contenido += '<ul class="sub-menu">'
    for (var i = 0; i < roles.length; i++) {
      accesos.forEach((acceso) => {
        if (roles[i] == acceso) {
          if (!sub) {
            contenido += `<li aria-haspopup="true"><a href= "${urlCompleta}${controladores[i]}/${acciones[i]}">${descipciones[i]} </a></li>`
          } else {
            let valida = sub.some((menu) => menu == acciones[i])
            if (valida) {
              let resultado = confsub.find((conf) => conf.nombre == acciones[i])
              let opcMenu = resultado.accion
              
              contenido += `<li aria-haspopup="true" class="sub-menu-sub"><a href="#">${descipciones[i]}</a>`
              traductor(opcMenu)
              contenido += `</li>`
            } else {
              contenido += `<li aria-haspopup="true"><a href= "${urlCompleta}${controladores[i]}/${acciones[i]}">${descipciones[i]} </a></li>`
            }
          }
        }
      })
    }

    contenido += '</ul>'
    contenido += '</li>'
    
    document.getElementById(configuracion.destino).innerHTML = contenido
  }
}

function SubmenuComp(configuracion) {
  var roles = configuracion.rol
  var controladores = configuracion.controlador
  var acciones = configuracion.accion
  var descipciones = configuracion.descipcion
  var rutas = 0

  var raiz = document.getElementById('hdfOculto').value
  var urlCompleta =
    window.location.protocol + '//' + window.location.host + '/' + raiz

  for (var i = 0; i < roles.length; i++) {
    accesos.forEach((acceso) => {
      if (roles[i] == acceso) {
        rutas = rutas + 1
      }
    })
  }
  rutasTot = rutasTot + rutas
  
  if (rutas > 0) {
    contenido += '<ul class="sub-menu">'
    for (var i = 0; i < roles.length; i++) {
      accesos.forEach((acceso) => {
        if (roles[i] == acceso) {
          contenido += `<li aria-haspopup="true"><a href= "${urlCompleta}${controladores[i]}/${acciones[i]}">${descipciones[i]} </a></li>`
        }
      })
    }
    contenido += '</ul>'
  }
}

function traductor(tipo) {
  
  if (tipo == 'peticionSubVentas') {
    SubmenuComp(peticionSubVentas)
  }
  if (tipo == 'peticionVentas2') {
    SubmenuComp(peticionVentas2)
  }
}
