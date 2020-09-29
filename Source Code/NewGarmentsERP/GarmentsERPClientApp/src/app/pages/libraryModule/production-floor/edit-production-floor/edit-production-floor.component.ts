import { Component, OnInit } from '@angular/core';
import { NbChatFormComponent, NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductionFloorService } from '../../../../@core/mock/library/production-floor.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-production-floor',
  templateUrl: './edit-production-floor.component.html',
  styleUrls: ['./edit-production-floor.component.scss']
})
export class EditProductionFloorComponent implements OnInit {

  Tostr=new Tostr();
  editedId:any;
  productionProcess:any=[];
    constructor(
    public productionFloorService:ProductionFloorService,
    private router:Router,
    private route:ActivatedRoute,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.productionFloorService.getProductionFloor().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.productionFloorService.productionFloor=items;
    })
    }
    ngOnInit() {
    this.resetFormForProductionFloor();
    this.productionProcessUDDL();
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getLocation();
    this.dropdownValueService.getFloors();
    }
    resetFormForProductionFloor(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.productionFloorService.productionFloor = {
  id:0,
  company:'',
  location:'',
  floor:'',
  floorSequence:0,
  productionProcessId:0,
  status:''
    }
    }
    // company: any = [
    // { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
    // ]
    // locations: any = [
    // { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
    // { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
    // ]
    // floor: any = [
    // { btn:'Cutting floor', val: 'Cutting floor' },
    // { btn: 'Finishing floor', val: 'Finishing floor' },
    // { btn: 'Iron floor', val: 'Iron floor' },
    // { btn: 'Knitting floor', val: 'Knitting floor' },
    // { btn: 'Sewing floor[3rd]', val: 'Sewing floor[3rd]' },
    // { btn: 'Sewing floor[4th]', val: 'Sewing floor[4th]' },
    // ]
    Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    productionProcessUDDL(){
      this.staticFeaturesService.getAllProductionProcess().
      subscribe(data=>{
      this.productionProcess=data;
      console.log('productionProcess list',this.productionProcess)
      });
    } 
    onSubmit(form:NgForm){
      form.value.id=this.editedId;
      this.productionFloorService.updateProductionFloor(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/production-floor']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
     }
    backHomePage(){
    this.router.navigate(['/pages/production-floor']);
     }
}
