let cicloUrl = 'Combos/ComboCiclo'
let salonUrl = 'Combos/ComboSalon'
let grupoUrl = 'Combos/ComboGrupo2'
let materiaUrl = 'Combos/ComboMaterias'
let profesorUrl = 'Combos/ComboProfesores'
let horariosUrl = 'Combos/ComboHorarios'
let ocupabilidadUrl = 'Horarios/consultarOcupabilidad'



let celdaSeleccionada = null;

let arrHorario =  new Array(36).fill(null);


eventlisteners()



function eventlisteners(){
    document.addEventListener('DOMContentLoaded', function(){
        listarComboHorario()
        listarComboCiclos()
        listarComboGrupo()
        listarComboSalon()
        listarComboMateria()
        
        const celdas = document.querySelectorAll('#horario td');

        celdas.forEach(celda => {
            if (celda.cellIndex > 0 && celda.parentNode.rowIndex != 4){
                celda.addEventListener('click', () => {
                    if (celdaSeleccionada) {
                        celdaSeleccionada.classList.remove('selected');
                    }
                    celda.classList.add('selected');
                    celdaSeleccionada = celda;
                });
            }
            
        });

    
    }) 
}

function filtrarHorarios(){
    let nombreHorario = document.getElementById('cmbHorario').value
    let listarHorariosUrl = 'Horarios/listarHorarios/?nombreHorario='+nombreHorario
    if(nombreHorario != ''){
        console.log(listarHorariosUrl)
        fetchGet(listarHorariosUrl, 'json', function (rpta) {
            rpta.forEach(element => {
                element.horaInicio = element.horaInicio.substring(0,5)
                element.horaFin = element.horaFin.substring(0,5)
            });
            let dataLunes = rpta.filter((item)=> item.diaSemana=='LUNES')
            let dataMartes = rpta.filter((item)=> item.diaSemana=='MARTES')
            let dataMiercoles = rpta.filter((item)=> item.diaSemana=='MIERCOLES')
            let dataJueves = rpta.filter((item)=> item.diaSemana=='JUEVES')
            let dataViernes = rpta.filter((item)=> item.diaSemana=='VIERNES')
            console.log(dataLunes)
            console.log(rpta)
        })
    }else{
        console.log('vacio')
    }
}

function eliminarHorario(){
    if (celdaSeleccionada) {
        let fila = celdaSeleccionada.parentNode.rowIndex
        let columna = celdaSeleccionada.cellIndex
        arrHorario[(fila*5-5)+columna] = null
        celdaSeleccionada.textContent = ``;
        celdaSeleccionada.classList.remove('selected');
        celdaSeleccionada = null;
        bdSelect()
    } 
    else {
        mensajeIncorrecto('Por favor, selecciona un horario en la tabla.');
    }
}

function anadirHorario() {
    const ciclo = document.getElementById('cmbCiclo').value;
    const grupo = document.getElementById('cmbGrupo').value;
    const materia = document.getElementById('cmbMateria').value;
    const salon = document.getElementById('cmbSalon').value;
    const profesor = document.getElementById('cmbProfesor').value;
    let objHorario = {
        'dia' : '',
        'horaInicio' : '',
        'horaFin' : '',
        'idCiclo' : 0,
        'idSalon' : 0,
        'idGrupo' : 0,
        'idMateria' : 0,
        'idProfesor' : 0
    }
    objHorario.idCiclo = ciclo
    objHorario.idGrupo = grupo
    objHorario.idMateria = materia
    objHorario.idSalon = salon
    objHorario.idProfesor = profesor
    if (celdaSeleccionada) {
        if(validarHoras(objHorario)<=5){
            let fila = celdaSeleccionada.parentNode.rowIndex
            let columna = celdaSeleccionada.cellIndex
            definirHora(fila,objHorario)
            definirDia(columna,objHorario)
            validarOcupabilidad(objHorario,fila,columna)
        }else{
            mensajeIncorrecto('Solo se permiten 6 horas por semana de una materia')
        }
    } 
    else {
        mensajeIncorrecto('Por favor, selecciona un horario en la tabla.');
    }
    
}

function validarHoras(obj){
    let horas = 0
    arrHorario.forEach(element => {
        if(element != null){
            if(element.idMateria == obj.idMateria){
                horas = horas+1
            }
        }
    });
    return horas
}

function validarHorarioCompleto(){
    let dias = 0
    arrHorario.forEach(element => {
        if(element != null){
            dias += 1
        }
    });
    if(dias == 30){
        registrarHorario()
    }else{
        mensajeIncorrecto('El horario debe de estar completamente llenado')
    }
} 

function validarOcupabilidad(obj,fila,columna){
    ocupabilidadUrl = 'Horarios/consultarOcupabilidad/?idGrupo='+obj.idGrupo+'&idSalon='+obj.idSalon+'&idCiclo='+obj.idCiclo+'&idMateria='+obj.idMateria+'&idProfesor='+obj.idProfesor+'&horaInicio='+obj.horaInicio+'&horaFin='+obj.horaFin+'&dia='+obj.dia
    fetchGet(ocupabilidadUrl, 'json', function (rpta) {
        if(rpta.length == 0){
            arrHorario[(fila*5-5)+columna] = obj
            
            let selectMateria = document.getElementById('cmbMateria')
            let MateriaIndex = selectMateria.selectedIndex;
            let txtMateria = selectMateria.options[MateriaIndex].text;

            let selectProfesor = document.getElementById('cmbProfesor')
            let ProfesorIndex = selectProfesor.selectedIndex;
            let txtProfesor = selectProfesor.options[ProfesorIndex].text;

            celdaSeleccionada.innerHTML = `Materia: ${txtMateria}<br>Profesor: ${txtProfesor}`;
            celdaSeleccionada.classList.remove('selected');
            celdaSeleccionada = null;
            bdSelect()
        }else{
            rpta.forEach(element => {
                mensajeIncorrecto(element.error) 
            });
            
        }
    })
    
}

