import { Component, OnInit } from '@angular/core';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { YarnRateService } from '../../../../@core/mock/library/yarn-rate.service';
import { SupplierProfile } from '../../../../@core/data/Library-Modul-model/supplier-profile';
import { SupplierProfileService } from '../../../../@core/mock/library/supplier-profile.service';
import { YarnCounts } from '../../Model/YarnCounts';
import { YarnCountsService } from '../../../../@core/mock/marchandizer/yarn-counts.service';
import { CompositionEntry } from '../../../../@core/data/Library-Modul-model/composition-entry';
import { CompositionEntryService } from '../../../../@core/mock/library/composition-entry.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';

@Component({
  selector: 'ngx-edit-yarn-rate',
  templateUrl: './edit-yarn-rate.component.html',
  styleUrls: ['./edit-yarn-rate.component.scss']
})
export class EditYarnRateComponent implements OnInit {

   
  public supplierList:SupplierProfile[]=[];
  public yarnCountList:YarnCounts[]=[];
  public compositionList:CompositionEntry[]=[];
  public typeList:any[]=[];
  editedId;
  Tostr=new Tostr();
  constructor(
    public yarnRateService:YarnRateService,
  private router:Router,
  private toastrService:NbToastrService,
  private supplierProfileService:SupplierProfileService,
  private yarnCountsService:YarnCountsService,
  private compositionEntryService:CompositionEntryService,
  private staticFeaturesService:StaticFeaturesService,
  private dateResizeService:DateResizeService,
  private route:ActivatedRoute
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.yarnRateService.getAll().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.yarnRateService.yarnRate=items;
    })
    }

  ngOnInit() {
   
    this.resetForm();
    this.supplierDDL();
    this.yarnCountsDDL();
    this.compositionDDL();
    this.typeDDL();
    

  }

  supplierDDL(){
    this.supplierProfileService.getAll().subscribe(data=>{
     this.supplierList=data;
    });
  }
  yarnCountsDDL(){
    this.yarnCountsService.getAllYarnCount().subscribe(data=>{
     this.yarnCountList=data;
    });
  }
  compositionDDL(){
    this.compositionEntryService.getCompositionEntry().subscribe(data=>{
     this.compositionList=data;
    });
  }
  typeDDL(){
    this.staticFeaturesService.getAllType().subscribe(data=>{
     this.typeList=data;
    });
  }
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.yarnRateService.yarnRate = {
      id :0,
      supplierId :0,
      yarnCountId :0,
      compositionId :0,
      percentage :0,
      type :'',
      rateOrKg :0,
      effectiveDate:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    form.value.id=this.editedId;
    this.dateResizeService.dateResize(form.value.effectiveDate);
    this.yarnRateService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
     this.router.navigate(["/pages/yarn-rate"]);
   this.resetForm();
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/yarn-rate']);
  }



}
