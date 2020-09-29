import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { ProductSubDepartment } from '../../../@core/data/Library-Modul-model/product-sub-department';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { ProductSubDepartmentService } from '../../../@core/mock/library/product-sub-department.service';
import { buyer } from '../../../@core/data/buyer';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { BuyerProfile } from '../../../@core/data/Library-Modul-model/buyer-profile';

@Component({
  selector: 'ngx-product-sub-department',
  templateUrl: './product-sub-department.component.html',
  styleUrls: ['./product-sub-department.component.scss']
})
export class ProductSubDepartmentComponent implements OnInit {

  public buyerListItems:BuyerProfile[] = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'subDepartmentName',
    'departnemtName',
    'buyerNameId',
    
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  productSubDepartment:ProductSubDepartment[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private buyerService:BuyerProfileService,
     private productSubDepartmentService:ProductSubDepartmentService) { }
    

  ngOnInit() {
 this.getProductSubDepartment();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/add-product-sub-department"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.productSubDepartmentService.deleteProductSubDepartment(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getProductSubDepartment();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getProductSubDepartment(){
    this.subscription=   this.productSubDepartmentService.getProductSubDepartment().subscribe(data=>{
    this.productSubDepartment=data; 
    this.productSubDepartment.forEach(res=>{
    
      this.buyerService.getAll().
      subscribe(data=>{
        this.buyerListItems=data;
        console.log('buyer list',this.buyerListItems);
        let buyerName=this.buyerListItems.find(data=>data.id==res.buyerNameId).contactName;
        res.buyerNameId=buyerName;
        }); 
    })
    this.dataSource=new MatTableDataSource(this.productSubDepartment);
    console.log('productSubDepartment',this.productSubDepartment);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-product-sub-department/",element.id]);  
      }

}
