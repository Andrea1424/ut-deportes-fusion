import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

interface Equipo {
  matriculas: Matricula[];
}

interface Matricula {
  id: number;
  dia: string;
  hora_inicio: string;
  hora_fin: string;
  idActividad: number;
}

@Component({
  selector: 'app-form-horarios',
  templateUrl: './form-horarios.page.html',
  styleUrls: ['./form-horarios.page.scss'],
})
export class FormHorariosPage implements OnInit {

  data: any;
  actividad: any;
  idActividad: any;
  params: any;

  constructor(private router: Router, private AdminS: AdminService, private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = this.AR.snapshot.params['id'];
    this.idActividad = this.params;
    if(this.params != undefined){
      this.AdminS.getHorariosId(this.params).subscribe((data: any) => {
        console.log(data);
        this.equipo.matriculas = data;
      });
    }else{
      this.actividad = localStorage.getItem('actividad');
      this.AdminS.buscarNombreActividad(this.actividad).subscribe((data: any) => {
        console.log(data);
        this.idActividad = data.idActividad;
      });
    }
  }

  newHab : string = '';
  dia : string = '';
  hora_inicio: string = '';
  hora_fin: string = '';

  equipo: Equipo = {
    matriculas: [],
  }

  save(){
    console.log(this.equipo);
    for(const val of this.equipo.matriculas){
      this.AdminS.guardarHorarios(val).subscribe((data: any) => {
        console.log(data);
        this.router.navigate(['home-instructor']);
      });
    }
  }

  eliminar(index: number){
    this.equipo.matriculas.splice(index,1)
  }

  addHab(){
  if(this.dia == '' || this.hora_fin == '' || this.hora_inicio == ''){
    alert('Algunos campos estan vacios')
  }else{
      const result = this.equipo.matriculas.filter( (n: any, i: any) =>{ return n.dia == this.dia && n.inicio == this.hora_inicio && n.fin == this.hora_fin;})
      console.log(result);  
      if(result.length > 0){
        alert('Ya existe ese dia y hora');
      }else{
        const matricula: Matricula = {
          id: this.equipo.matriculas.length + 1,
          dia: this.dia,
          hora_fin: this.hora_fin,
          hora_inicio: this.hora_inicio,
          idActividad: this.idActividad
        }
        this.equipo.matriculas.push({...matricula});
        this.dia = '';
        this.hora_fin = '';
        this.hora_inicio = '';
      }
    }
  }

  actualizar(){
    console.log(this.equipo.matriculas);
    this.AdminS.deleteHorarioId(this.params).subscribe((data: any) => {
      console.log(data);
      for(const val of this.equipo.matriculas){
        this.AdminS.guardarHorarios(val).subscribe((data: any) => {
          console.log(data);
          const tipo = localStorage.getItem('tipo')
          if(tipo == '3'){
            console.log('admin');
            this.router.navigate(['home-admin']);
          }else{
            this.router.navigate(['home-instructor']);
          }
        });
      }
    });
  }

}
