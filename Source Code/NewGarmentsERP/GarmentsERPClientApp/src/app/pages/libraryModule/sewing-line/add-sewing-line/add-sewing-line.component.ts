import { Component, OnInit } from '@angular/core';
import { SewingLineService } from '../../../../@core/mock/library/sewing-line.service';
import { NgForm } from '@angular/forms';
import { Tostr } from '../../../../@core/data/tostr.model';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-sewing-line',
  templateUrl: './add-sewing-line.component.html',
  styleUrls: ['./add-sewing-line.component.scss']
})
export class AddSewingLineComponent implements OnInit {
  Tostr=new Tostr()
  constructor(
    public sewingLineService:SewingLineService,
    private router:Router,
    private dropdownValueService:DropdownValueService,
    private toastrService:NbToastrService,
    ) { }

  ngOnInit() {
    this.resetFormForsewingLine();
    this.dropdownValueService.getCompany();
    this.dropdownValueService.getLocation();
    this.dropdownValueService.getFloors();
    this.dropdownValueService.getStatus();
  }
  resetFormForsewingLine(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.sewingLineService.sewingLine = {
  id:0,
  companyId:'',
  locationId:'',
  floorId:'',
  sewingLineSequence:0,
  lineName:'',
  sewingGroup:'',
  status:'', 
    }
    
     }
    onSubmit(form:NgForm){
      this.sewingLineService.addSewingLine(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/sewing-line"]);
      })
    }

    backTo(){
      this.router.navigate(['/pages/sewing-line']);
    }
}
