import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { CapacityAllocationsService } from '../../../../@core/mock/library/capacity-allocations.service';

@Component({
  selector: 'ngx-edit-capacity-allocations',
  templateUrl: './edit-capacity-allocations.component.html',
  styleUrls: ['./edit-capacity-allocations.component.scss']
})
export class EditCapacityAllocationsComponent implements OnInit {
  editedId:any;
  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  Tostr=new Tostr()
  constructor(
    private staticFeaturesService:StaticFeaturesService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public capacityAllocationsService:CapacityAllocationsService,
  ) {
    this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.capacityAllocationsService.getCapacityAllocations().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.capacityAllocationsService.capacityAllocations=items;
  })
   }

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
         form.value.id=this.editedId;
        this.capacityAllocationsService.updateCapacityAllocations(form.value).subscribe(s=>{
          this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
          this.router.navigate(['/pages/capacity-allocations']);
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    }
    backToaCapacityAllocationsSetupHomePage(){
      this.router.navigate(['/pages/capacity-allocations']);
    }

}
