import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-tnatask-name-entry',
  templateUrl: './add-tnatask-name-entry.component.html',
  styleUrls: ['./add-tnatask-name-entry.component.scss']
})
export class AddTNATaskNameEntryComponent implements OnInit {

 
  Tostr=new Tostr();
  constructor(
    public tNATaskNameEntryService:TNATaskNameEntryService,
    private toastrService:NbToastrService,
    private router:Router,
    
    
    ) { }

  ngOnInit() {
    this.resetFormForTNATaskNameEntry();
  }
  resetFormForTNATaskNameEntry(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.tNATaskNameEntryService.tNATaskNameEntry = {
     id:0,
     tnaTaskName:'',
     status:''
      
    }
    
   }
   onSubmit(form:NgForm){
     console.log(form);
     this.tNATaskNameEntryService.addTNATaskNameEntry(form.value).subscribe(res=>{
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/tNA-task-name"]);
     })
   }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]

    backToTNATaskNameEntryHomePage(){
      this.router.navigate(['/pages/tNA-task-name']);
    }


}
