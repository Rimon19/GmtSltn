import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-offering-cost',
  templateUrl: './offering-cost.component.html',
  styleUrls: ['./offering-cost.component.scss']
})
export class OfferingCostComponent implements OnInit {
  OfferingCostForm:FormArray = this.fb.array([]);
  constructor(
    private fb:FormBuilder  
  ) { }

  ngOnInit() {
  }
  OfferingCost=this.fb.group({
  id:[''],
  orderAutoId:[0], 
  buyingHouse:[''], 
  customer:[''], 
  item:[''], 
  styleNo:[''], 
  sizeRangeStart:[''], 
  sizeRangeEnd:[''], 
  costing:[''], 
  entryDate:[''], 
  entryBy:[''], 
  epprovedDate:[''], 
  isApproved:[''],
  approvedBy:[''], 
  status:[''],
  fabricInformation:this.fb.group({
    id:[],
    offeringCostId:[],
    orderAutoId:[],
    fabrics:[],
    gsm:[],
    cottonPercent :[],
    polysterPercent :[],
    viscosePercent :[],
    laycraPercent :[],
    orQty:[],
    fabQty :[],
    yarnCount:[],
    yarnType:[],
    dpl:[],
    yarnQty :[],
    lycraQty :[],
    acYarn :[],
    lycraD :[],
    
      entryDate:[],
      entryBy:[],
      approvedDate:[],
      isApproved:[],
      approvedBy:[],
      status:[]
  }),
  consumptionInformation:this.fb.group({
    id:[],
    offeringCostId:[],
    orderAutoId:[],
    measurment:[],
    Actual:[],
    Allowance:[],
    GSM:[],
    FabDzn:[],
    SolidSixPercent:[],
    CAD:[],
    NeckcuffDzn :[],
    Pocket:[],
    TTLFabKg:[],
      entryDate:[],
      entryBy:[],
      approvedDate:[],
      isApproved:[],
      approvedBy:[],
      status:[]  
  }),
    

  })
}
