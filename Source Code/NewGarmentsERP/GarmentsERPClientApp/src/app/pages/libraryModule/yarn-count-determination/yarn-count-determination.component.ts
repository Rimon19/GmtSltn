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
import { YarnCountDeterminationService } from '../../../@core/mock/library/yarn-count-determination.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-yarn-count-determination',
  templateUrl: './yarn-count-determination.component.html',
  styleUrls: ['./yarn-count-determination.component.scss']
})
export class YarnCountDeterminationComponent implements OnInit {

  countryLocationMapping:CountryLocationMapping[]
  public countryList:CountryInfo[]=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'fabricNature','construction','colorRange','gsm','stitchLength','processLoss','compositionId'];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(public yarnCountDeterminationService:YarnCountDeterminationService,
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private dropdownValueService:DropdownValueService
    
   ) { }

  ngOnInit() {
    this.dropdownValueService.getYarnCount();
 this.refresList();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-yarn-count-determination"]);
   
  }
  edit(element){
    this.router.navigate(["/pages/edit-yarn-count-determination/",element.id]);  
}

  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.yarnCountDeterminationService.delete(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }


  refresList(){
    
    this.yarnCountDeterminationService.getAll().subscribe(item=>{
      // console.log(item);
      // item.forEach(el => {
      //   console.log(el.yarnCountDeterminationChildList);
      //   let compName='';
      //   el.yarnCountDeterminationChildList.forEach(element => {
      //   let yarnObj= this.dropdownValueService.yarnCountList.find(f=>f.id==element.yarnCountId);
      
      //    compName=compName+element.compositionName+' '+element.percentage+' '+yarnObj.name+' '+element.type+', ';
      //   });
      //  el.status=compName;
      // });
      console.log(item);
      this.dataSource=new MatTableDataSource(item);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    
    });
  }


      


}
