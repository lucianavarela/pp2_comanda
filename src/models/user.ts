export class User {
    usuario: string;
    tipo: string;
    id: string;
    nombre: string;

    constructor(usuario: string, tipo: string, id: string, nombre: string) {
        this.usuario = usuario;
        this.tipo = tipo;
        this.id = id;
        this.nombre = nombre;
    }
}
