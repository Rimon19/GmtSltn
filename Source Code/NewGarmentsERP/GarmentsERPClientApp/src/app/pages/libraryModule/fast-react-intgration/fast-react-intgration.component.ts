import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { FastReactIntgration } from '../../../@core/data/Library-Modul-model/fast-react-intgration';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { FastReactIntgrationService } from '../../../@core/mock/library/fast-react-intgration.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-fast-react-intgration',
  templateUrl: './fast-react-intgration.component.html',
  styleUrls: ['./fast-react-intgration.component.scss']
})
export class FastReactIntgrationComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'exportPOReceivedfrom',
    'exportModule'

  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  fastReactIntgration:FastReactIntgration[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public fastReactIntgrationService:FastReactIntgrationService,
     private staticFeaturesService:StaticFeaturesService
     ) { }
    

  ngOnInit() {
 this.getemailFastReactIntgration();

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
    this.router.navigate(["/pages/add-fast-react-intgration"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.fastReactIntgrationService.deleteFastReactIntgration(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getemailFastReactIntgration();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getemailFastReactIntgration(){
    this.subscription=this.fastReactIntgrationService.getAllFastReactIntgration().subscribe(data=>{
    this.fastReactIntgration=data;
    this.fastReactIntgration.forEach(element => {
      this.staticFeaturesService.getERPModule().subscribe(data=>{
        let moduleNames=data.find(f=>f.moduleId==element.exportModule)&&data.find(f=>f.moduleId==element.exportModule).moduleName;
        element.exportModule=moduleNames;
      })
    });
  
    this.dataSource=new MatTableDataSource(this.fastReactIntgration);
    console.log('fastReactIntgration',this.fastReactIntgration);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-fast-react-intgration/",element.id]);  
      }


}
