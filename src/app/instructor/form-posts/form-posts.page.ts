import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-form-posts',
  templateUrl: './form-posts.page.html',
  styleUrls: ['./form-posts.page.scss'],
})
export class FormPostsPage implements OnInit {

  trueimg:Boolean = false;
  loader:Boolean = false;
  myimg = {
    url: ''
  };
  final:Boolean = true;
  msn:string | undefined;
  url = 'http://127.0.0.1/tutorias/admin/publicaciones/subidas/';

  actividades: any;
  id: any;

  miFormulario: FormGroup = this.fb.group({
    idInstructor: ['',[Validators.required]],
    idActividad: ['',[Validators.required]],
    titulo: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    imagen: ['',[Validators.required]],
  });

  constructor(private subir: FilesService, private fb: FormBuilder, private AR: ActivatedRoute, private router: Router, private AdminS: AdminService) { }

  ngOnInit() {
    this.msn = "Subir una imagen no mayor de 10MB";
    this.id = localStorage.getItem('idInstructor');
    this.getActividadesInstructor(this.id);
    this.miFormulario.setValue({
      idInstructor: localStorage.getItem('idInstructor'),
      idActividad: '',
      titulo: '',
      descripcion: '',
      imagen: '',
    });
  }

  getActividadesInstructor(id: any){
    this.AdminS.getActividadesInstructor(id).subscribe((data: any) => {
      console.log(data);
      this.actividades = data;
    });
  }

  subiendoAndo(ev: any){
    let img:any = ev.target;
    if(img.files.length > 0){
      console.log(img.files);
      this.loader = true;
      let form = new FormData();
      form.append('file',img.files[0]);
      this.subir.subirImagen(form).subscribe(
        resp => {
          console.log(resp);
          
          this.loader = false;
          if(resp.status){
            this.trueimg = true;
            this.myimg.url = this.url+resp.generatedName;
            this.msn = "Subida";
            console.log(this.myimg);

          }
        },
        error => {
          this.loader = false;
          alert('Imagen supera el tamaño permitido');
          
        }
      );

    }

  }

  save(){
    this.miFormulario.value.imagen = this.myimg.url;
    console.log(this.miFormulario.value);
    this.AdminS.publicar(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.resultado){
        this.router.navigate(['/ver-post']);
      }
    });
  }

}
