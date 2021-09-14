// sucesion lineal
const test01 = [-0.5, 2, 4.5, 7, 9.5, 12, 14.5];
// sucesion cuadratica
const test02 = [3, -1, 3, 15, 35, 63, 99];
// sucesion cubica
const test03 = [97.4, 38.2, 7.8, -3.4, -5, -6.6, -17.8];
// sucesion a la 4ta potencia
const test04 = [81, 16, 1, 0, 1, 16, 81];

const calcMargin = 0.15;
let pow = 0;

// la funcion recive un arreglo de numeros y retorna un arreglo con la variacion de la succecion
function calc(arr) {
    console.log("sucesión: " + arr + " | iteracion: " + pow);

    //comprobar el caso base, es decir que no hay variacion
    let uniqueArr = checkVariation(arr);
    if (uniqueArr.length == 1 || isClose(arr)) {
        console.log(`la susecion es de potencia: ${pow}, y su variacion es de: ${uniqueArr[0]}`);
        console.log("------------------------------------------------------");
        pow = 0;
        return;
    }

    //iterar en el arreglo y crear uno nuevo con la diferencia entre elementos adyacentes
    let difArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        // encontrar la diferencia entre 2 elementos adyacentes
        let dif = getDifference(arr[i], arr[i + 1]);
        difArr.push(dif);
    }

    pow++;

    calc(difArr);
}

function checkVariation(arr) {
    let result = arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
    return result;
}

function isClose(arr) {
    let dif = getDifference(arr[0], arr[1]);
    if (Math.abs(dif) < calcMargin) {
        return true;
    }
}

function getDifference(a, b) {
    return -(a - (b));
}
