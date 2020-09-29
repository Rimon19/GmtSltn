import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { LocationService } from '../../../../@core/mock/location.service';
import { MinLeadTimeSlabsService } from '../../../../@core/mock/library/min-lead-time-slabs.service';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../../@core/mock/company.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { company } from '../../../../@core/data/company';
import { location } from '../../../../@core/data/location';

@Component({
  selector: 'ngx-edit-min-lead-time-slabs',
  templateUrl: './edit-min-lead-time-slabs.component.html',
  styleUrls: ['./edit-min-lead-time-slabs.component.scss']
})
export class EditMinLeadTimeSlabsComponent implements OnInit {

  public companyListItems:company[]=[];
  public locationListItems:location[]=[];
  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  public editedId:any;
  Tostr=new Tostr();
  constructor(
    private companyService:CompanyService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public minLeadTimeSlabsService:MinLeadTimeSlabsService,
    private locationService:LocationService,
    private staticFeaturesService:StaticFeaturesService,
    
    
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.minLeadTimeSlabsService.getAllMinLeadTimeSlabs().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.minLeadTimeSlabsService.minLeadTimeSlabs=items;
    })
    }

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
       form.value.id=this.editedId;
        this.minLeadTimeSlabsService.updateMinLeadTimeSlabs(form.value).subscribe(s=>{
          this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
          this.router.navigate(['/pages/min-lead-time-slabs']);
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    }
    backToaMinLeadTimeSlabsHomePage(){
      this.router.navigate(['/pages/min-lead-time-slabs']);
    }
    
}
