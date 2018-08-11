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

    // Marcador por defecto del mapa
    const nuevoMarcador = new Marcador(51.67, 7.80);

    // Se añade al array de marcadores
    this.marcadores.push(nuevoMarcador);

  }

  ngOnInit() {
  }

  agregarMarcador(evento) {

    // El evento hace referencia a las coordenadas donde se hizo click en el mapa (longitud, latitud);
    console.log(evento);

    const coords: {lat: number, lng: number} = evento.coords;

    // Marcador por defecto del mapa
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    // Se añade al array de marcadores
    this.marcadores.push(nuevoMarcador);




  }



}
