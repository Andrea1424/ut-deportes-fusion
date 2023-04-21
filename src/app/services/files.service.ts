import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  url = 'http://127.0.0.1/tutorias/admin/publicaciones/subir.php';

  constructor( private http: HttpClient) {
  }
  subirImagen(datos:any):Observable<any>{
    return this.http.post(this.url, datos);
  }
}
