import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { DivisionProfile } from '../../../@core/data/Library-Modul-model/division-profile';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { DivisionProfileService } from '../../../@core/mock/library/division-profile.service';
import { CompanyService } from '../../../@core/mock/company.service';

@Component({
  selector: 'ngx-division-profile',
  templateUrl: './division-profile.component.html',
  styleUrls: ['./division-profile.component.scss']
})
export class DivisionProfileComponent implements OnInit {
 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'divisionName',
'contactPerson',
'contactNumber',
'email'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  divisionProfile:DivisionProfile[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private divisionProfileService:DivisionProfileService,
     private companyService:CompanyService
     ) { }
    

  ngOnInit() {
 this.getDivisionProfile();

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
    this.router.navigate(["/pages/add-division-profile"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.divisionProfileService.deleteDivisionProfile(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getDivisionProfile();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getDivisionProfile(){
    this.subscription=   this.divisionProfileService.getDivisionProfile().subscribe(data=>{

    this.divisionProfile=data;
   
  
    this.dataSource=new MatTableDataSource(this.divisionProfile);
    console.log('DivisionProfile',this.divisionProfile);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-division-profile/",element.id]);  
      }
  

}


