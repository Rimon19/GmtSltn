import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'ngx-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @ViewChild('epltable', { static: false }) epltable: ElementRef;
  public BuyerID: string;
  show: boolean = false;
  url: string;
  isShown: boolean = false ;

  //  html: string;
  //  flag: boolean;
  //  report: string;
  constructor() { }

  ngOnInit() {
    
  }

  Clicked() {
     this.show = true;
     this.url = "http://localhost:4186/api/Report/ShowReport/"+this.BuyerID;

//     this.flag = false;
//  this.http.get("http://localhost:4186/api/Report/ShowReport/"+this.BuyerID, { headers: { 'Accept': 'text/html' }, responseType: 'text' as 'text' }).subscribe((data: string) => { this.html = data; this.flag = true });
 
  }
  toggleShow() {

    this.isShown = ! this.isShown;
    
    }


    exportToExcel() {
      this.url = "http://localhost:4186/api/Report/ExportPDF/"+this.BuyerID;
     }

}
