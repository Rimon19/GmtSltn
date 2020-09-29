import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { DyeingAndFinishingCharge } from '../../../@core/data/Library-Modul-model/dyeing-and-finishing-charge';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DyeingAndFinishingChargeService } from '../../../@core/mock/library/dyeing-and-finishing-charge.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-dyeing-and-finishing-charge',
  templateUrl: './dyeing-and-finishing-charge.component.html',
  styleUrls: ['./dyeing-and-finishing-charge.component.scss']
})
export class DyeingAndFinishingChargeComponent implements OnInit {
  orderUOM:any=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'companyName',
'constCompo',
'processType',
'processName',
'color',
'widthDiatype',
'inHouseRate',
'uomId',
'ratetype',
'customerRate',
'subconBuyer',
'status' 
   ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  dyeingAndFinishingCharge:DyeingAndFinishingCharge[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     public dyeingAndFinishingChargeService:DyeingAndFinishingChargeService) { }
    

  ngOnInit() {
 this.getDyeingAndFinishingCharge();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-dyeing-And-finishing-charge"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.dyeingAndFinishingChargeService.deleteDyeingAndFinishingCharge(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getDyeingAndFinishingCharge();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getDyeingAndFinishingCharge(){
    this.subscription=   this.dyeingAndFinishingChargeService.getDyeingAndFinishingCharge().subscribe(data=>{
    this.dyeingAndFinishingCharge=data;
   
    this.dyeingAndFinishingCharge.forEach(res=>{
    
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
       let orderUomName=this.orderUOM.find(data=>data.id==res.uomId).uomName;
        res.uomId=orderUomName;
        
    });
  
  })


    this.dataSource=new MatTableDataSource(this.dyeingAndFinishingCharge);
    console.log('DyeingAndFinishingCharge',this.dyeingAndFinishingCharge);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-dyeing-And-finishing-charge/",element.id]);  
      }
  

}
