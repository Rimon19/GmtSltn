import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { Tostr } from '../../../../@core/data/tostr.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { GroupProfileService } from '../../../../@core/mock/library/group-profile.service';
import { NgForm } from '@angular/forms';
import { GroupProfile } from '../../../../@core/data/Library-Modul-model/group-profile';

@Component({
  selector: 'ngx-edit-group-profile',
  templateUrl: './edit-group-profile.component.html',
  styleUrls: ['./edit-group-profile.component.scss']
})
export class EditGroupProfileComponent implements OnInit {

  public countryList:CountryInfo[]=[];
  Tostr=new Tostr();
  editedId:any;
  groupProfile:GroupProfile;
  constructor(
    private countryService:CountryService,
    private router:Router,
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    public groupProfileService:GroupProfileService
    
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.groupProfileService.getGroupProfile().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.groupProfileService.groupProfile=items;
  })

    }

  ngOnInit() {
    this.countryDDL();
    this.resetFormForAddGroupProfile()
  }
  resetFormForAddGroupProfile(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.groupProfileService.groupProfile = {
      id:0,
    groupName:'',
    contactPerson:'',
    contactNumber:'',
    countryId:0,
    website:'',
    email:'',
    address:'',
    remark:'',
    status:''
    
      
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
      form.value.id=this.editedId;
    this.groupProfileService.updateGroupProfile(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/group-profile']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}
backHomePage(){
  this.router.navigate(['/pages/group-profile']);
}
}
