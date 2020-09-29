import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { SampleProductionTeamService } from '../../../../@core/mock/library/sample-production-team.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-sample-production-team',
  templateUrl: './edit-sample-production-team.component.html',
  styleUrls: ['./edit-sample-production-team.component.scss']
})
export class EditSampleProductionTeamComponent implements OnInit {

  Tostr=new Tostr();
  editedId:any;
  constructor(
    public sampleProductionTeamService:SampleProductionTeamService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.sampleProductionTeamService.getSampleProductionTeam().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.sampleProductionTeamService.sampleProductionTeam=items;
    })

    }

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
    form.value.id=this.editedId;
      this.sampleProductionTeamService.updateSampleProductionTeam(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/sample-production-team']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/sample-production-team']);
  }
}
