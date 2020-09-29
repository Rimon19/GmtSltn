import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { YarnBrandInfoService } from '../../../@core/mock/library/yarn-brand-info.service';
import { YarnBrandInfo } from '../../../@core/data/Library-Modul-model/yarn-brand-info';

@Component({
  selector: 'ngx-yarn-brand',
  templateUrl: './yarn-brand.component.html',
  styleUrls: ['./yarn-brand.component.scss']
})
export class YarnBrandComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'yarnBrandName','sequenceNo', 'status'];
  //yarnCountInfo:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private yarnBrandInfoService:YarnBrandInfoService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router) { }

  ngOnInit() {
  
   this.refresList();
 

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-yarn-brand"]);
   
  }




  edit(element){
      this.router.navigate(["/pages/yarn-brand-edit/",element.yarnBrandId]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnBrandInfoService.deleteYarnBrandInfo(element.yarnBrandId).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.yarnBrandInfoService.getYarnBrandInfo().subscribe(item=>{
      this.dataSource=new MatTableDataSource(item);
     
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }
}
