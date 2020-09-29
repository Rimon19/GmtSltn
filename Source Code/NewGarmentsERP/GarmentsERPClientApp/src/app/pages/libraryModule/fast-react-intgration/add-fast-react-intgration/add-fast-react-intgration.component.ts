import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { FastReactIntgrationService } from '../../../../@core/mock/library/fast-react-intgration.service';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';
import { DateResizeService } from '../../../../@core/mock/marchandizer/date-resize.service';
@Component({
  selector: 'ngx-add-fPast-react-intgration',
  templateUrl: './add-fast-react-intgration.component.html',
  styleUrls: ['./add-fast-react-intgration.component.scss']
})
export class AddFastReactIntgrationComponent implements OnInit {

  Tostr=new Tostr();
  constructor(
    public fastReactIntgrationService:FastReactIntgrationService,
    private router:Router,
    private dateResizeService:DateResizeService,
    private toastrService:NbToastrService,
    ) { }

  ngOnInit() {
    this.resetFormForFastReactIntgration();
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
  exportmodule: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'All Modules', val: 'All Modules' }
     
    ]
   
    onSubmit(form:NgForm){
      form.value.exportPOReceivedfrom= this.dateResizeService.dateResize(form.value.exportPOReceivedfrom);
      this.fastReactIntgrationService.addFastReactIntgration(form.value).subscribe(res=>{
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.router.navigate(["/pages/fast-react-intgration"]);
      })
    } 

}
