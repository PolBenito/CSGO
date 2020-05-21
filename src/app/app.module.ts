import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArmasComponent } from './components/armas/armas.component';
import { ArmaComponent } from './components/arma/arma.component';
import { GeneralComponent } from './components/general/general.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { MapasComponent } from './components/mapas/mapas.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArmaComponent,
    ArmasComponent,
    GeneralComponent,
    SobreComponent,
    MapasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
