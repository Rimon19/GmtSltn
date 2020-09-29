import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { YarnCountsService } from '../../../../@core/mock/marchandizer/yarn-counts.service';


@Component({
  selector: 'ngx-yarn-count-edit',
  templateUrl: './yarn-count-edit.component.html',
  styleUrls: ['./yarn-count-edit.component.scss']
})
export class YarnCountEditComponent implements OnInit {
  Tostr=new Tostr();
  // public JobNumberItems:OrderInfo[] = [];
   YarnCountForms: FormArray = this.fb.array([]);
   editedId:any;
   constructor(
     private toastrService:NbToastrService,
     private router:Router, 
     private fb: FormBuilder,
     public yarnCountsService:YarnCountsService,
     private route:ActivatedRoute
   ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.yarnCountsService.getAllYarnCount().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.yarnCountsService.yarnCounts=items;
    })
   
    }
 
   ngOnInit() {
    
    this.resetFormItemDetailsInfo();
   }
   resetFormItemDetailsInfo(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.yarnCountsService.yarnCounts = {
       id:0,
       name:'',
       sequence:0,
       status:''
     }
   }
   save(yarnCounts){
    console.log(yarnCounts);
    this.yarnCountsService.updateYarnCount(yarnCounts).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/yarn-count']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }  
      backToYarnCount(){
        this.router.navigate(['/pages/yarn-count']);
      }
}
