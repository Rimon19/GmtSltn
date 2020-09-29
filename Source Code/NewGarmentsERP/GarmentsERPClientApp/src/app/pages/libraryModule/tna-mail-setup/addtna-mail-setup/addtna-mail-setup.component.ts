import { Component, OnInit } from '@angular/core';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NbToastrService } from '@nebular/theme';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { Router } from '@angular/router';
import { TnaMailSetupService } from '../../../../@core/mock/library/tna-mail-setup.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { TNATaskEntriesService } from '../../../../@core/mock/library/tnatask-entries.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-addtna-mail-setup',
  templateUrl: './addtna-mail-setup.component.html',
  styleUrls: ['./addtna-mail-setup.component.scss']
})
export class AddtnaMailSetupComponent implements OnInit {
  tagTNATaskselectedItems = [];
  tagTNATasksdropdownList = [];
  tagTNATasksdropdownSettings:IDropdownSettings;

  tagMailTypeselectedItems = [];
  tagMailTypedropdownList = [];
  tagMailTypedropdownSettings:IDropdownSettings;
  Tostr=new Tostr();
  
  constructor(
  public tnaMailSetupService:TnaMailSetupService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private tNATaskEntriesService:TNATaskEntriesService,
  private toastrService:NbToastrService,
  private dropdownValueService:DropdownValueService,
  private staticFeaturesService:StaticFeaturesService
    ) { }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getUsersByEmail();
   // console.log(this.dropdownValueService.getUsersByEmail());
this.dropdownValueService.getTNAShortName();
this.dropdownValueService.getMailType();
this.TNATasksDDL();
this.MailTypeDDL();

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.tnaMailSetupService.tnaMailSetup = {
    id: 0,
    user: '' ,
    tnaTask: '' ,
mailType: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }

  this.tagTNATasksdropdownSettings= {
    singleSelection: false,
    idField: 'id',
    textField: 'taskShortName',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  this.tagMailTypedropdownSettings= {
    singleSelection: false,
    idField: 'value',
    textField: 'value',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  
 }

 TNATasksDDL(){
   this.tNATaskEntriesService.getTNATaskEntries().subscribe(data=>{
     this.tagTNATasksdropdownList=data;
   })
   
 }
 MailTypeDDL(){
 this.tagMailTypedropdownList= this.staticFeaturesService.getMailType()
  
}

  onSubmit(form){  
    let tnaTaskIds='';
    let mailType='';

    form.value.tagTNATaskselectedItems.forEach(e => {
      tnaTaskIds +=e.id+",";
    });
    
  let finallyTnaTaskSelectedIds=  tnaTaskIds.slice(0, -1);
  this.tnaMailSetupService.tnaMailSetup.tnaTask=finallyTnaTaskSelectedIds;

      form.value.tagMailTypeselectedItems.forEach(e => {
      mailType +=e.value+",";
    });
    
  let finallyMailTypeSelectedIds=  mailType.slice(0, -1);
  this.tnaMailSetupService.tnaMailSetup.mailType=finallyMailTypeSelectedIds;

  this.tnaMailSetupService.tnaMailSetup.approvedDate=this.dateResizeService.dateResize(new Date);
  this.tnaMailSetupService.tnaMailSetup.approvedBy=ApprovedBy.userName;
  this.tnaMailSetupService.tnaMailSetup.isApproved=true;
  this.tnaMailSetupService.tnaMailSetup.entryBy=EntryBy.userName;
  this.tnaMailSetupService.tnaMailSetup.status='Active';
this.tnaMailSetupService.tnaMailSetup.entryDate=this.dateResizeService.dateResize(new Date);
  this.tnaMailSetupService.add(this.tnaMailSetupService.tnaMailSetup).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/TnaMailSetup"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/TnaMailSetup']);
    }
    

}
