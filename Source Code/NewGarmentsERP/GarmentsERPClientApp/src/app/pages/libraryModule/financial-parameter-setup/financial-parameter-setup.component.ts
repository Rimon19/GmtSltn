import { Component, OnInit, ViewChild } from '@angular/core';
import { FinancialParameterSetupService } from '../../../@core/mock/library/financial-parameter-setup.service';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { FinancialParameterSetup } from '../../../@core/data/Library-Modul-model/financial-parameter-setup';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'ngx-financial-parameter-setup',
  templateUrl: './financial-parameter-setup.component.html',
  styleUrls: ['./financial-parameter-setup.component.scss']
})
export class FinancialParameterSetupComponent implements OnInit {

  public sampleTypeList:any[]=[];
  public ProductTypeList:any[]=[];
  public ProductCategoryList:any[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'companyName',
    'applyingPeriod',
    'to',
    'bepcm',
    'askingProfit',
    'askingCM',
    'status',
    
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  financialParameterSetup:FinancialParameterSetup[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private financialParameterSetupService:FinancialParameterSetupService,) { }
    

  ngOnInit() {
 this.getFinancialParameterSetup();

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
    this.router.navigate(["/pages/add-financial-parameter-setup"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.financialParameterSetupService.deleteFinancialParameterSetup(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getFinancialParameterSetup();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getFinancialParameterSetup(){
    this.subscription=   this.financialParameterSetupService.getFinancialParameterSetup().subscribe(data=>{
    this.financialParameterSetup=data;  
    this.dataSource=new MatTableDataSource(this.financialParameterSetup);
    console.log('garmentsSampleEntrie',this.financialParameterSetup);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-financial-parameter/",element.id]);  
      }


}
