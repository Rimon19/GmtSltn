import { Component, OnInit } from '@angular/core';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';
import { TermsAndConditionService } from '../../../../@core/mock/library/terms-and-condition.service';
import { NgForm, FormBuilder } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { PageInfoService } from '../../../../@core/mock/library/page-info.service';
@Component({
  selector: 'ngx-terms-nd-condition-create',
  templateUrl: './terms-nd-condition-create.component.html',
  styleUrls: ['./terms-nd-condition-create.component.scss']
})
export class TermsNdConditionCreateComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings:IDropdownSettings;
  Tostr=new Tostr();
  constructor( private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    public termsAndConditionService:TermsAndConditionService,
    private pageInfoService:PageInfoService) { }

  ngOnInit() {

    this.resetForm();
    this.pageInfoService.getAll().subscribe(data=>{
      this.dropdownList=data;
      console.log(this.dropdownList);
    })
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'Mumbai' },
    //   { item_id: 2, item_text: 'Bangaluru' },
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' },
    //   { item_id: 5, item_text: 'New Delhi' }
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'pageName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
   this.selectedItems=items;

  }
  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.termsAndConditionService.TermsNCondition = {
     id:0,
     termsnCondition:'',
     moreTermsNCondition:'',
     pages:'',
 
     status:'',
    
    }
  }
  
   save(termsAndCondition,selectedItems){
    console.log(selectedItems);
    console.log(termsAndCondition);
 this.termsAndConditionService.add(termsAndCondition).subscribe(res=>{
   console.log(res.id);
   selectedItems.forEach(element => {
     
     element.TermsNConditionId=res.id;
     element.PageId=element.id;
     element.PageNames=element.pageName;
     element.id=0;
    this.termsAndConditionService.addSubTable(element).subscribe(s=>{});
   });
   
   this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
   this.router.navigate(['/pages/terms-and-condition']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   
}
 
 
   backTo(){
     this.router.navigate(['/pages/terms-and-condition']);
   }
 

}
