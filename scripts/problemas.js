// NAVEGACIÓN TIPO LIBRO
function changePage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) {
        activePage.classList.add('active');
    }
}

function goHome() {
    changePage(0);
}

// ================= ALGORITMOS DE LOS PROBLEMAS =================

// 3.1 Votación por Edad
function calcular31() {
    let edad = parseInt(document.getElementById('p31-edad').value);
    let res = document.getElementById('res-31');
    if (isNaN(edad)) return res.innerHTML = "Introduce un valor válido.";
    
    if (edad >= 18) {
        res.innerHTML = "Sí puedes votar.";
    } else {
        res.innerHTML = "No puedes votar aún.";
    }
}

// 3.2 Sueldo Semanal con Horas Extra
function calcular32() {
    let horas = parseFloat(document.getElementById('p32-horas').value);
    let pago = parseFloat(document.getElementById('p32-pago').value);
    let res = document.getElementById('res-32');
    if (isNaN(horas) || isNaN(pago)) return res.innerHTML = "Completa los campos.";

    let sueldo = 0;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else {
        let horasExtra = horas - 40;
        sueldo = (40 * pago) + (horasExtra * pago * 2);
    }
    res.innerHTML = `Sueldo semanal: $${sueldo.toFixed(2)}`;
}

// 3.3 Regalo del 14 de Febrero
function calcular33() {
    let dinero = parseFloat(document.getElementById('p33-presupuesto').value);
    let res = document.getElementById('res-33');
    if (isNaN(dinero)) return res.innerHTML = "Introduce tu presupuesto.";

    let regalo = "";
    if (dinero <= 10) {
        regalo = "Tarjeta";
    } else if (dinero <= 100) {
        regalo = "Chocolates";
    } else if (dinero <= 250) {
        regalo = "Flores";
    } else {
        regalo = "Anillo";
    }
    res.innerHTML = `Puedes regalar: ${regalo}`;
}

// 3.4 Estacionamiento Escalonado
function calcular34() {
    let horas = Math.ceil(parseFloat(document.getElementById('p4-horas').value));
    let res = document.getElementById('res-34');
    if (isNaN(horas) || horas <= 0) return res.innerHTML = "Introduce horas válidas.";

    let total = 0;
    if (horas <= 2) {
        total = horas * 5;
    } else if (horas <= 5) {
        total = (2 * 5) + ((horas - 2) * 4);
    } else if (horas <= 10) {
        total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    } else {
        total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }
    res.innerHTML = `Total a pagar: $${total.toFixed(2)}`;
}

// 3.5 Encontrar la persona con menor edad (CORREGIDO)
function calcular35() {
    let n1 = document.getElementById('p5-n1').value.trim();
    let e1 = parseInt(document.getElementById('p5-e1').value);
    let n2 = document.getElementById('p5-n2').value.trim();
    let e2 = parseInt(document.getElementById('p5-e2').value);
    let n3 = document.getElementById('p5-n3').value.trim();
    let e3 = parseInt(document.getElementById('p5-e3').value);
    let res = document.getElementById('res-35');

    if (!n1 || !n2 || !n3 || isNaN(e1) || isNaN(e2) || isNaN(e3)) {
        res.innerHTML = "<span style='color:red;'>Por favor, llena todos los campos.</span>";
        return;
    }

    let menorNombre = n1;
    let menorEdad = e1;

    if (e2 < menorEdad) {
        menorEdad = e2;
        menorNombre = n2;
    }
    if (e3 < menorEdad) {
        menorEdad = e3;
        menorNombre = n3;
    }

    res.innerHTML = `La persona menor es: <strong>${menorNombre}</strong> (${menorEdad} años)`;
}

// 3.6 Descuento de Artículos
function calcular36() {
    let precio = parseFloat(document.getElementById('p6-precio').value);
    let res = document.getElementById('res-36');
    if (isNaN(precio)) return res.innerHTML = "Introduce el precio.";

    let desc = 0;
    if (precio >= 200) {
        desc = 0.15;
    } else if (precio > 100) {
        desc = 0.12;
    } else {
        desc = 0.10;
    }

    let ahorro = precio * desc;
    let final = precio - ahorro;
    res.innerHTML = `Descuento: $${ahorro.toFixed(2)} | Total: $${final.toFixed(2)}`;
}

// 3.7 Asignación de Becas Estudiantiles
function calcular37() {
    let edad = parseInt(document.getElementById('p7-edad').value);
    let prom = parseFloat(document.getElementById('p7-promedio').value);
    let res = document.getElementById('res-37');
    if (isNaN(edad) || isNaN(prom)) return res.innerHTML = "Completa los datos.";

    let msg = "";
    if (edad > 18) {
        if (prom >= 9) msg = "Beca de $2000.00";
        else if (prom >= 7.5) msg = "Beca de $1000.00";
        else if (prom >= 6.0) msg = "Beca de $500.00";
        else msg = "Carta de invitación a estudiar más.";
    } else {
        if (prom >= 9) msg = "Beca de $3000.00";
        else if (prom >= 8) msg = "Beca de $2000.00";
        else if (prom >= 6) msg = "Beca de $100.00";
        else msg = "Carta de invitación a estudiar más.";
    }
    res.innerHTML = msg;
}

