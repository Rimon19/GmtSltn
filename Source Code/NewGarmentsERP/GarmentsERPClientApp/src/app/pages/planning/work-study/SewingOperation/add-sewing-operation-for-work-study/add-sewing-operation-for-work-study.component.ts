import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../../@core/data/tostr.model';
import { SewingOperationForWorkStudyService } from '../../../../../@core/mock/planning/sewing-operation-for-work-study.service';
import { DateResizeService } from '../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../@core/mock/shared/dropdown-value.service';
import { ApprovedBy } from '../../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-add-sewing-operation-for-work-study',
  templateUrl: './add-sewing-operation-for-work-study.component.html',
  styleUrls: ['./add-sewing-operation-for-work-study.component.scss']
})
export class AddSewingOperationForWorkStudyComponent implements OnInit {
    Tostr=new Tostr();
    
    constructor(
    public sewingOperationForWorkStudyService:SewingOperationForWorkStudyService,
    private router:Router,
    private dateResizeService:DateResizeService,
    
    private toastrService:NbToastrService,
    private dropdownValueService:DropdownValueService
      ) { }
  
    ngOnInit() {
      this.resetForm();
      this.dropdownValueService.getProductDept();
  this.dropdownValueService.getGarmentsItem();
  this.dropdownValueService.getBodyPart();
  this.dropdownValueService.getFabricDescription();
  this.dropdownValueService.getSMVBasic();
  this.dropdownValueService.getDepartmentCode();
  this.dropdownValueService.getUom();
  this.dropdownValueService.getStatus();
  this.dropdownValueService.getAllResources();
  
    }
  
     resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy = {
      id: 0,
      productDept: '' ,
  garmentsItemId: '' ,
  bodyPartId: '' ,
  code: '' ,
  operationName: '' ,
  rate:'',
  fabricTypeId: '' ,
  smvBasis: '' ,
  seamLength:'',
  machineSMV:'',
  manualSMV:'',
  departmentCode: '' ,
  uomId: '' ,
  action: '' ,
  resourceId: '' ,
  
      entryDate :'',
      entryBy :'',
      approvedDate :'',
      approvedBy :'',
      isApproved :false,
      status :''
    }
    
   }
  
  
    onSubmit(){  
      
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.fabricTypeId==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.fabricTypeId=0;
        }       
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.uomId==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.uomId=0;
        }
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.rate==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.rate=0;
        }
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.seamLength==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.seamLength=0;
        }
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.machineSMV==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.machineSMV=0;
        }
        if(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.manualSMV==''){
          this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.manualSMV=0;
        }
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.approvedDate=this.dateResizeService.dateResize(new Date);
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.approvedBy=ApprovedBy.userName;
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.isApproved=true;
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.entryBy=EntryBy.userName;
    this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.status='Active';
  this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy.entryDate=this.dateResizeService.dateResize(new Date);
    this.sewingOperationForWorkStudyService.add(this.sewingOperationForWorkStudyService.sewingOperationForWorkStudy).subscribe(res=>{
      console.log(res);       
     this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.resetForm();
     this.router.navigate(["/pages/planning/sewing-operation-For-Work-Study"]);
     
    })
      
    }
  
  
      backTo(){
        this.router.navigate(['/pages/planning/sewing-operation-For-Work-Study']);
      }
      
      

}
