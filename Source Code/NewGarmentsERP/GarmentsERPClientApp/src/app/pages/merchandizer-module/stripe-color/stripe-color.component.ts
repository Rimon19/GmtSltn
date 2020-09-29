import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngx-stripe-color',
  templateUrl: './stripe-color.component.html',
  styleUrls: ['./stripe-color.component.scss']
})
export class StripeColorComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<StripeColorComponent>
  ) { }

  ngOnInit() {
  }
onClose(){
  this.matDialogRef.close();
}
}
