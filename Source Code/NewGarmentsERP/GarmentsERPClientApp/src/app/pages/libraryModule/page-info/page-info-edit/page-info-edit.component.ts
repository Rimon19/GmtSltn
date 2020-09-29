import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { PageInfoService } from '../../../../@core/mock/library/page-info.service';

@Component({
  selector: 'ngx-page-info-edit',
  templateUrl: './page-info-edit.component.html',
  styleUrls: ['./page-info-edit.component.scss']
})
export class PageInfoEditComponent implements OnInit {

  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
   //YarnCountForms: FormArray = this.fb.array([]);
   editedId:any;
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public pageInfoService:PageInfoService,
     private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.pageInfoService.getAll().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.pageInfoService.pageInfo=items;
    })
   
    }
 
   ngOnInit() {
    
    this.resetFormItemDetailsInfo();
   }
   resetFormItemDetailsInfo(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.pageInfoService.pageInfo = {
      id:0,
      pageName:'',
      pageLink:'',
      status:'',
     
     }
   }
   save(pageInfo){
    pageInfo.id=this.editedId;
    this.pageInfoService.update(pageInfo).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/page-info']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }
    
    
      backTo(){
        this.router.navigate(['/pages/page-info']);
      }




}
