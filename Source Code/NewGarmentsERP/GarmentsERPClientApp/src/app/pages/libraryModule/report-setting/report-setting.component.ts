import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { ReportSetting } from '../../../@core/data/Library-Modul-model/report-setting.model';
import { ReportSettingService } from '../../../@core/mock/library/report-setting.service';
import { CompanyService } from '../../../@core/mock/company.service';

@Component({
  selector: 'ngx-report-setting',
  templateUrl: './report-setting.component.html',
  styleUrls: ['./report-setting.component.scss']
})
export class ReportSettingComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'companyId','moduleId','reportId','reportFormatId','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  reportSetting: ReportSetting[]; 

  constructor(private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    public reportSettingService:ReportSettingService,
    private staticFeaturesService:StaticFeaturesService,
    private companyService:CompanyService
    ) { } 

  ngOnInit() {
    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/ReportSetting-create"]);
   
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.reportSettingService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getReportSettingDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getReportSettingDetails(){
            this.subscription=this.reportSettingService.getAll().subscribe(data=>{
            this.reportSetting=data;
            
            this.dataSource=new MatTableDataSource(this.reportSetting);
            console.log('po details',this.reportSetting);
          });
  }
  edit(element){
    this.router.navigate(["/pages/ReportSetting-edit/",element.id]);  
  }

  refresList(){
    
    this.reportSettingService.getAll().subscribe(item=>{
      item.forEach(element => {

        this.staticFeaturesService.getAllModules().
        subscribe(data=>{
        let moduleName=data.find(f=>f.id==element.moduleId).moduleName;
        element.moduleId=moduleName;
         });  

         this.staticFeaturesService.getAllReports().
         subscribe(data=>{
         let reportName=data.find(f=>f.id==element.reportId).reportName;
         element.reportId=reportName;
          });  

          this.staticFeaturesService.getAllReportFormats().
          subscribe(data=>{
          let reportFormatName=data.find(f=>f.id==element.reportFormatId).reportFormatName;
          element.reportFormatId=reportFormatName;
           }); 

           this.companyService.getAllCompany().
           subscribe(data=>{
           let companyName=data.find(f=>f.compID==element.companyId).company_Name;
           element.companyId=companyName;
            }); 

        });

      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
