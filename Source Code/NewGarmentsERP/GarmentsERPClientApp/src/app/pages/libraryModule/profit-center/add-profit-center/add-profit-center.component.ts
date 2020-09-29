import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { ProfitCenterService } from '../../../../@core/mock/library/profit-center.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-add-profit-center',
  templateUrl: './add-profit-center.component.html',
  styleUrls: ['./add-profit-center.component.scss']
})
export class AddProfitCenterComponent implements OnInit {

  public countryList:CountryInfo[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      public profitCenterService:ProfitCenterService,
    ) { }
  
    ngOnInit() {
      this.countryDDL();
      this.resetFormForProfitCenter();
    }
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
      company: any = [
          { btn: 'MEEKKHIT LTD.', val:'MEEKKHIT LTD.'}
        ]
    countryDDL(){
      this.countryService.getAllCountry().
      subscribe(data=>{
      this.countryList=data;
      console.log('country list',this.countryList);       
      });
     }
     resetFormForProfitCenter(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.profitCenterService.profitCenter = {
        id: 0,
        profitCenterName:'',
        company:'',
        address:'',
        contactNumber:'',
        contactPerson:'',
        remark:'',
        countryId:0,
        website:'',
        status:'',
        email:''  
      }
      
     } 
     onSubmit(form:NgForm){
      console.log(form);
      this.profitCenterService.addProfitCenter(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/profit-center"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/profit-center']);
    }


}
