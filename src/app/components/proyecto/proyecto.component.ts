import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RtzservicesService } from 'app/services/rtzservices.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  titulo: any;
  imagen: any;
  descripcion: any;


  constructor(
    private rutaActiva: ActivatedRoute,
    private RtzInyected: RtzservicesService
  ) { }

  ngOnInit(): void {
    this.rtzUnProyecto(this.rutaActiva.snapshot.params.titulo);
  }

  rtzUnProyecto(titulo) {
    this.RtzInyected.leerUnProyecto(titulo).subscribe(
      (proyecto) => {
        this.titulo = proyecto['result'][0].titulo;
        this.imagen = proyecto['result'][0].imagen;
        this.descripcion = proyecto['result'][0].descripcion;
        console.log(this.titulo);
        console.log(this.imagen);
        console.log(this.descripcion);
      },
      error => {
        console.log('error');
      }
    );
  }

}
