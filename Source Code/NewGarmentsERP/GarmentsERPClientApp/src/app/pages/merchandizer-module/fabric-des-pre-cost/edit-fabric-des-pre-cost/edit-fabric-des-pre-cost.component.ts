import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router,ActivatedRoute } from '@angular/router';
import { FabricDesPreCostService } from '../../../../@core/mock/marchandizer/fabric-des-pre-cost.service';

@Component({
  selector: 'ngx-edit-fabric-des-pre-cost',
  templateUrl: './edit-fabric-des-pre-cost.component.html',
  styleUrls: ['./edit-fabric-des-pre-cost.component.scss']
})
export class EditFabricDesPreCostComponent implements OnInit {
  Tostr=new Tostr();
  editedId:any;

  constructor(private route:ActivatedRoute,public fabricDesPreCostService:FabricDesPreCostService,
    private router:Router,
 private toastrService:NbToastrService) { this.editedId = this.route.snapshot.paramMap.get('id');
 console.log(this.editedId);
 this.fabricDesPreCostService.getAll().subscribe(item=>{
 let items=  item.find(f=>f.id==this.editedId);
 this.fabricDesPreCostService.fabricDesPreCost=items;
 })}

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
     form.value.id=this.editedId;
      this.fabricDesPreCostService.update(form.value).subscribe(s=>{
      this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
      this.router.navigate(['/pages/FabricDesPreCost-list']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    } 
    backHomePage(){
    this.router.navigate(['/pages/FabricDesPreCost-list']);
    }

}
