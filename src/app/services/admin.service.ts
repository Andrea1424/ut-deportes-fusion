import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = "http://127.0.0.1/tutorias/admin/";

  constructor(private http: HttpClient) { }

  countActividades(){
    return this.http.get(`${this.URL}actividades/count.php`);
  }
  
  buscarEstudiante(matricula: any){
    return this.http.get(`${this.URL}estudiantes/buscar.php?matricula=${matricula}`);
  }
  
  buscarActividadEstudiante(actividad: number, matricula: any){
    return this.http.get(`${this.URL}estudiantes/buscarActividad.php?idActividad=${actividad}&matricula=${matricula}`);
  }
  
  getActividades(id: number){
    return this.http.get(`${this.URL}actividades/getAllId.php?idTipoActividad=${id}`);
  }
  
  getActividad(id: number){
    return this.http.get(`${this.URL}actividades/getOneId.php?idActividad=${id}`);
  }
  
  getEstudiantes(id: number){
    return this.http.get(`${this.URL}estudiantes/getAllId.php?idActividad=${id}`)
  }
  
  // Instructor
  
  countActividadesInstructor(id: any){
    return this.http.get(`${this.URL}instructores/count.php?idInstructor=${id}`);
  }

  buscarEstudianteInstructor(matricula: any, id: any){
    return this.http.get(`${this.URL}instructores/buscar.php?matricula=${matricula}&idInstructor=${id}`);
  }
  
  guardarActividad(actividad: any){
    return this.http.post(`${this.URL}actividades/add.php`, actividad);
  }

  updateActividad(id: any, actividad: any){
    return this.http.post(`${this.URL}actividades/update.php?idActividad=${id}`, actividad);
  }
  
  guardarHorarios(horario: any){
    return this.http.post(`${this.URL}horarios/add.php`,horario)
  }
  
  buscarNombreActividad(actividad: any){
    return this.http.get(`${this.URL}actividades/getId.php?actividad=${actividad}`)
  }
  
  getActividadesInstructorTipo(tipo: number, id: any){
    return this.http.get(`${this.URL}actividades/getAllIdInstructor.php?idTipoActividad=${tipo}&idInstructor=${id}`);
  }
  
  getActividadesId(id: number){
    return this.http.get(`${this.URL}actividades/getOne.php?idActividad=${id}`);
  }

  getHorariosId(id: any){
    return this.http.get(`${this.URL}horarios/getAllId.php?idActividad=${id}`);
  }

  updateHorario(horario: any){
    return this.http.post(`${this.URL}horarios/update.php`, horario);
  }

  deleteHorarioId(id: any){
    return this.http.get(`${this.URL}horarios/deleteAllId.php?idActividad=${id}`);
  }

  verificarActividad(id: any){
    return this.http.get(`${this.URL}actividades_usuarios/count.php?idActividad=${id}`);
  }

  // Posts
  getActividadesInstructor(id: any){
    return this.http.get(`${this.URL}actividades/getAllInstructor.php?idInstructor=${id}`)
  }

  publicar(post: any){
    return this.http.post(`${this.URL}publicaciones/add.php`, post)
  }

  getPublicacionesId(id: any){
    return this.http.get(`${this.URL}publicaciones/getAllId.php?idInstructor=${id}`)
  }

  eliminarPublicacion(id: any){
    return this.http.get(`${this.URL}publicaciones/delete.php?idPublicacion=${id}`)
  }
}
