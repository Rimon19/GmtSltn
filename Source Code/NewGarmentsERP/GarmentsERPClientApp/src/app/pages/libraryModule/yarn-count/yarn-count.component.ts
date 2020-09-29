import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';

@Component({
  selector: 'ngx-yarn-count',
  templateUrl: './yarn-count.component.html',
  styleUrls: ['./yarn-count.component.scss']
})
export class YarnCountComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['key', 'catagory','subCategory', 'name'];
  yarnCountInfo:any[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private yarnCountsService:YarnCountsService,
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
    this.router.navigate(["/pages/yarn-count-create"]);
   
  }


  save(element){


  }

  edit(element){
      this.router.navigate(["/pages/yarn-count-edit/",element.id]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnCountsService.deleteYarnCount(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.yarnCountsService.getAllYarnCount().subscribe(item=>{
      this.dataSource=new MatTableDataSource(item);
      console.log(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }
   
}
