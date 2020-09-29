import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';
import { Tostr } from '../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { SalesForecastEntryService } from '../../../@core/mock/marchandizer/sales-forecast-entry.service';
import { SalesForecastEntryDetailsService } from '../../../@core/mock/marchandizer/sales-forecast-entry-details.service';
import { DateResizeService } from '../../../@core/mock/marchandizer/date-resize.service';
import { BuyerProfileService } from '../../../@core/mock/library/buyer-profile.service';
import { AgentInfoesService } from '../../../@core/mock/marchandizer/agent-infoes.service';
import { UserMappingService } from '../../../@core/mock/user-mapping.service';
import { UserService } from '../../../@core/mock/users.service';
import { EntryBy } from '../../../@core/data/Shared/entry-by';
import { MatDialogService } from '../../../@core/mock/mat-dialog.service';
import { DropdownValueService } from '../../../@core/mock/shared/dropdown-value.service';


@Component({
  selector: 'ngx-sales-forecast-entry', 
  templateUrl: './sales-forecast-entry.component.html',
  styleUrls: ['./sales-forecast-entry.component.scss']
})
export class SalesForecastEntryComponent implements OnInit {
  updateButton:boolean;
  saveButton:boolean;
  deleteButton:boolean;
  

  currentYear: number=0;
  previousYear:number=0;
  sumOfCyQntyTarget : number=0;
  sumOfCyTargetMint:number=0;
  sumCyValueTarget:number=0;
  sumOfPyQntyTarget : number=0;
  sumOfPyTargetMint:number=0;
  sumPyValueTarget:number=0;
 


  public buyerList:any[]=[];
  public agentList:any[]=[];
  public teamLeaderList:any[]=[];
  public monthList:any[]=[];
  public yearList:any[]=[];
  public userMapping:any[]=[];

   

  Tostr=new Tostr();
  //salesForecastEntryDetailsMonthlyStandardFrom : FormArray = this.fb.array([]);
  salesForecastEntryDetailsYearlyStandardFrom : FormArray = this.fb.array([]);

  constructor(  private router:Router,
    private toastrService:NbToastrService,
    private fb: FormBuilder,
    private staticFeaturesService:StaticFeaturesService,
    public salesForecastEntryService:SalesForecastEntryService,
    public salesForecastEntryDetailsService:SalesForecastEntryDetailsService,
    private dateResizeService:DateResizeService,
    private buyerProfileService:BuyerProfileService,
    private agentInfoesService:AgentInfoesService,
    private userMappingService:UserMappingService,
    private userService:UserService,
    private mathdialogService: MatDialogService,
    private d:DropdownValueService
    ) {     
      
     
  }
 
  ngOnInit() {
    this.saveButton=true;
    this.resetForm();
    this.buyerDDL();
    this.teamLeaderDDL();
    this.agentDDL();
    this.monthDDL();
    this.yearDDL();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.salesForecastEntryService.salesForecastEntry = {
     id:0,
     buyerId:0,
     agentId:0,
     teamLeaderId:0,
     designation:'',
     month:'',
     year:'',
     entryDate:'',
     entryBy:'',
     status:''
    }
    
   }


  
  buyerDDL(){
    this.buyerProfileService.getAll().subscribe(data=>{
      this.buyerList=data;
    })
  }
  agentDDL(){
    this.agentInfoesService.getAllAgentInfoes().subscribe(data=>{
      this.agentList=data;
    })
  }

  teamLeaderDDL() {
    this.userMappingService.getAllUserMapping().subscribe((data) => {
      this.userMapping = data;
      let teamLeaderId = this.userMapping.filter(
        (f) => f.additionDesignationId == 1
      );
      teamLeaderId.forEach((element) => {
        this.userService.getAllUser().subscribe((data) => {
          let teamLeaderName = data.find((f) => f.userID == element.userId)
            .fullName;
          element.userId = teamLeaderName;
        
        });
      });
      this.teamLeaderList = teamLeaderId;
     
    });
  }

