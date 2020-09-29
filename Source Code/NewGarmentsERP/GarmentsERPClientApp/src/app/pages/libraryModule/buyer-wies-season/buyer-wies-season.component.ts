import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { BuyerWiesSeason } from '../../../@core/data/Library-Modul-model/buyer-wies-season.model';
import { BuyerWiesSeasonService } from '../../../@core/mock/library/buyer-wies-season.service';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';

@Component({
  selector: 'ngx-buyer-wies-season',
  templateUrl: './buyer-wies-season.component.html',
  styleUrls: ['./buyer-wies-season.component.scss']
})
export class BuyerWiesSeasonComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'buyerId','seasonName'];
  Tostr=new Tostr();
  subscription:Subscription;
  buyerWiesSeason: BuyerWiesSeason[]; 

  constructor( private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private router:Router,
    private buyerWiesSeasonService:BuyerWiesSeasonService,
    private buyerProfileService:BuyerProfileService) { }

  ngOnInit() {
    this.refresList();
  } 

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/Buyer-Wies-Season-create"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
              .afterClosed().subscribe(res=>{
                if(res){
                  this.buyerWiesSeasonService.delete(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getBuyerWiesSeasonEntryInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
              })
  }
  getBuyerWiesSeasonEntryInfoDetails(){
            this.subscription=   this.buyerWiesSeasonService.getAll().subscribe(data=>{
            this.buyerWiesSeason=data;
            
            this.dataSource=new MatTableDataSource(this.buyerWiesSeason);
            console.log('po details',this.buyerWiesSeason);
          });
  }
  edit(element){
    this.router.navigate(["/pages/Buyer-Wies-Season-edit/",element.id]);  
  }
  refresList(){
    
    this.buyerWiesSeasonService.getAll().subscribe(item=>{

      item.forEach(element => {

        this.buyerProfileService.getAll().
        subscribe(data=>{
     
        let buyerName =data.find(f=>f.id==element.buyerId).contactName;
        element.buyerId=buyerName;
         });  

        });
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
