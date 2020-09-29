import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { PartyTypeService } from '../../../../@core/mock/library/party-type.service';

@Component({
  selector: 'ngx-add-party-type',
  templateUrl: './add-party-type.component.html',
  styleUrls: ['./add-party-type.component.scss']
})
export class AddPartyTypeComponent implements OnInit {

  Tostr=new Tostr();
  constructor(
    public partyTypeService:PartyTypeService,
    private toastrService:NbToastrService,
    private router:Router,
    
    
    ) { }

  ngOnInit() {
    this.resetFormForPartyType();
  }
  resetFormForPartyType(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.partyTypeService.partyType = {
     id:0,
     partyTypeName:'',
     status:''
      
    }
    
   }
   onSubmit(form:NgForm){
     console.log(form);
     this.partyTypeService.addPartyType(form.value).subscribe(res=>{
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/party-type"]);
     })
   }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]

    backToPartyTypeHomePage(){
      this.router.navigate(['/pages/party-type']);
    }

}
