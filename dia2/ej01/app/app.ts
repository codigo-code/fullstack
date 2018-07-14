function holaMundo(): void {
    console.log(devolverNombre());

    let persona: Persona = new Persona(devolverNombre());
    persona.setNombreApellido(devolverNombre());

    let mensaje: HTMLElement = <HTMLElement>document.getElementById("mensaje");
    mensaje.innerText = persona.getNombreApellido() as string;

}

function devolverNombre(): String | undefined | null {

    let nombre: HTMLInputElement | undefined | null = <HTMLInputElement>document.getElementById("nombre");

    return nombre.value;
}

class Persona {
    

    constructor(private nombre_apellido: String){}

    // getter y setter

    public setNombreApellido(nombre_apellido: String): void {
        this.nombre_apellido = nombre_apellido;
    }


    public getNombreApellido(): String {
        return this.nombre_apellido;
    }
}
