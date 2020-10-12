import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { JournalSetupService } from '../../../../@core/mock/library/journal-setup.service';


@Component({
  selector: 'ngx-edit-journal-setup',
  templateUrl: './edit-journal-setup.component.html',
  styleUrls: ['./edit-journal-setup.component.scss']
})
export class EditJournalSetupComponent implements OnInit {
  editedId:any;
  journalType:any[] = [];
  Tostr=new Tostr()
  constructor(  private route:ActivatedRoute,  public journalSetupService:JournalSetupService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService) 
    { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.journalSetupService.getAll().subscribe(item=>{
      let items=  item.find(f=>f.id==this.editedId);
      this.journalSetupService.journalSetup=items;
      })
    }
  
  ngOnInit() {
    this.resetFormForJournalSetup();
    this.journalTypeDDL();
  }

  resetFormForJournalSetup(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.journalSetupService.journalSetup= {
    id:0,
    journalTypeId:0,
    preFix:'',
    startingNumber:0,
    status:''
         }
    
     }

  journalTypeDDL(){
    this.staticFeaturesService.getAllJournalType().
    subscribe(data=>{
    this.journalType=data;
    console.log('journalType list',this.journalType)
    });
}

onSubmit(form:NgForm){
 form.value.id=this.editedId;
  this.journalSetupService.update(form.value).subscribe(s=>{
  this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
  this.router.navigate(['/pages/Journal-Setup-list']);
  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
} 
backHomePage(){
this.router.navigate(['/pages/Journal-Setup-list']);
}

Active_Inactive: any = [
  // { btn: 'Select', val: 'Select' },
    { btn: 'Active', val: 'Active' },
    { btn: 'Inactive', val: 'Inactive' }
  ]

}
