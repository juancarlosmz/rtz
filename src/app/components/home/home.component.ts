import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { RtzservicesService } from 'app/services/rtzservices.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  allProyectos: any;

  constructor(
    config: NgbCarouselConfig,
    private RtzInyected: RtzservicesService
  ) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;

   }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
    this.rtzServicios();
    this.rtzProyectos();
  }

  rtzServicios() {
    this.RtzInyected.leerServicio().subscribe(
      (servicios) => {
        //console.log(servicios);
      },
      error => {
        console.log('error');
      }
    );
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
