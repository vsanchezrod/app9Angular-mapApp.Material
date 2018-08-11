import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Se importa el módulo nuevo creado donde se encuentra todo lo relacionado con Angular Material
import { MaterialModule } from './material.module';

// Componentes
import { MapaComponent } from './components/mapa/mapa.component';

// Angular Google Maps
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDNOu2JQ001PxZY-GVwFvVou0_6h_Sj-14'
    })
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
