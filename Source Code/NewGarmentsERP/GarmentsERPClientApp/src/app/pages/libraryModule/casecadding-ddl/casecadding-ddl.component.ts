import { Component, OnInit } from '@angular/core';  
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';  
import { Observable } from 'rxjs';  
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { CountryVM } from '../../../@core/data/Library-Modul-model/country-vm.model';
import { StateVM } from '../../../@core/data/Library-Modul-model/state-vm.model';
import { CasecaddingDDLService } from '../../../@core/mock/library/casecadding-ddl.service';
@Component({
  selector: 'ngx-casecadding-ddl',
  templateUrl: './casecadding-ddl.component.html',
  styleUrls: ['./casecadding-ddl.component.scss']
})
export class CasecaddingDDLComponent implements OnInit {
  private _allCountry: Observable<CountryVM[]>;  
  private _allState: Observable<StateVM[]>;  
  private _allStates: Observable<StateVM[]>;  
  SelCountryId:string="0";  
  FromStudent: any;  

  constructor(private formbulider: FormBuilder,private casecaddingDDLService:CasecaddingDDLService) { } 
  FillCountryDDL()  
  {  
    debugger;  
    this._allCountry=this.casecaddingDDLService.CountryDDL(); 
    console.log(this._allCountry); 
  }  
  FillStateDDL()  
  {  
    debugger;  
    this._allState=this.casecaddingDDLService.StateDDL(this.SelCountryId);  
    console.log(this._allState);
  }  

  FillStatesDDL()  
  {  
    debugger;  
    this._allStates=this.casecaddingDDLService.StatesDDL();  
    
  } 

  ngOnInit() {
    this.FromStudent = this.formbulider.group({  
      States: ['', [Validators.required]],  
      Country: ['', [Validators.required]],  
      State: ['', [Validators.required]]  
    });  
    this.FillCountryDDL(); 
    this.FillStatesDDL();
  }

}
