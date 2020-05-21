import { ArmaComponent } from './components/arma/arma.component';
import { HomeComponent } from './components/home/home.component';
import { ArmasComponent } from './components/armas/armas.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MapasComponent } from './components/mapas/mapas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'armas', component: ArmasComponent },
  { path: 'mapas', component: MapasComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'arma/:id', component: ArmaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
