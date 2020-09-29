import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { PageInfo } from '../../../@core/data/Library-Modul-model/page-info';
import { TermsAndConditionService } from '../../../@core/mock/library/terms-and-condition.service';


@Component({
  selector: 'ngx-terms-and-condition',
  templateUrl: './terms-and-condition.component.html',
  styleUrls: ['./terms-and-condition.component.scss']
})
export class TermsAndConditionComponent implements OnInit {
 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'termsnCondition','moreTermsNCondition','pages'];
  pageInfo:PageInfo[]=[];
  Tostr=new Tostr();
  subscription:Subscription;
  result:string='';
  constructor(private termsAndConditionService:TermsAndConditionService,
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
    this.router.navigate(["/pages/terms-and-condition-create"]);
   
  }


  save(element){


  }

  edit(element){
      this.router.navigate(["/pages/terms-and-condition-edit/",element.id]);  
  }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.termsAndConditionService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.termsAndConditionService.getAll().subscribe(item=>{
      console.log(item);
     
        this.termsAndConditionService.getAllSubTable().subscribe(data=>{
          item.forEach(element => {
              console.log(data);
            let d=  data.filter(f=>f.termsNConditionId==element.id);
            d.forEach(e => {
             this.result +=e.pageNames+",";
            // this.result= this.result+e.pageNames+',';
            });
            console.log(this.result);
            element.pages=this.result;
          });
        })

        
      this.dataSource=new MatTableDataSource(item);
     
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
   
   
   
    })
   
  }


}
