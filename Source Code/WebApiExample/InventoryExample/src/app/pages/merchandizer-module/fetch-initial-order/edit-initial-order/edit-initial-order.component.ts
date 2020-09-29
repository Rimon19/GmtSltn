import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-edit-initial-order',
  templateUrl: './edit-initial-order.component.html',
  styleUrls: ['./edit-initial-order.component.scss']
})
export class EditInitialOrderComponent  {
  
  myValues;
  companyName: any; // rendered as this.yourModelStore = ['value', 'value'];

  constructor() {  this.myValues =[{value:0,title:"t"}];}

 
}
