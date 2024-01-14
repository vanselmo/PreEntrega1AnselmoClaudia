/* Variables globales */
let verPresupuesto = false; //Esta variable es una bandera que controla si el usuario dispone de datos suficientes para poder ver su presupuesto

/* Variables para ingresos */
let listaIngresos = "";
let ingresosAdicionales = "";
let sumaIngresos = 0;

/* Variables para gastos */
let listaGastos = "";
let sumaGastos = 0;

/* Variables para ahorros */
let valorAhorros = 0;

function admIngresos() {
    let valorIngresoPrincipal = prompt("Introduzca el valor de su ingreso principal");
    let nombreIngresoAdicional = "";
    let valorIngresoAdicional = 0;
    sumaIngresos = parseInt(valorIngresoPrincipal);

    let agregarIngresosAdicionales = prompt("¿Desea agregar ingresos adicionales (aguinaldos, bonificaciones, premios, etc)? (S/N)");

    if (agregarIngresosAdicionales.toUpperCase() == "S") {
        let numIngresosAdicionales = parseInt(prompt("¿Cuántos ingresos adicionales desea agregar?"));

        for (let i = 1; i <= numIngresosAdicionales; i++) {
            nombreIngresoAdicional = prompt("Introduzca el nombre de su ingreso adicional #" + i);
            valorIngresoAdicional = parseInt(prompt("Introduzca el valor de su ingreso adicional #" + i));
            sumaIngresos += valorIngresoAdicional;
            listaIngresos = listaIngresos + nombreIngresoAdicional + "\n";
        }
    } else if (agregarIngresosAdicionales.toUpperCase() == "N") {
        alert("Ok, no se agregarán ingresos adicionales");
    } else {
        alert("Opción inválida");
    }
    verPresupuesto = true;
    alert("La suma total de ingresos es: " + sumaIngresos);
}


function admGastos() {
    let nombreGasto = "";
    let valorGasto = 0;

    let numGastosAdicionales = parseInt(prompt("¿Cuántos gastos desea agregar?"));

    for (let i = 1; i <= numGastosAdicionales; i++) {
        nombreGasto = prompt("Introduzca el nombre de su gasto #" + i);
        valorGasto = parseInt(prompt("Introduzca el valor de su gasto #" + i));
        sumaGastos += valorGasto;
        listaGastos = listaGastos + nombreGasto + "\n";
    }
    alert("La suma total de gastos es: " + sumaGastos);
}

function admAhorros() {
    valorAhorros = parseInt(prompt("Ingrese el valor de sus ahorros"));
    alert("Ha ingresado el valor " + valorAhorros + " de ahorros.");
}

function calPresupuesto() {

    if ((sumaIngresos >= 0) && (sumaGastos >= 0) && (valorAhorros >= 0) && (verPresupuesto)) {
        let presupuesto = sumaIngresos + valorAhorros - sumaGastos;

        alert("Concepto de ingresos: \n\n" + "Ingreso principal\n" + listaIngresos);
        if (listaGastos != "") {
            alert("Concepto de gastos: \n\n" + listaGastos);
        }
        alert("Los ingresos suman: " + sumaIngresos.toString() +
            "\nLos gastos suman: " + sumaGastos.toString() +
            "\nLos ahorros suman: " + valorAhorros.toString() +
            "\n\nSu presupuesto para este mes es de " + presupuesto);
    } else {
        alert("Algun/os de los valores introducidos en ingresos, gastos o ahorros es/son incorrectos o incompletos. Por favor, verifique.")
    }
}

function principal() {
    let nombreUsuario = prompt("Ingrese su nombre");
    while (!nombreUsuario) {
        nombreUsuario = prompt("Por favor, ingrese su nombre")
    }
    alert("Bienvenido/a " + nombreUsuario);
    let opcion = "";
    do {
        opcion = prompt("Ingrese una opción del 1 al 5\n\n1. Agregar ingresos\n2. Agregar gastos\n3. Agregar ahorros\n4. Calcular presupuesto\n5. Salir");
        switch (opcion) {
            case "1": admIngresos();
                break;
            case "2": admGastos();
                break;
            case "3": admAhorros();
                break;
            case "4": calPresupuesto();
                break;
            case "5":
                let salir = "";
                do {
                    salir = prompt("¿Está seguro/a que desea salir? (S/N)");
                    if (salir.toUpperCase() == "N") {
                        opcion = "";
                    }
                    else if (salir.toUpperCase() == "S") {
                        alert("¡Muchas gracias por haber usado Presupuesto360!")
                    } else {
                        alert("Opción inválida. Por favor, ingrese S o N.")
                    }
                } while (salir.toUpperCase() != "S" && salir.toUpperCase() != "N");
                break;
            default:
                alert("Opción inválida");
                break;
        }
    } while (opcion != "5");
}