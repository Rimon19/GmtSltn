import { Component, OnInit } from '@angular/core';
import { SewingOperationService } from '../../../../@core/mock/library/sewing-operation.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-add-sewing-operation',
  templateUrl: './add-sewing-operation.component.html',
  styleUrls: ['./add-sewing-operation.component.scss']
})
export class AddSewingOperationComponent implements OnInit {
   orderUOM:any[] = [];
   resources:any[] = [];
  Tostr=new Tostr() 
  constructor(
    public sewingOperationService:SewingOperationService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    ) { }

  ngOnInit() {
    this.resetFormForSewingOperation();
    this.orderUDDL();
    this.resourcesUDDL();
  }
  resetFormForSewingOperation(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.sewingOperationService.sewingOperation= {
  id:0,
  operation:'',
  rate:0,
  uomId:0,
  resourceId:0,
  operatorSMV:0,
  helperSMV:0,
  totalSMV:0, 
  action:'', 
    
    }
    
     }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    orderUDDL(){
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
      });
}  
resourcesUDDL(){
  this.staticFeaturesService.getAllResources().
  subscribe(data=>{
  this.resources=data;
  console.log('resources list',this.resources)
  });
} 
    onSubmit(form:NgForm){
      this.sewingOperationService.addSewingOperation(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/sewing-operation"]);
      })
    }

    backTo(){
      this.router.navigate(['/pages/sewing-operation']);
    }
}
