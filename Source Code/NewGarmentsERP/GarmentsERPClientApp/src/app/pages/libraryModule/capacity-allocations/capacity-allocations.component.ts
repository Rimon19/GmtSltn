import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CapacityAllocationsService } from '../../../@core/mock/library/capacity-allocations.service';
import { CapacityAllocations } from '../../../@core/data/Library-Modul-model/capacity-allocations';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-capacity-allocations',
  templateUrl: './capacity-allocations.component.html',
  styleUrls: ['./capacity-allocations.component.scss']
})
export class CapacityAllocationsComponent implements OnInit {

  public yearListItems:any[]=[];
  public monthListItems:any[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'company',
    'location',
    'yearId',
    'monthId'
    
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  capacityAllocations:CapacityAllocations[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private staticFeaturesService:StaticFeaturesService,
     public capacityAllocationsService:CapacityAllocationsService,) { }
    

  ngOnInit() {
 this.getCapacityAllocations();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }

  AddNewInpurRow(){
    this.router.navigate(["/pages/add-capacity-allocations"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.capacityAllocationsService.deleteCapacityAllocations(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getCapacityAllocations();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getCapacityAllocations(){
    this.subscription=   this.capacityAllocationsService.getCapacityAllocations().subscribe(data=>{
    this.capacityAllocations=data; 
    this.capacityAllocations.forEach((res)=>{
      this.staticFeaturesService.getAllYears().
      subscribe(data=>{
      this.yearListItems=data;
      let yearName=this.yearListItems.find(data=>data.id==res.yearId).year;
         res.yearId=yearName;
            });
     })
     this.capacityAllocations.forEach((res)=>{
       this.staticFeaturesService.getAllMonths().subscribe((data)=>{
        this.monthListItems=data;
        let monthlistName=this.monthListItems.find((data)=>data.id==res.monthId).monthName;
        res.monthId=monthlistName;
       })
     })
    this.dataSource=new MatTableDataSource(this.capacityAllocations);
    console.log('capacityAllocations',this.capacityAllocations);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-capacity-allocations/",element.id]);  
      }

}
