import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-formschool-data',
  templateUrl: './formschool-data.page.html',
  styleUrls: ['./formschool-data.page.scss'],
})
export class FormschoolDataPage implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    matricula: ['',[Validators.required]],
    idCarrera: ['',[Validators.required]],
    grupo: ['',[Validators.required]],
  });

  id: any;
  carreras: any;

  constructor(private fb: FormBuilder, private router: Router, private CS: ClientService) { }

  ngOnInit() {
    this.id = localStorage.getItem('id')
    if(localStorage.getItem('matricula')){
      this.miFormulario.setValue({
        matricula: localStorage.getItem('matricula'),
        idCarrera: localStorage.getItem('idCarrera'),
        grupo: localStorage.getItem('grupo'),
      });
    }else{
      this.miFormulario.setValue({
        matricula: '',
        idCarrera: '',
        grupo: '',
      });
    }
    this.getCarreras();
  }

  getCarreras(){
    this.CS.getCarreras().subscribe((data: any) =>{
      console.log(data);
      this.carreras = data;
    });
  }

  save(){
    console.log(this.miFormulario.value);
    localStorage.setItem('matricula',this.miFormulario.value.matricula)
    localStorage.setItem('idCarrera',this.miFormulario.value.idCarrera)
    localStorage.setItem('grupo',this.miFormulario.value.grupo)
    this.router.navigate(['/form-select-activity']);
  }

}
