 import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../../../@core/mock/company.service';
import { company } from '../../../../@core/data/company';
import { LocationService } from '../../../../@core/mock/location.service';
import { location } from '../../../../@core/data/location';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { MinLeadTimeSlabsService } from '../../../../@core/mock/library/min-lead-time-slabs.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-min-lead-time-slabs',
  templateUrl: './add-min-lead-time-slabs.component.html',
  styleUrls: ['./add-min-lead-time-slabs.component.scss']
})
export class AddMinLeadTimeSlabsComponent implements OnInit {
  public companyListItems:company[]=[];
  public locationListItems:location[]=[];
  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  Tostr=new Tostr();
  constructor(
    private companyService:CompanyService,
    private router:Router,
    private toastrService:NbToastrService,
    public minLeadTimeSlabsService:MinLeadTimeSlabsService,
    private locationService:LocationService,
    private staticFeaturesService:StaticFeaturesService,
    
    
    ) { }

  ngOnInit() {
    this.companyDDL();
    this.locationDDL();
    this.yearDDL();
    this.monthDDL();
    this.resetFormForinLeadTimeSlabs();
  }
  resetFormForinLeadTimeSlabs(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.minLeadTimeSlabsService.minLeadTimeSlabs = {
      id: 0,
      companyId:0,
      locationId:0,
      yearId:0,
      monthId:0,
    }
    
   } 
  companyDDL(){
    this. companyService.getAllCompany().
    subscribe(data=>{
    this.companyListItems=data;
    console.log('company list',this.companyListItems)
  });
 }
 locationDDL(){
  this.locationService.getAllLocations().
  subscribe(data=>{
  this.locationListItems=data;
  console.log('location list',this.locationListItems)
        });
   } 
yearDDL(){
    this.staticFeaturesService.getAllYears().
    subscribe(data=>{
    this.yearListItems=data;
    console.log('yearListItems',this.yearListItems)
          });
     }
     monthDDL(){
      this.staticFeaturesService.getAllMonths().
      subscribe(data=>{
      this.monthListItems=data;
      console.log('monthListItems',this.monthListItems)
            });
       }
       onSubmit(form:NgForm){
        console.log(form);
        this.minLeadTimeSlabsService.addMinLeadTimeSlabs(form.value).subscribe(res=>{
         this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
         this.router.navigate(["/pages/min-lead-time-slabs"]);
        })
      }

      backToaMinLeadTimeSlabsHomePage(){
        this.router.navigate(['/pages/min-lead-time-slabs']);
      }
}
