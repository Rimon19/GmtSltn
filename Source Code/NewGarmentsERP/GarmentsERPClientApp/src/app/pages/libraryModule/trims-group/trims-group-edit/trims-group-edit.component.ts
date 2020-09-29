import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { TrimsGroupService } from '../../../../@core/mock/library/trims-group.service';

@Component({
  selector: 'ngx-trims-group-edit',
  templateUrl: './trims-group-edit.component.html',
  styleUrls: ['./trims-group-edit.component.scss']
})
export class TrimsGroupEditComponent implements OnInit {

  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
   YarnCountForms: FormArray = this.fb.array([]);
   editedId:any;
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public trimsGroupService:TrimsGroupService,
     private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.trimsGroupService.getAll().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.trimsGroupService.trimsGroup=items;
    })
   
    }
 
   ngOnInit() {
    
    this.resetFormItemDetailsInfo();
   }
   resetFormItemDetailsInfo(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.trimsGroupService.trimsGroup = {
      id:0,
      trimsGroupName:'',
      status:'',
     
     }
   }
   save(compositionEntry){
    compositionEntry.id=this.editedId;
    this.trimsGroupService.update(compositionEntry).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/trims-group']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }
    
    
      backTo(){
        this.router.navigate(['/pages/trims-group']);
      }



}
