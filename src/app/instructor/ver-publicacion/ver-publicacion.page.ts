import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ver-publicacion',
  templateUrl: './ver-publicacion.page.html',
  styleUrls: ['./ver-publicacion.page.scss'],
})
export class VerPublicacionPage implements OnInit {

  actividades: any;
  id: any;
  tipo: any;

  constructor(private AdminS: AdminService, private router: Router, private AR: ActivatedRoute) { }

  ngOnInit() {
    this.tipo = this.AR.snapshot.params['id'];
    this.id = localStorage.getItem('idInstructor');
    console.log(this.tipo,this.id);
    this.getActividadesInstructorTipo(this.id,this.tipo);
  }

  getActividadesInstructorTipo(id: any, tipo: any){
    this.AdminS.getActividadesInstructorTipo(tipo,id).subscribe((data: any) => {
      console.log(data);
      this.actividades = data;
    });
  }

  editar(id: any){
    this.router.navigate(['/crear-publicacion',id])
  }

  eliminar(id: any){
    console.log(id);
    let exist = 0;
    this.AdminS.verificarActividad(id).subscribe((data: any) =>{
      console.log(data[0].cuenta);
      if(data[0].cuenta == '0'){
        console.log('Borrado');
      } else {
        alert('Solicite al Encargado del área de Cultura y Deporte que elimine esta actividad porque tiene estudiantes registrados en la actividad');
      }
    });
  }

}
