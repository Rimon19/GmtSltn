import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { YarnDyeingWOWithoutOrderMasterService } from '../../../../@core/mock/marchandizer/yarn-dyeing-wowithout-order-master.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-yarn-dyeing-wowithout-order-master',
  templateUrl: './edit-yarn-dyeing-wowithout-order-master.component.html',
  styleUrls: ['./edit-yarn-dyeing-wowithout-order-master.component.scss']
})
export class EditYarnDyeingWOWithoutOrderMasterComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public yarnDyeingWOWithoutOrderMasterService:YarnDyeingWOWithoutOrderMasterService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.yarnDyeingWOWithoutOrderMasterService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getSuppliers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getPayMode();
this.dropdownValueService.getSource();
this.dropdownValueService.getItemCategory();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster = {
  id: 0,
  yarnDyeingWoNo: '' ,
yarnDyeingFactory: '' ,
bookingDate: '' ,
attention: '' ,
currencyId: '' ,
exchangeRate: 0 ,
payMode: '' ,
source: '' ,
gorYIssueStart: '' ,
gorYIssueEnd: '' ,
dorYDeliveryStart: '' ,
dorYDeliveryEnd: '' ,
itemCategoryId: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  

    this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.bookingDate=this.dateResizeService.dateResize(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.bookingDate);
    this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.dorYDeliveryEnd=this.dateResizeService.dateResize(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.dorYDeliveryEnd);
    this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.dorYDeliveryStart=this.dateResizeService.dateResize(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.dorYDeliveryStart);
    this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.gorYIssueEnd=this.dateResizeService.dateResize(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.gorYIssueEnd);
    this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.gorYIssueStart=this.dateResizeService.dateResize(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.gorYIssueStart);
    
      if(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.currencyId==''){
        this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.currencyId=0;
      }
      if(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.itemCategoryId==''){
        this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.itemCategoryId=0;
      }
    
 
  this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.approvedDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.approvedBy=ApprovedBy.userName;
  this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.isApproved=true;
  this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.entryBy=EntryBy.userName;
  this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.status='Active';
this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster.entryDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWOWithoutOrderMasterService.update(this.yarnDyeingWOWithoutOrderMasterService.yarnDyeingWOWithoutOrderMaster).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/YarnDyeingWOWithoutOrderMaster"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/YarnDyeingWOWithoutOrderMaster']);
    }

}
