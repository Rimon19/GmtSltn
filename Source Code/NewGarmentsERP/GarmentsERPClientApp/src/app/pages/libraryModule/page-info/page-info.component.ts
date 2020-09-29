import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { PageInfo } from '../../../@core/data/Library-Modul-model/page-info';
import { PageInfoService } from '../../../@core/mock/library/page-info.service';


@Component({
  selector: 'ngx-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'pageName','pageLink','status'];
  pageInfo:PageInfo[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private pageInfoService:PageInfoService,
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
    this.router.navigate(["/pages/page-info-create"]);
   
  }


  save(element){


  }

  edit(element){
      this.router.navigate(["/pages/page-info-edit/",element.id]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.pageInfoService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.pageInfoService.getAll().subscribe(item=>{
      this.dataSource=new MatTableDataSource(item);
      console.log(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }


}
