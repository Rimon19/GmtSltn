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
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';


@Component({
  selector: 'ngx-add-marketing-team-info',
  templateUrl: './add-marketing-team-info.component.html',
  styleUrls: ['./add-marketing-team-info.component.scss']
})
export class AddMarketingTeamInfoComponent implements OnInit {

  
  public userInfoList:UserData[]=[];
  public userTypeList:UserTypeInfo[]=[];
  Tostr=new Tostr();
  constructor(
  private userTypeInfoService:UserTypeInfoService,
  public marketingTeamInfoService:MarketingTeamInfoService,
  private router:Router,
  private toastrService:NbToastrService,
  private userService:UserService,
  public dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.userInfoDDL();
    this.resetForm();
    this.dropdownValueService.getTeamleaders();
  }
   userInfoDDL(){
    this.userTypeInfoService.getAll().subscribe(d=>{
      this.userTypeList=d;
       console.log(this.userTypeList);

        this.userService.getAllUser().subscribe(data=>{
      this.userInfoList=data;
         this.userInfoList.forEach(element => {
          let userTypeName=this.userTypeList.find(f=>f.userTypeId==element.userTypeID) && this.userTypeList.find(f=>f.userTypeId==element.userTypeID).userType;
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
      let userTypeName=this.userTypeList.find(f=>f.userTypeId==element.userTypeID) && this.userTypeList.find(f=>f.userTypeId==element.userTypeID).userType;
      console.log(userTypeName);
      element.userTypeID=userTypeName;
   
     });

     let userinfo=this.userInfoList.find(f=>f.userTypeID==userId);
    this.marketingTeamInfoService.marketingTeamInfo.designation=userinfo.userTypeID;
    this.marketingTeamInfoService.marketingTeamInfo.email=userinfo.email;
    this.marketingTeamInfoService.marketingTeamInfo.contactNo=userinfo.contact;

      });
   }
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.marketingTeamInfoService.marketingTeamInfo = {
      id: 0,
    teamName:'',
    teamLeaderId: '',
    designation:'',
    email:'',
    contactNo:'',
    status:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    this.marketingTeamInfoService.add(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.router.navigate(["/pages/marketing-team-info"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/marketing-team-info']);
  }


}
