

eventlisteners()


function eventlisteners(){
    document.addEventListener('DOMContentLoaded', function(){
        listarComboCiclos()
        listarComboGrupos()
    }) 
}

function listarComboCiclos(){
    fetchGet('Combos/ComboCiclo', 'json', function (rpta) {
        llenarCombo(rpta, 'cmbCiclo', 'idCombo', 'txtCombo')
        // console.log(rpta)
    })
}
function listarComboGrupos(){
    fetchGet('Combos/ComboGrupo', 'json', function (rpta) {
        llenarCombo(rpta, 'cmbGrupo', 'idCombo', 'txtCombo')
        // console.log(rpta)
    })
}
function filtrarAlumnos(){
    console.log("entrando")
    const ciclo = document.getElementById('cmbCiclo').value
    const grupo = document.getElementById('cmbGrupo').value
    let urlAlumno = 'Combos/ComboAlumnos/?ciclo='+ciclo+'&grupo='+grupo    
    fetchGet(urlAlumno, 'json', function (rpta) {
        console.log(rpta)
        llenarCombo(rpta, 'cmbAlumnos', 'idCombo', 'txtCombo')
    })
}

function mostrarRegistroAlumno(){
    habilitarDivFlex("cuadroAlumno")
}

function ocultarRegistroAlumno(){
    deshabilitarDivFlex("cuadroAlumno")
}

function enviarFormularioRegistroAlumnos() {
    console.log("enviando formulario alumnos")
    var formu = document.getElementById("formRegistroAlumno");
    var frm = new FormData(formu);
    var nombre = frm.get('nombre');
    var apellidoPa = frm.get('apellidoPaterno');
    var apellidoMa = frm.get('apellidoMaterno');
    var boleta = frm.get('numero-boleta');
    // console.log(nombre)
    // console.log(apellidoPa)
    // console.log(apellidoMa)
    // console.log(boleta)
    let insertaUrl = 'Alumnos/insertarAlumno/?nombre='+nombre+'&apellidoPa='+apellidoPa+'&apellidoMa='+apellidoMa+'&boleta='+boleta
    console.log(insertaUrl)
}