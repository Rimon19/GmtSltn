import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Tostr } from '../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { SampleProductionTeam } from '../../../@core/data/Library-Modul-model/sample-production-team';
import { SampleProductionTeamService } from '../../../@core/mock/library/sample-production-team.service';
import { LocationService } from '../../../@core/mock/location.service';

@Component({
  selector: 'ngx-sample-production-team',
  templateUrl: './sample-production-team.component.html',
  styleUrls: ['./sample-production-team.component.scss']
})
export class SampleProductionTeamComponent implements OnInit {


  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
'id',
'teamName',
'location',
'numberofMembers',
'teamEfficiency',
'status'

  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  sampleProductionTeam:SampleProductionTeam[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     public sampleProductionTeamService:SampleProductionTeamService,
     private LocationService:LocationService
     ) { }
    

  ngOnInit() {
 this.getSewingLine();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val: 'Inactive' }
    ]
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-sample-production-team"]);
   
  }
    delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.sampleProductionTeamService.deleteSampleProductionTeam(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getSewingLine();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
    }
  getSewingLine(){
    this.subscription=this.sampleProductionTeamService.getSampleProductionTeam().subscribe(data=>{
      data.forEach(element => {
        this.LocationService.getAllLocations().subscribe(ele=>{
          let locationName=ele.find(f=>f.locationId==element.location)&&ele.find(f=>f.locationId==element.location).location_Name;
          element.location=locationName;
        })
      });
    this.sampleProductionTeam=data;
  
    this.dataSource=new MatTableDataSource(this.sampleProductionTeam);
    console.log('sampleProductionTeam',this.sampleProductionTeam);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-sample-production-team/",element.id]);  
      }


}
