import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { LabTestRateChartService } from '../../../../@core/mock/library/lab-test-rate-chart.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-add-lab-test-rate-chart',
  templateUrl: './add-lab-test-rate-chart.component.html',
  styleUrls: ['./add-lab-test-rate-chart.component.scss']
})
export class AddLabTestRateChartComponent implements OnInit {

  Tostr=new Tostr();
  constructor(
    public labTestRateChartService:LabTestRateChartService,
    private router:Router,
    private toastrService:NbToastrService,
    ) { }

    ngOnInit() {
    this.resetFormForLabTestRateChart();
    }
    resetFormForLabTestRateChart(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.labTestRateChartService.labTestRateChart = {
    id: 0,
    testCatagory: '',
    testFor: '',
    testItem: '',
    rate: 0,
    upcharge: 0,
    upchargeAmout: 0,
    netRate: 0,
    currency: '',
    testingCompany: ''
    }
    
    }
  testCatagory: any = [
    { btn:'Color Fastness', val: 'Color Fastness' },
    { btn:'Dimension & Appearance ', val: 'Dimension & Appearance ' },
    { btn:'Strength ', val: 'Strength ' },
    { btn:'Fabric Construction ', val: 'Fabric Construction ' },
    { btn:'Composition ', val: 'Composition ' },
    { btn:'Flammability ', val: 'Flammability ' },
    { btn:'Fabric Performance ', val: 'Fabric Performance ' },
    { btn:'Garments Accessories ', val: 'Garments Accessories ' },
    { btn:'Stability/Appearance ', val: 'Stability/Appearance ' },
    { btn:'Chemical Analysis', val: 'Chemical Analysis' },
    { btn:'Physicals', val: 'Physicals' },
    { btn:'Safety ', val: 'Safety ' },
    { btn:'Seam Slippag', val: 'Seam Slippag' }
  ]
  testFor:any=[
    {btn:'Garments',val:'Garments'},
    {btn:'Fabrics',val:'Fabrics'},
    {btn:'Trims',val:'Trims'}
  ]
  testingCompany:any=[
    {btn:'Testing Company',val:'Testing Company'}
  ]
  currency:any=[
    {btn:'Taka',val:'Taka'},
    {btn:'USD',val:'USD'},
    {btn:'EURO',val:'EURO'},
    {btn:'CHF',val:'CHF'},
    {btn:'SGD',val:'SGD'},
    {btn:'Pound',val:'Pound'},
    {btn:'YEN',val:'YEN'}
  ]
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    onSubmit(form:NgForm){
      this.labTestRateChartService.addLabTestRateChart(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/lab-test-rate-chart"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/lab-test-rate-chart']);
    }
}
