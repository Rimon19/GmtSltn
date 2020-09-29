import { Component, OnInit } from '@angular/core';
import { VariableSettingsTableService } from './../../../../@core/mock/library/variable-settings-table.service';
import { VariableListService } from '../../../../@core/mock/library/variable-list.service';
import { VariableList } from '../../../../@core/data/Library-Modul-model/variable-list.model';
import { company } from '../../../../@core/data/company';
import { CompanyService } from '../../../../@core/mock/company.service';
import { NgForm, FormArray, FormBuilder } from '@angular/forms';
import { VariableSettingsTable } from '../../../../@core/data/Library-Modul-model/variable-settings-table';
import { Tostr } from '../../../../@core/data/tostr.model';
import { NbToastrService } from '@nebular/theme';
import { MatDialogService } from '../../../../@core/mock/mat-dialog.service';
import { StaticFeaturesService } from '../../../../@core/mock/library/static-features.service';

@Component({
  selector: 'ngx-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {
  hideNShowList = [];

  public variableSettingsTableList: VariableSettingsTable[] = [];
  public variableList: VariableList[] = [];
  public companyListItems: company[] = [];
  public currencyListItems: any[] = [];
  public costHeadListItems: any[] = [];
  public statusList: any[] = [];
  public exportSourceList: any[] = [];
  public afterGoodsReceiveDataSourceList: any[] = [];
  public checkBuyerPOList: any[] = [];
  monitoringHeadList: any[] = [];
  isShowSaveButton = true;
  isShowEditButton = false;
  isShowDeleteButton = false;
  Tostr = new Tostr();
  docMonitoringStandardForm: FormArray = this.fb.array([]);
  constructor(
    private fb: FormBuilder,
    private variableListService: VariableListService,
    private companyService: CompanyService,
    private toastrService: NbToastrService,
    private mathdialogService: MatDialogService,
    public variableSettingsTableService: VariableSettingsTableService,
    private staticFeaturesService: StaticFeaturesService,

  ) { }

  ngOnInit() {
    this.resetForm();
    this.companyDDL();
    this.variableListDDL()
    this.currencyDDL();
    this.costHeadsDDL();
    this.statusDDL();
    this.exportSourceDDL();
    this.afterGoodsReceiveDataSourceDDL();
    this.checkBuyerPODDL();
    this.getMonitoringHead();
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.variableSettingsTableService.variableSettingsTable = {
      id: 0,
      companyId: 0,
      moduleId: 0,
      countPageInputField: 0,
      variableListId: 0,
      labelOne: '',
      valueOne: '',
      labelTwo: '',
      valueTwo: '',
      labelThree: '',
      valueThree: '',
      labelFour: '',
      valueFour: '',
      labelFive: '',
      valueFive: '',
      labelSix: '',
      valueSix: '',
      labelSeven: '',
      valueSeven: ''
    }
  }

  docMonitoringForm() {

    this.docMonitoringStandardForm.push(this.fb.group({
      id: 0,
      monitoringHead: '',
      monitoringStandardDay: '',

    }));
  }

  companyDDL() {
    this.companyService.getAllCompany().
      subscribe(data => {
        this.companyListItems = data;

      });
  }
  variableListDDL() {
    this.variableListService.getAll().subscribe(data => {
      let variableListForMarchandising = data.filter(f => f.moduleId == 4);
      this.variableList = variableListForMarchandising;


      this.variableList.forEach(element => {
        this.hideNShowList.push({ id: element.id, variableName: element.variableName });
      });

    })
  }
  currencyDDL() {
    this.staticFeaturesService.getAllDiscountMethod().subscribe(data => {
      this.currencyListItems = data;
    })
  }

  costHeadsDDL() {
    this.costHeadListItems = this.staticFeaturesService.getCostHeads();
  }

  statusDDL() {
    this.statusList = this.staticFeaturesService.getYesOrNo();
  }

  exportSourceDDL() {
    this.exportSourceList = this.staticFeaturesService.getExportSource();
  }
  afterGoodsReceiveDataSourceDDL() {
    this.afterGoodsReceiveDataSourceList = this.staticFeaturesService.getAfterGoodsReceiveDataSource();
  }
  checkBuyerPODDL() {
    this.checkBuyerPOList = this.staticFeaturesService.getYesOrNo();
  }
  getMonitoringHead() {
    this.monitoringHeadList = this.staticFeaturesService.getMonitoringHead();
  }
  yes_no_btn: any = [
    // { btn: 'Select', val: 'Select' },
    { btn: 'Yes', val: 'Yes' },
    { btn: 'No', val: 'No' }
  ]


  onChangeVariableList(variableId, form: NgForm) {

    console.log(form.value);
    this.variableSettingsTableService.variableSettingsTable.id = 0;
    // this.variableSettingsTableService.variableSettingsTable.companyId=0;
    this.variableSettingsTableService.variableSettingsTable.countPageInputField = 0;
    this.variableSettingsTableService.variableSettingsTable.variableListId = variableId;
    this.variableSettingsTableService.variableSettingsTable.labelOne = '';
    this.variableSettingsTableService.variableSettingsTable.valueOne = '';
    this.variableSettingsTableService.variableSettingsTable.labelTwo = '';
    this.variableSettingsTableService.variableSettingsTable.valueTwo = '';
    this.variableSettingsTableService.variableSettingsTable.labelThree = '';
    this.variableSettingsTableService.variableSettingsTable.valueThree = '';
    this.variableSettingsTableService.variableSettingsTable.labelFour = '';
    this.variableSettingsTableService.variableSettingsTable.valueFour = '';
    this.variableSettingsTableService.variableSettingsTable.labelFive = '';
    this.variableSettingsTableService.variableSettingsTable.valueFive = '';
    this.variableSettingsTableService.variableSettingsTable.labelSix = '';
    this.variableSettingsTableService.variableSettingsTable.valueSix = '';
    this.variableSettingsTableService.variableSettingsTable.labelSeven = '';
    this.variableSettingsTableService.variableSettingsTable.valueSeven = '';



    this.variableSettingsTableService.getVariableSettingsTable().subscribe(data => {

      this.variableSettingsTableList = data;

      let variableSettingsTableLObjectByVariableId
        = this.variableSettingsTableList.find(f => f.moduleId == 4 &&
          f.variableListId == variableId);

      if (variableSettingsTableLObjectByVariableId != undefined) {
        console.log(variableSettingsTableLObjectByVariableId);
        console.log(form.value);
        this.variableSettingsTableService.variableSettingsTable
          = variableSettingsTableLObjectByVariableId;

        if (variableId == 70) {
          this.isShowEditButton = true;
          this.isShowSaveButton = false;
          this.isShowDeleteButton = false;
          let docMonitoringStandardFormValue = this.variableSettingsTableList
            .filter(f => f.moduleId == 4 && f.variableListId == variableId);
          this.docMonitoringStandardForm = this.fb.array([]);
          docMonitoringStandardFormValue.forEach(e => {
            this.docMonitoringStandardForm.push(this.fb.group({
              id: e.id,
              monitoringHead: e.valueOne,
              monitoringStandardDay: e.valueTwo,

            }));
          });
        }
       else{

        this.isShowEditButton = true;
        this.isShowSaveButton = false;
        this.isShowDeleteButton = true;
       }
    
      } else {
        this.isShowEditButton = false;
        this.isShowSaveButton = true;
        this.isShowDeleteButton = false;

      }

    });


    this.hideNShowList.forEach(element => {


      if (element.id == variableId) {
        element.isHideNShow = true;
      } else {
        element.isHideNShow = false;
      }


    });



    if (variableId == 65) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Capacity in Value';
      this.variableSettingsTableService.variableSettingsTable.labelTwo = 'Currency';
    }
    if (variableId == 66) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Max BTB Limit';
    }
    if (variableId == 67) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Max PC Limit';
    }
    if (variableId == 68) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne = ' Cost Heads';
      this.variableSettingsTableService.variableSettingsTable.labelTwo = 'Status';
    }

    if (variableId == 69) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Export Invoice Rate';
    }
    if (variableId == 70) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Monitoring Head';
      this.variableSettingsTableService.variableSettingsTable.labelTwo = 'Monitoring Standard Day';
    }


    if (variableId == 72) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Attach Approved PI';
    }

    if (variableId == 73) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Export Invoice Qty Source';
    }

    if (variableId == 74) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'After Goods Receive Data Source';
    }

    if (variableId == 75) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne = 'Yarn Purchase Order Controll';
    }


  }
  onSubmit(form, docMonitoringStandardForm) {

    this.variableSettingsTableService.variableSettingsTable.moduleId = 4;
    if (this.variableSettingsTableService.variableSettingsTable.variableListId == 70) {
      docMonitoringStandardForm.value.forEach(element => {
        this.variableSettingsTableService.variableSettingsTable.id = element.id;
        this.variableSettingsTableService.variableSettingsTable.companyId = form.companyId;
        this.variableSettingsTableService.variableSettingsTable.valueOne = element.monitoringHead;
        this.variableSettingsTableService.variableSettingsTable.valueTwo = element.monitoringStandardDay;

        if (this.variableSettingsTableService.variableSettingsTable.id == 0) {
          this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data => {

          });
        }
        else {
          this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data => {

          });
        }
      });

      this.isShowDeleteButton = false;
      this.isShowSaveButton = false;
      this.hideNShowList.forEach(element => {

        element.isHideNShow = false;

      });
      this.resetForm();
      this.Tostr.showToast('primary', '', 'Saved', '', this.toastrService);

    } else {
      if (this.variableSettingsTableService.variableSettingsTable.id == 0) {
        this.variableSettingsTableService.addVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data => {
          this.Tostr.showToast('primary', '', 'Saved Successfully', '', this.toastrService);
          this.isShowDeleteButton = false;
          this.isShowSaveButton = false;
          this.hideNShowList.forEach(element => {

            element.isHideNShow = false;

          });
          this.resetForm();

        });
      }
      else {
        this.variableSettingsTableService.updateVariableSettingsTable(this.variableSettingsTableService.variableSettingsTable).subscribe(data => {
          this.Tostr.showToast('primary', '', 'Update Successfully', '', this.toastrService);
          this.isShowDeleteButton = false;
          this.isShowEditButton = false;
          this.hideNShowList.forEach(element => {

            element.isHideNShow = false;

          });
          this.resetForm();
        });
      }

    }


  }
  onDelete(id) {

    this.mathdialogService.openConfirmDialog('Are you sure to delete this record ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(res => {

            this.Tostr.showToast("primary", "", "Deleleted", "Successfully", this.toastrService);
            this.isShowDeleteButton = false;
            this.isShowEditButton = false;
            this.hideNShowList.forEach(element => {

              element.isHideNShow = false;

            });
            this.resetForm();

          }, (err) => { this.Tostr.showToast("danger", "", err.statusText, "", this.toastrService); });
        }
      })
  }
  onDeletedocMonitoring(id, i) {
    console.log(id);

    if (id == 0)
      this.docMonitoringStandardForm.removeAt(i);
    else if (confirm('Are you sure to delete this record ?'))
      this.variableSettingsTableService.deleteVariableSettingsTable(id).subscribe(
        res => {
          this.docMonitoringStandardForm.removeAt(i);
          this.Tostr.showToast("primary", "", "Deleleted", "Successfully", this.toastrService);
        });
  }
}
