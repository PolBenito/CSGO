import { ArmasService } from './../../servicios/armas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arma',
  templateUrl: './arma.component.html',
  styleUrls: ['./arma.component.css']
})
export class ArmaComponent implements OnInit {

  constructor(private route:ActivatedRoute, private armasService: ArmasService) { }

  arma = this.armasService.getArma(parseInt(this.route.snapshot.paramMap.get('id')));


  ngOnInit() {
  }

}
