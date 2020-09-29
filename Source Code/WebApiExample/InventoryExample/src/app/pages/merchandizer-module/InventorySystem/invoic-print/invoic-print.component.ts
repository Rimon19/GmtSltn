import { Component, OnInit } from '@angular/core';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { ActivatedRoute } from '@angular/router';
import { InvoiceDetails } from '../../../../@core/data/marchanzider-model/Invoice-Details';
import { InvoicEntryModel } from '../invoice-entry/ivoiceEntryModel';

@Component({
  selector: 'ngx-invoic-print',
  templateUrl: './invoic-print.component.html',
  styleUrls: ['./invoic-print.component.scss']
})
export class InvoicPrintComponent implements OnInit {
key:string;
invoiceDetails=new InvoicEntryModel();
items=[];

  constructor(private invoiceDetailsService:InvoiceDetailsService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.key=this.route.snapshot.paramMap.get('key');
    console.log(this.key);
    this.invoiceDetailsService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
        y['DueAmount']=y['totalAmount']-y['PaidAmount'];
           if(y['key']==this.key){
             this.invoiceDetails=y as InvoicEntryModel;
            // this.items= Object.keys(y['items']);
            // console.log(this.items) ;          
           }
      })
      //console.log(this.invoiceDetails.items[0].ProductCategory);
    //  console.log(this.invoiceDetails['items']);
      // for (let index = 0; index < this.invoiceDetails.items.length; index++) {
      //   const element = this.invoiceDetails.items[index];
      //   console.log(element);
      // }
      // this.invoiceDetails.items.forEach(em => {
      //   console.log(em);
      // });
      // console.log(typeof(this.invoiceDetails.items));
      for (let key in this.invoiceDetails.items) {
      //  console.log(key, this.invoiceDetails.items[key]);
        this.items.push(this.invoiceDetails.items[key]);
      }
console.log(this.invoiceDetails);
    });

    

  }

}
