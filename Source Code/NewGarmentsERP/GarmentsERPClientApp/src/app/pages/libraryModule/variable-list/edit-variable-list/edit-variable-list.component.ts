import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { VariableListService } from '../../../../@core/mock/library/variable-list.service';
import { CompanyService } from '../../../../@core/mock/company.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';


@Component({
  selector: 'ngx-edit-variable-list',
  templateUrl: './edit-variable-list.component.html',
  styleUrls: ['./edit-variable-list.component.scss']
})
export class EditVariableListComponent implements OnInit {
  Tostr=new Tostr()
  company :any[]=[];
  erpModul :any[]=[];
  editedId:any;

  constructor(private route:ActivatedRoute,
    public variableListService:VariableListService,
    private router:Router,
    private companyService:CompanyService,
    private toastrService:NbToastrService,
    private staticFeaturesService:StaticFeaturesService) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.variableListService.getAll().subscribe(item=>{
      let items=  item.find(f=>f.id==this.editedId);
      this.variableListService.variableList=items;
      })
    }

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

     update(variableList){
      console.log(variableList);
      this.variableListService.update(variableList).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/Variable-List']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    } 
    backHomePage(){
    this.router.navigate(['/pages/Variable-List']);
    }

}
