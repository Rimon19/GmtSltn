import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';

import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { EmployeeInfo } from '../../../@core/data/Library-Modul-model/employee-info.model';
import { EmployeeInfoService } from '../../../@core/mock/library/employee-info.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { LocationService } from '../../../@core/mock/location.service';

@Component({
  selector: 'ngx-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss']
})
export class EmployeeInfoComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id',
  'employeeCode',
  'employeeFirstName',
  'designationId',
  'idCardNo',
  'companyId',
  'locationId',
  'floorId',
  'divisionId',
  'departmentId',
  'sectionId',
  'lineNoId'];
  Tostr=new Tostr();
  subscription:Subscription;
  employeeInfo: EmployeeInfo[]; 

  constructor( private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    public employeeInfoService:EmployeeInfoService,
    private companyService :CompanyService,
    private locationService:LocationService,
    private staticFeaturesService:StaticFeaturesService,) { }
 
  ngOnInit() {
    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/EmployeeInfo-create"]);
   
  } 

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.employeeInfoService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getemployeeInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getemployeeInfoDetails(){
            this.subscription=this.employeeInfoService.getAll().subscribe(data=>{
            this.employeeInfo=data;
            
            this.dataSource=new MatTableDataSource(this.employeeInfo);
            console.log('po details',this.employeeInfo);
          });
  }
  edit(element){
    this.router.navigate(["/pages/EmployeeInfo-edit/",element.id]);  
  }

  refresList(){
    
    this.employeeInfoService.getAll().subscribe(item=>{
      item.forEach(element => {

        this.staticFeaturesService.getAllReligion().
        subscribe(data=>{
        let religionName=data.find(f=>f.id==element.religionId).religionName;
        element.religionId=religionName;
         });  

         this.staticFeaturesService.getAllBloodGroups().
         subscribe(data=>{
         let bloodGroupName=data.find(f=>f.id==element.bloodGroupId).bloodGroupName;
         element.bloodGroupId=bloodGroupName;
          }); 

          this.staticFeaturesService.getAllEmployeeCategories().
          subscribe(data=>{
          let employeeCategoryName=data.find(f=>f.id==element.employeeCategoryId).employeeCategoryName;
          element.employeeCategoryId=employeeCategoryName;
           }); 

           this.staticFeaturesService.getAllDesignationLebels().
           subscribe(data=>{
           let designationLebelName=data.find(f=>f.id==element.designationLebelId).designationLebelName;
           element.designationLebelId=designationLebelName;
            }); 

            this.staticFeaturesService.getAllDesignations().
            subscribe(data=>{
            let designationName=data.find(f=>f.id==element.designationId).designationName;
            element.designationId=designationName;
             }); 

             this.staticFeaturesService.getAllfunctionalSuperior().
             subscribe(data=>{
             let functionalSuperiorName=data.find(f=>f.id==element.functionalSuperiorId).functionalSuperiorName;
             element.functionalSuperiorId=functionalSuperiorName;
              }); 

              this.staticFeaturesService.getAllAdminSuperiors().
              subscribe(data=>{
              let adminSuperiorName=data.find(f=>f.id==element.adminSuperiorId).adminSuperiorName;
              element.adminSuperiorId=adminSuperiorName;
               }); 

               this.staticFeaturesService.getAllFloors().
               subscribe(data=>{
               let floorName=data.find(f=>f.id==element.floorId).floorName;
               element.floorId=floorName;
                }); 

                this.staticFeaturesService.getAllDivisions().
                subscribe(data=>{
                let divisionName=data.find(f=>f.id==element.divisionId).divisionName;
                element.divisionId=divisionName;
                 }); 

                 this.staticFeaturesService.getAllDepartments().
                 subscribe(data=>{
                 let departmentName=data.find(f=>f.id==element.departmentId).departmentName;
                 element.departmentId=departmentName;
                  }); 

                  this.staticFeaturesService.getAllSections().
                  subscribe(data=>{
                  let sectionName=data.find(f=>f.id==element.sectionId).sectionName;
                  element.sectionId=sectionName;
                   }); 


                   this.staticFeaturesService.getAllLineNoes().
                   subscribe(data=>{
                   let lineNoName=data.find(f=>f.id==element.lineNoId).lineNoName;
                   element.lineNoId=lineNoName;
                    }); 

                    this.companyService.getAllCompany().
                    subscribe(data=>{
                    let companyNames=data.find(f=>f.compID==element.companyId).company_Name
                    ;
                    element.companyId=companyNames;
                     }); 

                     this.locationService.getAllLocations().
                     subscribe(data=>{
                     let locationName=data.find(f=>f.locationId==element.locationId).locationName;
                     element.locationId=locationName;
                      }); 

        });

      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
