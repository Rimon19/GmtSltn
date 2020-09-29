import { Component, OnInit } from '@angular/core';
import { YarnBrandInfoService } from '../../../../@core/mock/library/yarn-brand-info.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-yarn-brand',
  templateUrl: './edit-yarn-brand.component.html',
  styleUrls: ['./edit-yarn-brand.component.scss']
})
export class EditYarnBrandComponent implements OnInit {
  Tostr=new Tostr();
 
   editedId:any;
  constructor(
    public yarnBrandInfoService:YarnBrandInfoService,
    private toastrService:NbToastrService,private router:Router,
    private route:ActivatedRoute
  ) { 

    this.editedId = this.route.snapshot.paramMap.get('yarnBrandId');

    this.yarnBrandInfoService.getYarnBrandInfo().subscribe(item=>{
   let items=  item.find(f=>f.yarnBrandId==this.editedId);
   this.yarnBrandInfoService.yarnBrandInfo=items;
    })
  }

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
      this.yarnBrandInfoService.updateYarnBrandInfo(form.value).subscribe(res=>{
        
        this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
        this.router.navigate(["/pages/yarn-brand"]);
      })
    
   }

   
  back(){
    this.router.navigate(['/pages/yarn-brand']);
  }

}
