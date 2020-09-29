import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';


import { Router } from '@angular/router';

import { Tostr } from '../../../../@core/data/tostr.model';
import { FormBuilder, NgForm } from '@angular/forms';
import { TrimsGroupService } from '../../../../@core/mock/library/trims-group.service';



@Component({
  selector: 'ngx-trims-group-create',
  templateUrl: './trims-group-create.component.html',
  styleUrls: ['./trims-group-create.component.scss']
})
export class TrimsGroupCreateComponent implements OnInit {

  Tostr=new Tostr();
  
   
  constructor(
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    public trimsGroupService:TrimsGroupService,
    
  ) { 
   
  }

  ngOnInit() {
   
   this.resetForm();
  }
  resetForm(form?:NgForm){
   if(form!=null)
   form.resetForm();
   this.trimsGroupService.trimsGroup = {
    id:0,
    trimsGroupName:'',
    status:'',
   
   }
 }
 
  save(compositionEntry){
   

this.trimsGroupService.add(compositionEntry).subscribe(s=>{
  this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
  this.router.navigate(['/pages/trims-group']);
},(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }


  backTo(){
    this.router.navigate(['/pages/trims-group']);
  }


}
