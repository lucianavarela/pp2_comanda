export class User {
    usuario: string;
    tipo: string;
    id: string;
    nombre: string;
    token: string;
    pass: string;

    constructor(usuario: string, pass: string,tipo: string) {
        this.usuario = usuario;
        this.tipo = tipo;
        this.pass = pass;
        
    }
}
