import { Component, OnInit, ViewChild } from '@angular/core';
import { UserMapping } from '../../@core/data/user-mapping';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { UserMappingService } from '../../@core/mock/user-mapping.service';
import { UserService } from '../../@core/mock/users.service';
import { UserData } from '../../@core/data/users';
import { StaticFeaturesService } from '../../@core/mock/library/static-features.service';
import { EmpCategory } from '../../@core/data/emp-category';
import { Departments } from '../../@core/data/departments';
import { EmpDesignation } from '../../@core/data/emp-designation';
import { EmpAdditionalDesignation } from '../../@core/data/emp-additional-designation';

@Component({
  selector: 'ngx-user-mapping',
  templateUrl: './user-mapping.component.html',
  styleUrls: ['./user-mapping.component.scss']
})
export class UserMappingComponent implements OnInit {

  public UserMappingList:UserMapping[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  userData: UserData[]; 
  userMapping: UserMapping[]; 
  empCategory: EmpCategory[]; 
  departments: Departments[]; 
  empDesignation: EmpDesignation[]; 
  empAdditionalDesignation: EmpAdditionalDesignation[]; 
  displayedColumns = 
  [
  'id', 
  'userId',
  'empCategoryId',
  'departmentId',
  'designationId',
  'additionDesignationId'
 
];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private userService:UserService,
     private staticFeaturesService:StaticFeaturesService,
     private userMappingService:UserMappingService) { }

  ngOnInit() {
 this.refresList();
 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-user-mapping"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-user-mapping/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.userMappingService.deleteUserMapping(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    this.userMappingService.getAllUserMapping().subscribe(item=>{ 
      this.userMapping=item;

         this.userMapping.forEach(res=>{

           //Get User Name from tblUserInfo Table
          this.userService.getAllUser(). subscribe(data=>{
            this.userData=data;
            let userName= 
            this.userData.find(f=>f.userID==res.userId).fullName;
            res.userId=userName;
           });

          //Get EmpCategory Name from EmpCategory Table
          this.staticFeaturesService.getEmpCategorie().subscribe(data=>{
              this.empCategory=data;
           let categoryName=this.empCategory.find(f=>f.id==res.empCategoryId).category;
           res.empCategoryId=categoryName;
          })
             //Get EmpDepartments Name from EmpDepartment Table
          this.staticFeaturesService.getEmpDepartments().subscribe(data=>{
            this.departments=data;
         let  departmentName=this.departments.find(f=>f.id==res.departmentId).departmentName;
         res.departmentId=departmentName;
         })

          //Get EmpDesignations Name from EmpDepartment Table
         this.staticFeaturesService.getEmpDesignations().subscribe(data=>{
          this.empDesignation=data;
        let empDesignationName=this.empDesignation.find(f=>f.id==res.designationId).designation;
        res.designationId=empDesignationName;
        }) 
         //Get EmpAdditionalDesignations Name from EmpAdditionalDesignation Table
        this.staticFeaturesService.getEmpAdditionalDesignations().subscribe(data=>{
          this.empAdditionalDesignation=data;
          let empAdditionalDesignationName=this.empAdditionalDesignation.find(f=>f.id==res.additionDesignationId).designation;
          res.additionDesignationId=empAdditionalDesignationName;
        })
         })

      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   
  }


}
