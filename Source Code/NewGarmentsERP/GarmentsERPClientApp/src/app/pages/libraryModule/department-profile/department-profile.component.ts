import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DepartmentProfile } from '../../../@core/data/Library-Modul-model/department-profile';
import { DepartmentProfileService } from '../../../@core/mock/library/department-profile.service';

@Component({
  selector: 'ngx-department-profile',
  templateUrl: './department-profile.component.html',
  styleUrls: ['./department-profile.component.scss']
})
export class DepartmentProfileComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'departmentName',
    'division',
    'contactNumber',
    'contactPerson',
    'email'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  departmentProfile:DepartmentProfile[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private departmentProfileService:DepartmentProfileService,) { }
    

  ngOnInit() {
 this.getDepartmentProfile();

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
    this.router.navigate(["/pages/add-department-profile"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.departmentProfileService.deleteDepartmentProfile(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getDepartmentProfile();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getDepartmentProfile(){
    this.subscription=   this.departmentProfileService.getDepartmentProfile().subscribe(data=>{
    this.departmentProfile=data;
   
    this.dataSource=new MatTableDataSource(this.departmentProfile);
    console.log('DivisionProfile',this.departmentProfile);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-department-profile/",element.id]);  
      }
  
}
   