import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { InvoiceDetailsService } from '../../../../@core/mock/marchandizer/invoice-details.service';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  productInfos:any[]=[];
  afterSubmitproductInfos:any[]=[];
  mobileNo:any;
  paymentForm: FormArray = this.fb.array([]);
  paidAmount:any;
  DueAmount=0;
  constructor(private productInfoService:InvoiceDetailsService,
    private route:ActivatedRoute,private fb: FormBuilder,private router:Router) { 
      // this.paymentForm.push(this.fb.group({
      //   PaidAmount: [0],      
      //   entryDate:[0],
      //   totalAmount: [0],
      //   DueAmount: [0],
      //   key: [0],
        
       
      // }));
    }

  ngOnInit() {
    this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
      this.productInfos=[];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["key"] = element.key;
    //    y['DueAmount']=y['totalAmount']-y['PaidAmount'];
     
      this.productInfos.push(y);
      });
      this.mobileNo = this.route.snapshot.paramMap.get('key');
 //   console.log( this.mobileNo);
    if(this.mobileNo!=null){}
//  console.log(this.productInfos);
      let   filteredObj = (this.mobileNo) ?
      this.productInfos.find(p =>p.mobile.toLowerCase()==
      this.mobileNo.toLowerCase()) :
       this.productInfos;     
       console.log(filteredObj);

     
         this.DueAmount =filteredObj.totalAmount-filteredObj.PaidAmount;

       //console.log(sumDue);
        this.paymentForm.push(this.fb.group({
          PaidAmount: filteredObj.PaidAmount,      
          entryDate:filteredObj.entryDate,
          totalAmount: filteredObj.totalAmount,
          key: filteredObj.key,
          
        
        }));
      

this.paidAmount=this.DueAmount;
        });
  }
  onDelete(paymentForm,i) {
    paymentForm.value.splice(i, 1);
   this.paymentForm= this.fb.array([]);
       this.paymentForm= this.fb.array([]);
       (paymentForm.value).forEach((invoiceDetails: any) => {
         this.paymentForm.push(this.fb.group({
           ProductCategory: invoiceDetails.ProductCategory,
           ProductBrand: invoiceDetails.ProductBrand,
           ProductSubCategory: invoiceDetails.ProductSubCategory,
           Quantity: invoiceDetails.Quantity,
           Rate: invoiceDetails.Rate,
           Amount: invoiceDetails.Amount
         
         }));
       });
     
   }


   onSubmit(paymentForm,givenAmount){
let paidAmount=parseInt(givenAmount);
 console.log(paymentForm.value);

//  this.productInfoService.getAllProductInfo().snapshotChanges().subscribe(item=>{
//   this.afterSubmitproductInfos=[];
//   this.paymentForm= this.fb.array([]);
//   item.forEach(element => {
//     var y = element.payload.toJSON();
//     y["key"] = element.key;
   
 
//   this.afterSubmitproductInfos.push(y);
//   });

console.log(this.productInfos);
 

 let invoicObj= this.productInfos.find(f=>f.key==paymentForm.value[0].key);
 console.log(invoicObj);
 if(paidAmount>=0){
  let dueAmount= invoicObj.totalAmount-parseInt(invoicObj.PaidAmount);
  console.log(paidAmount);
  console.log(dueAmount);
  if(dueAmount<=paidAmount){

    invoicObj.PaidAmount= parseInt(invoicObj.PaidAmount)+dueAmount ;
    paidAmount=paidAmount-dueAmount;
    console.log(invoicObj.PaidAmount);
    console.log(paidAmount);
  } 
 
  
   if(dueAmount>paidAmount){
    
    invoicObj.PaidAmount=parseInt(invoicObj.PaidAmount)+paidAmount;
    paidAmount=paidAmount-dueAmount;
    console.log(invoicObj.PaidAmount);
    console.log(paidAmount);
   } 
 }
console.log(invoicObj);
 this.productInfoService.updateProductInfo(invoicObj.key,invoicObj).then(t=>{
   this.productInfos=[];
   this.router.navigate(["/pages/Deu-Payment-Details"]);
  
  
  });




  console.log(this.paymentForm );
  console.log(paymentForm.value );
//});



   }
}
