import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { UserService } from '../../../../@core/mock/users.service';
import { UserData } from '../../../../@core/data/users';
import { UserTypeInfoService } from '../../../../@core/mock/user-type-info.service';
import { UserTypeInfo } from '../../../../@core/data/user-info-type';
import { MarketingTeamInfoService } from '../../../../@core/mock/library/marketing-team-info.service';
import { MemberInfoService } from '../../../../@core/mock/library/member-info.service';

@Component({
  selector: 'ngx-add-members-info',
  templateUrl: './add-members-info.component.html',
  styleUrls: ['./add-members-info.component.scss']
})
export class AddMembersInfoComponent implements OnInit {

  
  public userInfoList:UserData[]=[];
  public userTypeList:UserTypeInfo[]=[];
  Tostr=new Tostr();
  constructor(
  private userTypeInfoService:UserTypeInfoService,
  public memberInfoService:MemberInfoService,
  private router:Router,
  private toastrService:NbToastrService,
  private userService:UserService
    ) { }

  ngOnInit() {
    this.userInfoDDL();
    this.resetForm();
  }
   userInfoDDL(){
    this.userTypeInfoService.getAll().subscribe(d=>{
      this.userTypeList=d;
       console.log(this.userTypeList);

        this.userService.getAllUser().subscribe(data=>{
      this.userInfoList=data;
         this.userInfoList.forEach(element => {
          let userTypeName=this.userTypeList.find(f=>f.userTypeId==element.userTypeID).userType;
          element.userTypeID=userTypeName;
       
         });
        console.log(this.userInfoList);
      });

    });
     
    
    
     
   }
   onChangeTeamLeader(userId){
    console.log(userId);
    this.userService.getAllUser().subscribe(data=>{
     this.userInfoList=data;
     this.userInfoList.forEach(element => {
      let userTypeName=this.userTypeList.find(f=>f.userTypeId==element.userTypeID).userType;
      element.userTypeID=userTypeName;
   
     });

     let userinfo=this.userInfoList.find(f=>f.userID==userId);
    this.memberInfoService.memberInfo.designation=userinfo.userTypeID;
    this.memberInfoService.memberInfo.email=userinfo.email;
    this.memberInfoService.memberInfo.contactNo=userinfo.contact;

      });
   }
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.memberInfoService.memberInfo = {
      id: 0,
      memberNameOrUserId:'',
      teamLeaderId: '',
      designation:'',
      email:'',
      contactNo:'',
      status:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    
    this.memberInfoService.add(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.router.navigate(["/pages/member-info"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/member-info']);
  }


}
