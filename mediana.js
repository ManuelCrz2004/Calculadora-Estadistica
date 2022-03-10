function CalcularMediana(lista) {
    let ListaOrganizada = lista.sort((a, b) => a - b);

const MitadLista = parseInt(lista.length / 2);
let mediana;

function VerificacionPar (numero) {
    if (numero % 2 === 0) {
        return true;
    }else{
        return false
    }
}

function CalcularPromedio(Lista) {
    let SumaLista = 0;
for (let i = 0; i < Lista.length; i++) {
    SumaLista = SumaLista + Lista[i];
}
const PromedioLista = SumaLista / Lista.length;
return PromedioLista
}

if (VerificacionPar(ListaOrganizada.length)) {
    const Elemento1 = ListaOrganizada[MitadLista - 1];
    const Elemento2 = ListaOrganizada[MitadLista];

    PromedioElemetos = CalcularPromedio([Elemento1, Elemento2]);

    mediana = PromedioElemetos;
    return mediana;
} else {
    mediana = ListaOrganizada[MitadLista];
    return mediana;
}
}
