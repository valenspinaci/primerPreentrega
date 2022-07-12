//Simulador de un sitio para publicar vehiculos

//Ingreso al sitio
class Persona{
    constructor(nombre, apellido, mail, edad){
        this.nombre = nombre.toLowerCase();
        this.apellido = apellido.toLowerCase();
        this.mail = mail.toLowerCase();
        this.edad = edad.toLowerCase();
    }
}

let nombre, apellido, mail, edad

do{
    nombre = prompt("Ingrese su nombre").toLowerCase();

    if(!isNaN(nombre)){
        alert("Ingrese solo letras por favor")
    }
} while(!isNaN(nombre));

do{
    apellido = prompt("Ingrese su apellido").toLowerCase();

    if(!isNaN(apellido)){
        alert("Ingrese solo letras por favor")
    }
} while(!isNaN(apellido));

do{
    mail = prompt("Ingrese su correo electrónico").toLowerCase();

    if(!isNaN(mail)){
        alert("Ingrese un correo electrónico válido")
    }
} while(!isNaN(mail));

do{
    edad = parseInt(prompt("Ingrese su edad"));

    if(isNaN(edad)){
        alert("Ingrese valores válidos por favor")
    } else if(edad < 18){
        alert("Debe ser mayor de edad para ingresar")
    }
} while ((isNaN(edad)) || (edad<18));

//Ingreso de vehiculo

//Clase
class Automotor {
    constructor(clase, marca, version, modelo, valor) {
        this.clase = clase.toLowerCase();
        this.marca = marca.toLowerCase();
        this.version = version.toLowerCase();
        this.modelo = parseInt(modelo);
        this.valor = parseFloat(valor) * 1.03;
    }

    vehiculoImportado(valor){
        console.log(`El ${this.marca} ${this.version} es un vehículo importado. Por lo tanto su valor se incrementa a ${this.valor * 1.20}`)
    }

    valorCuotaPlan18(valor){
        console.log(`Si este vehiculo fuera comprado a través del plan de 18 cuotas, el valor de las mismas sería ${parseInt((this.valor * 0.98) / 18)}`)
    }
}

//Algunos vehiculos definidos

let vehiculo1 = new Automotor("auto", "toyota", "corolla", 2017, 4500000);
let vehiculo2 = new Automotor("auto", "volkswagen", "gol", 2016, 1700000);
let vehiculo3 = new Automotor("camioneta", "toyoya", "hilux", 2020, 6000000);
let vehiculo4 = new Automotor("camioneta", "fiat", "toro", 2021, 5800000);

//Array
const vehiculos = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];

//Inicializacion de variables
let clase, marca, version, modelo, valor, continua

//Ciclo do while para añadir vehiculos
do {
    // Seleccion de clase de vehiculo    
    do {
        clase = prompt("Es auto o camioneta?");

        if (clase != "auto" && clase != "camioneta") {
            alert("Lo sentimos! Solo aceptamos auto o camioneta")
        }
    } while (clase != "auto" && clase != "camioneta");

    //Seleccion de marca de vehiculo
    do {
        marca = prompt("Indicá la marca").toLowerCase();

        if (marca != "ford" && marca != "chevrolet" && marca != "toyota" && marca != "volkswagen" && marca != "honda") {
            alert("Solo recibimos vehículos de las siguientes marcas: Ford, Chevrolet, Toyota, Volkswagen y Honda")
        }
    } while (marca != "ford" && marca != "chevrolet" && marca != "toyota" && marca != "volkswagen" && marca != "honda");

    //Seleccion de la version del auto que desea publicar

    if(marca == "ford"){
        do{
            version = prompt("Elegí la versión del Ford que querés publicar").toLowerCase();

            if (version != "fiesta" && version != "ranger") {
                alert("Los unicos dos vehiculos que aceptamos de Ford son el Fiesta y la Ranger")
            }
        } while (version != "fiesta" && version != "ranger")
    }

    if(marca == "chevrolet"){
        do{
            version = prompt("Elegí la versión del Chevrolet que querés publicar").toLowerCase();

            if (version != "s10" && version != "onix") {
                alert("Los unicos dos vehiculos que aceptamos de Chevrolet son el Onix y la s10")
            }
        } while (version != "s10" && version != "onix")
    }

    if(marca == "toyota"){
        do{
            version = prompt("Elegí la versión del Toyota que querés publicar").toLowerCase();

            if (version != "corolla" && version != "hilux" && version != "etios") {
                alert("Los unicos vehiculos que aceptamos de Toyota son el Corolla, Etios y la Hilux")
            }
        } while (version != "corolla" && version != "hilux" && version != "etios")
    }

    if(marca == "honda"){
        do{
            version = prompt("Elegí la versión del Honda que querés publicar").toLowerCase();

            if (version != "hrv" && version != "crv") {
                alert("Los unicos dos vehiculos que aceptamos de Honda son la Hrv y la Crv")
            }
        } while (version != "hrv" && version != "crv")
    }

    if(marca == "volkswagen"){
        do{
            version = prompt("Elegí la versión del Volkswagen que querés publicar").toLowerCase();

            if (version != "gol" && version != "amarok" && version != "golf") {
                alert("Los unicos vehiculos que aceptamos de Volkswagen son el Gol, Golf y la Amarok")
            }
        } while (version != "gol" && version != "amarok" && version != "golf")
    }

    //Seleccion de modelo
    do{
        modelo = parseInt(prompt("Qué modelo es?"));

        if (isNaN(modelo)) {
            alert("Los datos ingresados no son numeros");
        } else if (modelo > 2022) {
            alert("Estamos en el 2022! No puede ser un auto del futuro!")
        } else if(modelo < 2007) {
            alert("Lo sentimos! Solo aceptamos vehiculos a partir de modelo 2007")
        }
    }while ((isNaN(modelo)) || (modelo < 2007 || modelo > 2022));

    //Ingreso de valor
    do {
        valor = parseFloat(prompt("Ingresá el valor (Se le sumarán intereses del 3% por publicar en nuestro sitio)"));

        if (valor <= 0) {
            alert("El valor ingresado debe ser un numero positivo")
        }
    } while (isNaN(valor) || valor <= 0);

    //Nuevo vehiculo
    const vehiculo = new Automotor(clase, marca, version, modelo, valor);

    // Metodo para sumar vehiculos
    vehiculos.push(vehiculo);

    //Pregunta por continuidad
    continua = prompt("Desea añadir otro vehículo?").toLowerCase();
} while (continua != "no")

//Consola
console.log(vehiculos);

//Interaccion con el usuario
let respuesta
const precio = vehiculos.map(vehiculo => vehiculo.valor);

do{
    respuesta = parseInt(prompt(
        `Ingrese el numero de acuerdo a la acción que desea realizar:
        1 - Ver solo camionetas
        2 - Ver solo autos
        3 - Ordenar de precio menor a mayor
        4 - Ordenar de precio mayor a menor
        `)); 
} while ((isNaN(respuesta)) || (respuesta < 1 || respuesta > 4));

switch(respuesta){
    case 1:
        console.log(vehiculos.filter(vehiculo => vehiculo.clase == "camioneta"));
        break;

    case 2:
        console.log(vehiculos.filter(vehiculo => vehiculo.clase == "auto"));
        break;

    case 3:
        console.log(precio.sort((a,b) => a-b))
        break;

    case 4:
        console.log(precio.sort((a,b) => b-a))
        break;
}

vehiculo1.vehiculoImportado()
vehiculo2.valorCuotaPlan18()