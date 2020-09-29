import { Component, OnInit, ViewChild, Pipe, OnDestroy } from '@angular/core';
import { MarchandizerInfoService } from '../../../../@core/mock/marchandizer/marchandizer-info.service';
import { MarchandizerInfo } from '../../../../@core/data/marchanzider-model/marchandizer-info.model';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { TeamLeaderInfo } from '../../../../@core/data/marchanzider-model/team-leader-info.model';
import { UserData } from '../../../../@core/data/users';
import { TeamLeaderInfoService } from '../../../../@core/mock/marchandizer/team-leader-info.service';
import { UserService } from '../../../../@core/mock/users.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-show-merchandizer',
  templateUrl: './show-merchandizer.component.html',
  styleUrls: ['./show-merchandizer.component.scss']
})
export class ShowMerchandizerComponent implements OnInit ,OnDestroy{

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'userId', 'teamleaderId'];
  marchandInfo:MarchandizerInfo[];
  teamLeaderInfo:TeamLeaderInfo[];
  userInfo:UserData[];
  Tostr=new Tostr();
  subscription:Subscription;
  constructor(private marchandiserInfoService:MarchandizerInfoService,
    private teamLeaderService:TeamLeaderInfoService,
    private userService:UserService,
    private toastrService:NbToastrService,
    private mathdialogService: MatDialogService) {
    this.refresList();
   }

  ngOnInit() {

  this.subscription=  this.teamLeaderService.getAllTeamLeader().subscribe(data=>{
      this.teamLeaderInfo=data;
      console.log(this.teamLeaderInfo);
    })

    this.subscription=this.userService.getAllUser().subscribe(data=>{
      this.userInfo=data;
      console.log(this.userInfo);
      
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
    this.subscription=   this.marchandiserInfoService.getAllMarchandizer().subscribe(data=>{
      this.marchandInfo=data;
      this.marchandInfo.unshift({ id: 0, teamleaderId: 0, userId: 0, teamLeaderName: '', userName: ''});
      this.dataSource=new MatTableDataSource(this.marchandInfo);
      console.log(this.marchandInfo);
    })
  }

  save(element){
    console.log(element);
    this.marchandiserInfoService.addMarchandizer(element).subscribe(data=>{
      console.log(data);
      this.Tostr.showToast('primary',"", "Saved Successfully", "",this.toastrService);
      this.refresList();
    },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})

  }

  edit(element){
    console.log(element);
    this.marchandiserInfoService.updateMarchandizer(element).subscribe(data=>{
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
                  this.marchandiserInfoService.deleteMarchandizer(element.id).subscribe(res=>{
                    this.refresList();
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }

  refresList(){
    this.subscription= this.marchandiserInfoService.getAllMarchandizer().subscribe(data=>{
      this.marchandInfo=data;    
      this.dataSource=new MatTableDataSource(this.marchandInfo);
      console.log(this.marchandInfo);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
   
  }

}

// const ELEMENT_DATA: MarchandizerInfo[] = [
//   { id: 1,teamleaderId:0,userId:0, teamLeaderName:'',userName: ''}]

