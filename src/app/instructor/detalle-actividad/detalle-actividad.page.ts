import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.page.html',
  styleUrls: ['./detalle-actividad.page.scss'],
})
export class DetalleActividadPage implements OnInit {

  id: any;
  actividad: any;
  estudiantes: any;
  estudiante: any;

  search: any;

  constructor(private AR: ActivatedRoute, private AdminS: AdminService) { }

  ngOnInit() {
    // this.estudiante = 'vacio';
    this.id = this.AR.snapshot.params['id'];
    this.getActividad(this.id);
    this.getEstudiantes(this.id);
  }

  miForm(form: NgForm){
    console.log(form.value);
    this.getEstudiante(this.id,form.value.search);
  }

  getEstudiante(id: any,matricula: any){
    if(matricula.length > 3){
      console.log(matricula.length);
      this.AdminS.buscarActividadEstudiante(id,matricula).subscribe((data: any) =>{
        if(data[0]){
          console.log(data);
          this.estudiante = '';
          this.estudiantes = data;
        }else{
          this.estudiante = 'vacio';
          this.estudiantes = [];
          alert('No existe esa matricula')
        }
      });
    }else{
      this.estudiante = 'vacio';
      this.estudiantes = [];
      alert('Escriba la nomenclatura correcta')
    }
  }

  getActividad(id: number){
    this.AdminS.getActividadesId(id).subscribe((data: any) => {
      console.log(data);
      this.actividad = [data];
    });    
  }

  getEstudiantes(id: number){
    this.AdminS.getEstudiantes(id).subscribe((data: any) => {
      console.log(data);
      this.estudiantes = data;
    });
  }
}
