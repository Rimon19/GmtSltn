import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CountryLocationMapping } from '../../../@core/data/Library-Modul-model/country-location-mapping';
import { CountryInfo } from '../../../@core/data/country-info.model';
import { CountryService } from '../../../@core/mock/country.service';
import { DepoLocationMappingService } from '../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMappingService } from '../../../@core/mock/library/country-location-mapping.service';
import { MarketingTeamInfoService } from '../../../@core/mock/library/marketing-team-info.service';
import { UserTypeInfoService } from '../../../@core/mock/user-type-info.service';
import { UserInfoesService } from '../../../@core/mock/marchandizer/user-infoes.service';
import { MemberInfoService } from '../../../@core/mock/library/member-info.service';
import { UserTypeInfo } from '../../../@core/data/user-info-type';
import { UserService } from '../../../@core/mock/users.service';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-members-info',
  templateUrl: './members-info.component.html',
  styleUrls: ['./members-info.component.scss']
})
export class MembersInfoComponent implements OnInit {

 
  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'memberNameOrUserId','teamLeaderId','designation','email','contactNo','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  teamLeaderId=0;
  public userTypeList:UserTypeInfo[]=[];
  public userInfoList:UserData[]=[];
  constructor(public memberInfoService:MemberInfoService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private userInfoesService:UserInfoesService,
     private userTypeInfoService:UserTypeInfoService,
     private userService:UserService
    ) { }

  ngOnInit() {
 this.refresList();
this.userInfoDDL();
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-member-info"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-member-info/",element.id]);  
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
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.memberInfoService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }

  refresListByTeamLeader(teamLeaderId){
    console.log(teamLeaderId);
    let itemResult;
    this.memberInfoService.getAll().subscribe(item=>{
      this.userInfoesService.getAllUserInfoes().subscribe(data=>{
        itemResult=item.filter(f=>f.teamLeaderId==teamLeaderId);
      
        itemResult.forEach(element => {
         let userName=data.find(f=>f.userId==element.teamLeaderId).fullName;
         element.teamLeaderId=userName;
      
         let memberName=data.find(f=>f.userId==element.memberNameOrUserId).fullName;
         element.memberNameOrUserId=memberName;
        });
        this.dataSource=new MatTableDataSource(itemResult);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      });  

      
     
    });
   
  }


  refresList(){
    
    this.memberInfoService.getAll().subscribe(item=>{
      this.userInfoesService.getAllUserInfoes().subscribe(data=>{
       
        item.forEach(element => {
         let userName=data.find(f=>f.userId==element.teamLeaderId).fullName;
         element.teamLeaderId=userName;
      
         let memberName=data.find(f=>f.userId==element.memberNameOrUserId).fullName;
         element.memberNameOrUserId=memberName;
        });
        
      });  
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }



}
