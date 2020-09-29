import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { UserMappingService } from '../../../@core/mock/user-mapping.service';
import { Tostr } from '../../../@core/data/tostr.model';
import { UserService } from '../../../@core/mock/users.service';
import { StaticFeaturesService } from '../../../@core/mock/library/static-features.service';
import { NgForm } from '@angular/forms';
import { UserData } from '../../../@core/data/users';

@Component({
  selector: 'ngx-edit-user-mapping',
  templateUrl: './edit-user-mapping.component.html',
  styleUrls: ['./edit-user-mapping.component.scss']
})
export class EditUserMappingComponent implements OnInit {
  public userList:UserData[]=[];
  public empCategoryList:any[]=[];
  public empDepartmentList:any[]=[];
  public empEmpDesignationsList:any[]=[];
  public empAdditionalDesignationsList:any[]=[];
  editedId:any;
  Tostr=new Tostr()
    constructor(
      private userService:UserService,
      private staticFeaturesService:StaticFeaturesService,
      public userMappingService:UserMappingService,
      private toastrService:NbToastrService,
      private router:Router,
      private route:ActivatedRoute
    ) { 
      this.editedId = this.route.snapshot.paramMap.get('id');
        console.log(this.editedId);
         this.userMappingService.getAllUserMapping().subscribe(item=>{
        let UserMappingItems=  item.find(f=>f.id==this.editedId);
        this.userMappingService.userMapping =UserMappingItems;
        });
    }
    ngOnInit() {
      this.userDDL();
      this.empEmpCategorieDDL();
      this.empDepartmentDDL();
      this.empDesignationsDDL();
      this.empAdditionalDesignationsDDL();
      this.resetFormForUserMapping();
    }
     userDDL(){
       this.userService.getAllUser().subscribe(data=>{
         this.userList=data;
       })
     }
     empEmpCategorieDDL(){
       this.staticFeaturesService.getEmpCategorie().subscribe(data=>{
         this.empCategoryList=data;
       })
     }
     empDepartmentDDL(){
       this.staticFeaturesService.getEmpDepartments().subscribe(data=>{
          this.empDepartmentList=data;
          
       })
     }
     empDesignationsDDL(){
       this.staticFeaturesService.getEmpDesignations().subscribe(data=>{
          this.empEmpDesignationsList=data;
          console.log(this.empEmpDesignationsList)
          
       })
     }
     empAdditionalDesignationsDDL(){
       this.staticFeaturesService.getEmpAdditionalDesignations().subscribe(data=>{
          this.empAdditionalDesignationsList=data;
          console.log(this.empAdditionalDesignationsList)
          
       })
     }
     resetFormForUserMapping(form?:NgForm){
      if(form!=null)
      form.resetForm();
     
      this.userMappingService.userMapping = {
        id: 0,
        userId: 0,
        empCategoryId: 0,
        departmentId: 0,
        designationId: 0,
        additionDesignationId: 0
        
      }
      
     }
     update(userUapping){
      console.log(userUapping);
      this.userMappingService.updateUserMapping(userUapping).subscribe(s=>{
        this.Tostr.showToast('primary',"", "update Successfull !", "",this.toastrService);
        this.router.navigate(['/pages/user-mapping']);
      },(err) => { this.Tostr.showToast("danger","", err.statusText, "",this.toastrService);})
  }
  backTo(){
    this.router.navigate(['/pages/user-mapping']);
  }


}
