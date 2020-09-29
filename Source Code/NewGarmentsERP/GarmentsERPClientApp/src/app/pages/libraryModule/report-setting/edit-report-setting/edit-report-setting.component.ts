import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router ,ActivatedRoute} from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { ReportSettingService } from '../../../../@core/mock/library/report-setting.service';
import { CompanyService } from '../../../../@core/mock/company.service';

@Component({
  selector: 'ngx-edit-report-setting',
  templateUrl: './edit-report-setting.component.html',
  styleUrls: ['./edit-report-setting.component.scss']
})
export class EditReportSettingComponent implements OnInit {
  editedId:any;
  modules :any[]=[];
  reports :any[]=[];
  reportFormats :any[]=[];
  company :any[]=[];
  Tostr=new Tostr()
  constructor(private route:ActivatedRoute,
     public reportSettingService:ReportSettingService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    private companyService: CompanyService) {this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.reportSettingService.getAll().subscribe(item=>{
    let items=  item.find(f=>f.id==this.editedId);
    this.reportSettingService.reportSetting=items;
    }) } 

  ngOnInit() {
    this.resetFormForReportSetting();
    this.ModulesDDL();
    this.ReportsDDL();
    this.ReportFormatsDDL();
    this.CompanyDDL();
  }

  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]

  resetFormForReportSetting(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.reportSettingService.reportSetting= {
            id:0,
            companyId :0,
            moduleId :0,
            reportId : 0,
            reportFormatId :0,
            status :''
         }
    
     }

     ModulesDDL(){
      this.staticFeaturesService.getAllModules().
      subscribe(data=>{
      this.modules=data;
      console.log('modules list',this.modules)
      });
  } 

  ReportsDDL(){
    this.staticFeaturesService.getAllReports().
    subscribe(data=>{
    this.reports=data;
    console.log('reports list',this.reports)
    });
} 

ReportFormatsDDL(){
  this.staticFeaturesService.getAllReportFormats().
  subscribe(data=>{
  this.reportFormats=data;
  console.log('reportFormats list',this.reportFormats)
  });
} 
CompanyDDL(){
  this.companyService.getAllCompany().
  subscribe(data=>{
  this.company=data;
  console.log('company list',this.company)
  });
} 
update(reportSetting){
  console.log(reportSetting);
  this.reportSettingService.update(reportSetting).subscribe(s=>{
  this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
  this.router.navigate(['/pages/ReportSetting-list']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
} 
backHomePage(){
this.router.navigate(['/pages/ReportSetting-list']);
}

}
