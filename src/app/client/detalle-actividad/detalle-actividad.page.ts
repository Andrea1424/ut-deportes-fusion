import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detalle-actividad',
  templateUrl: './detalle-actividad.page.html',
  styleUrls: ['./detalle-actividad.page.scss'],
})
export class DetalleActividadPage implements OnInit {
  cards = [
    {
      nombre: 'VicWithGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 10,
      comments: 7,
      shared: 5,
    },
    {
      nombre: 'VicWithFastGG',
      fecha: '00/00/00',
      descripcion:
        'Describir el objetivo de la tutoría deportiva, cultural o grupal.',
      imgTuto: 'assets/img/cultural.jpg',
      imgAutor: 'assets/img/imgAutor.jpg',
      likes: 15,
      dislikes: 2,
      comments: 7,
      shared: 5,
    },
  ];

  id: any;
  actividad: any;
  publicaciones: any;

  constructor(private AR: ActivatedRoute, private CS: ClientService) { }

  ngOnInit() {
    // localStorage.clear();
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    localStorage.setItem('id',this.id)
    this.getActividad(this.id);
    this.getPublicacionesId(this.id);
  }

  getPublicacionesId(id: any){
    this.CS.getPublicacionesId(id).subscribe((data: any) =>{
      console.log(data);
      if(data.resultado == false){
        console.log('vacio');
        this.publicaciones = [];
      }else{
        this.publicaciones = data;
      }
    });
  }

  getActividad(id: number){
    this.CS.getActividad(id).subscribe((data: any) =>{
      console.log(data);
      this.actividad = [data];
    });
  }

  like(id: number, i: any){
    console.log('Like', id);
    if(localStorage.getItem('idUsuario') != 'undefined'){
      // this.touch[i] = true;
      let reacc;
      reacc = {
        idPublicacion: id,
        idUsuario: localStorage.getItem('idUsuario'),
        reaccion: "Like",
      };
      this.CS.reaccion(reacc).subscribe((data: any) => {
        console.log(data);
        if(data.resultado){
          console.log('Like');
          this.publicaciones[i].reacciones = this.publicaciones[i].reacciones*1 + 1;
        }else{
          // alert(data.mensaje);
          this.CS.deleteReaccion(localStorage.getItem('idUsuario'),this.id).subscribe((data: any) => {
            console.log(data);
            if(data.resultado){
              console.log('Dislike');
              this.publicaciones[i].reacciones = this.publicaciones[i].reacciones*1 - 1;
            }else{
              alert(data.mensaje)
            }
          });
        }
      });
    }else{
      alert('Usuario desconocido')
    }
  }

}
