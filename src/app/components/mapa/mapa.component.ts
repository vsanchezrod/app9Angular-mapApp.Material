import { Component, OnInit } from '@angular/core';

import { Marcador } from '../../classes/marcador.class';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})

export class MapaComponent implements OnInit {

  // Array de marcadores
  marcadores: Marcador[] = [];


  // Coordenadas en las que se establece el mapa por defecto
  lat = 51.678418;
  lng = 7.809007;


  constructor() {

    if (localStorage.getItem ('marcadores')) {

      // Parseamos a JSON todos los strings
      this.marcadores = JSON.parse(localStorage.getItem ('marcadores'));
    }

  }

  ngOnInit() {
  }

  // Método para agregar marcadores
  agregarMarcador(evento) {

    // El evento hace referencia a las coordenadas donde se hizo click en el mapa (longitud, latitud);
    console.log(evento);

    const coords: {lat: number, lng: number} = evento.coords;

    // Marcador por defecto del mapa
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    // Se añade al array de marcadores
    this.marcadores.push(nuevoMarcador);
    this.guardarMarcadores();

  }

  // Método para guardar los marcadores en localStorage.
  guardarMarcadores() {

    // LocalStorage solo permite guardar STRINGs
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));

  }

  borrarMarcador(i: number) {
    
    // Splice para borrar
    this.marcadores.splice(i, 1);

    // Para borrar del local storage llamamos a guardarMarcadores();
    this.guardarMarcadores();
  }


}
