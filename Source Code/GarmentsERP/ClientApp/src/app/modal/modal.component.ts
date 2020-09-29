import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class modalComponent {
  display = 'none';
  displaysizewise = 'none';
  displayConversionCost = 'none';

  openModalDialog() {
    this.display = 'block';
  }

  closeModalDialog() {
    this.display = 'none';
  }

  openDetailsModalDialogForSizeWise() {


    this.displaysizewise = 'block';
  }

  closeDetailsModalDialogForsizewise() {
    this.displaysizewise = 'none';
  }

  openModalDialogConversionost() {
    this.displayConversionCost = 'block';
  }

  closeModalDialogconversioncost() {
    this.displayConversionCost = 'none';
  }



}

