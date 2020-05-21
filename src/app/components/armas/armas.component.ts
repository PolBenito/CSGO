import { ArmasService } from '../../servicios/armas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-armas',
  templateUrl: './armas.component.html',
  styleUrls: ['./armas.component.css']
})
export class ArmasComponent implements OnInit {

  constructor(private armasService: ArmasService) { }

  armas = this.armasService.getArmas();

  ngOnInit() {

  }

}
