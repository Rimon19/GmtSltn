import { Component, OnInit } from '@angular/core';
import { SewingOperationService } from '../../../../@core/mock/library/sewing-operation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-sewing-operation',
  templateUrl: './edit-sewing-operation.component.html',
  styleUrls: ['./edit-sewing-operation.component.scss']
})
export class EditSewingOperationComponent implements OnInit {
  editedId:any;
  orderUOM:any[] = [];
   resources:any[] = [];
  Tostr=new Tostr()
  constructor(
    public sewingOperationService:SewingOperationService,
    private router:Router,
    private route:ActivatedRoute,
    private staticFeaturesService:StaticFeaturesService,
    private toastrService:NbToastrService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.sewingOperationService.getSewingOperation().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.sewingOperationService.sewingOperation=items;
    })
     }

  ngOnInit() {
    this.resetFormForSewingOperation();
    this.orderUDDL();
    this.resourcesUDDL();
  }
  resetFormForSewingOperation(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.sewingOperationService.sewingOperation= {
  id:0,
  operation:'',
  rate:0,
  uomId:0,
  resourceId:0,
  operatorSMV:0,
  helperSMV:0,
  totalSMV:0, 
  action:'', 
    
    }
    
     }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
      orderUDDL(){
      this.staticFeaturesService.getAllUOM().
      subscribe(data=>{
      this.orderUOM=data;
      console.log('orderUOM list',this.orderUOM)
      });
      }  
      resourcesUDDL(){
        this.staticFeaturesService.getAllResources().
        subscribe(data=>{
        this.resources=data;
        console.log('resources list',this.resources)
        });
      } 
  
      onSubmit(form:NgForm){
          form.value.id=this.editedId;
          this.sewingOperationService.updateSewingOperation(form.value).subscribe(s=>{
            this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
            this.router.navigate(['/pages/sewing-operation']);
          },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
      }
      backTo(){
        this.router.navigate(['/pages/sewing-operation']);
      }
}
