import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-documentos',
  templateUrl: './list-documentos.page.html',
  styleUrls: ['./list-documentos.page.scss'],
})
export class ListDocumentosPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  cerrar() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
