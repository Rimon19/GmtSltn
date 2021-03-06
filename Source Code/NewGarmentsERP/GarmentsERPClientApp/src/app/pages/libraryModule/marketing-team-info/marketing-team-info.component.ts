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
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { UserService } from '../../../@core/mock/users.service';

@Component({
  selector: 'ngx-marketing-team-info',
  templateUrl: './marketing-team-info.component.html',
  styleUrls: ['./marketing-team-info.component.scss']
})
export class MarketingTeamInfoComponent implements OnInit {

 
  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'teamName','teamLeaderId','designation','email','contactNo','numberOfMembers','status'];
  Tostr=new Tostr();
  subscription:Subscription;

  constructor(public marketingTeamInfoService:MarketingTeamInfoService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private userInfoesService:UserInfoesService,
     private memberInfoService:MemberInfoService,
     private userService:UserService,
    ) { }

  ngOnInit() {
 this.refresList();


  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-marketing-team-info"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-marketing-team-info/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.marketingTeamInfoService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
   

    
    this.marketingTeamInfoService.getAll().subscribe(items=>{
     
        console.log(items)
        items.forEach(element => {
          if(element.teamLeaderId!=0 ){
            console.log(element.teamLeaderId)
            this.userService.getAllUser().subscribe(data=>{
              let teamLeaderName =  data.find(f=>f.userID==element.teamLeaderId) && data.find(f=>f.userID==element.teamLeaderId).fullName;
              element.teamLeaderId=teamLeaderName;
              console.log(teamLeaderName);
            })

            
            
            }else{
             element.teamLeaderId='';
           } 
         
        });
     
       
    
      this.dataSource=new MatTableDataSource(items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
 
  }


      

}
