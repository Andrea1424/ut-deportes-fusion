import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{
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
    }
  ];
  
  publicaciones: any;
  touch: any;
  estudiante: any;

  constructor(private CS: ClientService, private router: Router) {}

  ngOnInit() {
    // localStorage.setItem('idUsuario','8');
    this.getPublicaciones();
    if(localStorage.getItem('matricula')){
      this.getIdUsuario();
    }
  }

  getIdUsuario(){
    this.CS.getIdUsuario(localStorage.getItem('matricula')).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('idUsuario',data.idUsuario);
      this.estudiante = data;
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
          this.CS.deleteReaccion(localStorage.getItem('idUsuario'),this.publicaciones[i].idPublicacion).subscribe((data: any) => {
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
  
  dislike(id: number, i: any){
    console.log('Dislike', id);
    if(localStorage.getItem('idUsuario')){
      // this.touch[i] = false;
      this.publicaciones[id].reacciones = this.publicaciones[id].reacciones*1 - 1;
      this.CS.deleteReaccion(localStorage.getItem('idUsuario'),this.publicaciones[i].idPublicacion).subscribe((data: any) => {
        console.log(data);
        if(data.resultado){
          console.log('Dislike');
        }else{
          alert(data.mensaje)
        }
      });
    }
  }

  getPublicaciones(){
    this.CS.getPublicaciones().subscribe((data: any) => {
      this.publicaciones = data;
      console.log(data);
    });
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
  
}
