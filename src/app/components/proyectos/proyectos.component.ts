import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RtzservicesService } from 'app/services/rtzservices.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  allProyectos: any;
  constructor(
    private RtzInyected: RtzservicesService
  ) { }

  ngOnInit(): void {
    this.rtzProyectos();
  }
  rtzProyectos() {
    this.RtzInyected.leerProyecto().subscribe(
      (proyectos) => {
        this.allProyectos = proyectos['result'];
        //console.log(proyectos);
      },
      error => {
        console.log('error');
      }
    );
  }

}
