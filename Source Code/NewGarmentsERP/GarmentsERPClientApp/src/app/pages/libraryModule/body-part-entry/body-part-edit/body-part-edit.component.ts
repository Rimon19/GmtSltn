import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, NgForm } from '@angular/forms';
import { BodyPartEntryService } from '../../../../@core/mock/library/body-part-entry.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PageInfoService } from '../../../../@core/mock/library/page-info.service';
@Component({
  selector: 'ngx-body-part-edit',
  templateUrl: './body-part-edit.component.html',
  styleUrls: ['./body-part-edit.component.scss']
})
export class BodyPartEditComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  Tostr=new Tostr();
  bodyPartTypeInfo:any[]=[];
  dropdownSettings:IDropdownSettings;
  editedId;
  constructor(
    private toastrService:NbToastrService,
    private router:Router, 
    private fb: FormBuilder,
    public bodyPartEntryService:BodyPartEntryService,
    private staticFeaturesService:StaticFeaturesService,
    private pageInfoService:PageInfoService,
    private route:ActivatedRoute
    
  ) { 
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.bodyPartEntryService.getAll().subscribe(item=>{
   let items=item.find(f=>f.id==this.editedId);
   bodyPartEntryService.bodyPartEntry =items;
   console.log(items);
   this.pageInfoService.getAll().subscribe(data=>{
          let pagesId= items.entryPages.split(',');
let array=[];
          pagesId.forEach(ele => {
            let obj= data.find(f=>f.id==parseInt(ele));
            console.log(obj);
           array.push(obj);
            
          });
          this.selectedItems=array;
          console.log(this.selectedItems)
        
     });

    })
  }

  ngOnInit() {
  this.staticFeaturesService.getAllBodyPartType().subscribe(data=>{
    this.bodyPartTypeInfo=data;
    console.log(this.bodyPartTypeInfo);
  });

   this.resetForm();
   this.pageInfoService.getAll().subscribe(data=>{
    this.dropdownList=data;
    console.log(this.dropdownList);
  })
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
  resetForm(form?:NgForm){
   if(form!=null)
   form.resetForm();
   this.bodyPartEntryService.bodyPartEntry = {
    id:0,
    bodyPartFullName:'',
    bodyPartShortName:'',
    entryPages:'',
    bodyPartType:'',
    status:'',
   
   }
 }
 
  save(bodyPartEntry,selectedItems){
   console.log(selectedItems);
   
   let ids='';
   selectedItems.forEach(e => {
    ids +=e.id+",";
   });
   
 let finallySelectedIds=  ids.slice(0, -1);
   console.log(finallySelectedIds);
   bodyPartEntry.entryPages=finallySelectedIds;
this.bodyPartEntryService.update(bodyPartEntry).subscribe(s=>{
  this.Tostr.showToast('primary',"", "Update Successfully", "",this.toastrService);
  this.router.navigate(['/pages/body-part-entry']);
},(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
 

}


  backTo(){
    this.router.navigate(['/pages/body-part-entry']);
  }




}
