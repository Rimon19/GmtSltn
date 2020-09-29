import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { SizeEntryService } from '../../../@core/mock/library/size-entry.service';
import { SizeEntry } from '../../../@core/data/Library-Modul-model/size-entry';


@Component({
  selector: 'ngx-size-entry',
  templateUrl: './size-entry.component.html',
  styleUrls: ['./size-entry.component.scss']
})
export class SizeEntryComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'sinzeName','sequence', 'status'];
  yarnCountInfo:SizeEntry[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private sizeEntryService:SizeEntryService,
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
    this.router.navigate(["/pages/size-entry-create"]);
   
  }


  save(element){


  }

  edit(element){
      this.router.navigate(["/pages/size-entry-edit/",element.id]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sizeEntryService.deleteSizeEntry(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.sizeEntryService.getSizeEntry().subscribe(item=>{
      this.dataSource=new MatTableDataSource(item);
      console.log(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}
