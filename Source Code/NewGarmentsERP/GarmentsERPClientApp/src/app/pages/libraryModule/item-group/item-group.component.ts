import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { ItemGroupService } from '../../../@core/mock/library/item-group.service';
import { ItemCategoryService } from '../../../@core/mock/library/item-category.service';
import { ItemCategory } from '../../../@core/data/Library-Modul-model/item-category';




@Component({
  selector: 'ngx-item-group',
  templateUrl: './item-group.component.html',
  styleUrls: ['./item-group.component.scss']
})
export class ItemGroupComponent implements OnInit {

 
  public itemCategoryList:ItemCategory[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'itemCategoryId','groupCode','itemGroupName','itemType','orderUom','consUom','convFactor','fancyItem','calParameter'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private itemGroupService:ItemGroupService,
     private itemCategoryService:ItemCategoryService) { }

  ngOnInit() {
 this.refresList();
 
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-item-group"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-item-group/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.itemGroupService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.itemGroupService.getAll().subscribe(item=>{
     
       item.forEach(element => {

         this.itemCategoryService.getItemCategory().
         subscribe(data=>{
      
         let itemCategoryName=data.find(f=>f.id==element.itemCategoryId).itemCategoryName;
         element.itemCategoryId=itemCategoryName;
          });  

         });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
   
  }


}
