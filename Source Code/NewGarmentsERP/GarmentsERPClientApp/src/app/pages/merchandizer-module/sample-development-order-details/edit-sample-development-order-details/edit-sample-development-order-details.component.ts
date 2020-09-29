import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleDevelopmentOrderDetailsService } from '../../../../@core/mock/marchandizer/sample-development-order-details.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { NgForm } from '@angular/forms';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';

@Component({
  selector: 'ngx-edit-sample-development-order-details',
  templateUrl: './edit-sample-development-order-details.component.html',
  styleUrls: ['./edit-sample-development-order-details.component.scss']
})
export class EditSampleDevelopmentOrderDetailsComponent implements OnInit {
  editedId;
  Tostr=new Tostr();
  
  constructor(
  public sampleDevelopmentOrderDetailsService:SampleDevelopmentOrderDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    this.editedId = this.route.snapshot.paramMap.get('id');
  this.sampleDevelopmentOrderDetailsService.getAll().subscribe(data=>{
 let items=  data.find(f=>f.id==this.editedId);
 this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails=items;
  });

     }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getBuyers();
this.dropdownValueService.getProductDept();
console.log(this.dropdownValueService.getProductDept());
this.dropdownValueService. getGarmentsItem();
this.dropdownValueService.getProductCategory();
this.dropdownValueService.getRegion();
this.dropdownValueService.getAgents();
this.dropdownValueService.getTeamleaders();
this.dropdownValueService.getDealingMerchant();
this.dropdownValueService.getSampleDevelopmentSeason();

  }
  


   resetForm(form?:NgForm){
if(form!=null)
form.resetForm();
this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails = {
  id: 0,
  buyerId: '' ,
styleName: '' ,
productDept: '' ,
articleNumber: '' ,
garmentsItemId: '' ,
productCategoryId: '' ,
regionId: '' ,
agentId: '' ,
teamLeaderId: '' ,
dealingMerchantId: '' ,
bHMerchant: '' ,
estShipDate: '' ,
season: '' ,
remarks: '' ,
images: '' ,
file: '' ,

  entryDate :'',
  entryBy :'',
  status :''
}

}


  onSubmit(){  
    
  this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.entryBy=EntryBy.userName;
  this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.status='Active';
this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.entryDate=this.dateResizeService.dateResize(new Date);
this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.estShipDate=this.dateResizeService.dateResize(this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails.estShipDate);
  this.sampleDevelopmentOrderDetailsService.update(this.sampleDevelopmentOrderDetailsService.sampleDevelopmentOrderDetails).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.router.navigate(["/pages/SampleDevelopmentOrderDetails"]);
   this.resetForm();
    })


    
  }
  backTo(){
    this.router.navigate(['/pages/SampleDevelopmentOrderDetails']);
  } 



}
