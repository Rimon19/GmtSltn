import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ngx-pageobjectcreator',
  templateUrl: './pageobjectcreator.component.html',
  styleUrls: ['./pageobjectcreator.component.scss']
})
export class PageobjectcreatorComponent implements OnInit {

  pageObjectCreatorForm: FormArray = this.fb.array([]);
  public count=0;
  public classDesign='';
  public classDesignForVsCode='';
 public tableSchema='';  
 public className='';
 public serviceName='';
 public singleOrMultiline='';
 public displayService='';
 public displayTsCreate='';
 public displayTsEdit='';
 public tsDisplayPage='';
 public tsDisplayMarkup='';
 public displayMarkup='';
 public pageTitle=''; 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.Form() ;
  }
 Form() {
    this.count=this.count+1;
    this.pageObjectCreatorForm.push(this.fb.group({
      
      inputName :'',
      dataType:'',
      inputType:'',
      labelName:'',
      dropdownListName:'',
      isRequired:'',
      dropdownServiceName:'',
      dropdownMethodName:'',
      dropdwnModelName:'',
      dropdwnIdProperty:'',
      dropdownValueProperty:'',
      isSearchable:''
      
    }));
  }

  onSubmit(){
    console.log(this.pageObjectCreatorForm);
    console.log(this.className);
    console.log(this.serviceName);
    console.log(this.singleOrMultiline);

     this.tableSchemaCreator();
     this.visualStudioModelCreator();
     this.vsCodeModelCreator();
     this.serviceCreator();
     this.tsCreateCreator();
     this.tsEditCreator();
     this.tsDisplayCreator();
     this.htmlDisplayPageCreator();
     this.htmlCreator();
  }

  onDelete(i) {
    this.count=this.count-1;
      this.pageObjectCreatorForm.removeAt(i);
   
   
  }
  capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1).trim();
  }
  lowercaseFirstLetter(str) {
    return str[0].toLowerCase() + str.slice(1).trim();
  }

tableSchemaCreator(){

let tableChemaLine='';
  this.pageObjectCreatorForm.value.forEach(element => {

 let inputName=this.capitalizeFirstLetter(element.inputName);


    if(element.dataType=="character"){
      tableChemaLine=tableChemaLine+`"${inputName}" character varying(100),`+"\n";
    }
    if(element.dataType=="int"){
      tableChemaLine=tableChemaLine+`"${inputName}" integer,`+"\n";
    }
    if(element.dataType=="numeric"){
      tableChemaLine=tableChemaLine+`"${inputName}" numeric,`+"\n";
    }
    if(element.dataType=="doubleprecision"){
      tableChemaLine=tableChemaLine+`"${inputName}" double precision ,`+"\n";
    }
    if(element.dataType=="boolean"){
      tableChemaLine=tableChemaLine+`"${inputName}" boolean ,`+"\n";
    }
    
  });
 
let finalRow=tableChemaLine.substring(0,tableChemaLine.length-1);
  let tableName=this.capitalizeFirstLetter(this.className.toString());
  this.tableSchema=`create table public."${tableName}"(`+"\n"+`"Id" serial primary key,
  ${finalRow}

  "EntryDate" character varying(100),
  "EntryBy" character varying(100),
  "ApprovedDate" character varying(100),
  "IsApproved" boolean,
  "ApprovedBy" character varying(100),
  "Status" character varying(100)
  )`;
}

