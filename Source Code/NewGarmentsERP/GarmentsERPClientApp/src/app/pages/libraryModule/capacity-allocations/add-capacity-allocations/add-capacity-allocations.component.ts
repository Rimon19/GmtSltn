import { Component, OnInit } from '@angular/core';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { CapacityAllocationsService } from '../../../../@core/mock/library/capacity-allocations.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-capacity-allocations',
  templateUrl: './add-capacity-allocations.component.html',
  styleUrls: ['./add-capacity-allocations.component.scss']
})
export class AddCapacityAllocationsComponent implements OnInit {
  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  Tostr=new Tostr()
  constructor(
    private staticFeaturesService:StaticFeaturesService,
    private router:Router,
    private toastrService:NbToastrService,
    public capacityAllocationsService:CapacityAllocationsService,
  ) { }

  ngOnInit() {
    this.resetFormForCapacityAllocations();
    this.yearDDL();
    this.monthDDL();
  }
  company: any = [
    { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
  ]
  locations: any = [
    { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
    { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
  ]
     resetFormForCapacityAllocations(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.capacityAllocationsService.capacityAllocations = {
      id:0,
      company:'',
      location:'',
      yearId:0,
      monthId:0
      
    }
    
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
        this.capacityAllocationsService.addCapacityAllocations(form.value).subscribe(res=>{
         this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
         this.router.navigate(["/pages/capacity-allocations"]);
        })
      }
      backToaCapacityAllocationsSetupHomePage(){
        this.router.navigate(['/pages/capacity-allocations']);
      }
}
