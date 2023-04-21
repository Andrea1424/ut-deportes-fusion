import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tiempoReal = 3;
  constructor(private router: Router) {}
  ngOnInit() {
    this.time();
  }
  time() {
    let intervalId = setInterval(() => {
      this.tiempoReal = this.tiempoReal - 1;
      console.log(this.tiempoReal);
      if (this.tiempoReal === 0) {
        clearInterval(intervalId);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }
}