function actualizarCelda(columna,obj){
    var tabla = document.getElementById("horario");
    switch (obj.horaInicio) {
        case '07:00':
            var celda = tabla.rows[1].cells[columna];
            break;
    
        default:
            break;
    }
    // Actualizar el texto de la celda
    celda.innerHTML = '';

}

function bdSelect(){
    for (let i = 0; i < arrHorario.length; i++) {
        if (arrHorario[i] != null) {
            document.getElementById('cmbCiclo').disabled = true;
            document.getElementById('cmbGrupo').disabled = true;
            document.getElementById('cmbSalon').disabled = true;
            break;
        } else {
            document.getElementById('cmbCiclo').disabled = false;
            document.getElementById('cmbGrupo').disabled = false;
            document.getElementById('cmbSalon').disabled = false;
        }
    }
    
}

function definirHora(fila,obj){
    switch(fila) {
        case 1:
            obj.horaInicio = '07:00'
            obj.horaFin = '08:00'
            break;
        case 2:
            obj.horaInicio = '08:00'
            obj.horaFin = '09:00'
            break;
        case 3:
            obj.horaInicio = '09:00'
            obj.horaFin = '10:00'
            break;
        case 5:
            obj.horaInicio = '10:30'
            obj.horaFin = '11:30'
            break;
        case 6:
            obj.horaInicio = '11:30'
            obj.horaFin = '12:30'
            break;
        case 7:
            obj.horaInicio = '12:30'
            obj.horaFin = '13:30'
            break;

    }
}
function definirDia(columna,obj){
    switch(columna) {
        case 1:
            obj.dia = 'LUNES'
            break;
        case 2:
            obj.dia = 'MARTES'
            break;
        case 3:
            obj.dia = 'MIERCOLES'
            break;
        case 4:
            obj.dia = 'JUEVES'
            break;
        case 5:
            obj.dia = 'VIERNES'
            break;
    }
}

function listarComboCiclos(){
    fetchGet(cicloUrl, 'json', function (rpta) {
        data = rpta.filter((item)=> item.idCombo > 2)
        llenarComboSinSeleccion(data, 'cmbCiclo', 'idCombo', 'txtCombo')
    })
}
function listarComboGrupo(){
    fetchGet(grupoUrl, 'json', function (rpta) {
        llenarComboSinSeleccion(rpta, 'cmbGrupo', 'idCombo', 'txtCombo')
    })
}
function listarComboSalon(){
    fetchGet(salonUrl, 'json', function (rpta) {
        llenarComboSinSeleccion(rpta, 'cmbSalon', 'idCombo', 'txtCombo')
    })
}
function listarComboMateria(){
    fetchGet(materiaUrl, 'json', function (rpta) {
        llenarComboSinSeleccion(rpta, 'cmbMateria', 'idCombo', 'txtCombo')
        listarProfesor()
    })
}
function listarProfesor(){
    const idMateria = document.getElementById('cmbMateria').value
        let profesorUrl = 'Combos/ComboProfesores/?idMateria='+idMateria    
        fetchGet(profesorUrl, 'json', function (rpta) {
            llenarComboSinSeleccion(rpta, 'cmbProfesor', 'idCombo', 'txtCombo')
        })
}
function listarComboHorario(){
    fetchGet(horariosUrl, 'json', function (rpta) {
        llenarCombo(rpta, 'cmbHorario', 'idCombo', 'txtCombo')
    })
}

function registrarHorario(){
    let promesas = [];

    arrHorario.forEach(element => {
        if(element != null){
            let urlRegistrarHorario = 'Horarios/insertarHorarios/?idGrupo='+element.idGrupo+'&idSalon='+element.idSalon+'&idCiclo='+element.idCiclo+'&idMateria='+element.idMateria+'&idProfesor='+element.idProfesor+'&horaInicio='+element.horaInicio+'&horaFin='+element.horaFin+'&dia='+element.dia;
            
            // Crear una promesa para cada operación asincrónica
            let promesa = new Promise((resolve, reject) => {
                fetchGet(urlRegistrarHorario, 'text', function (rpta) {
                    if(rpta == 'datos insertados correctamente'){
                        resolve(true);
                    }else{
                        resolve(false);
                    }
                });
            });

            promesas.push(promesa);
        }
    });

    // Esperar a que todas las promesas se resuelvan
    Promise.all(promesas).then(resultados => {
        // Verificar si todas las operaciones fueron exitosas
        const todasExitosas = resultados.every(r => r === true);
        if(todasExitosas){
            mensajeCorrecto('Horario registrado correctamente');
        }else{
            mensajeIncorrecto('Hubo un problema al registrar el horario');
        }
    });
}
