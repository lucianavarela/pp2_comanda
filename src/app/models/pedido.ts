import { Time } from '@angular/common';

export enum EstadosPedido {
    Pediente = "Pediente",
    EnPreparacion = "En Preparacion",
    ListoParaServir = "Listo para Servir",
    Entregado = "Entregado",
    Cancelado = "Cancelado",
    Finalizado = "Finalizado"
}

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
    public id_encargado: number;
    public hora_inicial: Time;
    public hora_entrega_estimada: Time;
    public hora_entrega_real: Time;
    public fecha: Date;
    public importe: string;
    public es_delivery: number;
    public direccion_delivery: string;
    public fire_mail_delivery: string;
    public fire_mail_cliente: string;
}
