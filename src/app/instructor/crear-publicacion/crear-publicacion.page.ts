import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
})
export class CrearPublicacionPage implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    idInstructor: ['',[Validators.required]],
    actividad: ['',[Validators.required]],
    cupo: ['',[Validators.required]],
    lugar: ['',[Validators.required]],
    descripcion: ['',[Validators.required]],
    material: ['',[Validators.required]],
    publicar: ['',[Validators.required]],
    idTipoActividad: ['',[Validators.required]],
  });

  params: any;

  constructor(private AdminS: AdminService, private fb: FormBuilder, private router: Router, private AR: ActivatedRoute) { }

  ngOnInit() {
    this.params = this.AR.snapshot.params['id'];
    if(this.params != undefined){
      this.AdminS.getActividadesId(this.params).subscribe((data: any) => {
        console.log(data);
        this.miFormulario.setValue({
          idInstructor: data.idInstructor,
          actividad: data.actividad,
          cupo: data.cupo,
          lugar: data.lugar,
          descripcion: data.descripcion,
          material: data.material,
          publicar: 1,
          idTipoActividad: data.idTipoActividad,
        });
      });
    }else{
      this.miFormulario.setValue({
        idInstructor: localStorage.getItem('idInstructor'),
        actividad: '',
        cupo: '',
        lugar: '',
        descripcion: '',
        material: '',
        publicar: 1,
        idTipoActividad: '',
      });
    }
  }

  campoValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched;
  }

  guardar(){
    console.log(this.miFormulario.value);
    this.AdminS.guardarActividad(this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.resultado){
        localStorage.setItem('actividad',this.miFormulario.value.actividad)
        this.router.navigate(['form-horarios']);
      }else{
        alert(data.mensaje)
      }
    });
  }

  actualizar(){
    console.log(this.miFormulario.value);
    this.AdminS.updateActividad(this.params,this.miFormulario.value).subscribe((data: any) => {
      console.log(data);
      if(data.resultado){
        localStorage.setItem('actividad',this.miFormulario.value.actividad)
        this.router.navigate(['form-horarios',this.params]);
      }else{
        alert(data.mensaje)
      }
    });
  }

}
