import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-form-select-activity',
  templateUrl: './form-select-activity.page.html',
  styleUrls: ['./form-select-activity.page.scss'],
})
export class FormSelectActivityPage implements OnInit {

  id: any;
  actividad: any;

  constructor(private CS: ClientService, private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.getActividad(this.id);
  }

  getActividad(id: any){
    this.CS.getActividad(id).subscribe((data: any) =>{
      console.log(data);
      localStorage.setItem('actividad',data.actividad)
      this.actividad = [data];
    });
  }

  save(){
    const estudiante = {
      idActividad: localStorage.getItem('id'),
      idCarrera: localStorage.getItem('idCarrera'),
      nombres: localStorage.getItem('nombre'),
      apellidos: localStorage.getItem('apellidos'),
      matricula: localStorage.getItem('matricula'),
      telefono: localStorage.getItem('telefono'),
      sexo: localStorage.getItem('sexo'),
      grupo: localStorage.getItem('grupo'),
      email: localStorage.getItem('email')
    }
    console.log(estudiante);
    this.CS.inscripcion(estudiante).subscribe((data: any) => {
      console.log(data);
      if(data.resultado){
        // localStorage.clear()
        alert(data.mensaje)
        this.CS.getIdUsuario(estudiante.matricula).subscribe((data: any) => {
          console.log(data);
          localStorage.removeItem('idUsuario');
          localStorage.setItem('idUsuario',data.idUsuario);
          this.router.navigate(['/home'])
        });
      }else{
        alert(data.mensaje)
      }
    });
  }

}
