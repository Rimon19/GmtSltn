import { Component } from '@angular/core';


@Component({
  selector: 'app-report-component',
  templateUrl: './report.component.html'
})


export class ReportComponent {
  public BuyerID: string;
  show: boolean = false;

  url: string;

  Clicked() {
    this.show = true;
    this.url = "api/SampleData/ShowReport/"+this.BuyerID;
  }

}
