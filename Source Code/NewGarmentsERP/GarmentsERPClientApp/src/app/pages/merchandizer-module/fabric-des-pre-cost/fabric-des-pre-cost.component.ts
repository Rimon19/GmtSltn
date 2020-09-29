import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { FabricDesPreCost } from '../../../@core/data/marchanzider-model/fabric-des-pre-cost.model';
import { FabricDesPreCostService } from '../../../@core/mock/marchandizer/fabric-des-pre-cost.service';


@Component({ 
  selector: 'ngx-fabric-des-pre-cost',
  templateUrl: './fabric-des-pre-cost.component.html',
  styleUrls: ['./fabric-des-pre-cost.component.scss']
})
export class FabricDesPreCostComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'fabNature','construction','gsmWeight','colorRange','stichLength','processLoss','composition'];
  Tostr=new Tostr();
  subscription:Subscription;
  fabricDesPreCost: FabricDesPreCost[]; 


  constructor(private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
     private fabricDesPreCostService:FabricDesPreCostService) { }

  ngOnInit() {
    this.refresList();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/FabricDesPreCost-create"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.fabricDesPreCostService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getFabricDesPreCostInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getFabricDesPreCostInfoDetails(){
            this.subscription=this.fabricDesPreCostService.getAll().subscribe(data=>{
            this.fabricDesPreCost=data;
            
            this.dataSource=new MatTableDataSource(this.fabricDesPreCost);
            console.log('po details',this.fabricDesPreCost);
          });
  }
  edit(element){
    this.router.navigate(["/pages/FabricDesPreCost-edit/",element.id]);  
  }

  refresList(){
    
    this.fabricDesPreCostService.getAll().subscribe(item=>{   
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
