// Se genera un nuevo módulo donde se gestionaran lso componentes del Angular Material: ng g module material --flat
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material Componentes
import { MatToolbarModule } from '@angular/material/toolbar'; // TOOLBAR
import { MatButtonModule } from '@angular/material/button'; // BUTTON
import { MatProgressBarModule } from '@angular/material/progress-bar'; // PROGRESS BAR

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  exports: [  // Añadido nuevo para que se puedan usar los componentes desde el módulo principal
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
