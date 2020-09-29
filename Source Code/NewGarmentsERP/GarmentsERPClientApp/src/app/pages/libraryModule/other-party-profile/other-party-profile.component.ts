import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { OtherPartyProfile } from '../../../@core/data/Library-Modul-model/other-party-profile';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { OtherPartyProfileService } from '../../../@core/mock/library/other-party-profile.service';

@Component({
  selector: 'ngx-other-party-profile',
  templateUrl: './other-party-profile.component.html',
  styleUrls: ['./other-party-profile.component.scss']
})
export class OtherPartyProfileComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   ['id','otherPartyName','contactPerson','designation','contactNo','status','email',
    
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  otherPartyProfile: OtherPartyProfile[]; 
  constructor(
     
     private toastrService:NbToastrService,
    
     private mathdialogService: MatDialogService,
     private router:Router,
     private otherPartyProfileService:OtherPartyProfileService,) { }
    

  ngOnInit() {
 this.getOtherPartyProfile();

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
    this.router.navigate(["/pages/add-other-party-profile"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.otherPartyProfileService.deleteOtherPartyProfile(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getOtherPartyProfile();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getOtherPartyProfile(){
    this.subscription=   this.otherPartyProfileService.getOtherPartyProfile().subscribe(data=>{
    this.otherPartyProfile=data;
   
    this.dataSource=new MatTableDataSource(this.otherPartyProfile);
    console.log('otherPartyProfile',this.otherPartyProfile);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-other-party-profile/",element.id]);  
      }
  

}
