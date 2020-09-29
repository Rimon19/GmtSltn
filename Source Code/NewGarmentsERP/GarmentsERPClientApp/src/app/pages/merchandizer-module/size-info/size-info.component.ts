import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'ngx-size-info',
  templateUrl: './size-info.component.html',
  styleUrls: ['./size-info.component.scss']
})
export class SizeInfoComponent implements OnInit {

  constructor(
    public dialogbox: MatDialogRef<SizeInfoComponent>,
  ) { }

  ngOnInit() {
  }


  onClose(){
        this.dialogbox.close();
      }

      
}
