import { Injectable } from '@angular/core';
import { MatConfirmDialogComponent } from '../../pages/merchandizer-module/mat-confirm-dialog/mat-confirm-dialog.component';
import { MatDialog } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MatDialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       position: { top: "10px" },
       data :{
         message : msg
       }
     });
   }

   delete(element){
    console.log(element);
    this.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  // this.colourEntryService.deleteColourEntry(element.id).subscribe(res=>{
                    
                  //   this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                  
                  // },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
   
}
