import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { YarnDyeingWoDetailService } from '../../../../@core/mock/marchandizer/yarn-dyeing-wo-detail.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';
import { DatapassingService } from '../../../../@core/mock/shared/datapassing.service';
import { NgForm } from '@angular/forms';
import { ApprovedBy } from '../../../../@core/data/Shared/approved-by';
import { EntryBy } from '../../../../@core/data/Shared/entry-by';
import { parse } from 'querystring';

@Component({
  selector: 'ngx-yarn-dyeing-wodetails',
  templateUrl: './yarn-dyeing-wodetails.component.html',
  styleUrls: ['./yarn-dyeing-wodetails.component.scss']
})
export class YarnDyeingWODetailsComponent implements OnInit {
  editedId;
  Tostr=new Tostr();
  yarnDyeingwoId:number=0;
  
  constructor(
  public yarnDyeingWoDetailService:YarnDyeingWoDetailService,
  private router:Router,
  private dateResizeService:DateResizeService,
  private datapassingService:DatapassingService,
  private toastrService:NbToastrService,
  private route:ActivatedRoute,
  private dropdownValueService:DropdownValueService
    ) { 
       
    this.editedId = this.route.snapshot.paramMap.get('id');
    if(this.editedId!=0)
    {
    this.yarnDyeingWoDetailService.getAll().subscribe(data=>{
   let items=  data.find(f=>f.id==this.editedId);
   this.yarnDyeingWoDetailService.yarnDyeingWoDetail=items;
    });
  }
    }

  ngOnInit() {
    this.resetForm();
    this.dropdownValueService.getYarnCount();
this.dropdownValueService.getColor();
this.dropdownValueService.getColorRange();
this.dropdownValueService.getUom();
  this.datapassingService.getValue().subscribe(data=>{
   // console.log(data);
       this.yarnDyeingwoId=data;
     })

  }

   resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail = {
    id: 0,
    jobNo: '' ,
    yarnDyeingWOId:0,
lotNo: '' ,
countId: '' ,
yarnDescription: '' ,
yarnColorId: '' ,
colorRangeId: '' ,
refNo: '' ,
uomId: '' ,
bookingBalance: 0 ,
yarnWoQnty: '',
dyeingCharge: 0,
amount: 0 ,
noofBag: 0 ,
noofCone:0 ,
minReqCone:0 ,
fileNo: '' ,
internalRefNo: '' ,
remarks: '' ,

    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }


  onSubmit(){  
    

    
      this.yarnDyeingWoDetailService.yarnDyeingWoDetail.yarnDyeingWOId=this.yarnDyeingwoId;
   
      if(this.yarnDyeingWoDetailService.yarnDyeingWoDetail.countId==''){
        this.yarnDyeingWoDetailService.yarnDyeingWoDetail.countId=0;
      }

      if(this.yarnDyeingWoDetailService.yarnDyeingWoDetail.yarnWoQnty==''){
        this.yarnDyeingWoDetailService.yarnDyeingWoDetail.yarnWoQnty=0;
      }
      
      
      if(this.yarnDyeingWoDetailService.yarnDyeingWoDetail.colorRangeId==''){
        this.yarnDyeingWoDetailService.yarnDyeingWoDetail.colorRangeId=0;
      }
      
      if(this.yarnDyeingWoDetailService.yarnDyeingWoDetail.uomId==''){
        this.yarnDyeingWoDetailService.yarnDyeingWoDetail.uomId=0;
      }
      
    

  
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail.approvedDate=this.dateResizeService.dateResize(new Date);
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail.approvedBy=ApprovedBy.userName;
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail.isApproved=true;
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail.entryBy=EntryBy.userName;
  this.yarnDyeingWoDetailService.yarnDyeingWoDetail.status='Active';
this.yarnDyeingWoDetailService.yarnDyeingWoDetail.entryDate=this.dateResizeService.dateResize(new Date);
if(this.yarnDyeingWoDetailService.yarnDyeingWoDetail.id==0){
  this.yarnDyeingWoDetailService.add(this.yarnDyeingWoDetailService.yarnDyeingWoDetail).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.resetForm();
   this.router.navigate(["/pages/show-YarnDyeingWODetails"]);
   
  })
}
else{
  this.yarnDyeingWoDetailService.update(this.yarnDyeingWoDetailService.yarnDyeingWoDetail).subscribe(res=>{
    console.log(res);       
   this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
   this.resetForm();
   this.router.navigate(["/pages/show-YarnDyeingWODetails"]);
   
  })
}
    
  }


    backTo(){
      this.router.navigate(['/pages/show-YarnDyeingWODetails']);
    }

}
