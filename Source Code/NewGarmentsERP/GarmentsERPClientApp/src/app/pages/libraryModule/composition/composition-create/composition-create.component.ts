import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { CompositionEntryService } from '../../../../@core/mock/library/composition-entry.service';


@Component({
  selector: 'ngx-composition-create',
  templateUrl: './composition-create.component.html',
  styleUrls: ['./composition-create.component.scss']
})
export class CompositionCreateComponent implements OnInit {

  Tostr=new Tostr();
  
   
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public compositionEntryService:CompositionEntryService,
     
   ) { 
    
   }
 
   ngOnInit() {
    
    this.resetForm();
   }
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.compositionEntryService.compositionEntry = {
     id:0,
     compositionName:'',
     status:'',
    
    }
  }
  
   save(compositionEntry){
    console.log(compositionEntry)
 
 this.compositionEntryService.addCompositionEntry(compositionEntry).subscribe(s=>{
   this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
   this.router.navigate(['/pages/composition']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }
 
 
   backToYarnCount(){
     this.router.navigate(['/pages/composition']);
   }


}
