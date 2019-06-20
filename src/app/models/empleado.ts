export class Empleado {
    public id: number;
    public nombre: string;
    public tipo: string;
    public usuario: string;
    public fechaRegistro: Date;
    public ultimoLogin: Date;
    public estado: string;
    public cantidad_operaciones: number;

    constructor(nombre: string, tipo: string, usuario: string, id?: number, fechaRegistro?: Date, 
        ultimoLogin?: Date, estado?: string, cantidad_operaciones?: number) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.usuario = usuario;
        if (id) {
            this.id = id;
        } else {
            this.id = null;
        }
        if (fechaRegistro) {
            this.fechaRegistro = fechaRegistro;
        } else {
            this.fechaRegistro = new Date()
        }
        if (ultimoLogin) {
            this.ultimoLogin = ultimoLogin;
        } else {
            this.ultimoLogin = new Date()
        }
        if (estado) {
            this.estado = estado;
        } else {
            this.estado = 'activo'
        }
        if (cantidad_operaciones) {
            this.cantidad_operaciones = cantidad_operaciones;
        } else {
            this.cantidad_operaciones = 0;
        }
    }
}
