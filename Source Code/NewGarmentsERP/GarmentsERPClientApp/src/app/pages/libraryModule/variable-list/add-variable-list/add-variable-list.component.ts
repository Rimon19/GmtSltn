import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { VariableListService } from '../../../../@core/mock/library/variable-list.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';


@Component({
  selector: 'ngx-add-variable-list',
  templateUrl: './add-variable-list.component.html',
  styleUrls: ['./add-variable-list.component.scss']
})
export class AddVariableListComponent implements OnInit {
  Tostr=new Tostr()
  company :any[]=[];
  erpModul :any[]=[];

  constructor(
    public variableListService:VariableListService,
    private router:Router,
    private companyService:CompanyService,
    private toastrService:NbToastrService,
    private staticFeaturesService:StaticFeaturesService
  ) { }

  ngOnInit() {
    this.CompanyDDL();
    this.ERPModuleDDL();
    this.resetFormForVariableList();
  }

  CompanyDDL(){
    this.companyService.getAllCompany().
    subscribe(data=>{
    this.company=data;
    console.log('company list',this.company)
    });
  } 

  ERPModuleDDL(){
    this.staticFeaturesService.getERPModule().
    subscribe(data=>{
    this.erpModul=data;
    console.log('erpModul list',this.erpModul)
    });
  }
  
  resetFormForVariableList(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.variableListService.variableList= {
    id:0,
    companyId:0,
    moduleId:0,
    variableName:''
    
         }
    
     }

     onSubmit(form:NgForm){
      console.log(form);
      this.variableListService.add(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/Variable-List"]);
      }) 
    }

}
