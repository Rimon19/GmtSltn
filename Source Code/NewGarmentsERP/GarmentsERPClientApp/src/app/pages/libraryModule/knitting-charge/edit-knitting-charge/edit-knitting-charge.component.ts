import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { KnittingChargeService } from '../../../../@core/mock/library/knitting-charge.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-knitting-charge',
  templateUrl: './edit-knitting-charge.component.html',
  styleUrls: ['./edit-knitting-charge.component.scss']
})
export class EditKnittingChargeComponent implements OnInit {

  bodyPart:any[] = [];
  orderUOM:any[] = [];
  editedId:any;
  Tostr=new Tostr();
  constructor(
    public knittingChargeService:KnittingChargeService,
    private router:Router,
    private route:ActivatedRoute,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { 

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.knittingChargeService.getKnittingCharge().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.knittingChargeService.knittingCharge=items;
    })

    }

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
      form.value.id=this.editedId;
      this.knittingChargeService.updateKnittingCharge(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/knitting-charge']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/knitting-charge']);
  }

}
