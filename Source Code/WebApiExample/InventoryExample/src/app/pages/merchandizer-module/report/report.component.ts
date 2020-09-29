import { Component, OnInit } from '@angular/core';
import { InvoiceDetailsService } from '../../../@core/mock/marchandizer/invoice-details.service';

@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  public BuyerID: string;
  show: boolean = false;
  productInfos:any[]=[];
  url: string;
  constructor(private productInfoService:InvoiceDetailsService,) { }

  ngOnInit() {
  }
  Clicked() {
    this.show = true;
    this.url = "http://localhost:4186/api/Report/ShowReport/"+this.BuyerID;
  }

  // refresList(){
  
  //  this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
  //     this.productInfos=[];
  //     item.forEach(element => {
  //       var y = element.payload.toJSON();
  //       y["key"] = element.key;
  //       y['DueAmount']=y['totalAmount']-y['PaidAmount'];
     
  //     this.productInfos.push(y);
  //     })
    
  //   })
   
  // }
}
