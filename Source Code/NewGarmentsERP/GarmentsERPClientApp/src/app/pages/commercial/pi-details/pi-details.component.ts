import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../@core/data/tostr.model';
import { PiDetailsService } from '../../../@core/mock/commercial/pi-details.service';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-pi-details',
  templateUrl: './pi-details.component.html',
  styleUrls: ['./pi-details.component.scss']
})
export class PiDetailsComponent implements OnInit {

 
displayedColumns = ['id','itemCategoryId','importer','supplierProfileId','piNo','piDate','lastShipmentDate','piValidityDate','currencyId','source','hsCode','internalFileNo','indentorName','piBasis','goodsRcvStatus','lcGroupNo','remarks','readyToApproved','requestedBy',];
Tostr=new Tostr();
constructor(private piDetailsService:PiDetailsService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   ) { }

ngOnInit() {
this.piDetailsService.getDataSource();
}

redirectToAddPage(){
  this.router.navigate(["/pages/commercial/Add-PiDetails"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/commercial/Edit-PiDetails",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.piDetailsService.deleteWithOutSubcribe(element.id).subscribe(res=>{
                  this.piDetailsService.getDataSource();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}

}
