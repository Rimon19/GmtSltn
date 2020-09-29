import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { YarnBrandInfo } from '../../../@core/data/Library-Modul-model/yarn-brand-info';
import { YarnCountsService } from '../../../@core/mock/marchandizer/yarn-counts.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { YarnBrandInfoService } from '../../../@core/mock/library/yarn-brand-info.service';
import { CountryLocationMappingService } from '../../../@core/mock/library/country-location-mapping.service';
import { CountryLocationMapping } from '../../../@core/data/Library-Modul-model/country-location-mapping';
import { CountryInfo } from '../../../@core/data/country-info.model';
import { CountryService } from '../../../@core/mock/country.service';


@Component({
  selector: 'ngx-country-location-mapping',
  templateUrl: './country-location-mapping.component.html',
  styleUrls: ['./country-location-mapping.component.scss']
})
export class CountryLocationMappingComponent implements OnInit {
  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'countryId','ultimateCountryName'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private countryLocationMappingService:CountryLocationMappingService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private countryService:CountryService,
     private router:Router,
     private regionService:CountryService) { }

  ngOnInit() {
 this.getCountryLocationMapping();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-country-location-mapping"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-country-location-mapping",element.id]);
    }

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.countryLocationMappingService.deleteCountryLocationMapping(element.id).subscribe(res=>{
                    this.getCountryLocationMapping();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getCountryLocationMapping(){
    this.subscription=   this.countryLocationMappingService.getCountryLocationMapping().subscribe(data=>{

       data.forEach(element => {
         
        this.regionService.getAllCountry().subscribe(ele=>{
         let countryName = ele.find(f=>f.regionID==element.countryId).region_Name && ele.find(f=>f.regionID==element.countryId).region_Name;
         element.countryId=countryName;
        })

       });


    this.countryLocationMapping=data;
    this.dataSource=new MatTableDataSource(this.countryLocationMapping);

    
  });
        }
    
}
