import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RtzservicesService {
  ruta: string = 'https://www.rtzsac.com/backend/public/';

  constructor(private http: HttpClient) { }

  leerServicio(): Observable<any> {
    return this.http.get<any>(this.ruta + 'servicio');
  }
  leerProyecto(): Observable<any> {
    return this.http.get<any>(this.ruta + 'proyecto');
  }
  leerUnProyecto(titulo: string): Observable<any>{
    return this.http.get<any>(this.ruta + '/unproyecto/' + titulo);
  }

}
