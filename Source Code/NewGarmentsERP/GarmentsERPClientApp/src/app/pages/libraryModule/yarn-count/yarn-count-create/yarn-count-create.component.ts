import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { YarnCountsService } from '../../../../@core/mock/marchandizer/yarn-counts.service';

@Component({
  selector: 'ngx-yarn-count-create',
  templateUrl: './yarn-count-create.component.html',
  styleUrls: ['./yarn-count-create.component.scss']
})
export class YarnCountCreateComponent implements OnInit {
  Tostr=new Tostr();
 // public JobNumberItems:OrderInfo[] = [];
  YarnCountForms: FormArray = this.fb.array([]);
  
  constructor(
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    public yarnCountsService:YarnCountsService,
    
  ) { 
   
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
this.yarnCountsService.addYarnCount(yarnCounts).subscribe(s=>{
  this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
  this.router.navigate(['/pages/yarn-count']);
},(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }


  backToYarnCount(){
    this.router.navigate(['/pages/yarn-count']);
  }
}
