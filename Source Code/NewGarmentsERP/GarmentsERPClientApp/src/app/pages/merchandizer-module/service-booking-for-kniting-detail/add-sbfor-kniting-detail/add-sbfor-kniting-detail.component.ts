import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ServiceBookingForKnitingDetailService } from '../../../../@core/mock/marchandizer/service-booking-for-kniting-detail.service';
import { Router } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';

@Component({
  selector: 'ngx-add-sbfor-kniting-detail',
  templateUrl: './add-sbfor-kniting-detail.component.html',
  styleUrls: ['./add-sbfor-kniting-detail.component.scss']
})
export class AddSBForKnitingDetailComponent implements OnInit {
  primaryId:number=0;
  Tostr=new Tostr();
  
  constructor(
  public serviceBookingForKnitingDetailService:ServiceBookingForKnitingDetailService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private datapassingService:DatapassingService
    ) {
              this.primaryId= this.datapassingService.getValue();
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
    serviceBookingForKnitingId: 0 ,
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
        
    this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail.serviceBookingForKnitingId=this.primaryId;
    
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
  this.serviceBookingForKnitingDetailService.add(this.serviceBookingForKnitingDetailService.serviceBookingForKnitingDetail).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/ServiceBookingForKnittingDetail"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/ServiceBookingForKnittingDetail']);
    }

}
