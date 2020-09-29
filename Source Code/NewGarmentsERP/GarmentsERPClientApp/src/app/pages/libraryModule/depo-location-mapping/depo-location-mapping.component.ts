import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { CountryLocationMapping } from '../../../@core/data/Library-Modul-model/country-location-mapping';
import { CountryInfo } from '../../../@core/data/country-info.model';
import { CountryService } from '../../../@core/mock/country.service';
import { DepoLocationMappingService } from '../../../@core/mock/library/depo-location-mapping.service';
import { CountryLocationMappingService } from '../../../@core/mock/library/country-location-mapping.service';
import { UtilityService } from '../../../@core/mock/shared/utility.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-depo-location-mapping',
  templateUrl: './depo-location-mapping.component.html',
  styleUrls: ['./depo-location-mapping.component.scss']
})
export class DepoLocationMappingComponent implements OnInit {

  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'countryId','ultimateCountryId','countryDepoName','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private depoLocationMappingService:DepoLocationMappingService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private countryLocationMappingService:CountryLocationMappingService,
    
    ) { }

  ngOnInit() {
 this.refresList();

  }
 
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/depo-location-mapping-create"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/depo-location-mapping-edit/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.depoLocationMappingService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.depoLocationMappingService.getAll().subscribe(item=>{
     
      item.forEach(element => {

        this.countryService.getAllCountry().
        subscribe(data=>{
        this.countryList=data;
        let countryName=this.countryList.find(f=>f.regionID==element.countryId).region_Name;
        element.countryId=countryName;
          });  
          
        this.countryLocationMappingService.getCountryLocationMapping().subscribe(data=>{
          let ultimateCountryName=data.find(f=>f.id==element.ultimateCountryId).ultimateCountryName;
          element.ultimateCountryId=ultimateCountryName;
        })
          
        });
     
      
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }


      

}
