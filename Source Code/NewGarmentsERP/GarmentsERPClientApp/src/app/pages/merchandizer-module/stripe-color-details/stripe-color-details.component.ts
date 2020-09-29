import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import { StripeColorComponent } from '../stripe-color/stripe-color.component';

@Component({
  selector: 'ngx-stripe-color-details',
  templateUrl: './stripe-color-details.component.html',
  styleUrls: ['./stripe-color-details.component.scss']
})
export class StripeColorDetailsComponent implements OnInit {

  constructor(
    private matDialogRef:MatDialogRef<StripeColorDetailsComponent>,
    private matDialog:MatDialog
  ) { }

  ngOnInit() {
  }
  stripeColorModal(){
    const matDailogConfig=new MatDialogConfig();
    matDailogConfig.autoFocus=true;
    matDailogConfig.disableClose=true;
    matDailogConfig.width="80%";
    matDailogConfig.height="70%"
     this.matDialog.open(StripeColorComponent,matDailogConfig);
  }
  onClose(){
    this.matDialogRef.close()
  }
}
