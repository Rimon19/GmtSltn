import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { YarnBrandInfoService } from '../../../../@core/mock/library/yarn-brand-info.service';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-yarn-brand',
  templateUrl: './add-yarn-brand.component.html',
  styleUrls: ['./add-yarn-brand.component.scss']
})
export class AddYarnBrandComponent implements OnInit {
  Tostr=new Tostr();
  constructor(public yarnBrandInfoService:YarnBrandInfoService,
    private toastrService:NbToastrService,private router:Router,) { }

  ngOnInit() {
    this.resetFormForAddYarnBrand();
  }
  resetFormForAddYarnBrand(form?:NgForm){
    if(form!=null)
    form.resetForm();
   
    this.yarnBrandInfoService.yarnBrandInfo = {
      yarnBrandId:0,
      yarnBrandName:'',
      sequenceNo:0,
      status:'',
      
    }
    
   }
   Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    onSubmit(form:NgForm){
      console.log(form);
      this.yarnBrandInfoService.addYarnBrandInfo(form.value).subscribe(res=>{
        console.log(res);
        this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
        this.router.navigate(["/pages/yarn-brand"]);
      })
    
   }

   
  back(){
    this.router.navigate(['/pages/yarn-brand']);
  }
}
