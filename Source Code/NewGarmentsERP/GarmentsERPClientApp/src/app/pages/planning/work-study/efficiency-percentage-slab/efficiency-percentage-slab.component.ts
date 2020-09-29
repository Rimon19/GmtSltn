  
import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { EfficiencyPercentageSlabService } from '../../../../@core/mock/planning/efficiency-percentage-slab.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
@Component({
  selector: 'ngx-efficiency-percentage-slab',
  templateUrl: './efficiency-percentage-slab.component.html',
  styleUrls: ['./efficiency-percentage-slab.component.scss']
})
export class EfficiencyPercentageSlabComponent implements OnInit {
  Tostr=new Tostr();
  EfficiencyPercentageSlabForm: FormArray = this.fb.array([]);
 public count=0;
  constructor(
  public efficiencyPercentageSlabService:EfficiencyPercentageSlabService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private fb: FormBuilder,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
   
    this.EfficiencyPercentageSlabForm=this.fb.array([]);
    this.EfficiencyPercentageSlabFormAction();
  
    this.efficiencyPercentageSlabService.getAll().subscribe(data=>{
      console.log(data);
      data.forEach(element=>{
        this.count=this.count+1;
        
        this.EfficiencyPercentageSlabForm.push(this.fb.group({
           id:element.id,
           lowerLimitForSMVRange:element.lowerLimitForSMVRange,
           upperLimitForSMVRange:element.upperLimitForSMVRange,
           lowerLimitForOrderQty:element.lowerLimitForOrderQty,
           upperLimitForOrderQty:element.upperLimitForOrderQty,
           newOrderForEfficiency:element.newOrderForEfficiency,
           repeatOrderForEfficiency:element.repeatOrderForEfficiency,

        }));
      })
     
    })
  }

   EfficiencyPercentageSlabFormAction() {
  this.count=this.count+1;
  console.log( this.count)
  this.EfficiencyPercentageSlabForm.push(this.fb.group({
  id: [0],
  lowerLimitForSMVRange: 0,
upperLimitForSMVRange: 0,
lowerLimitForOrderQty: 0 ,
upperLimitForOrderQty: 0 ,
newOrderForEfficiency: 0 ,
repeatOrderForEfficiency: 0 ,

  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};

onDelete(id, i) {
  
  if (id == 0){
    this.EfficiencyPercentageSlabForm.removeAt(i);
    
  }
    
  else if (confirm('Are you sure to delete this record ?'))
    this.efficiencyPercentageSlabService.delete(id).subscribe(
      res => {
        this.EfficiencyPercentageSlabForm.removeAt(i);
        this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
   
      });
this.count=this.count-1;
}


  onSubmit(){  
    
    
  
  this.EfficiencyPercentageSlabForm.value.forEach(element => {
    element.entryBy=EntryBy.userName;
    element.status='Active';
    element.entryDate=this.dateResizeService.dateResize(new Date);
    element.approvedDate=this.dateResizeService.dateResize(new Date);
    element.approvedBy=ApprovedBy.userName;
    element.isApproved=true;

    if(element.id!=0){
      this.efficiencyPercentageSlabService.update(element).subscribe(data=>{
      
      });
    }
    if(element.id==0){
      console.log(element.id);
      this.efficiencyPercentageSlabService.add(element).subscribe(data=>{
      
      });
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.EfficiencyPercentageSlabForm=this.fb.array([]);
  this.router.navigate(["/pages/planning/efficiency-percentage-slab"]);
  this.count=0;
    
  }


    backTo(){
      this.router.navigate(['/pages/planning/efficiency-percentage-slab']);
    }
    
    
  
}
