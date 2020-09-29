import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { CompositionEntryService } from '../../../../@core/mock/library/composition-entry.service';


@Component({
  selector: 'ngx-composition-edit',
  templateUrl: './composition-edit.component.html',
  styleUrls: ['./composition-edit.component.scss']
})
export class CompositionEditComponent implements OnInit {

  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
   YarnCountForms: FormArray = this.fb.array([]);
   editedId:any;
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public compositionEntryService:CompositionEntryService,
     private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.compositionEntryService.getCompositionEntry().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.compositionEntryService.compositionEntry=items;
    })
   
    }
 
   ngOnInit() {
    
    this.resetFormItemDetailsInfo();
   }
   resetFormItemDetailsInfo(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.compositionEntryService.compositionEntry = {
      id:0,
      compositionName:'',
      status:'',
     
     }
   }
   save(compositionEntry){
    compositionEntry.id=this.editedId;
    this.compositionEntryService.updateCompositionEntry(compositionEntry).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/composition']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }
    
    
      backToYarnCount(){
        this.router.navigate(['/pages/composition']);
      }


}
