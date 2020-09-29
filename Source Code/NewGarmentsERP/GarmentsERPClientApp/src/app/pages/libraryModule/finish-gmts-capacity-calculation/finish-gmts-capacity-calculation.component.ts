import { company } from '../../../@core/data/company';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Tostr } from '../../../@core/data/tostr.model';
import { FormArray, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { CompanyService } from '../../../@core/mock/company.service';
import { LocationService } from '../../../@core/mock/location.service';
import { CapacityCalculationService } from '../../../@core/mock/library/capacity-calculation.service';
import { NbToastrService } from '@nebular/theme';
import { location } from '../../../@core/data/location';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';
import { CapacityCalculationMonthlyService } from '../../../@core/mock/library/capacity-calculation-monthly.service';
import { CapacityCalculationYearlyService } from '../../../@core/mock/library/capacity-calculation-yearly.service';
@Component({
  selector: 'ngx-finish-gmts-capacity-calculation',
  templateUrl: './finish-gmts-capacity-calculation.component.html',
  styleUrls: ['./finish-gmts-capacity-calculation.component.scss']
})
export class FinishGmtsCapacityCalculationComponent implements OnInit {

  updateButton:boolean;
    saveButton:boolean;
    public companyList:company[]=[];
    public locationList:location[]=[];
    public yearList:any[]=[];
    public monthList:any[]=[];
   Tostr=new Tostr();
   CapacityCalculationMontly: FormArray = this.fb.array([]);
   CapacityCalculationYearly: FormArray = this.fb.array([]);
   public count=0;
   editedId;
   constructor(
   private router:Router,
   private toastrService:NbToastrService,
   public capacityCalculationService:CapacityCalculationService,
   private fb: FormBuilder,
   private staticFeaturesService:StaticFeaturesService,
   private companyService:CompanyService,
   private locationService:LocationService,
   private dateResizeService:DateResizeService,
   public capacityCalculationMonthlyService:CapacityCalculationMonthlyService,
   public capacityCalculationYearlyService:CapacityCalculationYearlyService
     ) { 
      this.capacityCalculationMontlyForm();   
       this.staticFeaturesService.getAllMonths().subscribe(data=>{
         data.forEach(element => {
          this.CapacityCalculationYearly.push(this.fb.group({
            id :0,
            month :element.monthName,
            workingDay :0,
            capacityMinutes :0,
            capacityPcs :0,
            capacityCalculationId:0,
            capacityCalculationYear:0,
            capacityCalculationMonth:0
         
           }));
         });
       });


     }
 
   ngOnInit() {
    
     this.resetForm();
     this.companyDDL();
    this.locationDDL();
    this.yearDDL();
    this.monthDDL();
   }
   companyDDL(){
     this.companyService.getAllCompany().subscribe(data=>{
       this.companyList=data;
     })
   }
   locationDDL(){
     this.locationService.getAllLocations().subscribe(data=>{
       this.locationList=data;
     })
   }
   yearDDL(){
     this.staticFeaturesService.getAllYears().subscribe(data=>{
      this.yearList=data;
     })
   }
   monthDDL(){
     this.staticFeaturesService.getAllMonths().subscribe(data=>{
       this.monthList=data;
     })
   }
    resetForm(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.capacityCalculationService.capacityCalculation = {
      id:0,
      companyId :0,
      capacitySource :'',
      location :'',
      year  :'',
      month :'',
      manOrMachinePerLine:'',
      basicSAM :0,
      efficiency :0,
      finType:'',
      smv:0,
      woHrs:0,
     }
     
    }
 
   
    capacityCalculationMontlyForm() {
    
     this.CapacityCalculationMontly.push(this.fb.group({
      id :0,
    date :'',
    dayStatus :'',
    noOfLine:0,
    manpower:0,
    capacityMinutes :0,
    capacityPcs :0,
    capacityCalculationId:0,
    capacityCalculationYear:'',
    capacityCalculationMonth:'',
     
     }));
   }
 
   capacityCalculationYearlyForm() {
   
    this.CapacityCalculationYearly.push(this.fb.group({
      id :0,
      month :'',
      workingDay :0,
      capacityMinutes :0,
      capacityPcs :0,
      capacityCalculationId:0,
      capacityCalculationYear:'',
      capacityCalculationMonth:''
    
    }));
  }

   onDeleteCapacityMonthlyForm(CapacityCalculationMontly,k) {
   
    CapacityCalculationMontly.value.splice(k, 1);
     this.CapacityCalculationMontly= this.fb.array([]);
                   (CapacityCalculationMontly.value).forEach((item: any) => {
                     this.CapacityCalculationMontly.push(this.fb.group({
                      id :item.id,
                      date :item.date,
                      dayStatus :item.dayStatus,
                      noOfLine:item.noOfLine,
                      manpower:item.manpower,
                      capacityMinutes :item.capacityMinutes,
                      capacityPcs :item.capacityPcs,
                      capacityCalculationId:item.capacityPcs,
                      capacityCalculationYear:item.capacityCalculationYear,
                      capacityCalculationMonth:item.capacityCalculationMonth
                   
                     }));
               });                       
     }
     onDeleteCapacityYearlyForm(CapacityCalculationYearly,k) {
   
      CapacityCalculationYearly.value.splice(k, 1);
       this.CapacityCalculationYearly= this.fb.array([]);
                     (CapacityCalculationYearly.value).forEach((item: any) => {
                       this.CapacityCalculationYearly.push(this.fb.group({
                        id :item.id,
                        month :item.month,
                        workingDay :item.workingDay,
                        capacityMinutes :item.capacityMinutes,
                        capacityPcs :item.capacityPcs,
                        capacityCalculationId:item.capacityPcs,
                        capacityCalculationYear:item.capacityCalculationYear,
                        capacityCalculationMonth:item.capacityCalculationMonth
                     
                       }));
                 });                       
       }
   onChangeYear(companyId,year){
     console.log(companyId,year);
     if(companyId==0){this.Tostr.showToast('danger','', 'Please Select Company', '',this.toastrService);}
     else{


       this.capacityCalculationService.getAll().subscribe(data=>{
       let capacityCalculation=  data.find(f=>f.companyId==companyId&&f.year==year);
      // this.editedId=capacityCalculation.id;
        // this.saveButton=true;
        // this.updateButton=false;
       
        this.CapacityCalculationYearly= this.fb.array([]);
        if(capacityCalculation==undefined){
          this.staticFeaturesService.getAllMonths().subscribe(data=>{
            this.CapacityCalculationYearly= this.fb.array([]);
            data.forEach(element => {
             this.CapacityCalculationYearly.push(this.fb.group({
               id :0,
               month :element.monthName,
               workingDay :0,
               capacityMinutes :0,
               capacityPcs :0,
               capacityCalculationId:0,
               capacityCalculationYear:0,
               capacityCalculationMonth:0
            
              }));
            });
          });
        }
     

       if(capacityCalculation!=undefined){
        this.saveButton=true;
        this.updateButton=false;
        this.capacityCalculationYearlyService.getAll().subscribe(data=>{
          let cpctCltnYerlyListBycpctId=data.filter(f=>f.capacityCalculationYear==capacityCalculation.year);
          this.CapacityCalculationYearly= this.fb.array([]);
          (cpctCltnYerlyListBycpctId).forEach((item: any) => {
            this.CapacityCalculationYearly.push(this.fb.group({
             id :item.id,
             month :item.month,
             workingDay :item.workingDay,
             capacityMinutes :item.capacityMinutes,
             capacityPcs :item.capacityPcs,
             capacityCalculationId:item.capacityPcs,
             capacityCalculationYear:item.capacityCalculationYear,
             capacityCalculationMonth:item.capacityCalculationMonth
          
            }));
         });  

        });
       }
       });
     }
   }
   onChangeMonth(companyId,year,month){
    console.log(companyId,year);
    if(companyId==0||year==0){this.Tostr.showToast('danger','', 'Please Select Company and year!', '',this.toastrService);}
    else{
      this.capacityCalculationService.getAll().subscribe(data=>{
      let capacityCalculation=  data.find(f=>f.companyId==companyId&&f.year==year&&f.month==month);
        
      //  this.updateButton=false;
    //  this.editedId=capacityCalculation.id;
    
    this.CapacityCalculationMontly= this.fb.array([]);
   
    if(capacityCalculation==undefined){
      this.saveButton=true;
        this.updateButton=false;
      this.staticFeaturesService.getAllMonths().subscribe(data=>{
        this.CapacityCalculationYearly  = this.fb.array([]);
        data.forEach(element => {
         this.CapacityCalculationYearly.push(this.fb.group({
           id :0,
           month :element.monthName,
           workingDay :0,
           capacityMinutes :0,
           capacityPcs :0,
           capacityCalculationId:0,
           capacityCalculationYear:0,
           capacityCalculationMonth:0
        
          }));
        });
      });
    }
 
       
      if(capacityCalculation!=undefined){
        this.saveButton=false;
      this.updateButton=true;

       console.log(capacityCalculation);
       this.capacityCalculationService.capacityCalculation =capacityCalculation;


       this.capacityCalculationMonthlyService.getAll().subscribe(data=>{
        let capacityCalculationMonthlyListByCpctyId=data.filter(f=>f.capacityCalculationId==capacityCalculation.id);
     
        (capacityCalculationMonthlyListByCpctyId).forEach((item: any) => {
         this.CapacityCalculationMontly.push(this.fb.group({
          id :item.id,
          date :item.date,
          dayStatus :item.dayStatus,
          noOfLine:item.noOfLine,
          manpower:item.manpower,
          capacityMinutes :item.capacityMinutes,
          capacityPcs :item.capacityPcs,
          capacityCalculationId:item.capacityPcs,
          capacityCalculationYear:item.capacityCalculationYear,
          capacityCalculationMonth:item.capacityCalculationMonth
       
         }));
         });   
         


       });
       
       this.capacityCalculationYearlyService.getAll().subscribe(data=>{
        let cpctCltnYerlyListBycpctId=data.filter(f=>f.capacityCalculationId==capacityCalculation.id);
        this.CapacityCalculationYearly= this.fb.array([]);
        (cpctCltnYerlyListBycpctId).forEach((item: any) => {
          this.CapacityCalculationYearly.push(this.fb.group({
           id :item.id,
           month :item.month,
           workingDay :item.workingDay,
           capacityMinutes :item.capacityMinutes,
           capacityPcs :item.capacityPcs,
           capacityCalculationId:item.capacityPcs,
           capacityCalculationYear:item.capacityCalculationYear,
           capacityCalculationMonth:item.capacityCalculationMonth
        
          }));
       });  

      });
      }
      });
    }
  }
    onSubmit(form:NgForm,CapacityCalculationMontly,CapacityCalculationYearly){
      form.value.id=0;
     this.capacityCalculationService.add(form.value).subscribe(res=>{
        CapacityCalculationMontly.value.forEach(element => {
          element.capacityCalculationId=res.id;
          element.capacityCalculationYear=res.year;
          element.capacityCalculationMonth=res.month;
         this.dateResizeService.dateResize(element.date);
         this.capacityCalculationMonthlyService.add(element).subscribe(data=>{});
        });
        CapacityCalculationYearly.value.forEach(element => {      
          element.capacityCalculationId=res.id;
          element.capacityCalculationYear=res.year;
          element.capacityCalculationMonth=res.month;
          this.capacityCalculationYearlyService.add(element).subscribe(data=>{});
        });
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.resetForm();
       this.CapacityCalculationMontly= this.fb.array([]);
       this.CapacityCalculationYearly= this.fb.array([]);
   
     })
   
   }

   onUpdate(form:NgForm,CapacityCalculationMontly,CapacityCalculationYearly){
      console.log(form.value);
      console.log(CapacityCalculationMontly.value);
      console.log(CapacityCalculationYearly.value);
    

       CapacityCalculationMontly.value.forEach(element => {
         if(element.id!=0){
          element.capacityCalculationId=form.value.id;
          this.dateResizeService.dateResize(element.date);
          this.capacityCalculationMonthlyService.update(element).subscribe(data=>{});
         }
       else{

         element.capacityCalculationMonth=form.value.month;
         element.capacityCalculationYear=form.value.year;
         element.capacityCalculationId=form.value.id;
        this.dateResizeService.dateResize(element.date);
        this.capacityCalculationMonthlyService.add(element).subscribe(data=>{});
       }

       });
       CapacityCalculationYearly.value.forEach(element => {
         if(element.id!=0){
          element.capacityCalculationId=form.value.id;
          this.capacityCalculationYearlyService.update(element).subscribe(data=>{});
         }
        else{
          element.capacityCalculationMonth=form.value.month;
         element.capacityCalculationYear=form.value.year;
         element.capacityCalculationId=form.value.id;
          this.capacityCalculationYearlyService.add(element).subscribe(data=>{});
        }
       });

       this.capacityCalculationService.update(form.value).subscribe(res=>{
      });

      this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
      this.resetForm();
      this.CapacityCalculationMontly= this.fb.array([]);
      this.CapacityCalculationYearly= this.fb.array([]);
  
  }
   backTo(){
   //  this.router.navigate(['/pages/yarn-count-determination']);
   }
 
   onChangeDayStatus(form:NgForm,CapacityCalculationMontly,CapacityCalculationYearly,k){
     console.log(CapacityCalculationYearly.value);
    let month=form.value.month;
     let countWorkingDay=CapacityCalculationMontly.value.filter(f=>f.dayStatus=='Open').length;
     this.CapacityCalculationYearly= this.fb.array([]);
        (CapacityCalculationYearly.value).forEach((item: any) => {
          if(item.month==month){
            this.CapacityCalculationYearly.push(this.fb.group({
              id :item.id,
              month :item.month,
              workingDay :countWorkingDay,
              capacityMinutes :item.capacityMinutes,
              capacityPcs :item.capacityPcs,
              capacityCalculationId:item.capacityPcs,
              capacityCalculationYear:item.capacityCalculationYear,
              capacityCalculationMonth:item.capacityCalculationMonth
           
             }));
          }
          // if(item.month!=month){
          //   this.CapacityCalculationYearly.push(this.fb.group({
          //     id :item.id,
          //     month :item.month,
          //     workingDay :item.workingDay,
          //     capacityMinutes :item.capacityMinutes,
          //     capacityPcs :item.capacityPcs,
          //     capacityCalculationId:item.capacityPcs,
          //     capacityCalculationYear:item.capacityCalculationYear,
          //     capacityCalculationMonth:item.capacityCalculationMonth
           
          //    }));
          // }
       });  
   }


}
