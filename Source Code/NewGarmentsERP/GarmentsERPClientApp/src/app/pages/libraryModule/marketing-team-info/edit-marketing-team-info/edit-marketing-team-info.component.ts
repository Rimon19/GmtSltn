import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { UserService } from '../../../../@core/mock/users.service';
import { UserData } from '../../../../@core/data/users';
import { UserTypeInfoService } from '../../../../@core/mock/user-type-info.service';
import { UserTypeInfo } from '../../../../@core/data/user-info-type';
import { MarketingTeamInfoService } from '../../../../@core/mock/library/marketing-team-info.service';

@Component({
  selector: 'ngx-edit-marketing-team-info',
  templateUrl: './edit-marketing-team-info.component.html',
  styleUrls: ['./edit-marketing-team-info.component.scss']
})
export class EditMarketingTeamInfoComponent implements OnInit {

  public countryList:CountryInfo[]=[];
  public userInfoList:UserData[]=[];
  public userTypeList:UserTypeInfo[]=[];
  Tostr=new Tostr();
  editedId;
  constructor(
  private userTypeInfoService:UserTypeInfoService,
  public marketingTeamInfoService:MarketingTeamInfoService,
  private router:Router,
  private toastrService:NbToastrService,
  private userService:UserService,
  private route:ActivatedRoute
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.marketingTeamInfoService.getAll().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.marketingTeamInfoService.marketingTeamInfo  =items;

      });
     }

  ngOnInit() {
    this.userInfoDDL();
    this.resetForm();
  }
   userInfoDDL(){
    this.userTypeInfoService.getAll().subscribe(d=>{
      this.userTypeList=d;
      

        this.userService.getAllUser().subscribe(data=>{
      this.userInfoList=data;
         this.userInfoList.forEach(element => {
          let userTypeName=this.userTypeList.find(f=>f.userTypeId==element.userTypeID).userType;
          element.userTypeID=userTypeName;
       
         });
       
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
    teamLeaderId: 0,
    designation:'',
    email:'',
    contactNo:'',
    status:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    form.value.id=this.editedId;
    this.marketingTeamInfoService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
    this.router.navigate(["/pages/marketing-team-info"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/marketing-team-info']);
  }


}
