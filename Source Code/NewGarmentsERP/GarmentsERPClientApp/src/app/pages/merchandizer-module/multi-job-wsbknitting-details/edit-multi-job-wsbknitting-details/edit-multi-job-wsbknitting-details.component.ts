import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MultiJobWSBKnittingDetailsService } from '../../../../@core/mock/marchandizer/multi-job-wsbknitting-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-multi-job-wsbknitting-details',
  templateUrl: './edit-multi-job-wsbknitting-details.component.html',
  styleUrls: ['./edit-multi-job-wsbknitting-details.component.scss']
})
export class EditMultiJobWSBKnittingDetailsComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public multiJobWSBKnittingDetailsService:MultiJobWSBKnittingDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.multiJobWSBKnittingDetailsService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getAllProductionProcess();
this.dropdownValueService.getSensitivity();
this.dropdownValueService.getFabricDescription();
this.dropdownValueService.getUom();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails = {
  id: 0,
  orderNo: '' ,
multiJobWSBKnittingId: '' ,
processId: '' ,
sensitivity: '' ,
programNo: '' ,
jobNo: '' ,
poNumber: '' ,
fabricDescriptionId: '' ,
artworkNo: '' ,
ycount: '' ,
lot: '' ,
brand: '' ,
gmtsColor: '' ,
itemColor: '' ,
itemSize: '' ,
fabMapping: '' ,
morcDiaXGG: '' ,
finDia: '' ,
finGSM: '' ,
slength: '' ,
deliveryStartDate: '' ,
deliveryEndDate: '' ,
uomId: '' ,
woQnty: '' ,
rate: '' ,
amount: '' ,
planCutQnty: '' ,
remark: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  
    
      if(this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.processId==''){
        this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.processId=0;
      }
      if(this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.fabricDescriptionId==''){
        this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.fabricDescriptionId=0;
      }
      if(this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.uomId==''){
        this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.uomId=0;
      }
    
 
  this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.approvedBy=ApprovedBy.userName;
  this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.isApproved=true;
  this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.entryBy=EntryBy.userName;
  this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.status='Active';
this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails.entryDate=this.dateResizeService.dateResize(new Date);
  this.multiJobWSBKnittingDetailsService.update(this.multiJobWSBKnittingDetailsService.multiJobWSBKnittingDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/']);
    }


}
