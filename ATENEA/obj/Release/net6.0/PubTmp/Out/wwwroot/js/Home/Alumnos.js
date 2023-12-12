

eventlisteners()


function eventlisteners(){
    document.addEventListener('DOMContentLoaded', function(){
        listarComboCiclos()

    }) 
}

function listarComboCiclos(){
    fetchGet('Credito/ComboDocumentosCred', 'json', function (rpta) {
        llenarCombo(rpta, 'comprobante1', 'id', 'descripcion')
        console.log(rpta)
        llenarCombo(rpta, 'comprobante2', 'id', 'descripcion')
        llenarCombo(rpta, 'comprobante3', 'id', 'descripcion')
        llenarCombo(rpta, 'comprobante4', 'id', 'descripcion')
        llenarCombo(rpta, 'comprobante5', 'id', 'descripcion')
    })
}