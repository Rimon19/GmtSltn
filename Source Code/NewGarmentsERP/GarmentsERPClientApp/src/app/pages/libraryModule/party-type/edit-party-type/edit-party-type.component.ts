import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ItemCategoryService } from '../../../../@core/mock/library/item-category.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { ItemCategory } from '../../../../@core/data/Library-Modul-model/item-category';
import { PartyTypeService } from '../../../../@core/mock/library/party-type.service';

@Component({
  selector: 'ngx-edit-party-type',
  templateUrl: './edit-party-type.component.html',
  styleUrls: ['./edit-party-type.component.scss']
})
export class EditPartyTypeComponent implements OnInit {

  editedId:any;
  Tostr=new Tostr();
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private toastrService:NbToastrService,
    public partyTypeService:PartyTypeService
  ) { 

    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.partyTypeService.getPartyType().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.partyTypeService.partyType=items;
  })

}
ngOnInit() {
  this.resetFormForPartyTypeInfo();
}
resetFormForPartyTypeInfo(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.partyTypeService.partyType = {
    id:0,
    partyTypeName:'',
    status:''
  }
}
onSubmit(form:NgForm){
form.value.id=this.editedId;
 this.partyTypeService.updatePartyType(form.value).subscribe(s=>{
   this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
   this.router.navigate(['/pages/party-type']);
 },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
   }  
   backToPartyTypeHomePage(){
     this.router.navigate(['/pages/party-type']);
   }

   Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]


}
