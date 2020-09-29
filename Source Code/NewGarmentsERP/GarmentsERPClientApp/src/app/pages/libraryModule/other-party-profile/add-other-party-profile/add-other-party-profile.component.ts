import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OtherPartyProfileService } from '../../../../@core/mock/library/other-party-profile.service';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';

@Component({
  selector: 'ngx-add-other-party-profile',
  templateUrl: './add-other-party-profile.component.html',
  styleUrls: ['./add-other-party-profile.component.scss']
})
export class AddOtherPartyProfileComponent implements OnInit {
 public countryList:CountryInfo[]=[];
 Tostr=new Tostr();
  constructor(
    public otherPartyProfileService:OtherPartyProfileService,
    private countryService:CountryService,
    private router:Router,
    private toastrService:NbToastrService,
    private datapassingService:DatapassingService,
    private dialog: MatDialog

    ) { }

  ngOnInit() {
    this.resetFormForOtherPartyProfile();
    this.countryDDL();
  }
  resetFormForOtherPartyProfile(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.otherPartyProfileService.otherPartyProfile = {
    id:0,
    otherPartyName:'',
    shortName: '',
    address:'',
    contactPerson:'',
    countryNameId:0,
    designation:'',
    remark:'',
    contactNo:'',
    status:'',
    email:'',
    urlName:'',
    imageName:'',
    imagePathName:'',
    
      
    }
    
   } 
   countryDDL(){
    this.countryService.getAllCountry().
    subscribe(data=>{
    this.countryList=data;
    console.log('country list',this.countryList);       
    });
   } 
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    onSubmit(form:NgForm){
      console.log(form);
      this.otherPartyProfileService.addOtherPartyProfile(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/other-party-profile"]);
      })
    }
    backTo(){
      this.router.navigate(['/pages/other-party-profile']);
    }
    onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%"; 
      dialogConfig.height="50%";
  // page id is 5 here from according to table imageOrFileHolderPages
  let primaryKey=0; 
      this.datapassingService.sendInfoPageToErpImages.next({pageId:6,primaryKey:primaryKey});
  
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }
}
