import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbComponentStatus, NbDialogService, NbToastrService } from '@nebular/theme';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Subscription } from 'rxjs';
import { location } from '../../../../@core/data/location';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationService } from '../../../../@core/mock/location.service';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-show-location',
  templateUrl: './show-location.component.html',
  styleUrls: ['./show-location.component.scss']
})
export class ShowLocationComponent implements OnInit,OnDestroy {
 
  status: NbComponentStatus = 'primary';

  Tostr=new Tostr();
  location:location;
  subscription:Subscription;
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true
    },
     edit: {
       
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true
    },
    
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    details: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      locationId: {
        title: 'locationId',
        type: 'int',
        "show": false
      },
      location_Name: {
        title: 'Location Name',
        type: 'string',
       
      },
      
     
    },
  };
  source: LocalDataSource = new LocalDataSource();  
  public locationListItems: Array<location> = [];
   constructor(private locationService: LocationService,
    private mathdialogService: MatDialogService,    
    private toastrService:NbToastrService
    ) {
   
    }
   
 
  ngOnInit() {
    this.refreshcompanyList();
    if (this.settings.columns["locationId"].hasOwnProperty("show")) {
      if (this.settings.columns["locationId"].show ==false) {
       delete  this.settings.columns["locationId"];
         
      }
}
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  refreshcompanyList(){
   this.subscription= this.locationService.getAllLocations().subscribe(data=>{
      this.source.load(data);
      this.locationListItems=data;
      console.log(this.locationListItems);
    });
  }
  

  addRecord(event) {
    console.log(event);
    this.location = {
      locationId:0,
      location_Name : event.newData.location_Name
                
   };
  console.log(this.location);
    if(this.location.location_Name!=""){
    this.subscription=  this.locationService.addLocation(this.location).subscribe(s=>{
      
       this.Tostr.showToast(this.status,"", "Saved Successfully", "",this.toastrService);
       this.refreshcompanyList();

     })
   }else{
     
      this.Tostr.showToast("danger","Location Name ", "Filed is Requird ! ", "",this.toastrService);
    
   }
  
   }
   
   updateRecord(event) {
       this.location = {
               locationId:event.newData.locationId,
               location_Name : event.newData.location_Name
              };

              if(this.location.location_Name!=""){
                this.subscription= this.locationService.updateLocation(this.location).subscribe(s=>{
                  this.Tostr.showToast(this.status,"", "Updated Successfully", "",this.toastrService);
                  this.refreshcompanyList();
                })
              }
              else{
               
                 this.Tostr.showToast("danger","Location Name ", "Filed is Requird ! ", "",this.toastrService);
                
               
            
              }
     }  

    deleteRecord(event){
               console.log(event.data.locationId);
               this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.locationService.deleteLocation(event.data.locationId).subscribe(res=>{
                    this.Tostr.showToast(this.status,"", "Deleleted", "Successfully",this.toastrService);
                    this.refreshcompanyList();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
          
           }                       
          
         
}
