import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { JournalSetupService } from '../../../../@core/mock/library/journal-setup.service';

@Component({
  selector: 'ngx-add-journal-setup',
  templateUrl: './add-journal-setup.component.html',
  styleUrls: ['./add-journal-setup.component.scss']
})
export class AddJournalSetupComponent implements OnInit {
  journalType:any[] = [];
  Tostr=new Tostr()

  constructor(
    public journalSetupService:JournalSetupService,
    private router:Router,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
  ) { }

  ngOnInit() {
    this.journalTypeDDL();
    this.resetFormForJournalSetup();
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
  console.log(form);
  this.journalSetupService.add(form.value).subscribe(res=>{
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
   this.router.navigate(["/pages/Journal-Setup-list"]);
  }) 
}

 Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  

    backHomePage(){
      this.router.navigate(['/pages/Journal-Setup-list']);
      }
}
