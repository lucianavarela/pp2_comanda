export class User {
  usuario: string;
  tipo: string;
  id: number;
  nombre: string;
  U: any;

  constructor(usuario: string, tipo: string, id: number, nombre: string) {
    this.id = id;
    this.usuario = usuario;
    this.tipo = tipo;
    this.nombre = nombre;
  }
}
