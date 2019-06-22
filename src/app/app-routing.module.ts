import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { HomePage } from './pages/home/home.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
<<<<<<< HEAD
import { CargaPedidoPage } from './pages/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { ReservasPage } from './pages/reservar/reservas/reservas.page';
=======
import { CargaPedidoPage } from './pages/pedidos/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { ReservasPage } from './pages/reservas/reservas.page';
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/clientes/tateti/tateti.page';
import { InicioClientePage } from './pages/inicio-cliente/inicio-cliente.page';
import { BienvenidoPage } from './pages/bienvenido/bienvenido.page';
import { JuegosHomePage } from './pages/clientes/juegos-home/juegos-home.page';
import { AhorcadoPage } from './pages/clientes/ahorcado/ahorcado.page';
import { ActivarClientesPage } from './pages/clientes/activar-clientes/activar-clientes.page';
import { PedidosMenuPage } from './pages/pedidos/pedidos-menu/pedidos-menu.page';
import { TomaPedidoPage } from './pages/pedidos/toma-pedido/toma-pedido.page';
<<<<<<< HEAD
import { ListaReservasPage } from './pages/reservar/lista-reservas/lista-reservas.page';
=======
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9



const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: IniciarsesionPage },
  { path: 'register', component: RegistrarsePage },
  { path: 'empleado', component: AbmEmpleadoPage },
  { path: 'empleado/:id', component: AbmEmpleadoPage },
  { path: 'carga-pedido', component: CargaPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'alta-cliente', component: AltaClientePage },
  { path: 'reservas', component: ReservasPage },
  { path: 'nuevo_pedido', component: CargaPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'mesas', component: MesasPage },
  { path: 'tateti', component: TatetiPage },
  { path: 'reservas', component: ReservasPage },
  { path: 'alta-cliente', component: AltaClientePage },
  { path: 'inicioCliente', component: InicioClientePage },
  { path: 'bienvenido', component: BienvenidoPage },
  { path: 'JuegosHome', component: JuegosHomePage },
  { path: 'ahorcado', component: AhorcadoPage },
  { path: 'activar-clientes', component: ActivarClientesPage },
  { path: 'toma-pedido', component: TomaPedidoPage },
<<<<<<< HEAD
  { path: 'pedidos-menu', component: PedidosMenuPage },
  { path: 'listarReservas',  component: ListaReservasPage }
=======
  { path: 'pedidos-menu', component: PedidosMenuPage }
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
