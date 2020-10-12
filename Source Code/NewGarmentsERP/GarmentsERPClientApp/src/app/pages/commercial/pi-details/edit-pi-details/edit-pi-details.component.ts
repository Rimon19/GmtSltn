import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { Tostr } from '../../../../@core/data/tostr.model';
import { PiDetailsService } from '../../../../@core/mock/commercial/pi-details.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-pi-details',
  templateUrl: './edit-pi-details.component.html',
  styleUrls: ['./edit-pi-details.component.scss']
})
export class EditPiDetailsComponent implements OnInit {

  editedId;
  Tostr=new Tostr();
  
  constructor(
  public piDetailsService:PiDetailsService,
  private router:Router,
  private dateResizeService:DateResizeService,
  
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) {

    
  
  this.editedId = this.route.snapshot.paramMap.get('id');
  this.piDetailsService.GetOnlyArrayList();
 let items=this.piDetailsService.items.find(f=>f.id==this.editedId);
 this.piDetailsService.piDetails=items;
  

     }

  ngOnInit() {
    this.piDetailsService.resetForm();
    this.dropdownValueService.getItemCategory();
this.dropdownValueService.getSuppliers();
this.dropdownValueService.getCurrency();
this.dropdownValueService.getSource();
this.dropdownValueService.getIndentor();
this.dropdownValueService.getPIBasis();
this.dropdownValueService.getGoodsRcvStatus();
this.dropdownValueService.getYesNo();

  }

   


  onSubmit(){  
    this.piDetailsService.piDetails.lastShipmentDate=this.dateResizeService.dateResize(this.piDetailsService.piDetails.lastShipmentDate);
    this.piDetailsService.piDetails.piValidityDate=this.dateResizeService.dateResize(this.piDetailsService.piDetails.piValidityDate);
    this.piDetailsService.piDetails.piDate=this.dateResizeService.dateResize(this.piDetailsService.piDetails.piDate);
    
 
  this.piDetailsService.piDetails.approvedDate=this.dateResizeService.dateResize(new Date);
  this.piDetailsService.piDetails.approvedBy=ApprovedBy.userName;
  this.piDetailsService.piDetails.isApproved=true;
  this.piDetailsService.piDetails.entryBy=EntryBy.userName;
  this.piDetailsService.piDetails.status='Active';
this.piDetailsService.piDetails.entryDate=this.dateResizeService.dateResize(new Date);
 
        
  this.piDetailsService.update(this.piDetailsService.piDetails,this.piDetailsService.piDetails.id);
   this.piDetailsService.resetForm();
  this.router.navigate(["/pages/commercial/PiDetails"]);
   
 
    
  }


    backTo(){
      this.router.navigate(['/pages/commercial/PiDetails']);
    }

}
