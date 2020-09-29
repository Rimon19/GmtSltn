import { Component, OnInit } from '@angular/core';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { TNATaskNameEntry } from '../../../../@core/data/Library-Modul-model/tnatask-name-entry';
import { NgForm } from '@angular/forms';
import { TNATaskEntriesService } from '../../../../@core/mock/library/tnatask-entries.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-add-tnatask-entries',
  templateUrl: './add-tnatask-entries.component.html',
  styleUrls: ['./add-tnatask-entries.component.scss']
})
export class AddTNATaskEntriesComponent implements OnInit {
  Tostr=new Tostr()
  constructor(
    private toastrService:NbToastrService,
    private router:Router,
    public tNATaskNameEntryService:TNATaskNameEntryService,
    public tNATaskEntriesService:TNATaskEntriesService,
    
    ) { }
  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  ngOnInit() {
    this.tnaTaskNameDDL();
    this.resetFormForTaskEntries();
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
    tnaTaskNameDDL(){
      this.tNATaskNameEntryService.getTNATaskNameEntry().
      subscribe(data=>{
      this.tNATaskNameEntryListItems=data;
      console.log('tNATaskNameEntryListItems list',this.tNATaskNameEntryListItems)
    });
   }
   resetFormForTaskEntries(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.tNATaskEntriesService.tNATaskEntries = {
      id:0,
      taskNameId:0,
      taskShortName:'',
      penalty:'',
      sequenceNo:0,
      completion:0,
      groupName:'',
      status:'',
      groupSeqNo:0,
      
      
    }
    
   }
   onSubmit(form:NgForm){
     console.log(form);
     this.tNATaskEntriesService.addTNATaskEntries(form.value).subscribe(res=>{
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
      this.router.navigate(["/pages/tNA-task-entries"]);
     })
   }

   backToTaskEntriesHomePage(){
    this.router.navigate(['/pages/tNA-task-entries']);
  } 
}




  