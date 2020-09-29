import { Component, OnInit } from '@angular/core';

import { NgForm, FormArray, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { SizeDitsService } from '../../../../../../@core/mock/marchandizer/size-dits.service';
import { DateResizeService } from '../../../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../../../@core/mock/shared/dropdown-value.service';
import { EntryBy } from '../../../../../../@core/data/Shared/entry-by';




@Component({
  selector: 'ngx-add-size-dits',
  templateUrl: './add-size-dits.component.html',
  styleUrls: ['./add-size-dits.component.scss']
})
export class AddSizeDitsComponent implements OnInit {
  sumOfgmtsPcs : number=0;
  sumOfbhQty:number=0;
  Tostr=new Tostr();
  SizeDitsForm: FormArray = this.fb.array([]);
  public count=0;
  constructor(
  public sizeDitsService :SizeDitsService ,
  private router:Router,
  private dateResizeService:DateResizeService,
  private fb: FormBuilder,
  private toastrService:NbToastrService
 
    ) { }

  ngOnInit() {
   this.SizeDitsForm=this.fb.array([]);
    //this.SizeDitsFormAction()
    
  }

   SizeDitsFormAction() {
  this.count=this.count+1;
  this.SizeDitsForm.push(this.fb.group({
  id: 0,
  size: '' ,
  gmtsPcs: '' ,
  bhQty: '' ,

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
    
  console.log(this.SizeDitsForm);
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


    onChangeSum(){
      this.sumOfgmtsPcs=0;
      this.sumOfbhQty=0;
   
      this.SizeDitsForm.value.forEach(element => {
  
  
        this.sumOfgmtsPcs= this.sumOfgmtsPcs +parseInt( element.gmtsPcs);
         this.sumOfbhQty=this.sumOfbhQty +parseInt( element.bhQty);
         
        
      });
  
  
    }

}
