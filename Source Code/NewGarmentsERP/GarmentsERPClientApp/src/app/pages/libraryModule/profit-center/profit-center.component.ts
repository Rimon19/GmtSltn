import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { ProfitCenter } from '../../../@core/data/Library-Modul-model/profit-center';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { ProfitCenterService } from '../../../@core/mock/library/profit-center.service';

@Component({
  selector: 'ngx-profit-center',
  templateUrl: './profit-center.component.html',
  styleUrls: ['./profit-center.component.scss']
})
export class ProfitCenterComponent implements OnInit {

 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'profitCenterName',
    'company',
    'contactNumber',
    'contactPerson',
    'email'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  profitCenter:ProfitCenter[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private profitCenterService:ProfitCenterService,) { }
    

  ngOnInit() {
 this.getProfitCenter();

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
    this.router.navigate(["/pages/add-profit-center"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.profitCenterService.deleteProfitCenter(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getProfitCenter();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getProfitCenter(){
    this.subscription=   this.profitCenterService.getProfitCenter().subscribe(data=>{
    this.profitCenter=data;
   
    this.dataSource=new MatTableDataSource(this.profitCenter);
    console.log('profitCenter',this.profitCenter);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-profit-center/",element.id]);  
      }
}
