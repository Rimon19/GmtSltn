import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DyeingAndFinishingChargeService } from '../../../../@core/mock/library/dyeing-and-finishing-charge.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-dyeing-and-finishing-charge',
  templateUrl: './edit-dyeing-and-finishing-charge.component.html',
  styleUrls: ['./edit-dyeing-and-finishing-charge.component.scss']
})
export class EditDyeingAndFinishingChargeComponent implements OnInit {
  editedId:any;
  orderUOM:any[] = [];
  Tostr=new Tostr()
  constructor(
    private staticFeaturesService:StaticFeaturesService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public dyeingAndFinishingChargeService:DyeingAndFinishingChargeService,
  ) { 
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.dyeingAndFinishingChargeService.getDyeingAndFinishingCharge().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.dyeingAndFinishingChargeService.dyeingAndFinishingCharge=items;
  })

  }

  ngOnInit() {
    this.orderUDDL();
    this.resetFormForDyeingAndFinishingCharge();
  }
  resetFormForDyeingAndFinishingCharge(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.dyeingAndFinishingChargeService.dyeingAndFinishingCharge = {
     id: 0,
    companyName: '',
    constCompo: '',
    processType: '',
    processName: '',
    color: '',
    widthDiatype: '',
    inHouseRate: '',
    uomId:0,
    ratetype: '',
    customerRate: '',
    subconBuyer: '',
    status: ''
    }
    }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    company: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'MEEK KNIT LIMITED', val: 'MEEK KNIT LIMITED' }
     
    ]
    process: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Main Process', val: 'Main Process'},
      { btn: 'Additional Process', val: 'Additional Process'}
     
    ]
    widthdia: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Open Width', val: 'Open Width'},
      { btn: 'Tubular', val: 'Tubular'},
      { btn: 'Needle Open', val: 'Needle Open'}
     
    ]
    rate: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Dyeing', val: 'Dyeing'},
      { btn: 'Finishing', val: 'Finishing'},
      { btn: 'Fabric Printing', val: 'Fabric Printing'},
      { btn: 'Washing', val: 'Washing'}
     
    ]
    subcon: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'CDRL', val: 'CDRL'},
    ]
    processname: any = [
      { btn:'AOP Wash', val: 'AOP Wash'},
      { btn:'Air Turning',val:'Air Turning' },
      { btn:'All Over Printing',val:'All Over Printing' },
      { btn:'Anti Piling',val:'Anti Piling' },
      { btn:'Antistatic',val:'Antistatic' },
      { btn:'Back Sewing',val:'Back Sewing' },
      { btn:'Back stain',val:'Back stain '},
      { btn:'Both Side Peach',val:'Both Side Peach' },
      { btn:'Both Side Singeing',val:'Both Side Singeing' },
      { btn:'Brightener',val:'Brightener' },
      { btn:'Brush',val:'Brush' },
      { btn:'Brush + Compacting + Shearing',val:'Brush + Compacting + Shearing' },
      { btn:'Brush + Continuous Tumble + Shearing + Stenter',val:'Brush + Continuous Tumble + Shearing + Stenter' }, 
      { btn:'Brush + Shearing',val:'Brush + Shearing' },
      { btn:'Brush + Shearing + Peach finish + Stenter',val:'Brush + Shearing + Peach finish + Stenter' },
      { btn:'Brush + Shearing + Stenter',val:'Brush + Shearing + Stenter' },
      { btn:'Brush + Shearing + Stenter + Compacting',val:'Brush + Shearing + Stenter + Compacting' },
      { btn:'Brush + Softener + Stenter + Compacting',val:'Brush + Softener + Stenter + Compacting' },
      { btn:'Brush + Stenter + Compacting',val:'Brush + Stenter + Compacting' },
      { btn:'Brush Both Side',val:'Brush Both Side' },
      { btn:'Brush One Side',val:'Brush One Side' },
      { btn:'Brush Wash',val:'Brush Wash' },
      { btn:'Burn Out',val:'Burn Out' },
      { btn:'Burnout Print',val:'Burnout Print' },
      { btn:'Calendering',val:'Calendering' },
      { btn:'Carbon',val:'Carbon' },
      { btn:'Chemical Finish',val:'Chemical Finish' },
      { btn:'Color Dosing',val:'Color Dosing' },
      { btn:'Combing',val:'Combing' },
      { btn:'Compacting',val:'Compacting' },
      { btn:'Contrast',val:'Contrast' },
      { btn:'Cool Touch',val:'Cool Touch' },
      { btn:'Cross Over Printing',val:'Cross Over Printing' },
      { btn:'Curing',val:'Curing' },
      { btn:'Curing + Wash + Softener + Compacting',val:'Curing + Wash + Softener + Compacting' },
      { btn:'Curing + Wash + Softener + Sunforizing',val:'Curing + Wash + Softener + Sunforizing' },
      { btn:'DYEING AND FINISHING',val:'DYEING AND FINISHING' },
      { btn:'De-oiling',val:'De-oiling' },
      { btn:'Direct Dyeing + Enzyme + Silicon',val:'Direct Dyeing + Enzyme + Silicon' },
      { btn:'Discharge Dyeing',val:'Discharge Dyeing' },
      { btn:'Discharge Print',val:'Discharge Print' },
      { btn:'Double Dyeing',val:'Double Dyeing' },
      { btn:'Double Enzyme',val:'Double Enzyme' },
      { btn:'Double Open Compacting',val:'Double Open Compacting' },
      { btn:'Double Stentering',val:'Double Stentering' },
      { btn:'Double Tube Compacting',val:'Double Tube Compacting' },
      { btn:'Dry Slitting',val:'Dry Slitting' },
      { btn:'Drying',val:'Drying' },
      { btn:'Dumping',val:'Dumping' },
      { btn:'Dyeing + Enzyme + Finishing',val:'Dyeing + Enzyme + Finishing' },
      { btn:'Dyeing + Finishing + Brush + Peach',val:'Dyeing + Finishing + Brush + Peach' },
      { btn:'Dyeing And Enzyme',val:'Dyeing And Enzyme' },
      { btn:'Dyeing Enzyme Silicon Boi-Wash',val:'Dyeing Enzyme Silicon Boi-Wash' },
      { btn:'Dyeing wash',val:'Dyeing wash' },
      { btn:'Dyeing+Enzyme+Silicon',val:'Dyeing+Enzyme+Silicon' },
      { btn:'Dyeing+No Enzyme+Silicon',val:'Dyeing+No Enzyme+Silicon' },
      { btn:'Easy Care Finish',val:'Easy Care Finish' },
      { btn:'Enzyme',val:'Enzyme' },
      { btn:'Fabric Dyeing',val:'Fabric Dyeing' },
      { btn:'Fabric Dyeing+Slitting/Squeezing+Stenter',val:'Fabric Dyeing+Slitting/Squeezing+Stenter' },
      { btn:'Fabric Embroidery',val:'Fabric Embroidery' },
      { btn:'Fabric Turning',val:'Fabric Turning' },
      { btn:'Fixing/Binding Agent',val:'Fixing/Binding Agent' },
      { btn:'Flame Resistant',val:'Flame Resistant' },
      { btn:'Florescent Print',val:'Florescent Print' },
      { btn:'Glitter Print',val:'Glitter Print' },
      { btn:'Gmts Finishing',val:'Gmts Finishing' },
      { btn:'Gmts Wash',val:'Gmts Wash' },
      { btn:'Grey Return',val:'Grey Return' },
      { btn:'Heat Setting',val:'Heat Setting' },
      { btn:'Heat+Peach',val:'Heat+Peach' },
      { btn:'Hydro Mc',val:'Hydro Mc' },
      { btn:'Hydrophilics',val:'Hydrophilics' },
      { btn:'Inside Brush',val:'Inside Brush' },
      { btn:'Iron',val:'Iron' },
      { btn:'Leveling Agent',val:'Leveling Agent' },
      { btn:'MM',val:'MM' },
      { btn:'Moisture',val:'Moisture' },
      { btn:'Neon Print',val:'Neon Print' },
      { btn:'Neutralization',val:'Neutralization' },
      { btn:'No Enzyme',val:'No Enzyme' },
      { btn:'No Softener',val:'No Softener' },
      { btn:'Normal Wash',val:'Normal Wash' },
      { btn:'Odour Finish',val:'Odour Finish' },
      { btn:'Open Compacting',val:'Open Compacting' },
      { btn:'Others',val:'Others' },
      { btn:'Outside Brush',val:'Outside Brush' },
      { btn:'Peach + Brush + Stenter + Compacting',val:'Peach + Brush + Stenter + Compacting' },
      { btn:'Peach Finish',val:'Peach Finish' },
      { btn:'Peach Finish + Compacting',val:'Peach Finish + Compacting' },
      { btn:'Peach+Brush',val:'Peach+Brush' },
      { btn:'Peach+Brush+Heat',val:'Peach+Brush+Heat' },
      { btn:'Peroxide Wash',val:'Peroxide Wash' },
      { btn:'Pigment Print',val:'Pigment Print' },
      { btn:'Poly',val:'Poly' },
      { btn:'Re Compacting',val:'Re Compacting' },
      { btn:'Re Conning',val:'Re Conning' },
      { btn:'Re Dyeing',val:'Re Dyeing' },
      { btn:'Re Match',val:'Re Match' },
      { btn:'Re Stanter',val:'Re Stanter'},
      { btn:'Re Wash',val:'Re Wash' },
      { btn:'Reactive Print',val:'Reactive Print' },
      { btn:'Resin Finish',val:'Resin Finish' },
      { btn:'Reversing',val:'Reversing' },
      { btn:'Rotation',val:'Rotation' },
      { btn:'Rubber Print',val:'Rubber Print' },
      { btn:'SILICON WASH',val:'SILICON WASH' },
      { btn:'Scouring',val:'Scouring' },
      { btn:'Scouring + Enzyme + Silicon',val:'Scouring + Enzyme + Silicon' },
      { btn:'Shearing',val:'Shearing' },
      { btn:'Shearing + Stenter',val:'Shearing + Stenter' },
      { btn:'Silicon Finish',val:'Silicon Finish' },
      { btn:'Singeing',val:'Singeing' },
      { btn:'Sliting',val:'Sliting' },
      { btn:'Slitting/Squeezing',val:'Slitting/Squeezing' },
      { btn:'Softener',val:'Softener' },
      { btn:'Special Finish',val:'Special Finish' },
      { btn:'Squeezer',val:'Squeezer' },
      { btn:'Standard and Compacting',val:'Standard and Compacting' },
      { btn:'Steam Tumble + Open Compacting',val:'Steam Tumble + Open Compacting' },
      { btn:'Steam Tumble Dry',val:'Steam Tumble Dry' },
      { btn:'Steaming',val:'Steaming' },
      { btn:'Steaming + Wash + Softener + Compacting',val:'Steaming + Wash + Softener + Compacting' },
      { btn:'Stenter',val:'Stenter' },
      { btn:'Stenter + Compacting',val:'Stenter + Compacting' },
      { btn:'Stenter + Print',val:'Stenter + Print' },
      { btn:'Stenter(For Rubbing)',val:'Stenter(For Rubbing)'},
      { btn:'Stentering',val:'Stentering' },
      { btn:'Stiching Back To Tube',val:'Stiching Back To Tube' },
      { btn:'Stitching',val:'Stitching' },
      { btn:'Stripe Printing',val:'Stripe Printing' },
      { btn:'Sueding',val:'Sueding' },
      { btn:'Sunforizing',val:'Sunforizing' },
      { btn:'Teflon Coating',val:'Teflon Coating' },
      { btn:'Teflon Finish',val:'Teflon Finish' },
      { btn:'Top Side Singeing',val:'Top Side Singeing' },
      { btn:'Trumble Dryer',val:'Trumble Dryer' },
      { btn:'Tube Compacting',val:'Tube Compacting' },
      { btn:'Tube Dryer',val:'Tube Dryer' },
      { btn:'Tube Finish',val:'Tube Finish' },
      { btn:'Tube Opening/Sliting',val:'Tube Opening/Sliting' },
      { btn:'Turning',val:'Turning' },
      { btn:'Twisting',val:'Twisting' },
      { btn:'UV Finish',val: 'UV Finish'},
      { btn:'UV Prot',val:'UV Prot' },
      { btn:'WASH ENZYME SILICON',val:'WASH ENZYME SILICON' },
      { btn:'Wash Hydro Tumble Dry',val:'Wash Hydro Tumble Dry' },
      { btn:'Washing',val:'Washing' },
      { btn:'Water Repellent',val:'Water Repellent' },
      { btn:'Yarn Dyeing',val:'Yarn Dyeing' }
       
    ]
    orderUDDL(){
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
      });
}

update(knittingCharge){
  console.log(knittingCharge);
  this.dyeingAndFinishingChargeService.updateDyeingAndFinishingCharge(knittingCharge).subscribe(s=>{
    this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
    this.router.navigate(['/pages/dyeing-And-finishing-charge']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
}
backHomePage(){
this.router.navigate(['/pages/dyeing-And-finishing-charge']);
}  

}
