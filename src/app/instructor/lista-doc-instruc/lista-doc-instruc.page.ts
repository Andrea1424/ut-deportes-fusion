import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-doc-instruc',
  templateUrl: './lista-doc-instruc.page.html',
  styleUrls: ['./lista-doc-instruc.page.scss'],
})
export class ListaDocInstrucPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  cerrar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