visualStudioModelCreator(){

  let ClassRow='';
  this.pageObjectCreatorForm.value.forEach(element => {

 let inputName=this.capitalizeFirstLetter(element.inputName);


    if(element.dataType=="character"){
      ClassRow=ClassRow+`public string ${inputName} { get; set; }\n`;
    }
    if(element.dataType=="int"){
      ClassRow=ClassRow+`public int ${inputName} { get; set; }\n`;
    }
    if(element.dataType=="numeric"){
      ClassRow=ClassRow+`public double ${inputName} { get; set; }\n`;
    }
    if(element.dataType=="doubleprecision"){
      ClassRow=ClassRow+`public double ${inputName} { get; set; }\n`;
    }
    if(element.dataType=="boolean"){
      ClassRow=ClassRow+`public bool ${inputName} { get; set; }\n`;
    }
    
  });
 

  let className=this.capitalizeFirstLetter(this.className.toString());
  this.classDesign=`public class ${className}
  {
       public int Id { get; set;}
       ${ClassRow}
       public string EntryDate { get; set; }
       public string EntryBy { get; set; }
       public string ApprovedDate { get; set; }
       public string ApprovedBy { get; set; }
       public bool IsApproved { get; set; }
       public string Status { get; set; }
  }`;

//console.log(this.classDesign);
}
vsCodeModelCreator(){
  let modelRow='';

  this.pageObjectCreatorForm.value.forEach(element => {
    let inputName=this.lowercaseFirstLetter(element.inputName);
   
   
    if(element.dataType=="character"){
      modelRow=modelRow+`${inputName}: string ;\n`;
    }
    if(element.dataType=="int"){
      modelRow=modelRow+`${inputName}: any ;\n`;
    }
    if(element.dataType=="numeric"){
      modelRow=modelRow+`${inputName}: any ;\n`;
    }
    if(element.dataType=="doubleprecision"){
      modelRow=modelRow+`${inputName}: any ;\n`;
    }
    if(element.dataType=="boolean"){
      modelRow=modelRow+`${inputName}: boolean ;\n`;
    }
    
  });
  let className=this.capitalizeFirstLetter(this.className.toString());
 this.classDesignForVsCode=`export class ${className} {
  id:number;
  ${modelRow}
  entryDate :string;
  entryBy :string;
  approvedDate :string;
  approvedBy :string;
  isApproved :boolean;
  status :string;
 }` 
}

