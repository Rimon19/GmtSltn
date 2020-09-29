import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../@core/data/tostr.model';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { Subscription } from 'rxjs';
import { PartyTypeService } from '../../../@core/mock/library/party-type.service';
import { PartyType } from '../../../@core/data/Library-Modul-model/party-type';

@Component({
  selector: 'ngx-party-type',
  templateUrl: './party-type.component.html',
  styleUrls: ['./party-type.component.scss']
})
export class PartyTypeComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'partyTypeName','status'];
  Tostr=new Tostr();
  subscription:Subscription;
  partyType: PartyType[]; 
  constructor(
     
     private toastrService:NbToastrService,
     private mathdialogService: MatDialogService,
     private router:Router,
     private partyTypeService:PartyTypeService) { }
    

  ngOnInit() {
 this.getPartyTypeInfoDetails();

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
    this.router.navigate(["/pages/add-party-type"]);
   
  }
     delete(element){
    console.log(element);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.partyTypeService.deletePartyType(element.id).subscribe(res=>{
                    
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.getPartyTypeInfoDetails();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
      }
      getPartyTypeInfoDetails(){
    this.subscription=   this.partyTypeService.getPartyType().subscribe(data=>{
    this.partyType=data;
    
    this.dataSource=new MatTableDataSource(this.partyType);
    console.log('po details',this.partyType);
  });
        }
        edit(element){
          this.router.navigate(["/pages/edit-party-type/",element.id]);  
        }
  
}
