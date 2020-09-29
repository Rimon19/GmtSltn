import { Component, OnInit, ViewChild } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';
import { ShareholderService } from '../../../../@core/mock/library/shareholder.service';
import { CountryInfo } from '../../../../@core/data/country-info.model';
import { CountryService } from '../../../../@core/mock/country.service';
import { ShareholderShareDetailsService } from '../../../../@core/mock/library/shareholder-share-details.service';
import { ShareholderNomineeDetailsService } from '../../../../@core/mock/library/shareholder-nominee-details.service';
import { company } from '../../../../@core/data/company';
import { CompanyService } from '../../../../@core/mock/company.service';
import { Shareholder } from '../../../../@core/data/Library-Modul-model/shareholder';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';

@Component({
  selector: 'ngx-add-shareholder',
  templateUrl: './add-shareholder.component.html',
  styleUrls: ['./add-shareholder.component.scss']
})
export class AddShareholderComponent implements OnInit {
    serchIdNo=0;
    editedId=0;
   public countryList:CountryInfo[]=[];
   public companyList:company[]=[];
   public shareholdeList:Shareholder[]=[];
   Tostr=new Tostr();
   ShareDetailsForm: FormArray = this.fb.array([]);
   NomineeDetailsForm: FormArray = this.fb.array([]);
   public shareCount=0;
   public NomineeCount=0;
   constructor(
   private router:Router,
   private toastrService:NbToastrService,
   public shareholderService:ShareholderService,
   private fb: FormBuilder,
   private countryService:CountryService,
   public shareholderShareDetailsService:ShareholderShareDetailsService,
   public ShareholderNomineeDetailsService:ShareholderNomineeDetailsService,
   private companyService:CompanyService,
   private mathdialogService: MatDialogService
     ) { }
 
   ngOnInit() {
    
     this.resetForm();
     this.countryDDL();
     this.companyDDL();
     this.shareholderDDL();

   }
   shareholderDDL(){
     this.shareholderService.getAll().subscribe(data=>{
       this.shareholdeList=data;
     })
   }
   companyDDL(){
     this.companyService.getAllCompany().subscribe(data=>{this.companyList=data});
   }
   countryDDL(){
     this.countryService.getAllCountry().subscribe(data=>{
     this.countryList=data;
     });
   }

   onChangeUpdateId(id){
console.log(id);
this.editedId=id;
    this.shareholderService.getAll().subscribe(data=>{
      this.shareholdeList=data;
      let obj=this.shareholdeList.find(f=>f.id==id);
      this.shareholderService.shareholder=obj;
      this.shareholderShareDetailsService.getAll().subscribe(data=>{
        let shareDetailsData=data.filter(f=>f.shareholderId==id);

        (shareDetailsData).forEach((item: any) => {
          this.ShareDetailsForm.push(this.fb.group({
           id:item.id,
           companyId : item.companyId,
           noOfShare :item.noOfShare,
           faceValue :item.faceValue,
           premium  :item.premium,
           shareValue :item.shareValue
        
          }));
         });       
      });

      this.ShareholderNomineeDetailsService.getAll().subscribe(data=>{
        let sharholderNomineeDetailsName=data.filter(f=>f.shareholderId==id);
        (sharholderNomineeDetailsName).forEach((item: any) => {
          this.NomineeDetailsForm.push(this.fb.group({
            id: item.id,
            companyId : item.companyId,
            name :item.name,
            relation :item.relation,
            ratio : item.ratio,
            amount : item.amount
        
          }));
         });      
      });




    });
   }
    resetForm(form?:NgForm){
     if(form!=null)
     form.resetForm();
     this.shareholderService.shareholder = {
      id:0,
      idNo :'',
      name :'',
      boAccountId :'',
      fatherhusband  :'',
      mothersName :'',
      profession :'',
      organization :'',
      designation :'',
      nationalId :'',
      tin :'',
      vat :'',
      email :'',
      phone :'',
      status :'',
      
      plotNoPr :'',
      levelNoPr :'',
      roadNoPr :'',
      blockNoPr :'',
      countryIdPr :0,
      provincePr :'',
      cityOrTownPr :'',
      zipCodePr :'',
      
      plotNoPe :'',
      levelNoPe :'',
      roadNoPe :'',
      blockNoPe :'',
      countryIdPe :0,
      provincePe :'',
      cityOrTownPe :'',
      zipCodePe :''
     }
     
    }
 
   
    resetShareDetailsForm() {
     this.shareCount=this.shareCount+1;
     this.ShareDetailsForm.push(this.fb.group({
            id: 0,
      companyId : 0,
      noOfShare :'',
      faceValue :'',
      premium  :'',
      shareValue :''
          }));
   }
 
