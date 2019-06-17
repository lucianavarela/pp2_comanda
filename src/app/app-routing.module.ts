import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IniciarsesionPage } from './pages/iniciarsesion/iniciarsesion.page';
import { HomePage } from './pages/home/home.page';
import { RegistrarsePage } from './pages/registrarse/registrarse.page';
import { AbmEmpleadoPage } from './pages/abm-empleado/abm-empleado.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'login', component: IniciarsesionPage },
  { path: 'register', component: RegistrarsePage },
  { path: 'abm-empleado', component: AbmEmpleadoPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
