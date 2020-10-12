import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { TnaMailSetupService } from '../../../../@core/mock/library/tna-mail-setup.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { TNATaskEntriesService } from '../../../../@core/mock/library/tnatask-entries.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-edittna-mail-setup',
  templateUrl: './edittna-mail-setup.component.html',
  styleUrls: ['./edittna-mail-setup.component.scss']
})
export class EdittnaMailSetupComponent implements OnInit {
  tagTNATaskselectedItems = [];
  tagTNATasksdropdownList = [];
  tagTNATasksdropdownSettings:IDropdownSettings;

  tagMailTypeselectedItems = [];
  tagMailTypedropdownList = [];
  tagMailTypedropdownSettings:IDropdownSettings;
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public tnaMailSetupService:TnaMailSetupService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private tNATaskEntriesService:TNATaskEntriesService,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService,
  private staticFeaturesService:StaticFeaturesService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.tnaMailSetupService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 
 this.tnaMailSetupService.tnaMailSetup=items;

 if(items.tnaTask!=""){
  this.tNATaskEntriesService.getTNATaskEntries().subscribe(data=>{
      let tnaTaskIds= items.tnaTask.split(',');
let array=[];
tnaTaskIds.forEach(ele => {
        let obj= data.find(f=>f.id==parseInt(ele));
      
      array.push(obj);
        
      });
      this.tagTNATaskselectedItems=array;
      
});
}
if(items.mailType!=""){
  let mailTypeList=this.staticFeaturesService.getMailType()
      let mailTypes= items.mailType.split(',');
let array=[];
mailTypes.forEach(ele => {
        let obj= mailTypeList.find(f=>f.value==ele);
        
      array.push(obj);
        
      });
      this.tagMailTypeselectedItems=array;
      

}
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getUsersByEmail();
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
  this.tnaMailSetupService.update(this.tnaMailSetupService.tnaMailSetup).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/TnaMailSetup"]);
   
  })
    
  }


    backTo(){
      this.router.navigate(['/pages/TnaMailSetup']);
    }

}
