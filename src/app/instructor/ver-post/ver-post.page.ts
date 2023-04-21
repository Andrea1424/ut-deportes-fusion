import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ver-post',
  templateUrl: './ver-post.page.html',
  styleUrls: ['./ver-post.page.scss'],
})
export class VerPostPage implements OnInit {

  id: any;
  publicaciones: any;

  constructor(private AdminS: AdminService) { }

  ngOnInit() {
    this.id = localStorage.getItem('idInstructor');
    this.getPublicacionesId(this.id)
  }

  getPublicacionesId(id: any){
    this.AdminS.getPublicacionesId(id).subscribe((data: any) => {
      console.log(data);
      this.publicaciones = data;
    });
  }

  eliminar(id: any){
    console.log(id);
    this.AdminS.eliminarPublicacion(id).subscribe((data: any) => {
      console.log(data);
      this.getPublicacionesId(this.id)
    });
  }

}
