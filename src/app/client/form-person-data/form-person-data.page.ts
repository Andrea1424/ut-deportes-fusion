import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-person-data',
  templateUrl: './form-person-data.page.html',
  styleUrls: ['./form-person-data.page.scss'],
})
export class FormPersonDataPage implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    telefono: ['',[Validators.required]],
    sexo: ['',[Validators.required]],
  });

  id: any;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('id')
    if(localStorage.getItem('nombre')){
      this.miFormulario.setValue({
        nombre: localStorage.getItem('nombre'),
        apellidos: localStorage.getItem('apellidos'),
        telefono: localStorage.getItem('telefono'),
        sexo: localStorage.getItem('sexo'),
      });
    }else{
      this.miFormulario.setValue({
        nombre: '',
        apellidos: '',
        telefono: '',
        sexo: '',
      });
    }
  }

  save(){
    console.log(this.miFormulario.value);
    localStorage.setItem('nombre', this.miFormulario.value.nombre);
    localStorage.setItem('apellidos', this.miFormulario.value.apellidos);
    localStorage.setItem('telefono', this.miFormulario.value.telefono);
    localStorage.setItem('sexo', this.miFormulario.value.sexo);
    this.router.navigate(['/formschool-data',localStorage.getItem('id')])
  }

}
