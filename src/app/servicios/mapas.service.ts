import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapasService {

  private mapas:Mapa[] = [
    {
      nombre: "Cache",
      img: "cache.png",
    },
    {
      nombre: "Inferno",
      img: "inferno.png",
    },
    {
      nombre: "Mirage",
      img: "mirage.png",
    },
    {
      nombre: "Overpass",
      img: "overpass.png",
    },
    {
      nombre: "Cobblestone",
      img: "cobblestone.png"
    },
    {
      nombre: "Train",
      img: "train.png",
    },
    {
      nombre: "Dust II",
      img: "dust2.png",
    },
    {
      nombre: "Nuke",
      img: "nuke.png",
    }
  ];

  constructor() {
    console.log("Servicio mapas listo");
  }

  getMapas():Mapa[]{
    return this.mapas;
  }

  getMapa( idx: string ){
    return this.mapas[idx];
  }
}

export interface Mapa{
  nombre:string;
  img:string;
}
