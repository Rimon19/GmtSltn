import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { AddConsumptionComponent } from "../pre-coasting/add-consumption/add-consumption.component";
import { StaticFeaturesService } from "../../../@core/mock/library/static-features.service";
import { YarnCostService } from "../../../@core/mock/marchandizer/yarn-cost.service";
import { Tostr } from "../../../@core/data/tostr.model";
import { DateResizeService } from "../../../@core/mock/marchandizer/date-resize.service";
import { GarmentsItemEntriesService } from "../../../@core/mock/library/garments-item-entries.service";
import { BodyPartEntryService } from "../../../@core/mock/library/body-part-entry.service";
import { FabricDesPreCostService } from "../../../@core/mock/marchandizer/fabric-des-pre-cost.service";
import { ColourEntryService } from "../../../@core/mock/library/colour-entry.service";
import { ConversionCostForPreCostsService } from "../../../@core/mock/marchandizer/conversion-cost-for-pre-costs.service";
import { FabricCostService } from "../../../@core/mock/marchandizer/fabric-cost.service";
import { MatDialogService } from "../../../@core/mock/mat-dialog.service";
import { YarnCost } from "../../../@core/data/marchanzider-model/yarn-cost.model";
import { ConversionCostForPreCosts } from "../../../@core/data/marchanzider-model/conversion-cost-for-pre-costs";
import { DropdownValueService } from "../../../@core/mock/shared/dropdown-value.service";
import { YarnCountDeterminationChildService } from "../../../@core/mock/library/yarn-count-determination-child.service";
import { YarnCountDeterminationChild } from "../../../@core/data/Library-Modul-model/yarn-count-determination-child";
import { FabricDescriptionComponent } from "../fabric-description/fabric-description.component";
import { StripeColorDetailsComponent } from '../stripe-color-details/stripe-color-details.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: "ngx-add-cost",
  templateUrl: "./add-cost.component.html",
  styleUrls: ["./add-cost.component.scss"],
})
export class AddCostComponent implements OnInit, OnDestroy {

 
  constructor(
   
    
  ) {

     
  }

  ngOnInit() {

   

  }
 
  ngOnDestroy(){
    localStorage.setItem('budgetedCost','1.11');
    // this.dateResizeService.preCostingSubject.subscribe(i=>{
    //    this.dateResizeService.preCostingSourceObj.next({budgetedCost:1.111});
    //  });
  }
  
 
}