// 3.8 Comparador de Bonos
function calcular38() {
    let ant = parseFloat(document.getElementById('p8-antiguedad').value);
    let sueldo = parseFloat(document.getElementById('p8-sueldo').value);
    let res = document.getElementById('res-38');
    if (isNaN(ant) || isNaN(sueldo)) return res.innerHTML = "Completa los datos.";

    let bAnt = 0;
    if (ant > 2 && ant < 5) bAnt = sueldo * 0.20;
    else if (ant >= 5) bAnt = sueldo * 0.30;

    let bSueldo = 0;
    if (sueldo < 1000) bSueldo = sueldo * 0.25;
    else if (sueldo <= 3500) bSueldo = sueldo * 0.15;
    else bSueldo = sueldo * 0.10;

    let bonoFinal = Math.max(bAnt, bSueldo);
    res.innerHTML = `Bono asignado (Mayor): $${bonoFinal.toFixed(2)}`;
}

// 3.9 Póliza de Seguros de Auto
function calcular39() {
    let tipo = document.getElementById('p9-tipo').value;
    let bebe = document.getElementById('p9-alcohol').checked;
    let lentes = document.getElementById('p9-lentes').checked;
    let enf = document.getElementById('p9-enfermedad').checked;
    let edad = parseInt(document.getElementById('p9-edad').value);
    let res = document.getElementById('res-39');

    if (isNaN(edad)) return res.innerHTML = "Introduce la edad.";

    let base = (tipo === 'A') ? 1200 : 950;
    let cargos = 0;

    if (bebe) cargos += base * 0.10;
    if (lentes) cargos += base * 0.05;
    if (enf) cargos += base * 0.05;
    
    if (edad > 40) cargos += base * 0.20;
    else cargos += base * 0.10;

    let total = base + cargos;
    res.innerHTML = `Costo Total Póliza: $${total.toFixed(2)}`;
}

// 3.10 Destino de Vacaciones
function calcular310() {
    let costoKm = parseFloat(document.getElementById('p10-costoKm').value);
    let presupuesto = parseFloat(document.getElementById('p10-presupuesto').value);
    let res = document.getElementById('res-310');
    if (isNaN(costoKm) || isNaN(presupuesto)) return res.innerHTML = "Completa los datos.";

    let destinos = [
        { nombre: "Cancún", km: 1800 * 2 },
        { nombre: "Acapulco", km: 1200 * 2 },
        { nombre: "Puerto Vallarta (P.V.)", km: 800 * 2 },
        { nombre: "México", km: 750 * 2 }
    ];

    let opcionViaje = "Quedarse en casa";
    for (let d of destinos) {
        if (presupuesto >= (d.km * costoKm)) {
            opcionViaje = d.nombre;
            break;
        }
    }
    res.innerHTML = `Tu destino será: ${opcionViaje}`;
}

// 3.11 Bono Tienda por Años
function calcular311() {
    let anos = parseInt(document.getElementById('p11-anos').value);
    let res = document.getElementById('res-311');
    if (isNaN(anos) || anos < 0) return res.innerHTML = "Año no válido.";

    let bono = 0;
    if (anos >= 1 && anos <= 5) {
        bono = anos * 100;
    } else if (anos > 5) {
        bono = 1000;
    }
    res.innerHTML = `Bono correspondiente: $${bono}`;
}

// 3.12 Sueldo Semanal Triple
function calcular312() {
    let horas = parseFloat(document.getElementById('p12-horas').value);
    let pago = parseFloat(document.getElementById('p12-pago').value);
    let res = document.getElementById('res-312');
    if (isNaN(horas) || isNaN(pago)) return res.innerHTML = "Completa los datos.";

    if (horas > 50) {
        res.innerHTML = "<span style='color:red;'>¡Trabajar más de 50 horas NO está permitido!</span>";
        return;
    }

    let sueldo = 0;
    if (horas <= 40) {
        sueldo = horas * pago;
    } else if (horas <= 45) {
        sueldo = (40 * pago) + ((horas - 40) * pago * 2);
    } else {
        sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);
    }

    res.innerHTML = `Sueldo semanal total: $${sueldo.toFixed(2)}`;
}

// 3.13 Viaje de Estudios Escolar
function calcular313() {
    let alumnos = parseInt(document.getElementById('p13-alumnos').value);
    let res = document.getElementById('res-313');
    if (isNaN(alumnos) || alumnos <= 0) return res.innerHTML = "Cantidad inválida.";

    let costoPasaje = 0;
    if (alumnos > 100) costoPasaje = 20;
    else if (alumnos >= 50) costoPasaje = 35;
    else if (alumnos >= 20) costoPasaje = 40;
    else costoPasaje = 70;

    let totalEscuela = alumnos * costoPasaje;
    res.innerHTML = `Costo por alumno: $${costoPasaje} <br> <small style='color:gray;'>Total autobús: $${totalEscuela}</small>`;
}