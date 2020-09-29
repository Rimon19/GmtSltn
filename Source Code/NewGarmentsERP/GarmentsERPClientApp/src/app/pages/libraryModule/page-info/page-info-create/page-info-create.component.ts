import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';


import { Router } from '@angular/router';

import { Tostr } from '../../../../@core/data/tostr.model';
import { FormBuilder, NgForm } from '@angular/forms';

import { PageInfoService } from '../../../../@core/mock/library/page-info.service';


@Component({
  selector: 'ngx-page-info-create',
  templateUrl: './page-info-create.component.html',
  styleUrls: ['./page-info-create.component.scss']
})
export class PageInfoCreateComponent implements OnInit {

  Tostr=new Tostr();
  
   
  constructor(
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    public pageInfoService:PageInfoService,
    
  ) { 
   
  }

  ngOnInit() {
   
   this.resetForm();
  }
  resetForm(form?:NgForm){
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
   

this.pageInfoService.add(pageInfo).subscribe(s=>{
  this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
  this.router.navigate(['/pages/page-info']);
},(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }


  backTo(){
    this.router.navigate(['/pages/page-info']);
  }



}