serviceCreator(){
  let modelName=this.capitalizeFirstLetter(this.className.toString());
  let variableName=this.lowercaseFirstLetter(this.className);

this.displayService=` ${variableName}:${modelName}; 

constructor(httpClient: HttpClient,
  toastr: NbToastrService,
  private fb: FormBuilder,) {
  super(
    httpClient,
    BaseURL.apiUrl,
    '...please Set Url Action',
    toastr
   );
   
  
}

`;
}
tsCreateCreator(){

let dropdwnServices=`private dropdownValueService:DropdownValueService`;
let dropdwnMethods='';
let onSubmitCodeDependOnSinglePageorMulti='';
let formArrayProperty='';
let initialForm='';
let formBuilder='';
let modalOpenMethodForImage='';
let modalOpenMethodForFile='';
let resetForm='';
let ziroInsertion='';

if(this.singleOrMultiline=='Single'){
  resetForm='this.resetForm();';
  initialForm=this.initialFormCreator();
  onSubmitCodeDependOnSinglePageorMulti=`

  
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.approvedDate=this.dateResizeService.dateResize(new Date);
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.approvedBy=ApprovedBy.userName;
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.isApproved=true;
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.entryBy=EntryBy.userName;
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.status='Active';
this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.entryDate=this.dateResizeService.dateResize(new Date);
  this.${this.lowercaseFirstLetter(this.serviceName)}.create(this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)});
    console.log(res);       
    this.${this.lowercaseFirstLetter(this.serviceName)}.resetForm();
   this.router.navigate(["/pages/"]);
   
 `;
}
if(this.singleOrMultiline=='Multiline'){
  resetForm=`this.${this.capitalizeFirstLetter(this.className)}Form=this.fb.array([]);`
 formArrayProperty=`${this.className}Form: FormArray = this.fb.array([]);
 public count=0;`;
 initialForm=this.initialMultiFormCreator();
 formBuilder=`private fb: FormBuilder,`;
  onSubmitCodeDependOnSinglePageorMulti=`
  //this.${this.lowercaseFirstLetter(this.serviceName)}.addOrUpdateMultilines(this.${this.capitalizeFirstLetter(this.className)}Form.value);
  this.${this.capitalizeFirstLetter(this.className)}Form.value.forEach(element => {
    element.entryBy=EntryBy.userName;
    element.status='Active';
    element.entryDate=this.dateResizeService.dateResize(new Date);
    element.approvedDate=this.dateResizeService.dateResize(new Date);
    element.approvedBy=ApprovedBy.userName;
    element.isApproved=true;

    if(element.id!=0){
      this.${this.lowercaseFirstLetter(this.serviceName)}.updateMultiline(element);
    }
    if(element.id==0){
      console.log(element.id);
      this.${this.lowercaseFirstLetter(this.serviceName)}.createMultiline(element);
    }
    
  });
  this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
  this.router.navigate(["/pages/"]);
  ${resetForm}
  `;
}

this.pageObjectCreatorForm.value.forEach(element => {


  if(element.dropdownMethodName!=""){
    dropdwnMethods=dropdwnMethods+`this.dropdownValueService.${element.dropdownMethodName}();\n` 
 
    if(element.isRequired=="No"&&element.dataType=="int"){
      ziroInsertion=ziroInsertion+`
      if(this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}==''){
        this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}=0;
      }
      `;
    }
    

  }

  
  if(element.inputType=='Image'){
    modalOpenMethodForImage=` onAddImage(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.id});
    
      this.dialog.open(ErpImagesComponent, dialogConfig);
    }`
  } 
  if(element.inputType=='File'){
    modalOpenMethodForFile=` onAddFile(){
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus= true;
      dialogConfig.width="50%";
      dialogConfig.height="50%";
    // page id is 2 here from according to table imageOrFileHolderPages
    
      this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.id});
    
      this.dialog.open(ErpFileComponent, dialogConfig);
    }`
  } 

});

  let creatPage=` 
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

  Tostr=new Tostr();
  ${formArrayProperty}
  constructor(
  public ${this.lowercaseFirstLetter(this.serviceName)}:${this.capitalizeFirstLetter(this.serviceName)},
  private router:Router,
  private dateResizeService:DateResizeService,
  ${formBuilder}
  private toastrService:NbToastrService,
  ${dropdwnServices}
    ) { }

  ngOnInit() {
    ${resetForm}
    ${dropdwnMethods}
  }\n
  ${initialForm}\n

  onSubmit(){  
    ${ziroInsertion}
    ${onSubmitCodeDependOnSinglePageorMulti}
    
  }\n

    backTo(){
      this.router.navigate(['/pages/']);
    }
    ${modalOpenMethodForImage}
    ${modalOpenMethodForFile}
  `
this.displayTsCreate=creatPage;
 
}
tsEditCreator(){
  let dropdwnServices=`private dropdownValueService:DropdownValueService`;
  let dropdwnMethods='';
  let onSubmitCodeDependOnSinglePageorMulti='';
  let formArrayProperty='';
  let initialForm='';
  let formBuilder='';
  let dataLoadedCode='';
  let modalOpenMethodForImage='';
  let modalOpenMethodForFile='';
  let resetForm='';
  let ziroInsertion='';
  
  if(this.singleOrMultiline=='Single'){
    resetForm='this.${this.lowercaseFirstLetter(this.serviceName)}.resetForm();';
    dataLoadedCode=`
    
    this.editedId = this.route.snapshot.paramMap.get('id');
    this.${this.lowercaseFirstLetter(this.serviceName)}.GetOnlyArrayList();
   let items=  this.${this.lowercaseFirstLetter(this.serviceName)}.items.find(f=>f.id==this.editedId);
   this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}=items;
    `;

    initialForm=this.initialFormCreator();
    onSubmitCodeDependOnSinglePageorMulti=`
   
    this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.approvedDate=this.dateResizeService.dateResize(new Date);
    this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.approvedBy=ApprovedBy.userName;
    this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.isApproved=true;
    this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.entryBy=EntryBy.userName;
    this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.status='Active';
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.entryDate=this.dateResizeService.dateResize(new Date);
    this.${this.lowercaseFirstLetter(this.serviceName)}.update(this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)},this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.id);
     
     this.${this.lowercaseFirstLetter(this.serviceName)}.resetForm();
     this.router.navigate(["/pages/"]);
     
    `;
  }
  if(this.singleOrMultiline=='Multiline'){

    resetForm=`this.${this.capitalizeFirstLetter(this.className)}Form=this.fb.array([]);`
    dataLoadedCode=`this.editedId = this.route.snapshot.paramMap.get('id');
    this.${this.lowercaseFirstLetter(this.serviceName)}.GetOnlyArrayList();
   let items=  this.${this.lowercaseFirstLetter(this.serviceName)}.items.find(f=>f.id==this.editedId);
     // this.${this.className}Form.value=items;  manually write code here for data load
    `;
   formArrayProperty=`${this.className}Form: FormArray = this.fb.array([]);
   public count=0;`;
   initialForm=this.initialMultiFormCreator();
   formBuilder=`private fb: FormBuilder,`;
    onSubmitCodeDependOnSinglePageorMulti=`
    
    this.${this.capitalizeFirstLetter(this.className)}Form.value.forEach(element => {
      element.entryBy=EntryBy.userName;
      element.status='Active';
      element.entryDate=this.dateResizeService.dateResize(new Date);
      element.approvedDate=this.dateResizeService.dateResize(new Date);
      element.approvedBy=ApprovedBy.userName;
      element.isApproved=true;
      if(element.id!=0){
        this.${this.lowercaseFirstLetter(this.serviceName)}.updateMultiline(element,element.id);
        
      }
      if(element.id==0){
        console.log(element.id);
        this.${this.lowercaseFirstLetter(this.serviceName)}.createMultiline(element);
        
      }
      
    });
    this.Tostr.showToast('primary','', 'Saved Successfully', '',this.toastrService);
    this.router.navigate(["/pages/"]);
    ${resetForm}
    `;
  }
  
  this.pageObjectCreatorForm.value.forEach(element => {
  
    
    if(element.dropdownMethodName!=""){
      dropdwnMethods=dropdwnMethods+`this.dropdownValueService.${element.dropdownMethodName}();\n` 
      if(element.isRequired=="No"&&element.dataType=="int"){
        ziroInsertion=ziroInsertion+`
        if(this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}==''){
          this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}=0;
        }`;
      }
    }
    if(element.inputType=='Image'){
      modalOpenMethodForImage=` onAddImage(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus= true;
        dialogConfig.width="50%";
        dialogConfig.height="50%";
      // page id is 2 here from according to table imageOrFileHolderPages
      
        this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.id});
      
        this.dialog.open(ErpImagesComponent, dialogConfig);
      }`
    } 
    if(element.inputType=='File'){
      modalOpenMethodForFile=` onAddFile(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus= true;
        dialogConfig.width="50%";
        dialogConfig.height="50%";
      // page id is 2 here from according to table imageOrFileHolderPages
      
        this.datapassingService.sendQuotationInqueryToErpImages.next({pageId:2,primaryKey:this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.id});
      
        this.dialog.open(ErpFileComponent, dialogConfig);
      }`
    } 
  });
  
    let creatPage=` 
    import { Component, OnInit } from '@angular/core';
    import { NgForm } from '@angular/forms';
    import { Router, ActivatedRoute } from '@angular/router';
    import { NbToastrService } from '@nebular/theme';    

    editedId;
    Tostr=new Tostr();
    ${formArrayProperty}
    constructor(
    public ${this.lowercaseFirstLetter(this.serviceName)}:${this.capitalizeFirstLetter(this.serviceName)},
    private router:Router,
    private dateResizeService:DateResizeService,
    ${formBuilder}
    private toastrService:NbToastrService,
    private route:ActivatedRoute,
    ${dropdwnServices}
      ) {

      ${dataLoadedCode}

       }
  
    ngOnInit() {
      ${resetForm}
      ${dropdwnMethods}
    }\n
    ${initialForm}\n
  
    onSubmit(){  
      ${ziroInsertion}
      ${onSubmitCodeDependOnSinglePageorMulti}
      
    }\n
  
      backTo(){
        this.router.navigate(['/pages/']);
      }

      ${modalOpenMethodForImage}
      ${modalOpenMethodForFile}
    `
  this.displayTsEdit=creatPage;
   

}
initialFormCreator(){
  let initialForm='';
  let initialFormRow='';

  this.pageObjectCreatorForm.value.forEach(element => {
    let inputName=this.lowercaseFirstLetter(element.inputName);
    initialFormRow=initialFormRow+`${inputName}: '' ,\n`;
  });
initialForm=` resetForm(form?:NgForm){
  if(form!=null)
  form.resetForm();
  this.${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)} = {
    id: 0,
    ${initialFormRow}
    entryDate :'',
    entryBy :'',
    approvedDate :'',
    approvedBy :'',
    isApproved :false,
    status :''
  }
  
 }`
 
 return initialForm;
}
initialMultiFormCreator(){
  let initialForm='';
  let initialFormRow='';

  this.pageObjectCreatorForm.value.forEach(element => {
    let inputName=this.lowercaseFirstLetter(element.inputName);
    if(element.isRequired=='Yes'){
      initialFormRow=initialFormRow+`${inputName}:['',Validators.required],\n`
    }else{
      initialFormRow=initialFormRow+`${inputName}: '' ,\n`;
    }
  
  });

 initialForm=` ${this.className}FormAction() {
  this.count=this.count+1;
  this.${this.className}Form.push(this.fb.group({
  id: [0],
  ${initialFormRow}
  entryDate :'',
  entryBy :'',
  approvedDate :'',
  approvedBy :'',
  isApproved :false,
  status :''
}))
};

onDelete(id, i) {
  this.count=this.count-1;
  if (id == 0)
    this.${this.className}Form.removeAt(i);
  else if (confirm('Are you sure to delete this record ?'))
    this.${this.lowercaseFirstLetter(this.serviceName)}.delete(id).subscribe(
      res => {
        this.${this.className}Form.removeAt(i);
        this.Tostr.showToast('primary','', 'Delete Successfully', '',this.toastrService);
      });
}`
return initialForm;
}
tsDisplayCreator(){
  
  let displayColumnsRow='';
  let filterSelectObjRow='';
  let dropdwnMethods='';
  let loopObj='';
  
  this.pageObjectCreatorForm.value.forEach(element => {
    let inputName=this.lowercaseFirstLetter(element.inputName);
    let inputNameCapital=this.capitalizeFirstLetter(element.inputName);
    displayColumnsRow=displayColumnsRow+`'${inputName}',`;
    if(element.isSearchable=='Yes'){
      filterSelectObjRow=filterSelectObjRow+`{
        name: '${element.labelName}',
        columnProp: '${inputName}'
      },`;
    }

    if(element.dropdownMethodName!=""){
      dropdwnMethods=dropdwnMethods+`this.dropdownValueService.${element.dropdownMethodName}();\n` 

      if(element.dataType=="int"){
        loopObj=loopObj+`
      
        if(element.${inputName}!=0){
        let ${element.dropdownValueProperty}=this.dropdownValueService.${element.dropdownListName}
        .find(f=>f.${element.dropdwnIdProperty}==element.${inputName}).${element.dropdownValueProperty};
            element.${inputName}=${element.dropdownValueProperty};
        }else{
          element.${inputName}='';
        } \n`;
      }
     


    }


  });
  let forGetitemsNameProperty=` items.forEach(element => {
    ${loopObj}
  });`;

let displayPageTs=`

import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

displayedColumns = ['id',${displayColumnsRow}];
Tostr=new Tostr();

  filterSelectObj  = [
    ${filterSelectObjRow} 
  ]
constructor(private ${this.lowercaseFirstLetter(this.serviceName)}:${this.capitalizeFirstLetter(this.serviceName)},
   private toastrService:NbToastrService,
   private mathdialogService: MatDialogService,
   private router:Router,
   private dropdownValueService:DropdownValueService
   ) { }

ngOnInit() {

${dropdwnMethods}
this.${this.lowercaseFirstLetter(this.serviceName)}.getDataSource();
}


redirectToAddPage(){
  this.router.navigate(["/pages/"]);
 
}
redirectToEditPage(element){
  this.router.navigate(["/pages/",element.id]);  
}

onDelete(element){
  console.log(element);
  this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
             .afterClosed().subscribe(res=>{
              if(res){
                this.${this.lowercaseFirstLetter(this.serviceName)}.delete(element.id).subscribe(res=>{
                  this.refresList();
                  this.Tostr.showToast("primary","", "Deleleted", "Successfully",this.toastrService);
                },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);});
              }
             })
}


resetFilters() {
  this.filterValues = {}

  this.filterSelectObj.forEach((value:any, key) => {
    value.modelValue = undefined;
  })
  this.dataSource.filter = "";
  this.getDataSource();
}   
`;


this.tsDisplayPage=displayPageTs;
}
htmlDisplayPageCreator(){

  let ngContainers='';
  this.pageObjectCreatorForm.value.forEach(element => {
    let inputName=this.lowercaseFirstLetter(element.inputName);
    ngContainers=ngContainers+`<ng-container matColumnDef="${inputName}">
    <mat-header-cell *matHeaderCellDef mat-sort-header
      >${element.labelName}</mat-header-cell
    >
    <mat-cell *matCellDef="let element">{{ element.${inputName} }}</mat-cell>
  </ng-container>\n`;
    
  });

 let tsDisplayMarkup=`
 <nb-card>

    <div class="example-container mat-elevation-z8">
       <div class="example-header">
           <h5>${this.capitalizeFirstLetter(this.pageTitle)}</h5>
           <div style="margin-left: 30px;width: 85%;">
          <mat-form-field>
          <mat-label style="font-size:15px;font-weight: bold;">Search All Here ..</mat-label>
            <input
              matInput
              #filter
              (change)="${this.lowercaseFirstLetter(this.serviceName)}.applyFilter($event.target.value)"
             
            />
          
           
            <button
              mat-icon-button
              matSuffix
              aria-label="clear"
              *ngIf="filter.value"
              (click)="filter.value = ''; applyFilter('')"
            >
              <mat-icon>close</mat-icon>
              
            
            </button>
           
            
            <!-- <button mat-flat-button class="float-right" color="warn" >Reset</button> -->
          </mat-form-field>
          <mat-icon (click)="${this.lowercaseFirstLetter(this.serviceName)}.resetFilters()">autorenew</mat-icon>
           </div>
         </div>
       
         <div style="margin-left: 30px;width: 85%;">
          <mat-form-field *ngFor="let filter of ${this.lowercaseFirstLetter(this.serviceName)}.filterSelectObj" style="margin-left: 10px;width: 10%;">
          <mat-label style="font-size:15px;font-weight: bold;">S.{{filter.name}}</mat-label>
            <input  matInput  
            name="{{filter.columnProp}}" [(ngModel)]="filter.modelValue"
            (change)="${this.lowercaseFirstLetter(this.serviceName)}.filterChange(filter,$event)">
            
          </mat-form-field>
         </div>

           <mat-table
             [dataSource]="${this.lowercaseFirstLetter(this.serviceName)}.dataSource"
             matSort
             mat-table
           >
           
           <ng-container matColumnDef="id">
           <mat-header-cell *matHeaderCellDef class="text-dark">   
             <button class="btn btn-outline-success ml-2" (click)="redirectToAddPage()"> <i class="fa fa-plus"></i></button>
           </mat-header-cell>
           <mat-cell *matCellDef="let element" >       
             <button *ngIf="element.id!=0"  mat-icon-button (click)="redirectToEditPage(element)" > <mat-icon>launch</mat-icon></button>
             <button *ngIf="element.id!=0" mat-icon-button (click)="onDelete(element)" ><i class="far fa-trash-alt fa-lg text-danger"></i></button>
           </mat-cell>
         </ng-container>
             
            ${ngContainers}
             <mat-header-row
               *matHeaderRowDef="displayedColumns"
             ></mat-header-row>
             <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
           </mat-table>

        </div>
   <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
  </nb-card>`;
this.tsDisplayMarkup=tsDisplayMarkup;
}
htmlCreator() {
  let markup='';
  if(this.singleOrMultiline=="Single"){
    let formatedInputs=this.inputDesigner();
    markup=`<div class="row">
    <div class="col-lg-12">
      <nb-card>
        <nb-card-header>
        <button (click)="backTo()"
        class="btn btn-outline-success ">
       <i class="fas fa-arrow-left"></i></button>
        ${this.capitalizeFirstLetter(this.pageTitle)}</nb-card-header>
        <nb-card-body>
          <form #form="ngForm" (submit)="onSubmit()">
           ${formatedInputs}
            <button
              type="submit"
              nbButton
              [disabled]="
                form.invalid
              "
            >
              Submit
            </button>
          </form>
        </nb-card-body>
      </nb-card>
    </div>
  </div>
  `;
    
  }
  else{
    let dynamicTableHeaders='';
    let dynamicTableTds='';
    let requiredField='';
    let erroMesage='';
    let printStarForRequiredField='';
    this.pageObjectCreatorForm.value.forEach(element => {
      let inputName=this.lowercaseFirstLetter(element.inputName);
      if(element.isRequired=='Yes'){
        printStarForRequiredField=`<span class="text-danger">*</span>`;
        requiredField=`required`;
        erroMesage=`<div class="text-danger" *ngIf="fg.controls['${inputName}'].hasError('required')&& fg.controls['${inputName}'].touched" >
        ${element.labelName} is Required.
      </div>`;

      }
      if(element.isRequired=='No'){
        printStarForRequiredField='';
        requiredField="";
        erroMesage="";
      }
      dynamicTableHeaders=dynamicTableHeaders+`<th scope="col">${element.labelName}${printStarForRequiredField}</th>\n`;
     
      if(element.inputType=='Dropdownlist'){
      dynamicTableTds=dynamicTableTds+`
      <td>              
      <select class="form-control form-rounded form-control-sm " ${requiredField} formControlName="${inputName}">
      <option value="">Select</option>
      <option *ngFor="let item of dropdownValueService.${element.dropdownListName}" [(value)]="item.${element.dropdwnIdProperty}" >{{item.${element.dropdownValueProperty}}}</option>
      </select>
      ${erroMesage}
    </td>\n
    `;
     }

     if(element.inputType=='Input'){
      dynamicTableTds=dynamicTableTds+`
      <td>
      <input
        class="form-control form-rounded form-control-sm "
        type="text"
        ${requiredField}
        placeholder="${element.labelName}"
        formControlName="${inputName}"
      />
      ${erroMesage}
      </td>\n
      `;
      
    }
    if(element.inputType=='DatePiker'){
      dynamicTableTds=dynamicTableTds+`
      <input
      class="form-control form-rounded form-control-sm " 
      formControlName="${inputName}"
      type="text"
      readonly
      ${requiredField}
      placeholder="${element.labelName}"
      [nbDatepicker]="date">
      ${erroMesage}
    <nb-datepicker #date></nb-datepicker>
  
      `;
      
    }
 
    });

  markup=`<nb-card>
  <nb-card-header
  > <button (click)="backTo()"
  class="btn btn-outline-success "
  
>
<i class="fas fa-arrow-left"></i>
</button>
  ${this.pageTitle}
  <button
    class="btn btn-outline-success float-right"
    (click)="${this.lowercaseFirstLetter(this.serviceName)}.${this.className}FormAction()"
  >
    <i class="fa fa-plus"></i>
  </button>
 
</nb-card-header>
  <nb-card-body>
    <div class="col-md-12" style="overflow-x: scroll;">
      <div class="smart-table-container" style="width:2500px;">
        <form>
          <table class="">
            <thead>
              <tr>
                <th scope="col">Action</th>
                ${dynamicTableHeaders}
 
              </tr>
            </thead>
         
              <tbody [formGroup]="fg"
              *ngFor="let fg of ${this.lowercaseFirstLetter(this.serviceName)}.${this.className}Form.controls;let i=index" >
                <tr>
                  <td> 
                      
                    <button  class="btn btn-light ml-1  form-control form-rounded form-control-sm " (click)="onDelete(fg.value.id,i)"
                    >
                        <i class="far fa-trash-alt fa-lg text-danger"></i>
                        
                    </button> 
                  </td>

                   ${dynamicTableTds}

                </tr>

                <input
             type="hidden"
                formControlName="id"
               
              />

                <button [disabled]="${this.lowercaseFirstLetter(this.serviceName)}.${this.className}Form.invalid" *ngIf="i==${this.lowercaseFirstLetter(this.serviceName)}.count-1" type="submit" (click)=" onSubmit()" nbButton>Submit</button>
              </tbody>
         
           
          </table>
        </form>

      </div>
    </div>
  </nb-card-body>
</nb-card>
`;
  }

this.displayMarkup=markup;
}
inputDesigner(){
let inputFields='';

  this.pageObjectCreatorForm.value.forEach((element,i,array) => {
           
          
    if (element.inputType == "Input"&&element.isRequired=="No") {
      inputFields=inputFields+
 ` <div class="col-sm-3">
 <div class="form-group">
   <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
     ${this.capitalizeFirstLetter(element.labelName)}</label
   >
   <input
     name="${this.lowercaseFirstLetter(element.inputName)}"    
     [(ngModel)]="
     ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
     "
     class="form-control form-rounded form-control-sm"
     type="text"
     id="${this.capitalizeFirstLetter(element.inputName)}"
     placeholder=" ${this.capitalizeFirstLetter(element.labelName)}"
   />
 </div>
</div>
    `;
    }
    if(element.inputType =="Input"&&element.isRequired=="Yes"){
      inputFields=inputFields+
     `<div class="col-sm-3">
     <div class="form-group">
       <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
       ${this.capitalizeFirstLetter(element.labelName)}<span class="text-danger">*</span></label
       >
       <input
         required
         name="${this.lowercaseFirstLetter(element.inputName)}"
         #${this.capitalizeFirstLetter(element.inputName)}="ngModel"
         [(ngModel)]="
         ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
         "
         type="text"
         class="form-control form-rounded form-control-sm"
         id="${this.capitalizeFirstLetter(element.inputName)}"
         placeholder="${this.capitalizeFirstLetter(element.labelName)}"
       />
       <div
         class="text-left text-danger text-responsive"
         *ngIf="
         ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)} ==
             '' && ${this.capitalizeFirstLetter(element.inputName)}.touched
         "
       >
       ${this.capitalizeFirstLetter(element.labelName)} is required
       </div>
     </div>
   </div>`
    }
    if(element.inputType =="Dropdownlist"&&element.isRequired=="No"){
      inputFields=inputFields+`
      <div class="col-sm-3">
      <div class="form-group">
        <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
        ${this.capitalizeFirstLetter(element.labelName)}
        </label>
        <select
          name="${this.lowercaseFirstLetter(element.inputName)}"
        
          #${this.capitalizeFirstLetter(element.inputName)}="ngModel"
          [(ngModel)]="
          ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
          "
          id="${this.capitalizeFirstLetter(element.inputName)}"
          class="form-control form-rounded form-control-sm"
        >
        <option value="">Select ${this.capitalizeFirstLetter(element.labelName)}</option>
        <option
          *ngFor="let item of dropdownValueService.${element.dropdownListName}"
          value="{{item.${element.dropdwnIdProperty}}}"
          >{{ item.${element.dropdownValueProperty}}}</option
        >
        </select>
        
      </div>
    </div>
      `
    }
    if(element.inputType =="Dropdownlist"&&element.isRequired=="Yes"){
      inputFields=inputFields+`
      <div class="col-sm-3">
      <div class="form-group">
        <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
        ${this.capitalizeFirstLetter(element.labelName)}
        <span class="text-danger">*</span> </label>
        <select
          name="${this.lowercaseFirstLetter(element.inputName)}"
          required
          #${this.capitalizeFirstLetter(element.inputName)}="ngModel"
          [(ngModel)]="
          ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
          "
          id="${this.capitalizeFirstLetter(element.inputName)}"
          class="form-control form-rounded form-control-sm"
        >
        <option value="">Select ${this.capitalizeFirstLetter(element.labelName)}</option>
        <option
          *ngFor="let item of dropdownValueService.${element.dropdownListName}"
          value="{{item.${element.dropdwnIdProperty}}}"
          >{{ item.${element.dropdownValueProperty}}}</option
        >
        </select>
        <div
          class="text-left text-danger text-responsive"
          *ngIf="
          ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}== '' && ${this.capitalizeFirstLetter(element.inputName)}.touched
          "
        >
        ${this.capitalizeFirstLetter(element.labelName)} is required
        </div>
      </div>
    </div>`
    }
    if(element.inputType =="DatePiker"&&element.isRequired=="No"){
      inputFields=inputFields+
      ` <div class="col-sm-3">
      <div class="form-group">
        <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
          ${element.labelName}
        </label>
        <input readonly
          name="${this.lowercaseFirstLetter(element.inputName)}"
          
          #${this.lowercaseFirstLetter(element.inputName)}="ngModel"
          [(ngModel)]="
            ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
          "          
          type="text"
          class="form-control form-rounded form-control-sm"
          id="${this.capitalizeFirstLetter(element.inputName)}"
          [nbDatepicker]="${this.capitalizeFirstLetter(element.inputName)}"
          placeholder="${element.labelName}"
        />
        
        <nb-datepicker #${this.capitalizeFirstLetter(element.inputName)}></nb-datepicker>
      </div>
    </div>`

    }
    if(element.inputType =="DatePiker"&&element.isRequired=="Yes"){
      inputFields=inputFields+
      `
       <div class="col-sm-3">
      <div class="form-group">
        <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
          ${element.labelName}<span class="text-danger">*</span>
        </label>
        <input readonly
          name="${this.lowercaseFirstLetter(element.inputName)}"
          required
          #${this.lowercaseFirstLetter(element.inputName)}="ngModel"
          [(ngModel)]="
            ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)}
          "          
          type="text"
          class="form-control form-rounded form-control-sm"
          id="${this.capitalizeFirstLetter(element.inputName)}"
          [nbDatepicker]="${this.capitalizeFirstLetter(element.inputName)}"
          placeholder="${element.labelName}"
        />
        <div
          class="text-left text-danger text-responsive"
          *ngIf="
          ${this.lowercaseFirstLetter(this.serviceName)}.${this.lowercaseFirstLetter(this.className)}.${this.lowercaseFirstLetter(element.inputName)} ==
              '' &&${this.lowercaseFirstLetter(element.inputName)}.touched
          "
        >
        ${element.labelName} is required
        </div>
        <nb-datepicker #${this.capitalizeFirstLetter(element.inputName)}></nb-datepicker>
      </div>
    </div>`

    }
    if(element.inputType =="Image"){
      inputFields=inputFields+
      ` <div class="col-sm-3">
      <div class="form-group">
        <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
          Add Image<span class="text-danger">*</span></label>
        
        <input
          name="${this.lowercaseFirstLetter(element.inputName)}"
          (dblclick)="onAddImage()"
          class="form-control form-rounded form-control-sm"
          type="text"
          id="${this.capitalizeFirstLetter(element.inputName)}"
          placeholder="Double click"
          
        />
        
      </div>
    </div>`

    }
    if(element.inputType =="File"){
      inputFields=inputFields+
     ` <div class="col-sm-3">
     <div class="form-group">
       <label for="${this.capitalizeFirstLetter(element.inputName)}" class="label text-dark">
         Add File<span class="text-danger">*</span></label>
       
       <input
         name="${this.lowercaseFirstLetter(element.inputName)}"
         (dblclick)="onAddFile()"
         class="form-control form-rounded form-control-sm"
         type="text"
         id="${this.capitalizeFirstLetter(element.inputName)}"
         placeholder="Double click"
         
       />
       
     </div>
   </div>`

   }




});

return inputFields;
}

  
}
