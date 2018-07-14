
function saludar(): String {
    return "hola mundo";
}
let logger: (messange: String) => void;
logger = mostrarMensaje;

function mostrarMensaje(mensaje: String): void {

    console.log(mensaje);
}


function hola(): void {

    logger('hola pedorros');
}


function clasePersona() {
    let p: Persona = new Persona('tito');

    // p.setNombre('berto');
    logger(p.getNombre() as String);
}

function apretame() {
    let inputText: HTMLInputElement | null = <HTMLInputElement>document.getElementById("nombre");

    console.log(inputText.value);
}


class Persona {
    private _nombre: String | undefined; //| undefined


    constructor(private nombre: String | undefined) {
        this._nombre = nombre;
    }

    public setNombre(nombre: String): void {
        this._nombre = nombre;
    }
    public getNombre(): String | undefined {
        return this._nombre;
    }
}