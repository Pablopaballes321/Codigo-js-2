let saldo = 0;
let historialTransacciones = [];

function realizarDeposito(monto) {
    saldo += monto;
    let transaccion = {
    tipo: "depósito",
    monto: monto,
    fecha: new Date(),
};
    historialTransacciones.push(transaccion);
}

function realizarRetiro(monto) {
    if (monto <= saldo) {
    saldo -= monto;
    let transaccion = {
        tipo: "retiro",
        monto: monto,
        fecha: new Date(),
    };
    historialTransacciones.push(transaccion);
} else {
    console.log("Saldo insuficiente");
}
}

function consultarSaldo() {
    console.log("Saldo actual:", saldo);
}

function mostrarHistorialTransacciones() {
    console.log("Historial de Transacciones:");
    historialTransacciones.forEach((transaccion) => {
    console.log(
        `${transaccion.tipo} - Monto: ${transaccion.monto} - Fecha: ${transaccion.fecha}`
    );
});
}

function simularProcesoBancario() {
    while (true) {
    let opcion = prompt(
        "Selecciona una opción:\n1. Depositar\n2. Retirar\n3. Consultar saldo\n4. Mostrar historial de transacciones\n5. Salir"
    );

    if (opcion == "1") {
        let deposito = parseFloat(prompt("Ingresa la cantidad a depositar:"));
        if (!isNaN(deposito) && deposito > 0) {
        realizarDeposito(deposito);
        console.log("Depósito realizado con éxito");
    } else {
        console.log("Cantidad inválida");
    }
    } else if (opcion == "2") {
        let retiro = parseFloat(prompt("Ingresa la cantidad a retirar:"));
        if (!isNaN(retiro) && retiro > 0) {
        realizarRetiro(retiro);
        console.log("Retiro realizado con éxito");
    } else {
        console.log("Cantidad inválida");
        }
    } else if (opcion == "3") {
    consultarSaldo();
    } else if (opcion == "4") {
    mostrarHistorialTransacciones();
    } else if (opcion == "5") {
        console.log("Gracias por utilizar el Simulador Bancario");
        break;
    } else {
        console.log("Opción inválida. Por favor, selecciona una opción válida");
    }
}
}

simularProcesoBancario();
