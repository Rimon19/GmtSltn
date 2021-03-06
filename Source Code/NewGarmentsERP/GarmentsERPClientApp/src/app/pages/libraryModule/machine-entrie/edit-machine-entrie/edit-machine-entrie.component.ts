import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MachineEntrieService } from '../../../../@core/mock/library/machine-entrie.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-machine-entrie',
  templateUrl: './edit-machine-entrie.component.html',
  styleUrls: ['./edit-machine-entrie.component.scss']
})
export class EditMachineEntrieComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  orderUOM:any[] = [];
  constructor(
    public machineEntrieService:MachineEntrieService,
    private router:Router,
    private route:ActivatedRoute,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.machineEntrieService.getAllMachineEntrie().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.machineEntrieService.machineEntrie=items;
    })

     }

    ngOnInit() {
    this.resetFormForMachineEntrie();
    this.orderUOMDDL();
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getLocation();
    this.dropdownValueService.getFloors();
    }
    resetFormForMachineEntrie(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.machineEntrieService.machineEntrie = {
    id: 0,
    company: '',
    attachment: '',
    location: '',
    prodCapacity: 0,
    floorNo: '',
    capacityUOMId: 0,
    machineNo: '',
    brand: '',
    category: '',
    origin: '',
    group: '',
    purchaseDate: '',
    diaWidth: 0,
    purchaseCost: 0,
    gauge: '',
    accumulatedDep: 0,
    extraCylinder: '',
    depreciationRate: 0,
    nooffeeder: '',
    depreciationMethod: '',
    remarks: '',
    sequenceNo: 0,
    status:''
    }
    
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
    depreciationMethod: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Straight-line', val: 'Straight-line' },
        { btn: 'Reducing Balance', val:'Reducing Balance' }
    ]
    category: any = [
      { btn:'Auto Cone Machine', val:'Auto Cone Machine'},
      { btn:  'Breaker Draw Frame', val: 'Breaker Draw Frame'},
      { btn:  'Carding', val: 'Carding'},
      { btn:  ' Comber', val: ' Comber'},
      { btn:  ' Finisher Draw Frame', val: ' Finisher Draw Frame'},
      { btn:  ' Lap Former', val: ' Lap Former'},
      { btn:  'Simplex', val: 'Simplex'},
      { btn:  ' Spinning', val: ' Spinning'},
      { btn:  ' Uniflex', val: ' Uniflex'},
      { btn:  'Attachment', val: 'Attachment'},
      { btn:  'CAD Machine', val: 'CAD Machine'},
      { btn:  'Cutting', val: 'Cutting'},
      { btn:  'Dyeing', val: 'Dyeing'},
      { btn:  'ETP', val: 'ETP'},
      { btn:  'Embroidery', val: 'Embroidery'},
      { btn:  'Final', val: 'Final'},
      { btn:  'Finishing', val: 'Finishing'},
      { btn:  'Hole Button', val: 'Hole Button'},
      { btn:  'Insp', val: 'Insp'},
      { btn:  'Iron', val: 'Iron'},
      { btn:  'Knitting', val: 'Knitting'},
      { btn:  'Link', val: 'Link'},
      { btn:  'Maintenance', val: 'Maintenance'},
      { btn:  'Others', val: 'Others'},
      { btn:  'Packing', val: 'Packing'},
      { btn:  'Printing', val: 'Printing'},
      { btn:  'Ring Machine', val: 'Ring Machine'},
      { btn:  'Seamless', val: 'Seamless'},
      { btn:  'Sewing', val: 'Sewing'},
      { btn:  'Trims/Accessories', val: 'Trims/Accessories'},
      { btn:  'Vehicles', val: 'Vehicles'},
      { btn:  'Washing', val: 'Washing'}
    ]
    // locations: any = [
    //   { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
    //   { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
    // ]
    // company: any = [
    //   { btn:'MEEK KNIT LIMITED', val: 'MEEK KNIT LIMITED' },
    // ]
    // floor: any = [
    //   { btn:'Cutting floor', val: 'Cutting floor' },
    //   { btn: 'Finishing floor', val: 'Finishing floor' },
    //   { btn: 'Iron floor', val: 'Iron floor' },
    //   { btn: 'Knitting floor', val: 'Knitting floor' },
    //   { btn: 'Sewing floor[3rd]', val: 'Sewing floor[3rd]' },
    //   { btn: 'Sewing floor[4th]', val: 'Sewing floor[4th]' },
    // ]
   
    onSubmit(form:NgForm){
      form.value.id=this.editedId;
      this.machineEntrieService.updateMachineEntrie(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/machine-entrie']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/machine-entrie']);
  }

}
