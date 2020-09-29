import { Component, OnInit } from '@angular/core';
import { TNATaskEntriesService } from '../../../../@core/mock/library/tnatask-entries.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { TNATaskNameEntry } from '../../../../@core/data/Library-Modul-model/tnatask-name-entry';

@Component({
  selector: 'ngx-edit-tnatask-entries',
  templateUrl: './edit-tnatask-entries.component.html',
  styleUrls: ['./edit-tnatask-entries.component.scss']
})
export class EditTNATaskEntriesComponent implements OnInit {
  Tostr=new Tostr();
  public tNATaskNameEntryListItems:TNATaskNameEntry[]=[];
  editedId:any;
  constructor(
    private router:Router,
    public tNATaskNameEntryService:TNATaskNameEntryService,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public tNATaskEntriesService:TNATaskEntriesService
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.tNATaskEntriesService.getTNATaskEntries().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.tNATaskEntriesService.tNATaskEntries=items;
  })
    
   }

  ngOnInit() {
    this.resetFormForTaskEntries();
    this.tnaTaskNameDDL();
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
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
   tnaTaskNameDDL(){
    this.tNATaskNameEntryService.getTNATaskNameEntry().
    subscribe(data=>{
    this.tNATaskNameEntryListItems=data;
    console.log('tNATaskNameEntryListItems list',this.tNATaskNameEntryListItems)
  });
 }
 onSubmit(form:NgForm){
    form.value.id=this.editedId;
    this.tNATaskEntriesService.updateTNATaskEntries(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/tNA-task-entries']);
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      } 
      backToTaskEntriesHomePage(){
        this.router.navigate(['/pages/tNA-task-entries']);
      } 
}
