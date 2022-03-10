lista = [
    1,
    1,
    1,
    5,
    4,
    3,
    4,
    6,
    5,
    5,
    1,
    2,
    4,
]

const listaCount = {};

lista.map(
    function (elemento) {
        if (listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    (elementoA, elementoB) => elementoA[1] - elementoB[1]
);

const moda = listaArray[listaArray.length - 1];