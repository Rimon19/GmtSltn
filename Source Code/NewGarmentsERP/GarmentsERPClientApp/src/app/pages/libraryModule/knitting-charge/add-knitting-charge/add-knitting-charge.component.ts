import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { KnittingChargeService } from '../../../../@core/mock/library/knitting-charge.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-knitting-charge',
  templateUrl: './add-knitting-charge.component.html',
  styleUrls: ['./add-knitting-charge.component.scss']
})
export class AddKnittingChargeComponent implements OnInit {
  bodyPart:any[] = [];
  orderUOM:any[] = [];
  Tostr=new Tostr();
  constructor(
    public knittingChargeService:KnittingChargeService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { }

    ngOnInit() {
    this.resetFormForKnittingCharge();
    this.BodyPartTypeDDL();
    this.orderUOMDDL();
    this.dropdownValueService.getCompany()
    this.dropdownValueService.getBuyers();
    }
    resetFormForKnittingCharge(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.knittingChargeService.knittingCharge = {
      id: 0,
      companyName:'',
      bodyPartId: 0,
      constructionComposition:'',
      gsm:'',
      gauge:'',
      yarnDescription:'',
      inHouseRate: 0,
      customerRate:'',
      subconBuyer:'',
      uomId: 0,
      status:''
    }
    }
  // company:any=[
  //   {btn:'MEEK KNIT LIMITED',val:'MEEK KNIT LIMITED'},
 
  // ]
  // buyer:any=[
  //   {btn:'Cottex',val:'Cottex'},
 
  // ]
  BodyPartTypeDDL(){
    this.staticFeaturesService.getAllBodyPartType().
    subscribe(data=>{
    this.bodyPart=data;
    console.log('bodyPart list',this.bodyPart)
    });
}
orderUOMDDL(){
  this.staticFeaturesService.getAllUOM().
  subscribe(data=>{
  this.orderUOM=data;
  console.log('orderUOM list',this.orderUOM)
  });
}    
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    onSubmit(form:NgForm){
      this.knittingChargeService.addItemKnittingCharge(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/knitting-charge"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/knitting-charge']);
    }
}
