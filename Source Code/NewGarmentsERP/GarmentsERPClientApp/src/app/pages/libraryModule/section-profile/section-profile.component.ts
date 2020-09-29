import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { SectionProfile } from '../../../@core/data/Library-Modul-model/section-profile';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { SectionProfileService } from '../../../@core/mock/library/section-profile.service';
import { DepartmentProfileService } from '../../../@core/mock/library/department-profile.service';
import { DepartmentProfile } from '../../../@core/data/Library-Modul-model/department-profile';

@Component({
  selector: 'ngx-section-profile',
  templateUrl: './section-profile.component.html',
  styleUrls: ['./section-profile.component.scss']
})
export class SectionProfileComponent implements OnInit {

   public  DepartmentProfileList:DepartmentProfile[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'sectionName',
'departmentId',
'contactNumber',
'contactPerson',
'email'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  sectionProfile:SectionProfile[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private departmentProfileService:DepartmentProfileService,
     private sectionProfileService:SectionProfileService,) { }
    

  ngOnInit() {
 this.getSectionProfile();

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
    this.router.navigate(["/pages/add-section-profile"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sectionProfileService.deleteSectionProfile(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getSectionProfile();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getSectionProfile(){
    this.subscription=   this.sectionProfileService.getSectionProfile().subscribe(data=>{
    this.sectionProfile=data;
    this.sectionProfile.forEach(res=>{
      this.departmentProfileService.getDepartmentProfile().
      subscribe(data=>{
      this.DepartmentProfileList=data; 
      let departmentName=this.DepartmentProfileList.find(data=>data.id==res.departmentId) && this.DepartmentProfileList.find(data=>data.id==res.departmentId).departmentName;
      res.departmentId=departmentName;     
      });
    })
    this.dataSource=new MatTableDataSource(this.sectionProfile);
    console.log('sectionProfile',this.sectionProfile);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-section-profile/",element.id]);  
      }

}
