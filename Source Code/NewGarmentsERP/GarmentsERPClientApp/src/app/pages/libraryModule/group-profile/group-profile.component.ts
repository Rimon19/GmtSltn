import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupProfile } from '../../../@core/data/Library-Modul-model/group-profile';
import { Subscription } from 'rxjs';
import { Tostr } from '../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Router } from '@angular/router';
import { GroupProfileService } from '../../../@core/mock/library/group-profile.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'ngx-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.scss']
})
export class GroupProfileComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns =
   [
    'id',
    'groupName',
    'contactPerson',
    'contactNumber',
    'website',
    'address',
    'status'
  ];
  
  Tostr=new Tostr();
  subscription:Subscription;
  groupProfile: GroupProfile[]; 
  constructor(
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private groupProfileService:GroupProfileService) { }
    

  ngOnInit() {
 this.getGroupProfile();

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }
 
  AddNewInpurRow(){
    this.router.navigate(["/pages/add-group-profile"]);
   
  }
  delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.groupProfileService.deleteGroupProfile(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getGroupProfile();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
  getGroupProfile(){
    this.subscription=   this.groupProfileService.getGroupProfile().subscribe(data=>{
    this.groupProfile=data;
   
    this.dataSource=new MatTableDataSource(this.groupProfile);
    console.log('groupProfile',this.groupProfile);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-group-profile/",element.id]);  
      }
  

}
