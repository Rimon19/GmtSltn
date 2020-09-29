import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { YarnDyeingWOWithoutOrderDetailService } from '../../../../@core/mock/marchandizer/yarn-dyeing-wowithout-order-detail.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-add-yarn-dyeing-wowithout-order-details',
  templateUrl: './add-yarn-dyeing-wowithout-order-details.component.html',
  styleUrls: ['./add-yarn-dyeing-wowithout-order-details.component.scss']
})
export class AddYarnDyeingWOWithoutOrderDetailsComponent implements OnInit {

  Tostr=new Tostr();
  
  constructor(
  public yarnDyeingWOWithoutOrderDetailService:YarnDyeingWOWithoutOrderDetailService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getSampleName();
this.dropdownValueService.getYarnCount();
this.dropdownValueService.getColorRange();
this.dropdownValueService.getUom();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail = {
    id: 0,
    yarnDyeingWOWithoutOrderMasterId: '' ,
sampleDevelopId: '' ,
sampleName: '' ,
lotNo: '' ,
yarnCountId: '' ,
yarnDescription: '' ,
yarnColor: '' ,
colorRangeId: '' ,
refNo: '' ,
uomId: '' ,
yarnWoQnty: '' ,
dyeingCharge: 0 ,
amount: 0 ,
noofBag: 0 ,
noofCone:0 ,
minReqCone: 0 ,
remarks: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }
 onAmount()
 {
   

   let amount= this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnWoQnty * this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.dyeingCharge;
   this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.amount=amount;
 }


  onSubmit(){  

   let item = this.datapassingService.getValue();
   
  
    this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnDyeingWOWithoutOrderMasterId= item.id;

    if(this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnWoQnty==''){
      this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnWoQnty=0;
    }
    
      if(this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnCountId==''){
        this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.yarnCountId=0;
      }
      
      if(this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.colorRangeId==''){
        this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.colorRangeId=0;
      }
      
      if(this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.uomId==''){
        this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.uomId=0;
      }
      
    

 
  this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.approvedDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.approvedBy=ApprovedBy.userName;
  this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.isApproved=true;
 this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.entryBy=EntryBy.userName;
 this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.status='Active';
this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail.entryDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWOWithoutOrderDetailService.add(this.yarnDyeingWOWithoutOrderDetailService.yarnDyeingWOWithoutOrderDetail).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/YarnDyeingWOWithoutOrderMaster"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/YarnDyeingWOWithoutOrderMaster']);
    }

}
