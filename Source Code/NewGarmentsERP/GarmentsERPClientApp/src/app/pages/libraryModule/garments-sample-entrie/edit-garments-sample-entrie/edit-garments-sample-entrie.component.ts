import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GarmentsSampleEntrieService } from '../../../../@core/mock/library/garments-sample-entrie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { Tostr } from '../../../../@core/data/tostr.model';

@Component({
  selector: 'ngx-edit-garments-sample-entrie',
  templateUrl: './edit-garments-sample-entrie.component.html',
  styleUrls: ['./edit-garments-sample-entrie.component.scss']
})
export class EditGarmentsSampleEntrieComponent implements OnInit {

  public sampleTypeList:any[]=[];
  Tostr=new Tostr()
  editedId:any;
    constructor(
      private staticFeaturesService:StaticFeaturesService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute,
      public garmentsSampleEntrieService:GarmentsSampleEntrieService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
    console.log(this.editedId);
    this.garmentsSampleEntrieService.getGarmentsSampleEntrie().subscribe(item=>{
   let items=  item.find(f=>f.id==this.editedId);
   this.garmentsSampleEntrieService.garmentsSampleEntrie=items;
  })

     }
  
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
        sampleTypeId:0,
        status:'',
      }
      
     } 
     onSubmit(form:NgForm){
       form.value.id=this.editedId;
    
      this.garmentsSampleEntrieService.updateGarmentsSampleEntrie(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/garments-sample-entrie']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backTo(){
    this.router.navigate(['/pages/garments-sample-entrie']);
  }

}