  yearDDL(){
    this.staticFeaturesService.getAllYears().subscribe(data=>{
     this.yearList=data;
    })
  }
  monthDDL(){
    this.staticFeaturesService.getAllMonths().subscribe(data=>{
      this.monthList=data;
    })
  }
 
  salesForecastEntryDetailsYearlyForm() {
    
    this.salesForecastEntryDetailsYearlyStandardFrom.push(this.fb.group({
     id :0,
    month:'',
    year:0,
    salesForecastMasterId:0,
    cyQntyTarget:0,
    cyValueTarget:0,
    cyTargetMint:0,
    pyQntyTarget:0,
    pyValueTarget:0,
    pyTargetMint:0,
    entryDate:'',
    entryBy:'',
    status:'',
    
    }));
  }
 


    onSubmit(form:NgForm,salesForecastEntryDetailsYearlyStandardFrom){
      //this.salesForecastEntryService.salesForecastEntry.entryDate=this.dateResizeService.dateResize(new Date());
      this.salesForecastEntryService.salesForecastEntry.entryBy=EntryBy.userName;
      this.salesForecastEntryService.salesForecastEntry.status='Active';
    this.salesForecastEntryService.salesForecastEntry.entryDate=this.dateResizeService.dateResize(new Date);

     // this.salesForecastEntryService.salesForecastEntry.entryBy=EntryBy.userName;
     this.salesForecastEntryService.add(this.salesForecastEntryService.salesForecastEntry).subscribe(res=>{
      let responseId=res.id;
      let year=res.year;
      let entryBy=res.entryBy;
      let entryDate=res.entryDate;
      let status=res.status;


     this.salesForecastEntryDetailsYearlyStandardFrom.value.forEach(element => {
        

          element.salesForecastMasterId=responseId;
          element.year=year;
          element.entryBy=entryBy;
          element.entryDate=entryDate;
          element.status=status;
          element.pyQntyTarget=0;
          element.pyTargetMint=0;
          element.pyValueTarget=0;
         this.salesForecastEntryDetailsService.add(element).subscribe(data=>{});
        });
       
       this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
       this.resetForm();
       
       this.salesForecastEntryDetailsYearlyStandardFrom= this.fb.array([]);
   
     })
   
   }

