import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home-instructor',
  templateUrl: './home-instructor.page.html',
  styleUrls: ['./home-instructor.page.scss'],
})
export class HomeInstructorPage implements OnInit {

  actividades: any;
  deportiva: any;
  cultural: any;
  grupal: any;

  search: any;

  estudiante: any;
  id: any;
  tipo: any;

  constructor(private AdminS: AdminService, private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('idInstructor');
    this.tipo = localStorage.getItem('tipo');
    console.log(this.id);
    this.estudiante = 'vacio';
    this.count(this.id);
  }

  getEstudiante(matricula: any){
    if(matricula.length > 3){
      console.log(matricula.length);
      this.AdminS.buscarEstudianteInstructor(matricula,this.id).subscribe((data: any) =>{
        if(data[0]){
          console.log(data);
          this.estudiante = data;
        }else{
          this.estudiante = 'vacio';
          alert('No existe esa matricula')
        }
      });
    }else{
      this.estudiante = 'vacio';
      alert('Escriba la nomenclatura correcta')
    }
  }

  miForm(form: NgForm){
    console.log(form.value);
    this.getEstudiante(form.value.search);
  }

  count(id: any){
    this.AdminS.countActividadesInstructor(id).subscribe((data: any) =>{
      this.actividades = data;
      for(const val of data){
        if(val.tipoActividad == 'Deportiva'){
          console.log(val);
          this.deportiva = [val];
        }
        if(val.tipoActividad == 'Cultural'){
          console.log(val);
          this.cultural = [val];
        }
        if(val.tipoActividad == 'Grupal'){
          console.log(val);
          this.grupal = [val];
        }
      }
    });
  }

  ruta(opcion: any){
    console.log(this.tipo);
    console.log(this.deportiva[0].cuenta);
    if(this.tipo == 2 && this.deportiva[0].cuenta == 0 && opcion == 1){
      this.router.navigate(['/crear-publicacion']);
    } else {
      console.log('xd');
      this.router.navigate(['/ver-publicacion',opcion])
    }
    if(this.tipo == 2 && this.cultural[0].cuenta == 0 && opcion == 2){
      this.router.navigate(['/crear-publicacion']);
    } else {
      this.router.navigate(['/ver-publicacion',opcion])
    }
    if(this.tipo == 2 && this.grupal[0].cuenta == 0 && opcion == 3){
      this.router.navigate(['/crear-publicacion']);
    } else {
      this.router.navigate(['/ver-publicacion',opcion])
    }
  }

  post(){
    this.router.navigate(['/form-posts'])
  }

  view(){
    this.router.navigate(['/ver-post'])
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
