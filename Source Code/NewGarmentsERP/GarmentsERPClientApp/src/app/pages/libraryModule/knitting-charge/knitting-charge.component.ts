import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { KnittingCharge } from '../../../@core/data/Library-Modul-model/knitting-charge';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { KnittingChargeService } from '../../../@core/mock/library/knitting-charge.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';

@Component({
  selector: 'ngx-knitting-charge',
  templateUrl: './knitting-charge.component.html',
  styleUrls: ['./knitting-charge.component.scss']
})
export class KnittingChargeComponent implements OnInit {
  bodyPart:any[] = [];
  orderUOM:any[] = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'subconBuyer',
    'bodyPartId',
    'constructionComposition',
    'gsm',
    'gauge',
    'yarnDescription',
    'inHouseRate',
    'customerRate',
    'uomId',
    'status',
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  knittingCharge:KnittingCharge[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     public knittingChargeService:KnittingChargeService,
     public companyService:CompanyService,
     private buyerProfileService:BuyerProfileService
     ) { }
    

  ngOnInit() {
 this.getKnittingCharge();

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
    this.router.navigate(["/pages/add-knitting-charge"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.knittingChargeService.deleteKnittingCharge(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getKnittingCharge();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getKnittingCharge(){
    this.subscription=this.knittingChargeService.getKnittingCharge().subscribe(data=>{
    this.knittingCharge=data;
  

     
    this.knittingCharge.forEach(res=>{
      this.companyService.getAllCompany().subscribe(data=>{
        let companyName =data.find(f=>f.compID==res.companyName).company_Name;
        res.companyName=companyName;
      })
      this.buyerProfileService.getAll().subscribe(data=>{
        let buyerName =data.find(f=>f.id==res.subconBuyer) && data.find(f=>f.id==res.subconBuyer).contactName;
        res.subconBuyer=buyerName;
      })

       
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
       let orderUomName=this.orderUOM.find(data=>data.id==res.uomId).uomName;
        res.uomId=orderUomName; 
    });
  })


  this.knittingCharge.forEach(res=>{
    this.staticFeaturesService.getAllBodyPartType().
    subscribe(data=>{
    this.bodyPart=data;
    console.log('bodyPart list',this.bodyPart);
    let bodyPartTypeName=this.bodyPart.find(data=>data.id==res.bodyPartId).bodyPartTypeName;
    res.bodyPartId=bodyPartTypeName; 
    });

    
  })

    this.dataSource=new MatTableDataSource(this.knittingCharge);
    console.log('knittingCharge',this.knittingCharge);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-knitting-charge/",element.id]);  
      }


}
