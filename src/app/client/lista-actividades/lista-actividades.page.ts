import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.page.html',
  styleUrls: ['./lista-actividades.page.scss'],
})
export class ListaActividadesPage implements OnInit {

  id: any;
  actividades: any;

  constructor(private AR: ActivatedRoute, private CS: ClientService) { }

  ngOnInit() {
    // localStorage.clear();
    this.id = this.AR.snapshot.params['id'];
    console.log(this.id);
    this.getActividadesId(this.id);
  }

  getActividadesId(id: number){
    this.CS.getActividadesId(id).subscribe((data: any) =>{
      console.log(data);
      this.actividades = data;
    });
  }

}
