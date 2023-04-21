import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.page.html',
  styleUrls: ['./finish.page.scss'],
})
export class FinishPage implements OnInit {

  id: any;
  actividad: any;

  constructor() { }

  ngOnInit() {
    this.id = localStorage.getItem('id');
    this.actividad = localStorage.getItem('actividad');
  }

}
