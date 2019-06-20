import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { HomePage } from './pages/home/home.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';
import { CargaPedidoPage } from './pages/carga-pedido/carga-pedido.page';
import { EmpleadosPage } from './pages/empleados/empleados.page';
<<<<<<< HEAD
import { AltaClientePage } from './pages/clientes/alta-cliente/alta-cliente.page';
import { ReservasPage }  from './pages/reservas/reservas.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
=======
import { MesasPage } from './pages/mesas/mesas.page';
import { TatetiPage } from './pages/tateti/tateti.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
>>>>>>> development
  { path: 'home', component: HomePage },
  { path: 'login', component: IniciarsesionPage },
  { path: 'register', component: RegistrarsePage },
  { path: 'empleado', component: AbmEmpleadoPage },
  { path: 'empleado/:id', component: AbmEmpleadoPage },
<<<<<<< HEAD
  { path: 'carga-pedido', component: CargaPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'alta-cliente', component: AltaClientePage },
  { path: 'reservas', component: ReservasPage },
=======
  { path: 'nuevo_pedido', component: CargaPedidoPage },
  { path: 'empleados', component: EmpleadosPage },
  { path: 'mesas', component: MesasPage },
  { path: 'tateti', component: TatetiPage },
>>>>>>> development
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
