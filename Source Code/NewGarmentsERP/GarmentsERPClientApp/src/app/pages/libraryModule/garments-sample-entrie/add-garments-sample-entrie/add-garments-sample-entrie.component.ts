import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GarmentsSampleEntrieService } from '../../../../@core/mock/library/garments-sample-entrie.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-add-garments-sample-entrie',
  templateUrl: './add-garments-sample-entrie.component.html',
  styleUrls: ['./add-garments-sample-entrie.component.scss']
})
export class AddGarmentsSampleEntrieComponent implements OnInit {

  public sampleTypeList:any[]=[];
  Tostr=new Tostr()
    constructor(
      private staticFeaturesService:StaticFeaturesService,
      private toastrService:NbToastrService,
      private router:Router,
      public garmentsSampleEntrieService:GarmentsSampleEntrieService,
    ) { }
  
    ngOnInit() {
      this.sampleTypeDDL();
      this.resetFormForSampleEntrie();
    }  
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
        sampleTypeDDL(){
      this.staticFeaturesService.getAllSampleType().
      subscribe(data=>{
      this.sampleTypeList=data;
      console.log('sampleTypeList ',this.sampleTypeList);       
      });
     }
     resetFormForSampleEntrie(form?:NgForm){
      if(form!=null)
      form.resetForm();
      this.garmentsSampleEntrieService.garmentsSampleEntrie = {
        id:0,
        sampleName:'',
        sampleTypeId:'',
        status:'',
      }
      
     } 
     onSubmit(form:NgForm){
      console.log(form);
      this.garmentsSampleEntrieService.addGarmentsSampleEntrie(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/garments-sample-entrie"]);
      })
    }
    backTo(){
      this.router.navigate(['/pages/garments-sample-entrie']);
    }
}
