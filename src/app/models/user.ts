export class User {
  usuario: string;
  tipo: string;
<<<<<<< HEAD
  id: number;
  nombre: string;
  U: any;

  constructor(usuario: string, tipo: string, id: number, nombre: string) {
=======
  id: string;
  nombre: string;
  U: any;

  constructor(usuario: string, tipo: string, id: string, nombre: string) {
>>>>>>> development
    this.usuario = usuario;
    this.tipo = tipo;
    this.id = id;
    this.nombre = nombre;
  }
}
