import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AddItemModalComponent } from '../add-item-modal/add-item-modal.component';
@Component({
  selector: 'app-initial-order',
  templateUrl: './initial-order.component.html',
  styleUrls: ['./initial-order.component.css']
})
export class InitialOrderComponent implements OnInit {

  constructor(private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  AddOrEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width= "1000px";
    dialogConfig.height = "590px";
    dialogConfig.position = {
      top: '', left: '300px' 
    };
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(AddItemModalComponent, dialogConfig).afterClosed();
  }
  onSubmit(form: NgForm) {
   
   
    
  }
}
