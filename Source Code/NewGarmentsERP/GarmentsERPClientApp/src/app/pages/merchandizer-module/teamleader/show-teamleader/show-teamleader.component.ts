import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { TeamLeaderInfoService } from '../../../../@core/mock/marchandizer/team-leader-info.service';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Subscription } from 'rxjs';
import { TeamLeaderInfo } from '../../../../@core/data/marchanzider-model/team-leader-info.model';
import { Tostr } from '../../../../@core/data/tostr.model';
import { UserService } from '../../../../@core/mock/users.service';
import { UserData } from '../../../../@core/data/users';

@Component({
  selector: 'ngx-show-teamleader',
  templateUrl: './show-teamleader.component.html',
  styleUrls: ['./show-teamleader.component.scss']
})
export class ShowTeamleaderComponent implements OnInit {
 
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = [ 'teamleaderId','userId'];
  subscription:Subscription;
  Tostr=new Tostr();
  teamLeaderInfo:TeamLeaderInfo[];
  userInfo:UserData[];
  constructor(
    private teamLeaderService:TeamLeaderInfoService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService,
    private userService:UserService) {
      this.refresList();
     }
  ngOnInit() {

    this.subscription=  this.userService.getAllUser().subscribe(data=>{
        this.userInfo=data;
        console.log(this.userInfo);

        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })  
      
     
   
    }
    ngOnDestroy(){
    this.subscription.unsubscribe();
    }
  
  
    applyFilter(filterValue: string) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
    }
    AddNewInpurRow(){
      this.subscription=   this.teamLeaderService.getAllTeamLeader().subscribe(data=>{
        this.teamLeaderInfo=data;
        this.teamLeaderInfo.unshift({ teamleaderId: 0, userId: 0});
        this.dataSource=new MatTableDataSource(this.teamLeaderInfo);
        console.log(this.teamLeaderInfo);
      })
    }
  
    save(element){
      
      this.teamLeaderService.addTeamLeader(element).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
        this.refresList();
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  
    }
  
    edit(element){
      console.log(element);
      this.teamLeaderService.updateTeamLeader(element).subscribe(data=>{
        console.log(data);
        this.Tostr.showToast('primary',"", "Updated Successfully", "",this.toastrService);
        this.refresList();
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
    }
  
    delete(element){
      console.log(element);
      this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
                 .afterClosed().subscribe(res=>{
                  if(res){
                    this.teamLeaderService.deleteTeamLeader(element.teamleaderId).subscribe(res=>{
                      this.refresList();
                      this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                  }
                 })
    }
  
    refresList(){
      this.subscription= this.teamLeaderService.getAllTeamLeader().subscribe(data=>{
        this.teamLeaderInfo=data;    
        this.dataSource=new MatTableDataSource(this.teamLeaderInfo);
        console.log(this.teamLeaderInfo);
      })
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }
  
 
}



