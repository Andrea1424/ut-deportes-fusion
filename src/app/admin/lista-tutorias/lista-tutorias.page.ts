import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-lista-tutorias',
  templateUrl: './lista-tutorias.page.html',
  styleUrls: ['./lista-tutorias.page.scss'],
})
export class ListaTutoriasPage implements OnInit {

  id: any;
  lista: any;

  constructor(private AR: ActivatedRoute, private AdminS: AdminService, private router: Router) { }

  ngOnInit() {
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    this.getActividades(this.id);
  }

  getActividades(id: number){
    this.AdminS.getActividades(id).subscribe((data: any)=>{
      console.log(data);
      this.lista = data;
    });
  }

  cerrar(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
