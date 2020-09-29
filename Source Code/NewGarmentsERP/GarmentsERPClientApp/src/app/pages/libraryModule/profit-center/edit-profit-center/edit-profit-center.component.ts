import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProfitCenterService } from '../../../../@core/mock/library/profit-center.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CountryService } from '../../../../@core/mock/country.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-profit-center',
  templateUrl: './edit-profit-center.component.html',
  styleUrls: ['./edit-profit-center.component.scss']
})
export class EditProfitCenterComponent implements OnInit {

  editedId:any;
  public countryList:CountryInfo[]=[];
  Tostr=new Tostr()
    constructor(
      private countryService:CountryService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute,
      public profitCenterService:ProfitCenterService,
    
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.profitCenterService.getProfitCenter().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.profitCenterService.profitCenter=items;
    })

     }
  
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
    form.value.id=this.editedId;
    this.profitCenterService.updateProfitCenter(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/profit-center']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}
backHomePage(){
  this.router.navigate(['/pages/profit-center']);
}
}
