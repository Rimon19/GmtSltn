import { Component, OnInit } from '@angular/core';
import { FormArray, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TeamManagementServiceService } from '../../../@core/mock/marchandizer/team-management-service.service';
import { ConsumptionEntryFormService } from '../../../@core/mock/marchandizer/consumption-entry-form.service';
import { FitBoundsAccessor } from '@agm/core';

@Component({
  selector: 'ngx-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})

export class DemoComponent implements OnInit {

	public count=0;
	consumptionInformationForm: FormArray = this.fb.array([]);
	constructor(
		private fb: FormBuilder,
		private consumptionEntryFormService:ConsumptionEntryFormService,
		
	  ) { 
		
		
		
	 
	  }
	 
	ngOnInit() {
		
	}
	

	userprofileForm = this.fb.group({
		firstName: ['', Validators.required],
		lastName: [''],
		address: this.fb.group({
		  address1: [''],
		  address2: [''],
		  state: [''],
		  zip: ['']
		}),
	  
		mobiles: this.fb.array([
		  this.fb.control('')
		])
	  });
	 

}
