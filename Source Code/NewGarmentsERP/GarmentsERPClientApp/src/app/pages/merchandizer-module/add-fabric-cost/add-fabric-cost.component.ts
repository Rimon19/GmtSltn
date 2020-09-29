import { Component, OnInit } from '@angular/core';
import { BodyPartService } from '../../../@core/mock/marchandizer/body-part.service';
import { PrecostingService } from '../../../@core/mock/marchandizer/precosting.service';
import { FabricCost } from '../../../@core/data/marchanzider-model/fabric-cost.model';
import { FabricCostService } from '../../../@core/mock/marchandizer/fabric-cost.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'ngx-add-fabric-cost',
  templateUrl: './add-fabric-cost.component.html',
  styleUrls: ['./add-fabric-cost.component.scss']
})
export class AddFabricCostComponent implements OnInit {
  bodyPartList:any;
  precostingList:any;
  fabricCost=new FabricCost();
  Tostr=new Tostr();
  constructor(private bodyPartService:BodyPartService,
    private precostingService:PrecostingService ,
    private fabricCostService:FabricCostService,
    private toastrService:NbToastrService,) { }

  ngOnInit() {

    this.bodyPartService.getAllBodyPart().subscribe(data=>{
      console.log(data);
      this.bodyPartList=data;
    });

    this.precostingService.getAllPrecosting().subscribe(data=>{
      console.log(data);
      this.precostingList=data;
    })
  }
  onSubmit(form){
    console.log(form.value);
    this.fabricCostService.create(form.value);
  
  }
}
