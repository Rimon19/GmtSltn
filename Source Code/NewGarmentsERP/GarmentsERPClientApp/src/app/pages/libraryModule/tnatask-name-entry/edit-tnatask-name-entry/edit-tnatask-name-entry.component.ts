import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TNATaskNameEntryService } from '../../../../@core/mock/library/tnatask-name-entry.service';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-tnatask-name-entry',
  templateUrl: './edit-tnatask-name-entry.component.html',
  styleUrls: ['./edit-tnatask-name-entry.component.scss']
})
export class EditTNATaskNameEntryComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr(); 
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private toastrService:NbToastrService,
    public tNATaskNameEntryService:TNATaskNameEntryService
  ) { 

    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.tNATaskNameEntryService.getTNATaskNameEntry().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.tNATaskNameEntryService.tNATaskNameEntry=items;
  })

}
ngOnInit() {
  this.resetFormFortNATaskNameEntry();
}
resetFormFortNATaskNameEntry(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.tNATaskNameEntryService.tNATaskNameEntry = {
    id:0,
    tnaTaskName:'',
    status:''
  }
}
onSubmit(form:NgForm){
  form.value.id=this.editedId;

 this.tNATaskNameEntryService.updateTNATaskNameEntry(form.value).subscribe(s=>{
   this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
   this.router.navigate(['/pages/tNA-task-name']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }  
   backToTNATaskNameEntryHomePage(){
     this.router.navigate(['/pages/tNA-task-name']);
   }

   Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]

}
