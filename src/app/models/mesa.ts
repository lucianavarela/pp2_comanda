export class Mesa {
    codigo: String;
    estado: String;
    foto: string;
    nombreFoto: String;
    tipoFoto: String;
}

export enum EstadosMesa {
    // Punto 4 - Se acepta la solicitud y se le asigna la mesa al cliente.
    Asignada = "Asignada", 
    // Punto 7 - Hace el pedido para todos los comensales.
    ConfirmacionPediente = "Pedido pediente de confirmación",
    // Punto 8 - El mozo acepta el pedido.
    EsperandoPedido = "Con cliente esperando pedido",
    // Punto 9 - Cuando todos los sectores terminaron el pedido.
    PedidoListo = "Pedido listo",
    // Punto 10 - El mozo entrega el pedido.
    PedidoEntregado = "Pedido entregado",
    // Punto 11 - El cliente confirma la entrega.
    Comiendo = "Con clientes comiendo",
    // Punto 12 - El cliente solicita la cuenta y selecciona el grado de satisfacción.
    Pagando = "Con clientes pagando",
    // Punto 13 - El mozo acepta y se libera la mesa. 
    Cerrada = "Cerrada"
}
