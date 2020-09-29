import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { FabricDesPreCostService } from '../../../../@core/mock/marchandizer/fabric-des-pre-cost.service';


@Component({
  selector: 'ngx-add-fabric-des-pre-cost',
  templateUrl: './add-fabric-des-pre-cost.component.html',
  styleUrls: ['./add-fabric-des-pre-cost.component.scss']
})
export class AddFabricDesPreCostComponent implements OnInit { 
  Tostr=new Tostr()

  constructor(public fabricDesPreCostService:FabricDesPreCostService,
    private router:Router,
 private toastrService:NbToastrService) { }

  ngOnInit() {
    this.resetFormForFabricDesPreCost();
  }

  resetFormForFabricDesPreCost(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.fabricDesPreCostService.fabricDesPreCost= {
    id:0,
    fabNature:'',
    construction:'',
    gsmWeight:0,
    colorRange:'',
    stichLength:0,
    processLoss:0,
    composition:'',
    fabricDescriptionDetails:''
         }
    
     }

     onSubmit(form:NgForm){
      console.log(form);
      this.fabricDesPreCostService.add(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/FabricDesPreCost-list"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/FabricDesPreCost-list']);
      }

}
