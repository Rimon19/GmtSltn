import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForKnitingDetailService } from '../../../../@core/mock/marchandizer/service-booking-for-kniting-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-sbfor-kniting-detail',
  templateUrl: './edit-sbfor-kniting-detail.component.html',
  styleUrls: ['./edit-sbfor-kniting-detail.component.scss']
})
export class EditSBForKnitingDetailComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForKnitingDetailService:ServiceBookingForKnitingDetailService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.serviceBookingForKnitingDetailService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getAllProductionProcess();
this.dropdownValueService.getSensitivity();
this.dropdownValueService. getFabricDescription();

  }

   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail = {
  id: 0,
  serviceBookingForKnitingId: '' ,
processId: '' ,
sensitivity: '' ,
programNo: '' ,
fabricDescriptionId: '' ,
dia: '' ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}

}


  onSubmit(){  

    
    
      if(this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.processId==''){
        this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.processId=0;
      }
      if(this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.fabricDescriptionId==''){
        this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.fabricDescriptionId=0;
      }
    
 
  this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.approvedDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.approvedBy=ApprovedBy.userName;
  this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.isApproved=true;
  this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.entryBy=EntryBy.userName;
  this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.status='Active';
this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.entryDate=this.dateResizeService.dateResize(new Date);
  this.serviceBookingForKnitingDetailService.update(this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/ServiceBookingForKnittingDetail"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/ServiceBookingForKnittingDetail']);
    }

}
