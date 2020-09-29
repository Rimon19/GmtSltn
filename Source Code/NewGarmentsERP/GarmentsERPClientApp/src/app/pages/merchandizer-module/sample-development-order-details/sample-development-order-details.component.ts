import { ViewChild, Component, OnInit } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { SampleDevelopmentOrderDetailsService } from '../../../@core/mock/marchandizer/sample-development-order-details.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { GarmentsItemEntriesService } from '../../../@core/mock/library/garments-item-entries.service';
import { CountryService } from '../../../@core/mock/country.service';
import { AgentInfoesService } from '../../../@core/mock/marchandizer/agent-infoes.service';
import { UserMappingService } from '../../../@core/mock/user-mapping.service';
import { UserService } from '../../../@core/mock/users.service';
import { UserMapping } from '../../../@core/data/user-mapping';
import { ViewService } from '../../../@core/mock/marchandizer/views/view.service';


@Component({
  selector: 'ngx-sample-development-order-details',
  templateUrl: './sample-development-order-details.component.html',
  styleUrls: ['./sample-development-order-details.component.scss']
})
export class SampleDevelopmentOrderDetailsComponent implements OnInit {

  public userMapping: UserMapping[] = [];
  public teamLeaderItems: any[] = [];
  public productCategoryItems: any[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id','buyerId','styleName','productDept','articleNumber','garmentsItemId','productCategoryId','regionId','agentId','teamLeaderId','dealingMerchantId','bHMerchant','estShipDate','season','remarks','images','file'];
  Tostr=new Tostr(); 
  constructor(private sampleDevelopmentOrderDetailsService:SampleDevelopmentOrderDetailsService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService,
     private buyerProfileService:BuyerProfileService,
     private staticFeaturesService:StaticFeaturesService,
     private garmentsItemEntriesService:GarmentsItemEntriesService,
     private regionService:CountryService,
     private agentInfoesService:AgentInfoesService,
     private userMappingService: UserMappingService,
     private userService: UserService,
     private v:ViewService,
     ) { }
  
  ngOnInit() {
  //this.refresList();
  this.v.getOrderOrJobSelectionFromView();
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  redirectToAddPage(){
    this.router.navigate(["/pages/AddSampleDevelopmentOrderDetails"]);
   
  }
  redirectToEditPage(element){
    this.router.navigate(["/pages/EditSampleDevelopmentOrderDetails/",element.id]);  
  }
  
  onDelete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sampleDevelopmentOrderDetailsService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  
  refresList(){    
    this.sampleDevelopmentOrderDetailsService.getAll().subscribe(item=>{
    
      item.forEach(element => { 
        this.buyerProfileService.getAll().subscribe(data=>{

        let buyerName=data.find(f=>f.id==element.buyerId).contactName;
        element.buyerId=buyerName;
      })
      this.agentInfoesService.getAllAgentInfoes().subscribe(data=>{

        let agentName=data.find(f=>f.agentID==element.agentId).agent_Name;
        element.agentId=agentName;
      })

      this.regionService.getAllCountry().subscribe(data=>{

        let regionName=data.find(f=>f.regionID==element.regionId).region_Name;
        element.regionId=regionName;
      })

      this.garmentsItemEntriesService.getGarmentsItemEntries().subscribe(data=>{

        let garmentsItemName=data.find(f=>f.id==element.garmentsItemId).itemName;
        element.garmentsItemId=garmentsItemName;
      })

      this.staticFeaturesService
      .getAllProductCategory()
      .subscribe((data) => {
        this.productCategoryItems = data;
        console.log(this.productCategoryItems);
        let productCategoryName = this.productCategoryItems.find(
          (f) => f.id == element.productCategoryId
        ).productCategoryName;
        element.productCategoryId = productCategoryName;
      });


     
          //Get teamLeader Name  from EmpAdditionalDesignation&UserInfo&UserMapping table and then assaign to team_Leader_ID
          this.userMappingService.getAllUserMapping().subscribe((data) => {
            this.userMapping = data;
            let teamLeaderId = this.userMapping.filter(
              (f) => f.additionDesignationId == 1
            );
            teamLeaderId.forEach((res) => {
              this.userService.getAllUser().subscribe((data) => {
                let teamLeaderName = data.find(
                  (f) => f.userID == res.userId
                ).fullName;
                element.teamLeaderId = teamLeaderName;
                console.log(teamLeaderName);
              });
            });
          });

          //Get DelingmarchandName Name  from EmpAdditionalDesignation&UserInfo&UserMapping table and then assaign to team_Leader_ID
          this.userMappingService.getAllUserMapping().subscribe((data) => {
            this.userMapping = data;
            let marchandisingInfoByempCategoryId = this.userMapping.filter(
              (f) => f.empCategoryId == 5
            );
            console.log(
              "marchandizerInfo list",
              marchandisingInfoByempCategoryId
            );
            marchandisingInfoByempCategoryId.forEach((res) => {
              this.userService.getAllUser().subscribe((data) => {
                let marchandName = data.find((f) => f.userID == res.userId)
                  .fullName;
                  element.dealingMerchantId = marchandName;
                console.log(marchandName);
              });
            });
          });


    });  
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   
  }
     
  
  }
