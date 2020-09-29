import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { InputPannelPodetails } from '../../../../@core/data/marchanzider-model/input-pannel-podetails.model';
import { PackingInfoes } from '../../../../@core/data/marchanzider-model/packing-infoes.model';
import { PackingInfoesService } from '../../../../@core/mock/marchandizer/packing-infoes.service';
@Component({
  selector: 'ngx-input-pannel-info',
  templateUrl: './input-pannel-info.component.html',
  styleUrls: ['./input-pannel-info.component.scss']
})
export class InputPannelInfoComponent implements OnInit {
  PoNumberItems;
  InputPannelInfo:InputPannelPodetails;
  constructor( private countryService:CountryService,
    private packingInfoesService:PackingInfoesService) { }

  public countryList:CountryInfo[]=[];
  countryDDL(){
          this.countryService.getAllCountry().
          subscribe(data=>{
          this.countryList=data;
             
          });
        }
        
        public packingInfoesItems:PackingInfoes[] = [];
        packingInfoesDDL(){
        this.packingInfoesService.getAllPackingInfoes().
        subscribe(data=>{
        this.packingInfoesItems=data;
      
        });
        }


  ngOnInit() {

    this.countryDDL();
    this.packingInfoesDDL();
    this.resetFormInputPannelInfo();
  }
  onSubmit(form:NgForm){

 
   // localStorage.setItem('itemDetailsObject', JSON.stringify(form.value));
   // this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   // this.resetFormItemDetailsInfo(form);
     // this.itemDetailsOrderEntriesService.addItemDetailsOrderEntries(form.value).subscribe(res=>
     //   {
 
     //     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     //     this.resetFormItemDetailsInfo(form);
     //   },(err) => { this.Tostr.showToast('danger','', err.statusText, '',this.toastrService);})
   
    
    
     }
     onClose(){
      //this.dialogbox.close();
     // this.fetchInitialOrderService.filter('Register click');
    }


       resetFormInputPannelInfo(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.InputPannelInfo = {
        input_Pannel_ID: 0,
        po_details_ID: 0,
        countryID:0,
        country_Type: '',
        cutt_off_Date: '',
        cutt_off: '',
        country_Shipment_date: '',
        remarks:'',
        packing_ID:0,
        quantity:0 
        
        
     
       }
       }
}
