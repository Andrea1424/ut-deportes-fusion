import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.page.html',
  styleUrls: ['./home-admin.page.scss'],
})
export class HomeAdminPage implements OnInit {

  actividades: any;
  deportiva: any;
  cultural: any;
  grupal: any;

  search: any;

  estudiante: any;

  constructor(private AdminS: AdminService, private router: Router) { }

  ngOnInit() {
    this.estudiante = 'vacio';
    this.count();
  }

  getEstudiante(matricula: any){
    if(matricula.length > 3){
      console.log(matricula.length);
      this.AdminS.buscarEstudiante(matricula).subscribe((data: any) =>{
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

  count(){
    this.AdminS.countActividades().subscribe((data: any) =>{
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

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
