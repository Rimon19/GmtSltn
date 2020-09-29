import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { SewingOperation } from '../../../@core/data/Library-Modul-model/sewing-operation';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { SewingOperationService } from '../../../@core/mock/library/sewing-operation.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-sewing-operation',
  templateUrl: './sewing-operation.component.html',
  styleUrls: ['./sewing-operation.component.scss']
})
export class SewingOperationComponent implements OnInit {
  orderUOM:any[] = [];
   resources:any[] = [];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'operation',
'rate',
'uomId',
'resourceId',
'operatorSMV',
'helperSMV',
'totalSMV',

  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  sewingOperation:SewingOperation[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     public sewingOperationService:SewingOperationService,
     ) { }
    

  ngOnInit() {
 this.getSewingOperation();

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
    this.router.navigate(["/pages/add-sewing-operation"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sewingOperationService.deleteSewingOperation(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getSewingOperation();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getSewingOperation(){
    this.subscription=   this.sewingOperationService.getSewingOperation().subscribe(data=>{
    this.sewingOperation=data;
     
    this.sewingOperation.forEach(res=>{
    
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
       let orderUomName=this.orderUOM.find(data=>data.id==res.uomId).uomName;
        res.uomId=orderUomName;
        
    });
  
  })

  this.sewingOperation.forEach(res=>{
    
    this.staticFeaturesService.getAllResources().
    subscribe(data=>{
    this.resources=data;
    console.log('Resources list',this.resources)
     let ResourceName=this.resources.find(data=>data.id==res.resourceId).resourceName;
      res.resourceId=ResourceName;
      
  });

})
  

    this.dataSource=new MatTableDataSource(this.sewingOperation);
    console.log('sewingOperation',this.sewingOperation);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-sewing-operation/",element.id]);  
      }


}
