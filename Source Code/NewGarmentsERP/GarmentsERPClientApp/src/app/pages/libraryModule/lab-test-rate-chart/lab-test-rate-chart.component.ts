import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { LabTestRateChart } from '../../../@core/data/Library-Modul-model/lab-test-rate-chart';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { LabTestRateChartService } from '../../../@core/mock/library/lab-test-rate-chart.service';

@Component({
  selector: 'ngx-lab-test-rate-chart',
  templateUrl: './lab-test-rate-chart.component.html',
  styleUrls: ['./lab-test-rate-chart.component.scss']
})
export class LabTestRateChartComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'testCatagory',
    'testFor',
    'testItem',
    'rate',
    'upcharge',
    'upchargeAmout',
    'netRate',
    'currency',
    'testingCompany',
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  labTestRateChart:LabTestRateChart[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public labTestRateChartService:LabTestRateChartService,
     ) { }
    

  ngOnInit() {
 this.getLabTestRateChart();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-lab-test-rate-chart"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.labTestRateChartService.deleteLabTestRateChart(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getLabTestRateChart();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getLabTestRateChart(){
    this.subscription=this.labTestRateChartService.getLabTestRateChart().subscribe(data=>{
    this.labTestRateChart=data;
  
    this.dataSource=new MatTableDataSource(this.labTestRateChart);
    console.log('labTestRateChart',this.labTestRateChart);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-lab-test-rate-chart/",element.id]);  
      }

}
