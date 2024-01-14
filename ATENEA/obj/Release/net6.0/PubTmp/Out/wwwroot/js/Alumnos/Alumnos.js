let urlAlumnoId = 'Alumnos/listarAlumnos'
let celdaSeleccionada = null;

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
    if(ciclo!='' && grupo!=''){
        let urlAlumno = 'Combos/ComboAlumnos/?ciclo='+ciclo+'&grupo='+grupo    
        fetchGet(urlAlumno, 'json', function (rpta) {
            if(rpta.length > 0){
                habilitarDivFlex('cmbAlumnos')
            }else{
                deshabilitarDivFlex('cmbAlumnos')
                deshabilitarDivFlex('cuadroAlumnoModificar')
                mensajeIncorrecto('No se encontraron alumno inscritos al ciclo: '+ciclo+' y grupo: '+grupo)
            }
            console.log(rpta)
            llenarCombo(rpta, 'cmbAlumnos', 'idCombo', 'txtCombo')
        })
    }
}

function editarAlumno(event){
    let idAlumno = document.getElementById('cmbAlumnos').value
    if(idAlumno!=''){
        urlAlumnoId = 'Alumnos/listarAlumnos/?idAlumno='+idAlumno
        fetchGet(urlAlumnoId, 'json', function (rpta) {
            let Alumno = rpta[0]
            document.getElementsByName('nombreMod')[0].value = Alumno.nombre;
            document.getElementsByName('apellidoPaternoMod')[0].value = Alumno.apellidoPaterno;
            document.getElementsByName('apellidoMaternoMod')[0].value = Alumno.apellidoMaterno;
            document.getElementsByName('numero-boletaMod')[0].value = Alumno.numeroBoleta;
            habilitarDivFlex("cuadroAlumnoModificar")
        })
    }else{
        deshabilitarDivFlex('cuadroAlumnoModificar')
    }
}


function enviarFormularioRegistroAlumnos() {
    console.log("enviando formulario alumnos")
    var formu = document.getElementById("formRegistroAlumno");
    var frm = new FormData(formu);
    var nombre = frm.get('nombre');
    var apellidoPa = frm.get('apellidoPaterno');
    var apellidoMa = frm.get('apellidoMaterno');
    var boleta = frm.get('numero-boleta');
    let insertaUrl = 'Alumnos/insertarAlumnos/?nombre='+nombre+'&apellidoPa='+apellidoPa+'&apellidoMa='+apellidoMa+'&boleta='+boleta
    console.log(insertaUrl)
    fetchGet(insertaUrl, 'text', function (res) {
        console.log(res)
        if (res == 'datos insertados correctamente') {
            mensajeCorrecto("Alumno registrado correctamente")
        } else {
            mensajeIncorrecto("Hubo un error al registrar")
        }
    });
}

function modificarAlumno(){
    $('#exampleModal').modal('hide');
    console.log("enviando formulario modifcar alumno")
    let idAlumno = document.getElementById("cmbAlumnos").value
    var formu = document.getElementById("formModificarAlumno");
    var frm = new FormData(formu);
    var nombre = frm.get('nombreMod');
    var apellidoPa = frm.get('apellidoPaternoMod');
    var apellidoMa = frm.get('apellidoMaternoMod');
    var boleta = frm.get('numero-boletaMod');
    let actualizarUrl = 'Alumnos/actualizarAlumno/?nombre='+nombre+'&apellidoPa='+apellidoPa+'&apellidoMa='+apellidoMa+'&boleta='+boleta+'&idAlumno='+idAlumno
    console.log(actualizarUrl)
    fetchGet(actualizarUrl, 'text', function (res) {
        console.log(res)
        if (res == 'datos actualizados correctamente') {
            mensajeCorrecto("Datos actualizados correctamente.")
        } else {
            mensajeIncorrecto("Hubo un error al actualizar los datos")
        }
    });
}

function eliminarAlumno(){
    $('#eliminarAlumnoModal').modal('hide');
    console.log("enviando formulario eliminar alumno")
    let idAlumno = document.getElementById("cmbAlumnos").value
    let eliminarUrl = 'Alumnos/eliminarAlumno/?idAlumno='+idAlumno
    console.log(eliminarUrl)
    fetchGet(eliminarUrl, 'text', function (res) {
        console.log(res)
        if (res == 'alumno eliminado correctamente') {
            mensajeCorrecto("Alumno eliminado correctamente")
        } else {
            mensajeIncorrecto("Hubo un error al eliminar al alumno")
        }
    });
}