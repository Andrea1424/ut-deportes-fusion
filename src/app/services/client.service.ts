import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  URL = "http://127.0.0.1/tutorias/admin/";

  constructor(private http: HttpClient) { }

  getActividadesId(id: number){
    return this.http.get(`${this.URL}actividades/getAllId.php?idTipoActividad=${id}`)
  }

  getActividad(id: any){
    return this.http.get(`${this.URL}actividades/getOne.php?idActividad=${id}`)
  }

  inscripcion(estudiante: any): Observable<Request> {
    return this.http.post<Request>(`${this.URL}estudiantes/add.php`, estudiante);
  }

  getCarreras(){
    return this.http.get(`${this.URL}carreras/getAll.php`);
  }

  getPublicaciones(){
    return this.http.get(`${this.URL}publicaciones/getAll.php`)
  }
  
  getPublicacionesId(id: any){
    return this.http.get(`${this.URL}publicaciones/getOneAct.php?idActividad=${id}`)
  }

  reaccion(reaccion: any){
    return this.http.post(`${this.URL}reacciones/add.php`,reaccion);
  }

  deleteReaccion(reaccion: any, publicacion: any){
    return this.http.get(`${this.URL}reacciones/delete.php?idUsuario=${reaccion}&idPublicacion=${publicacion}`);
  }

  getIdUsuario(matricula: any){
    return this.http.get(`${this.URL}estudiantes/get.php?matricula=${matricula}`);
  }

}
