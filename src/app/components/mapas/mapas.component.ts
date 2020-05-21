import { Component, OnInit } from '@angular/core';
import { MapasService } from '../../servicios/mapas.service';

@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  constructor(private mapasService: MapasService) { }

  mapas = this.mapasService.getMapas();

  ngOnInit() {

  }

}
