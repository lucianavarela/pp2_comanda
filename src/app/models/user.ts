export class User {
  usuario: string;
  tipo: string;
  id: number;
  nombre: string;
  U: any;

  constructor(usuario: string, tipo: string, id: number, nombre: string) {
    this.usuario = usuario;
    this.tipo = tipo;
    this.id = id;
    this.nombre = nombre;
  }
}