   onUpdate(salesForecastEntry,salesForecastEntryDetailsYearlyStandardFrom){

    

    salesForecastEntryDetailsYearlyStandardFrom.value.forEach(element => {
         if(element.id!=0){
         
         
          this.salesForecastEntryDetailsService.update(element).subscribe(data=>{});
         }
       else{
        
        element.salesForecastMasterId==salesForecastEntry.id;
        element.year=salesForecastEntry.year;
        element.entryBy=salesForecastEntry.entryBy;
        element.entryDate=salesForecastEntry.entryDate;
        element.status=salesForecastEntry.status;
        element.pyQntyTarget=0;
        element.pyTargetMint=0;
        element.pyValueTarget=0;
        this.salesForecastEntryDetailsService.add(element).subscribe(data=>{});
       }

       });


       this.salesForecastEntryService.update(salesForecastEntry).subscribe(res=>{
      });

      this.Tostr.showToast('primary','', 'update Successfully', '',this.toastrService);
      this.resetForm();
      this.salesForecastEntryDetailsYearlyStandardFrom= this.fb.array([]);
     
  
  }
  onDelete(salesForecastEntry,salesForecastEntryDetailsYearlyStandardFrom){
    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
    .afterClosed().subscribe(res=>{
      if(res){
              
        salesForecastEntryDetailsYearlyStandardFrom.value.forEach(element => {
          
          if(element.salesForecastMasterId==salesForecastEntry.id){
            this.salesForecastEntryDetailsService.delete(element.id).subscribe(data=>{});
          }
          else{
            this.Tostr.showToast("primary","", "SalesForCastDetails", "Not found",this.toastrService);
          }
          
       
        
        })

        this.salesForecastEntryService.delete(salesForecastEntry.id).subscribe(res=>{
          
          this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
          this.resetForm();
          this.salesForecastEntryDetailsYearlyStandardFrom= this.fb.array([]);
        
          
        },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
      
      }
    })

  }
  
  onChangeYear(buyerId,teamLeaderId,year){
    var  PYQntyTargetSM:number=0;
    var PYValueTargetSM:number=0;
    var PYTargetMintSM:number=0;

    var  PYQntyTarget:number=0;
    var PYValueTarget:number=0;
    var PYTargetMint:number=0;

    this.currentYear= year;
    this.previousYear= year-1;
    console.log(this.previousYear);

  
    console.log(buyerId,year,teamLeaderId);
    if(buyerId==0||teamLeaderId==0||year==0){this.Tostr.showToast('danger','', 'Please Select Buyer,TeamLeader and year!', '',this.toastrService);}
    else{
      this.salesForecastEntryService.getAll().subscribe(data=>{
         // find primary key for privious  year  of SalesForecastEntry
        let sfceId;
      
        let objSfce=data.find(f=>f.buyerId==buyerId&&f.year==this.previousYear&&f.teamLeaderId==teamLeaderId);
        if(objSfce==undefined){
          sfceId=0;
         }
         else{
          sfceId=objSfce.id;
         
         
         }
  
 
     // find primary key for cuurent year  of SalesForecastEntry
        
        let primaryKey;
        let objSalesForecastEntry=data.find(f=>f.buyerId==buyerId&&f.year==year&&f.teamLeaderId==teamLeaderId);
        if(objSalesForecastEntry==undefined){
          primaryKey=0;
         }
         else{
          primaryKey=objSalesForecastEntry.id;
         }
         console.log('primary',primaryKey);
    
    // get data for update of salesforcastentry
      let items=  data.find(f=>f.id==primaryKey);
      if(items!=undefined){
        this.salesForecastEntryService.salesForecastEntry=items;
      }
     
      console.log(items);

      //get data for current year data and privious year data of salesForecastEntryDetailsService

    this.salesForecastEntryDetailsService.getAll().subscribe(res=>{
    let salesForecastEntryDetails=res.filter(f=>f.salesForecastMasterId==primaryKey&&f.year==year);
    let salesForecastEntryPYDetails=res.filter(f=>f.salesForecastMasterId==sfceId&&f.year==this.previousYear);

    //data bind for save  of salesForecastEntryDetailsService
    if(salesForecastEntryDetails.length==0){
    
      this.saveButton=true;
      this.updateButton=false;
      this.deleteButton=false;


        this.sumOfPyQntyTarget=0;
        this.sumOfPyTargetMint=0;
        this.sumPyValueTarget=0;
        this.sumOfCyQntyTarget=0;
        this.sumOfCyTargetMint=0;
        this.sumCyValueTarget=0;
      this.staticFeaturesService.getAllMonths().subscribe(data=>{
        this.salesForecastEntryDetailsYearlyStandardFrom  = this.fb.array([]);
        data.forEach(element => {


          let sfcedByStaticMonth=salesForecastEntryPYDetails.find(f=>f.month==element.monthName);
      
          if(sfcedByStaticMonth != undefined){
            PYQntyTargetSM = sfcedByStaticMonth.cyTargetMint;
            PYTargetMintSM= sfcedByStaticMonth.cyTargetMint;
            PYValueTargetSM= sfcedByStaticMonth.cyValueTarget;
          }
          else{
            PYQntyTargetSM = 0;
            PYTargetMintSM= 0;
            PYValueTargetSM= 0;
          }
         
         this.salesForecastEntryDetailsYearlyStandardFrom.push(this.fb.group({
           id :0,
           month :element.monthName,
           year:0,
           salesForecastMasterId:0,
           cyQntyTarget:0,
           cyValueTarget:0,
           cyTargetMint:0,
           pyQntyTarget:PYQntyTargetSM,
           pyValueTarget:PYValueTargetSM,
           pyTargetMint:PYTargetMintSM,
           entryDate:'',
           entryBy:'',
           status:'',
           
        
          }));

   
      this.sumOfPyQntyTarget= this.sumOfPyQntyTarget +  PYQntyTargetSM;
      this.sumOfPyTargetMint=this.sumOfPyTargetMint + PYTargetMintSM;
      this.sumPyValueTarget=this.sumPyValueTarget +   PYValueTargetSM;
        });
      });
    }
 
       /// data bind for update of salesForecastEntryDetailsService
      if(salesForecastEntryDetails.length!=0){
        console.log('update mode');
      this.saveButton=false;
      this.updateButton=true;
      this.deleteButton=true;

        this.salesForecastEntryDetailsYearlyStandardFrom= this.fb.array([]);

        this.sumOfPyQntyTarget=0;
        this.sumOfPyTargetMint=0;
        this.sumPyValueTarget=0;
        this.sumOfCyQntyTarget=0;
        this.sumOfCyTargetMint=0;
        this.sumCyValueTarget=0;

       (salesForecastEntryDetails).forEach((itemD: any) => {

        let sfcedByMonth=salesForecastEntryPYDetails.find(f=>f.month==itemD.month);
      
        if(sfcedByMonth != undefined){
          PYQntyTarget = sfcedByMonth.cyTargetMint;
          PYTargetMint= sfcedByMonth.cyTargetMint;
          PYValueTarget= sfcedByMonth.cyValueTarget;
        }
        else{
          PYQntyTarget = 0;
          PYTargetMint= 0;
          PYValueTarget= 0;
        }
        

       
      
         this.salesForecastEntryDetailsYearlyStandardFrom.push(this.fb.group({
           id :itemD.id,
           month:itemD.month,
           year:itemD.year,
           salesForecastMasterId:itemD.salesForecastMasterId,
           cyQntyTarget:itemD.cyQntyTarget,
           cyValueTarget:itemD.cyValueTarget,
           cyTargetMint:itemD.cyTargetMint,
           pyQntyTarget:PYQntyTarget,
           pyValueTarget:PYValueTarget,
           pyTargetMint:PYTargetMint,
           entryDate:itemD.entryDate,
           entryBy:itemD.entryBy,
           status:itemD.status
       
        }));
        this.sumOfCyQntyTarget=this.sumOfCyQntyTarget+itemD.cyQntyTarget;
        this.sumOfCyTargetMint=this.sumOfCyTargetMint+itemD.cyTargetMint;
        this.sumCyValueTarget=this.sumCyValueTarget+itemD.cyValueTarget;
        this.sumOfPyQntyTarget= this.sumOfPyQntyTarget +PYQntyTarget;
        this.sumOfPyTargetMint=this.sumOfPyTargetMint + PYTargetMint;
        this.sumPyValueTarget=this.sumPyValueTarget + PYValueTarget;

       });
      
       
   
      }
 
  });
    
  
   
   
      });
    }
  }

  onChangeSum(){
    this.sumOfCyQntyTarget=0;
    this.sumOfCyTargetMint=0;
    this.sumCyValueTarget=0;
    this.salesForecastEntryDetailsYearlyStandardFrom.value.forEach(element => {


      this.sumOfCyQntyTarget= this.sumOfCyQntyTarget +parseInt( element.cyQntyTarget);
       this.sumOfCyTargetMint=this.sumOfCyTargetMint +parseInt( element.cyTargetMint);
       this.sumCyValueTarget=this.sumCyValueTarget +parseInt( element.cyValueTarget);
      
    });


  }


}
