import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  display = 'none';

  openModalDialog() {
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }

}

