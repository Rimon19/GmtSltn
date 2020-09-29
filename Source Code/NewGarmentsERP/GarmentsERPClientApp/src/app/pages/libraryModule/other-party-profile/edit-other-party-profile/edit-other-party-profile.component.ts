import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../../@core/mock/country.service';
import { OtherPartyProfileService } from '../../../../@core/mock/library/other-party-profile.service';
import { OtherPartyProfile } from '../../../../@core/data/Library-Modul-model/other-party-profile';
import { NgForm } from '@angular/forms';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ErpImagesComponent } from '../../../Shared/erp-images/erp-images.component';

@Component({
  selector: 'ngx-edit-other-party-profile',
  templateUrl: './edit-other-party-profile.component.html',
  styleUrls: ['./edit-other-party-profile.component.scss']
})
export class EditOtherPartyProfileComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  countryList:CountryInfo[]=[];
  otherPartyProfile:OtherPartyProfile;
  constructor( public otherPartyProfileService:OtherPartyProfileService,
    private countryService:CountryService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    private datapassingService:DatapassingService,
    private dialog: MatDialog
    ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.otherPartyProfileService.getOtherPartyProfile().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.otherPartyProfileService.otherPartyProfile=items;
  })
  }

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
   
        this.otherPartyProfileService.updateOtherPartyProfile(form.value).subscribe(s=>{
          this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
          this.router.navigate(['/pages/other-party-profile']);
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
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