   resetNomineeDetailsForm() {
    this.NomineeCount=this.NomineeCount+1;
    this.NomineeDetailsForm.push(this.fb.group({
      id: 0,
    companyId : 0,
    name :'',
    relation :'',
    ratio : 0,
     amount : 0
    
    }));
  }

   onDeleteShareDetailsForm(ShareDetailsForm,k) {
     this.shareCount=this.shareCount-1;
     ShareDetailsForm.value.splice(k, 1);
     this.ShareDetailsForm= this.fb.array([]);
                   (ShareDetailsForm.value).forEach((item: any) => {
                     this.ShareDetailsForm.push(this.fb.group({
                      id:item.id,
                      companyId : item.companyId,
                      noOfShare :item.noOfShare,
                      faceValue :item.faceValue,
                      premium  :item.premium,
                      shareValue :item.shareValue
                   
                     }));
               });                       
     }
     onDeleteNomineeDetailsForm(NomineeDetailsForm,k) {
      this.NomineeCount=this.NomineeCount-1;
      NomineeDetailsForm.value.splice(k, 1);
      this.NomineeDetailsForm= this.fb.array([]);
                    (NomineeDetailsForm.value).forEach((item: any) => {
                      this.NomineeDetailsForm.push(this.fb.group({
                        id: item.id,
                        companyId : item.companyId,
                        name :item.name,
                        relation :item.relation,
                        ratio : item.ratio,
                        amount : item.amount
                    
                      }));
                });                       
      }
    onSubmit(form:NgForm,ShareDetailsForm,NomineeDetailsForm){
     console.log(form);
     console.log(ShareDetailsForm);
     console.log(NomineeDetailsForm);
     this.shareholderService.add(form.value).subscribe(res=>{
        console.log(res);    
        
        ShareDetailsForm.value.forEach(element => {
          element.shareholderId=res.id;
          this.shareholderShareDetailsService.add(element).subscribe(data=>{});
        });
        
        NomineeDetailsForm.value.forEach(element => {
          element.shareholderId=res.id;
          this.ShareholderNomineeDetailsService.add(element).subscribe(data=>{});
        });
        
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       //this.router.navigate(["/pages/yarn-count-determination"]);
      // this.resetForm();
     })
   
   }

   onUpdate(form:NgForm,ShareDetailsForm,NomineeDetailsForm){
    console.log(form);
    console.log(ShareDetailsForm);
    console.log(NomineeDetailsForm);
    form.value.id=this.editedId;
    this.shareholderService.update(form.value).subscribe(res=>{
       console.log(res);    
       
       ShareDetailsForm.value.forEach(element => {
         element.shareholderId=this.editedId;
         if(element.id==0){
          this.shareholderShareDetailsService.add(element).subscribe(data=>{});
         }
        else(this.shareholderShareDetailsService.update(element).subscribe(data=>{}));

       });
       
       NomineeDetailsForm.value.forEach(element => {
         element.shareholderId=this.editedId;
         if(element.id==0){
          this.ShareholderNomineeDetailsService.add(element).subscribe(data=>{});
         }else{
          this.ShareholderNomineeDetailsService.update(element).subscribe(data=>{});
         }
        
       });
       
      this.Tostr.showToast('primary','', 'Update Successfully', '',this.toastrService);
      //this.router.navigate(["/pages/yarn-count-determination"]);
      this.resetForm();
      this.ShareDetailsForm= this.fb.array([]);
      this.NomineeDetailsForm= this.fb.array([]);
    })
  
  }

  delete(id){
    console.log(id);
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
               .afterClosed().subscribe(res=>{
                if(res){
                  this.shareholderService.delete(id).subscribe(res=>{
                    this.shareholderShareDetailsService.delete(id).subscribe(r=>{});
                    this.ShareholderNomineeDetailsService.delete(id).subscribe(r=>{});
                    this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                    this.resetForm();
                  },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
                }
               })
  }
   backTo(){
     this.router.navigate(['/pages/yarn-count-determination']);
   }
 

}
