import { Time } from '@angular/common';

export class Pedido {
    public codigo: string;
    public estado: string;
    public mesa: string;
    public descripcion: string;
    public id_menu: string;
    public sector: string;
    public nombre_cliente: string;
    public nombre_mozo: string;
    public id_mozo: string;
    public id_encargado: string;
    public hora_inicial: string;
    public hora_entrega_estimada: Time;
    public hora_entrega_real: Time;
    public fecha: Date;
    public importe: string;
}
