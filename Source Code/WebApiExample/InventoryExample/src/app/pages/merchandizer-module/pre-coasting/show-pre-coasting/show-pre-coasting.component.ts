import { Component, OnInit, ViewChild } from '@angular/core';
import { PrecostingService } from '../../../../@core/mock/marchandizer/precosting.service';
import { PreCosting } from '../../../../@core/data/marchanzider-model/pre-costing.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FetchInitialOrderService } from '../../../../@core/mock/fetch-initial-order.service';
import { OrderInfo } from '../../../../@core/data/marchanzider-model/order-info.model';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-show-pre-coasting',
  templateUrl: './show-pre-coasting.component.html',
  styleUrls: ['./show-pre-coasting.component.scss']
})
export class ShowPreCoastingComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['actions', 'btnActionPreCosting', 'precostingId','orderId','costingDate','incoterm','incotermPlace','sewEfficiency'];
  btnActionsPreCosting: any = [
    { btn: 'Fabric Cost', val: 'fabric_cost' },
    { btn: 'Trims Cost', val: 'trims_cost' },
    { btn: 'Embel.Cost', val: 'embel_cost' },
    { btn: 'Gmts.Wash', val: 'gmts_wash_cost' },
    { btn: 'Comml.Cost', val: 'coml_cost' },
    { btn: 'Commission', val: 'commission' },
    { btn: 'Other Cost', val: 'other_cost' }
  ];

precostings:PreCosting[];
OrderInfo:OrderInfo[];
subscription:Subscription;
Tostr=new Tostr();
  constructor(private precostingService:PrecostingService,
   private fetchInitialOrderService: FetchInitialOrderService,
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService) {
      this.refresList();
    }

  ngOnInit() {

   
    this.fetchInitialOrderService.getInitialAllOrderList().subscribe(data=>{
     this.OrderInfo=data;
     console.log(this.OrderInfo);
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    }
  
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    AddNewInpurRow(){
      this.subscription=   this.precostingService.getAllPrecosting().subscribe(data=>{
        this.precostings=data;
        this.precostings.unshift({ precostingId: 0, orderId: 0, costingDate: '', incoterm: '', incotermPlace: '',sewEfficiency:''});
        this.dataSource=new MatTableDataSource(this.precostings);
        console.log(this.precostings);
      })
    }
  
    save(element){
      console.log(element);
      this.precostingService.addPrecosting(element).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
        this.refresList();
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  
    }
  
    edit(element){
      console.log(element);
      this.precostingService.updatePrecosting(element).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
        this.refresList();
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    }
  
    delete(element){
      console.log(element);
      this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                 .afterClosed().subscribe(res=>{
                  if(res){
                    this.precostingService.deletePrecosting(element.id).subscribe(res=>{
                      this.refresList();
                      this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                  }
                 })
    }
  
    refresList(){
      this.subscription=this.precostingService.getAllPrecosting().subscribe(data=>{
        this.precostings=data;
        console.log(this.precostings);
        this.dataSource=new MatTableDataSource(this.precostings);     
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
     
    }
}

