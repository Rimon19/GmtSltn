import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { SizeEntryService } from '../../../../@core/mock/library/size-entry.service';


@Component({
  selector: 'ngx-size-entry-edit',
  templateUrl: './size-entry-edit.component.html',
  styleUrls: ['./size-entry-edit.component.scss']
})
export class SizeEntryEditComponent implements OnInit {
  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
   YarnCountForms: FormArray = this.fb.array([]);
   editedId:any;
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public sizeEntryService:SizeEntryService,
     private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.sizeEntryService.getSizeEntry().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.sizeEntryService.sizeEntry=items;
    })
   
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
    sizeEntry.id=this.editedId;
    this.sizeEntryService.updateSizeEntry(sizeEntry).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/size-entry']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }
    
    
      backToYarnCount(){
        this.router.navigate(['/pages/size-entry']);
      }

}
