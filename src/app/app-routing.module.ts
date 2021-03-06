import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { HomePage } from './pages/home/home.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
import { CargaPedidoPage } from './pages/pedidos/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/clientes/tateti/tateti.page';
import { InicioClientePage } from './pages/inicio-cliente/inicio-cliente.page';
import { BienvenidoPage } from './pages/bienvenido/bienvenido.page';
import { JuegosHomePage } from './pages/clientes/juegos-home/juegos-home.page';
import { AhorcadoPage } from './pages/clientes/ahorcado/ahorcado.page';
import { ActivarClientesPage } from './pages/clientes/activar-clientes/activar-clientes.page';
import { PedidosMenuPage } from './pages/pedidos/pedidos-menu/pedidos-menu.page';
import { TomaPedidoPage } from './pages/pedidos/toma-pedido/toma-pedido.page';
import { ListaReservasPage } from './pages/reservar/lista-reservas/lista-reservas.page';
import { EstadoPedidoPage } from './pages/pedidos/estado-pedido/estado-pedido.page';
import { ReservasPage } from './pages/reservar/reservas/reservas.page';
import { AltaSocioPage } from './pages/socio/alta-socio/alta-socio.page';
import { DeliveryPage } from './pages/clientes/delivery/delivery.page';
import { EncuestaPage } from './pages/clientes/encuesta/encuesta.page';
import { EncuestasPage } from './pages/encuesta/encuestas/encuestas.page';
import { ListaEsperaPage } from './pages/lista-espera/lista-espera.page';
import { HomeQrPage } from './pages/Qr/home-qr/home-qr.page';
import { AltaMenuPage } from './pages/abm-menu/alta-menu/alta-menu.page';
import { SimonPage } from './pages/clientes/simon/simon.page';
import { ChatPage } from './pages/chat/chat.page';
import { DatosMesaPage } from './pages/datos-mesa/datos-mesa.page';
import { EncuestaEmpleadoPage } from './pages/encuesta/encuesta-empleado/encuesta-empleado.page';
import { EncuestaHomePage } from './pages/encuesta/encuesta-home/encuesta-home.page';
import { LlenarEncuestaPage } from './pages/encuesta/llenar-encuesta/llenar-encuesta.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: IniciarsesionPage },
  { path: 'register', component: RegistrarsePage },
  { path: 'empleado', component: AbmEmpleadoPage },
  { path: 'empleado/:id', component: AbmEmpleadoPage },
  { path: 'carga-pedido', component: CargaPedidoPage },
  { path: 'estado-pedido', component: EstadoPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'alta-cliente', component: AltaClientePage },
  { path: 'reservas', component: ReservasPage },
  { path: 'nuevo_pedido', component: CargaPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'mesas', component: MesasPage },
  { path: 'tateti', component: TatetiPage },
  { path: 'alta-cliente', component: AltaClientePage },
  { path: 'inicioCliente', component: InicioClientePage },
  { path: 'bienvenido', component: BienvenidoPage },
  { path: 'JuegosHome', component: JuegosHomePage },
  { path: 'ahorcado', component: AhorcadoPage },
  { path: 'activar-clientes', component: ActivarClientesPage },
  { path: 'toma-pedido', component: TomaPedidoPage },
  { path: 'servir', component: TomaPedidoPage },
  { path: 'autorizar', component: TomaPedidoPage },
  { path: 'deliveryboy', component: TomaPedidoPage },
  { path: 'pedidos-menu', component: PedidosMenuPage },
  { path: 'listarReservas',  component: ListaReservasPage },
  { path: 'alta-menu', component: AltaMenuPage },
  { path: 'simon', component: SimonPage },
  { path: 'altaSocios', component: AltaSocioPage  },
  { path: 'delivery',component: DeliveryPage },
  { path: 'encuesta', component: EncuestaPage },
  { path: 'verEncuestas', component: EncuestasPage },
  { path: 'lista-espera', component: ListaEsperaPage },
  { path: 'home-qr',  component: HomeQrPage },
  { path: 'alta-menu', component: AltaMenuPage },
  { path: 'chat', component: ChatPage },
  { path: 'datos-mesa', component: DatosMesaPage },
  { path: 'encuesta-empleado', component: EncuestaEmpleadoPage },
  { path: 'encuesta-home', component: EncuestaHomePage},
  { path: 'llenar-encuesta', component: LlenarEncuestaPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
