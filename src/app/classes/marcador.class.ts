// Se crea una clase para controlar la latitud, longitud, titulo y texto del marcador

export class Marcador {

    public lat: number;
    public lng: number;

    public titulo = 'Sin título';
    public descripcion = 'Sin descripción';


    constructor (lat: number, lng: number) {
        this.lat = lat;
        this.lng = lng;
    }

}