let urlAlumnoId = 'Alumnos/listarAlumnos'
let celdaSeleccionada = null;

eventlisteners()


function eventlisteners(){
    document.addEventListener('DOMContentLoaded', function(){
        listarComboMaterias()


    }) 
}

function listarComboMaterias(){
    fetchGet('Combos/ComboMaterias', 'json', function (rpta) {
        llenarCombo(rpta, 'cmbMateria', 'idCombo', 'txtCombo')
        // console.log(rpta)
    })
}

function filtrarProfesores(){
    const idMateria = document.getElementById('cmbMateria').value
    if(idMateria!=''){
        let urlProfesor = 'Combos/ComboProfesores/?idMateria='+idMateria    
        console.log(urlProfesor)
        fetchGet(urlProfesor, 'json', function (rpta) {
            if(rpta.length > 0){
                habilitarDivFlex('cmbProfesores')
            }else{
                deshabilitarDivFlex('cmbProfesores')
                // deshabilitarDivFlex('cuadroAlumnoModificar')
                mensajeIncorrecto('No se encontraron profesores en la materia seleccionada')
            }
            console.log(rpta)
            llenarCombo(rpta, 'cmbProfesores', 'idCombo', 'txtCombo')
        })
    }else{
        deshabilitarDivFlex('cmbProfesores')
    }
}

function editarProfesor(event){
    let idProfesor = document.getElementById('cmbProfesores').value
    if(idProfesor!=''){
        urlProfesorId = 'Profesores/listarProfesores/?idProfesor='+idProfesor
        fetchGet(urlProfesorId, 'json', function (rpta) {
            console.log(urlProfesorId)
            console.log(rpta)
            let Profesor = rpta[0]
            document.getElementsByName('nombreMod')[0].value = Profesor.nombre;
            document.getElementsByName('apellidoPaternoMod')[0].value = Profesor.apellidoPaterno;
            document.getElementsByName('apellidoMaternoMod')[0].value = Profesor.apellidoMaterno;
            document.getElementsByName('numero-trabajadorMod')[0].value = Profesor.numeroTrabajador;
            habilitarDivFlex("cuadroProfesorModificar")
        })
    }else{
        deshabilitarDivFlex('cuadroProfesorModificar')
    }
}


function enviarFormularioRegistroProfesor() {
    console.log("enviando formulario registro")
    var formu = document.getElementById("formRegistrarProfesor");
    var frm = new FormData(formu);
    var nombre = frm.get('nombre');
    var apellidoPa = frm.get('apellidoPaterno');
    var apellidoMa = frm.get('apellidoMaterno');
    var numeroTrabajador = frm.get('numero-trabajador');
    var idMateria = frm.get('nombreMateria');
    let insertaUrl = 'Profesores/insertarProfesores/?nombre='+nombre+'&apellidoPa='+apellidoPa+'&apellidoMa='+apellidoMa+'&numeroTrabajador='+numeroTrabajador+'&idMateria='+idMateria
    console.log(insertaUrl)
    fetchGet(insertaUrl, 'text', function (res) {
        console.log(res)
        if (res == 'datos insertados correctamente') {
            mensajeCorrecto("Profesor registrado correctamente")
        } else {
            mensajeIncorrecto("Hubo un error al registrar al profesor")
        }
    });
}

function modificarProfesor(){
    $('#exampleModal').modal('hide');
    console.log("enviando formulario modifcar profesor")
    let idProfesor = document.getElementById("cmbProfesores").value
    var formu = document.getElementById("formModificarProfesor");
    var frm = new FormData(formu);
    var nombre = frm.get('nombreMod');
    var apellidoPa = frm.get('apellidoPaternoMod');
    var apellidoMa = frm.get('apellidoMaternoMod');
    var numeroTrabajador = frm.get('numero-trabajadorMod');
    let actualizarUrl = 'Profesores/actualizarProfesor/?nombre='+nombre+'&apellidoPa='+apellidoPa+'&apellidoMa='+apellidoMa+'&numeroTrabajador='+numeroTrabajador+'&idProfesor='+idProfesor
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

function eliminarProfesor(){
    $('#eliminarAlumnoModal').modal('hide');
    console.log("enviando formulario eliminar profesor")
    let idProfesor = document.getElementById("cmbProfesores").value
    let eliminarUrl = 'Profesores/eliminarProfesor/?idProfesor='+idProfesor
    console.log(eliminarUrl)
    fetchGet(eliminarUrl, 'text', function (res) {
        console.log(res)
        if (res == 'profesor eliminado correctamente') {
            mensajeCorrecto("Profesor eliminado correctamente")
        } else {
            mensajeIncorrecto("Hubo un error al eliminar al profesor")
        }
    });
}