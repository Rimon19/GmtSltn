import { Component, OnInit } from '@angular/core';
import { NgForm, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';  
import { SizeDitsService } from '../../../../../../@core/mock/marchandizer/size-dits.service';
import { DateResizeService } from '../../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../../../@core/data/Shared/entry-by';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { DatapassingService } from '../../../../../../@core/mock/shared/datapassing.service';
import { ErpImagesComponent } from '../../../../../Shared/erp-images/erp-images.component';
import { ErpFileComponent } from '../../../../../Shared/erp-file/erp-file.component';
import { Tostr } from '../../../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-size-dits',
  templateUrl: './edit-size-dits.component.html',
  styleUrls: ['./edit-size-dits.component.scss']
})
export class EditSizeDitsComponent implements OnInit {
  sumOfgmtsPcs : number=0;
  sumOfbhQty:number=0;
  editedId;
  Tostr=new Tostr();
  SizeDitsForm: FormArray = this.fb.array([]);
 public count=0;
 public count1=0;
  constructor(
  public sizeDitsService :SizeDitsService ,
  private router:Router,
  private dateResizeService:DateResizeService,
  private fb: FormBuilder,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    this.editedId = this.route.snapshot.paramMap.get('id');
  this.sizeDitsService .getAll().subscribe(data=>{
 let items=  data.filter(f=>f.id==this.editedId);
 if(items.length>0){
  this.SizeDitsForm= this.fb.array([]);
  (items).forEach((itemDts: any) => {
   this.count1=this.count1+1;
    this.SizeDitsForm.push(this.fb.group({
      id:itemDts.id,
      size:itemDts.size,
      gmtsPcs:itemDts.gmtsPcs,
      bhQty:itemDts.bhQty,

     entryDate:itemDts.entryDate,
     entryBy:itemDts.entryBy,
     status:itemDts.status
      
   
    }));

    this.sumOfgmtsPcs= this.sumOfgmtsPcs +itemDts.gmtsPcs;
   this. sumOfbhQty=this.sumOfbhQty +itemDts.bhQty;
   }); 

}else{
  this.SizeDitsFormAction();
}
  });

     }

  ngOnInit() {
    this.SizeDitsForm=this.fb.array([]);
    
  }

   SizeDitsFormAction() {
this.count=this.count+1;
this.SizeDitsForm.push(this.fb.group({
id: 0,
size : '' ,
gmtsPcs : '' ,
bhQty : '' ,

entryDate :'',
entryBy :'',
status :''
}))
};

onDelete(id, i) {
this.count=this.count-1;
if (id == 0)
  this.SizeDitsForm.removeAt(i);
else if (confirm('Are you sure to delete this record ?'))
  this.sizeDitsService .delete(id).subscribe(
    res => {
      this.SizeDitsForm.removeAt(i);
      this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
    });
}


  onSubmit(){  
    
  
  this.SizeDitsForm.value.forEach(element => {
    element.entryBy=EntryBy.userName;
    element.status='Active';
    element.entryDate=this.dateResizeService.dateResize(new Date);

    if(element.id!=0){
      this.sizeDitsService .update(element).subscribe(data=>{
      
      });
    }
    if(element.id==0){
      console.log(element.id);
      this.sizeDitsService .add(element).subscribe(data=>{
      
      });
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.router.navigate(["/pages/SizeDits-list"]);
  this.SizeDitsForm=this.fb.array([]);
  
    
  }


    backTo(){
      this.router.navigate(['/pages/SizeDits-list']);
    }

}
