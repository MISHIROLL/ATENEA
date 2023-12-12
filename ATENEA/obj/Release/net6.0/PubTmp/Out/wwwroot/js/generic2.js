function get(idcontrol){
    return document.getElementById(idcontrol).value
}

function set(idcontrol,valor)
{
    document.getElementById(idcontrol).valor = valor
}

async function fetchGet(url,tiporespuesta,callback) {
    try {
        var raiz = document.getElementById("hdfOculto").value;
        //http://localhost........
        var urlCompleta = window.location.protocol + "//" + window.location.host + "/" + raiz
            + url
        
        var res = await fetch(urlCompleta)
        if (tiporespuesta == "json")
            res = await res.json();
        else if (tiporespuesta == "text")
            res = await res.text();
        //JSON (Object)
        callback(res)

    } catch (error) {
        alert("Ocurrio un error")
        console.log(error)
    }
}


var objConfiguracionGlobal;
function pintar(objConfiguracion) {
    objConfiguracionGlobal = objConfiguracion;
    
    fetchGet(objConfiguracion.url, "json", function (res) {
        var contenido = "";

        contenido += "<div id='divContenedorTabla'>";
        //........................................................
        contenido += generarTabla(res)
        contenido += "</div>";
        document.getElementById("divTabla").innerHTML = contenido;
    })


}

function generarTabla(res) {
    var contenido = "";    
    var cabeceras = objConfiguracionGlobal.cabeceras;    
    var nombrepropiedades = objConfiguracionGlobal.propiedades;
    var alineacion = objConfiguracionGlobal.alineacion
    
    contenido += "<table class='table table-hover table-sm indicador table-bordered '>";
    contenido += "<thead class='bg-primary text-white text-center'>";
    contenido += "<tr>";

    for (var i = 0; i < cabeceras.length; i++) {
        contenido += "<td>"+cabeceras[i]+"</td>";
    }

     contenido += "</tr>";
    contenido += "</thead>"

    var nregistros = res.length;
    var obj;
    var stl;
    var propiedadActual;
    contenido += `<tbody >`;

    for (var i = 0; i < nregistros; i++) {
        obj = res[i]
        
        contenido += "<tr >";
        for (var j = 0; j < nombrepropiedades.length; j++) {
            propiedadActual = nombrepropiedades[j]
            stl = alineacion[j];            
            contenido += `<td class="text-${stl}">` + obj[propiedadActual] + "</td>";
        }

        contenido += "</tr>";
    }
    
    contenido += "</tbody>"
    contenido += "</table>";
    return contenido;
}

