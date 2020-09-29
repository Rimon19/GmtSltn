import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../@core/mock/country.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { CountryLocationMappingService } from '../../../../@core/mock/library/country-location-mapping.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { DepoLocationMappingService } from '../../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMapping } from '../../../../@core/data/Library-Modul-model/country-location-mapping';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';


@Component({
  selector: 'ngx-depo-location-mapping-edit',
  templateUrl: './depo-location-mapping-edit.component.html',
  styleUrls: ['./depo-location-mapping-edit.component.scss']
})
export class DepoLocationMappingEditComponent implements OnInit {
  editedId;
  public countryList:CountryInfo[]=[];
  public ultimateCountryList:CountryLocationMapping[]=[];
  public filterUltimateCountryList:CountryLocationMapping[]=[];
  Tostr=new Tostr();
  constructor(
  private countryService:CountryService,
  public depoLocationMappingService:DepoLocationMappingService,
  private router:Router,
  private toastrService:NbToastrService,
  private countryLocationMappingService:CountryLocationMappingService,
  private route:ActivatedRoute,
  public dropdownValueService:DropdownValueService
    ) { 

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.depoLocationMappingService.getAll().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.depoLocationMappingService.depoLocationMapping =items;
     this.countryLocationMappingService.getCountryLocationMapping().subscribe(data=>{
      let searchResult= data.filter(f=>f.id==items.ultimateCountryId);
      this.filterUltimateCountryList=searchResult;
    });
     
   
      })
    }

  ngOnInit() {
    this.dropdownValueService.getRegion();
    this.ultimateCountryDDL();
    this.resetForm();
  }

  ultimateCountryDDL(){
    this.countryLocationMappingService.getCountryLocationMapping().subscribe(data=>{
      this.ultimateCountryList=data;
      console.log(this.ultimateCountryList);
    });
  }


   onChangeCountryDDL(countryId){
    console.log(countryId);
   let searchResult= this.ultimateCountryList.filter(f=>f.countryId==countryId);
   this.filterUltimateCountryList=searchResult;
   
   }
   resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.depoLocationMappingService.depoLocationMapping = {
      id: 0,
      countryId: 0,
      ultimateCountryId:0,
      countryDepoName:'',
      status:''
    }
    
   }
   onSubmit(form:NgForm){
    console.log(form);
    form.value.id=this.editedId;
    this.depoLocationMappingService.update(form.value).subscribe(res=>{
       console.log(res);       
      this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
    this.router.navigate(["/pages/depo-location-mapping"]);
   
    })
  
  }
  backTo(){
    this.router.navigate(['/pages/depo-location-mapping']);
  }


}
