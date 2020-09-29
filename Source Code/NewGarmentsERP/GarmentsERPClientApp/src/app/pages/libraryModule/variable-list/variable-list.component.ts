import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { VariableList } from '../../../@core/data/Library-Modul-model/variable-list.model';
import { VariableListService } from '../../../@core/mock/library/variable-list.service';
import { CompanyService } from '../../../@core/mock/company.service';

@Component({
  selector: 'ngx-variable-list',
  templateUrl: './variable-list.component.html',
  styleUrls: ['./variable-list.component.scss']
})
export class VariableListComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'companyId','moduleId','variableName'];
  Tostr=new Tostr();
  subscription:Subscription;
  variableList: VariableList[]; 
 
  constructor(private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    public variableListService:VariableListService,
    private staticFeaturesService:StaticFeaturesService,
    private companyService:CompanyService) { }

  ngOnInit() {
    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/VariableList-create"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.variableListService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getJournalSetupInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getJournalSetupInfoDetails(){
            this.subscription=this.variableListService.getAll().subscribe(data=>{
            this.variableList=data;
            
            this.dataSource=new MatTableDataSource(this.variableList);
            console.log('po details',this.variableList);
          });
  }
  edit(element){
    this.router.navigate(["/pages/VariableList-edit/",element.id]);  
  }

  refresList(){
    
    this.variableListService.getAll().subscribe(item=>{
      item.forEach(element => {

        this.companyService.getAllCompany().
        subscribe(data=>{
     
        let companyName=data.find(f=>f.compID==element.companyId).company_Name;
        element.companyId=companyName;
         });  

         this.staticFeaturesService.getERPModule().
         subscribe(data=>{
      
         let moduleName=data.find(f=>f.id==element.moduleId).moduleName;
         element.moduleId=moduleName;
          }); 

        });

      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
