import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import { SewingLineService } from '../../../../@core/mock/library/sewing-line.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-sewing-line',
  templateUrl: './edit-sewing-line.component.html',
  styleUrls: ['./edit-sewing-line.component.scss']
})
export class EditSewingLineComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr()
  constructor(
    public sewingLineService:SewingLineService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService,
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.sewingLineService.getSewingLine().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.sewingLineService.sewingLine=items;
    })
    }

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
  // company: any = [
  //   { btn: 'MEEK KHIT LIMITED', val: 'MEEK KHIT LIMITED' }
  // ]
  // locations: any = [
  //   { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
  //   { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
  // ]
  // floor: any = [
  //   { btn:'Cutting floor', val: 'Cutting floor' },
  //   { btn: 'Finishing floor', val: 'Finishing floor' },
  //   { btn: 'Iron floor', val: 'Iron floor' },
  //   { btn: 'Knitting floor', val: 'Knitting floor' },
  //   { btn: 'Sewing floor[3rd]', val: 'Sewing floor[3rd]' },
  //   { btn: 'Sewing floor[4th]', val: 'Sewing floor[4th]' },
  // ]
  // Active_Inactive: any = [
  //   // { btn: 'Select', val: 'Select' },
  //     { btn: 'Active', val: 'Active' },
  //     { btn: 'Inactive', val:'Inactive' },
  //     { btn: 'Cancelled', val:'Cancelled' }
  //   ]
 
    onSubmit(form:NgForm){
      form.value.id=this.editedId;
      this.sewingLineService.updateSewingLine(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/sewing-line']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backTo(){
    this.router.navigate(['/pages/sewing-line']);
  }
}
