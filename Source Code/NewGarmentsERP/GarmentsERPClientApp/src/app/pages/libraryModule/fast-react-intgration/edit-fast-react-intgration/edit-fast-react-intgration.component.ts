import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FastReactIntgrationService } from '../../../../@core/mock/library/fast-react-intgration.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DropdownValueService } from '../../../../@core/mock/shared/dropdown-value.service';

@Component({
  selector: 'ngx-edit-fast-react-intgration',
  templateUrl: './edit-fast-react-intgration.component.html',
  styleUrls: ['./edit-fast-react-intgration.component.scss']
})
export class EditFastReactIntgrationComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  constructor(
    public fastReactIntgrationService:FastReactIntgrationService,
    private router:Router,
    private route:ActivatedRoute,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    public dropdownValueService:DropdownValueService
    ) {
      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.fastReactIntgrationService.getAllFastReactIntgration().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.fastReactIntgrationService.fastReactIntgration=items;
    })


     }

  ngOnInit() {
    this.resetFormForFastReactIntgration();
    this.dropdownValueService.getModule();
  }
  resetFormForFastReactIntgration(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.fastReactIntgrationService.fastReactIntgration = {
      id: 0,
      exportPOReceivedfrom:'',
      exportModule: '',
      
    }
  }
  // exportmodule: any = [
  //   // { btn: 'Select', val: 'Select' },
  //     { btn: 'All Modules', val: 'All Modules' }
     
  //   ]
  onSubmit(form:NgForm){
    form.value.id=this.editedId;
      form.value.exportPOReceivedfrom= this.dateResizeService.dateResize(form.value.exportPOReceivedfrom);
      this.fastReactIntgrationService.updateFastReactIntgration(form.value).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/fast-react-intgration']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/fast-react-intgration']);
  }

}
