function CalcularPromedio(Lista) {
    let SumaLista = 0;
for (let i = 0; i < Lista.length; i++) {
    SumaLista = SumaLista + Lista[i];
}
const PromedioLista = SumaLista / Lista.length;
return PromedioLista
}