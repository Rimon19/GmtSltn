import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { SizeEntryService } from '../../../../@core/mock/library/size-entry.service';


@Component({
  selector: 'ngx-size-entry-create',
  templateUrl: './size-entry-create.component.html',
  styleUrls: ['./size-entry-create.component.scss']
})
export class SizeEntryCreateComponent implements OnInit {
  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
  // YarnCountForms: FormArray = this.fb.array([]);
   
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public sizeEntryService:SizeEntryService,
     
   ) { 
    
   }
 
   ngOnInit() {
    
    this.resetForm();
   }
    resetForm(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.sizeEntryService.sizeEntry = {
        id:0,
        sequence:0,
        status:'',
        sinzeName:''
      }
    }
  
   save(sizeEntry){
 console.log(sizeEntry);
 this.sizeEntryService.addSizeEntry(sizeEntry).subscribe(s=>{
   this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
   this.router.navigate(['/pages/size-entry']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }
 
 
   backToYarnCount(){
     this.router.navigate(['/pages/size-entry']);
   }

}
