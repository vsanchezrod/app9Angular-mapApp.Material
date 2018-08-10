import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Se importa el módulo nuevo creado donde se encuentra todo lo relacionado con Angular Material
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
