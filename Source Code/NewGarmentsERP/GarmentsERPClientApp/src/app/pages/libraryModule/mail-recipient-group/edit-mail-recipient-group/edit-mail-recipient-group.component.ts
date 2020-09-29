import { Component, OnInit } from '@angular/core';
import { Tostr } from '../../../../@core/data/tostr.model';
import { MailRecipientGroupService } from '../../../../@core/mock/library/mail-recipient-group.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-mail-recipient-group',
  templateUrl: './edit-mail-recipient-group.component.html',
  styleUrls: ['./edit-mail-recipient-group.component.scss']
})
export class EditMailRecipientGroupComponent implements OnInit {
  editedId:any;
  Tostr=new Tostr();
  constructor(
    public mailRecipientGroupService:MailRecipientGroupService,
    private router:Router,
    private route:ActivatedRoute,
    private toastrService:NbToastrService,
    ) { 

      this.editedId = this.route.snapshot.paramMap.get('id');
      console.log(this.editedId);
      this.mailRecipientGroupService.getAllMailRecipientGroup().subscribe(item=>{
     let items=  item.find(f=>f.id==this.editedId);
     this.mailRecipientGroupService.mailRecipientGroup=items;
    })

    }

  ngOnInit() {
    this.resetFormForEmailAddressSetup();
  }
  resetFormForEmailAddressSetup(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.mailRecipientGroupService.mailRecipientGroup = {
      id: 0,
      companyName:'',
      mailItem: '',
      youHaveSelected:'',
      status:'',
    }
  }
  companyname: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'MEEK KNIT LIMITED', val: 'MEEK KNIT LIMITED' }
    ]
    mailitem: any = [
    // { btn: 'Select', val: 'Select' },
      { btn: 'Below 5% Profitability Order', val: 'Below 5% Profitability Order' },
      { btn: 'Bill of Entry overdue list', val: 'Bill of Entry overdue list' },
      { btn: 'Bill of lading delay (Commercial)', val: 'Bill of lading delay (Commercial)' },
      { btn: 'Booking Revised', val: 'Booking Revised' },
      { btn: 'Cancelled Order', val: 'Cancelled Order' },
      { btn: 'Daily Order Entry', val: 'Daily Order Entry' },
      { btn: 'Daily Producion Auto Mail', val: 'Daily Producion Auto Mail' },
      { btn: 'Fabric Booking Revised', val: 'Fabric Booking Revised' },
      { btn: 'Finish Fabric Receive', val: 'Finish Fabric Receive' },
      { btn: 'Grey Fabric Receive', val: 'Grey Fabric Receive' },
      { btn: 'Less EPM than CPM', val: 'Less EPM than CPM' },
      { btn: 'Machine Summary Below 80 % production', val: 'Machine Summary Below 80 % production' },
      { btn: 'Missing PO List in TNA Process', val: 'Missing PO List in TNA Process' },
      { btn: 'Monthly capacity vs booked auto mail', val: 'Monthly capacity vs booked auto mail' },
      { btn: 'Order Position By Team', val: 'Order Position By Team' },
      { btn: 'Order Revised', val: 'Order Revised' },
      { btn: 'Pending pi for approval auto mail', val: 'Pending pi for approval auto mail' },
      { btn: 'Precost approval auto mail', val: 'Precost approval auto mail' },
      { btn: 'Price Quotation Approval Status', val: 'Price Quotation Approval Status' },
      { btn: 'Price Quotation Mail Notification', val: 'Price Quotation Mail Notification' },
      { btn: 'Returnable Pending', val: 'Returnable Pending' },
      { btn: 'Sample Finish Fabric Pending Auto Mail', val: 'Sample Finish Fabric Pending Auto Mail' },
      { btn: 'Subcontract Dyeing', val: 'Subcontract Dyeing' },
      { btn: 'Sweater Export LC/Sales Contract Report', val: 'Sweater Export LC/Sales Contract Report' },
      { btn: 'Sweater Sample Delivery Pending', val: 'Sweater Sample Delivery Pending' },
      { btn: 'Sweater Shipment Pending Report', val: 'Sweater Shipment Pending Report' },
      { btn: 'TNA Task Mail', val: 'TNA Task Mail' },
      { btn: 'Total Production Activities', val: 'Total Production Activities' },
      { btn: 'Yarn issue pending from allocation.', val: 'Yarn issue pending from allocation.' },
      { btn: 'Yesterday Total Activities', val: 'Yesterday Total Activities' },
    ]
    Active_Inactive: any = [
      // { btn: 'Select', val: 'Select' },
        { btn: 'Active', val: 'Active' },
        { btn: 'Inactive', val: 'Inactive' }
      ]
 
    update(mailRecipientGroup){
      console.log(mailRecipientGroup);
      this.mailRecipientGroupService.updateMailRecipientGroup(mailRecipientGroup).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/mail-recipient-group']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backHomePage(){
    this.router.navigate(['/pages/mail-recipient-group']);
  }
}
