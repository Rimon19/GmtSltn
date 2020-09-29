import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { SampleProductionTeamService } from '../../../../@core/mock/library/sample-production-team.service';
import { Tostr } from '../../../../@core/data/tostr.model';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-add-sample-production-team',
  templateUrl: './add-sample-production-team.component.html',
  styleUrls: ['./add-sample-production-team.component.scss']
})
export class AddSampleProductionTeamComponent implements OnInit {

  Tostr=new Tostr()
  constructor(
    public sampleProductionTeamService:SampleProductionTeamService,
    private router:Router,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { }

  ngOnInit() {
    this.resetFormForSampleProductionTeam();
    this.dropdownValueService.getLocation();
  }
  resetFormForSampleProductionTeam(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.sampleProductionTeamService.sampleProductionTeam = {
  id:0,
  teamName:'',
  location:'',
  numberofMembers:0,
  teamEfficiency:0,
  status:''
    }
    
     }
  Active_Inactive: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Active', val: 'Active' },
      { btn: 'Inactive', val:'Inactive' },
      { btn: 'Cancelled', val:'Cancelled' }
    ]
    // locations: any = [
    //   { btn:'923,928 &930 Vogra,Gagipur,Bangladesh', val: '923,928 &930 Vogra,Gagipur,Bangladesh' },
    //   { btn: 'South Salna,Gazipur', val: 'South Salna,Gazipur' }
    // ]
    onSubmit(form:NgForm){
      this.sampleProductionTeamService.addSampleProductionTeam(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/sample-production-team"]);
      })
    }

    backHomePage(){
      this.router.navigate(['/pages/sample-production-team']);
    }
}
