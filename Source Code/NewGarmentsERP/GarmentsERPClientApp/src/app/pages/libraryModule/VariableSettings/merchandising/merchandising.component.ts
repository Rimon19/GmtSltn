import { Component, OnInit } from "@angular/core";
import { VariableSettingsTableService } from "./../../../../@core/mock/library/variable-settings-table.service";
import { VariableListService } from "../../../../@core/mock/library/variable-list.service";
import { VariableList } from "../../../../@core/data/Library-Modul-model/variable-list.model";
import { company } from "../../../../@core/data/company";
import { CompanyService } from "../../../../@core/mock/company.service";
import { NgForm } from "@angular/forms";
import { VariableSettingsTable } from "../../../../@core/data/Library-Modul-model/variable-settings-table";
import { Tostr } from "../../../../@core/data/tostr.model";
import { NbToastrService } from "@nebular/theme";
import { MatDialogService } from "../../../../@core/mock/mat-dialog.service";
import { UserInfoesService } from "../../../../@core/mock/marchandizer/user-infoes.service";
import { UserInfoes } from "../../../../@core/data/marchanzider-model/user-infoes.model";
import { StaticFeaturesService } from "../../../../@core/mock/library/static-features.service";
import { DateResizeService } from "../../../../@core/mock/marchandizer/date-resize.service";

@Component({
  selector: "ngx-merchandising",
  templateUrl: "./merchandising.component.html",
  styleUrls: ["./merchandising.component.scss"],
})
export class MerchandisingComponent implements OnInit {
  valueSeven: string = "";
  valueEight: string = "";
  valueNine: string = "";
  valueTen: string = "";
  valueEleven: string = "";
  valueTwelve: string = "";
  valueThirteen: string = "";
  valueFourteen: string = "";
  valueFifteen: string = "";
  valueSixteen: string = "";

  hideNShowList = [];
  public variableSettingsTableList: VariableSettingsTable[] = [];
  public userInfoesItems: UserInfoes[] = [];
  public monthItems: any[] = [];
  public variableList: VariableList[] = [];
  public companyListItems: company[] = [];
  isShowSaveButton = false;
  isShowEditButton = false;
  isShowDeleteButton = false;
  Tostr = new Tostr();
  constructor(
    private variableListService: VariableListService,
    private companyService: CompanyService,
    private dateResizeService: DateResizeService,
    private toastrService: NbToastrService,
    private staticFeaturesService: StaticFeaturesService,
    private userInfoesService: UserInfoesService,
    private mathdialogService: MatDialogService,
    public variableSettingsTableService: VariableSettingsTableService
  ) {}

  ngOnInit() {
    this.resetForm();
    this.companyDDL();
    this.variableListDDL();
    this.userInfoesDDL();
    this.monthDDL();
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.variableSettingsTableService.variableSettingsTable = {
      id: 0,
      companyId: 0,
      moduleId: 0,
      countPageInputField: 0,
      variableListId: 0,
      labelOne: "",
      valueOne: "",
      labelTwo: "",
      valueTwo: "",
      labelThree: "",
      valueThree: "",
      labelFour: "",
      valueFour: "",
      labelFive: "",
      valueFive: "",
      labelSix: "",
      valueSix: "",
      labelSeven:'',
      valueSeven:''
    };
  }
  companyDDL() {
    this.companyService.getAllCompany().subscribe((data) => {
      this.companyListItems = data;
      console.log("company list", this.companyListItems);
    });
  }
  monthDDL() {
    this.staticFeaturesService.getAllMonths().subscribe((data) => {
      this.monthItems = data;
      console.log("monthItems list", this.monthItems);
    });
  }
  variableListDDL() {
    this.variableListService.getAll().subscribe((data) => {
      let variableListForMarchandising = data.filter((f) => f.moduleId == 1);
      this.variableList = variableListForMarchandising;
      console.log(this.variableList);

      this.variableList.forEach((element) => {
        this.hideNShowList.push({
          id: element.id,
          variableName: element.variableName,
        });
      });
     console.log(this.hideNShowList)
      
    });
  }
  yes_no_btn: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  tNA_Integrated: any = [
    { btn: "Pre-Costing V1", val: "Pre-Costing V1" },
    { btn: "Pre-Costing V2", val: "Pre-Costing V2" },
  ];
  budget_exceeds_quot: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
    { btn: "No All item", val: "No All item" },
  ];
  cm_cost_predefined_method: any = [
    {
      btn:
        "=((SMV*CPM)*Costing per + (SMV*CPM*Costing per)* Efficiency Wastage%)/Exchange Rate",
      val:
        "=((SMV*CPM)*Costing per + (SMV*CPM*Costing per)* Efficiency Wastage%)/Exchange Rate",
    },
    {
      btn:
        "(((SMV*CPM)*Costing per / Efficiency %)+((SMV*CPM)*Costing per / Efficiency %))/Exchange Rate",
      val:
        "(((SMV*CPM)*Costing per / Efficiency %)+((SMV*CPM)*Costing per / Efficiency %))/Exchange Rate",
    },
    {
      btn: "{(MCE/WD)/NFM)*MPL)}/[{(PHL)*WH}]*Costing Per/Exchange Rate",
      val: "{(MCE/WD)/NFM)*MPL)}/[{(PHL)*WH}]*Costing Per/Exchange Rate",
    },
    {
      btn: "[((CPM/Efficiency%)*SMV*Costing Per)/Exchange Rate]",
      val: "[((CPM/Efficiency%)*SMV*Costing Per)/Exchange Rate]",
    },
  ];
  based_on: any = [
    { btn: "Costing Date", val: "Costing Date" },
    { btn: "Min Shipment Date", val: "Min Shipment Date" },
    { btn: "Max Shipment Date", val: "Max Shipment Date" },
    { btn: "Min Pub Shipment Date", val: "Min Pub Shipment Date" },
    { btn: "Max Pub Shipment Date", val: "Max Pub Shipment Date" },
  ];
  cm_cost_compulsory: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  always_editable: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  in_Master_Part: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  color_From_library: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  common_yes_no: any = [
    { btn: "Yes", val: "Yes" },
    { btn: "No", val: "No" },
  ];
  commercial_cost: any = [
    { btn: "Yarn+Trims+Fabric Purchase", val: "Yarn+Trims+Fabric Purchase" },
    { btn: "On Selling Price", val: "On Selling Price" },
    { btn: "On Net Selling Price", val: "On Net Selling Price" },
    {
      btn:
        "Fabric Purchase + Trims Cost + Embellishment Cost + Garments Wash + Lab Test + Inspection + CM Cost + Freight + Courier Cost + Certificate Cost + Design Cost + Studio Cost + Operating Expenses",
      val:
        "Fabric Purchase + Trims Cost + Embellishment Cost + Garments Wash + Lab Test + Inspection + CM Cost + Freight + Courier Cost + Certificate Cost + Design Cost + Studio Cost + Operating Expenses",
    },
  ];
  commercial_cost_for_price_quotation: any = [
    { btn: "Yarn+Trims+Fabric Purchase", val: "Yarn+Trims+Fabric Purchase" },
    {
      btn: "Yarn+Trims+Fabric Purchase+Embellishment Cost",
      val: "Yarn+Trims+Fabric Purchase+Embellishment Cost",
    },
  ];
  consumption_basis: any = [
    { btn: "Cad Basis", val: "Cad Basis" },
    { btn: "Measurement Basis", val: "Measurement Basis" },
    { btn: "Marker Basis", val: "Marker Basis" },
  ];
  rate_type: any = [
    { btn: "Dyeing", val: "Dyeing" },
    { btn: "Finishing", val: "Finishing" },
    { btn: "Fabric Printing", val: "Fabric Printing" },
    { btn: "Washing", val: "Washing" },
  ];
  cost_control_source: any = [
    { btn: "Quick Costing", val: "Quick Costing" },
    { btn: "Price Quotation", val: "Price Quotation" },
    { btn: "Without Control", val: "Without Control" },
  ];
  currier_cost: any = [
    { btn: "Yarn+Trims+Fabric Purchase", val: "Yarn+Trims+Fabric Purchase" },
    { btn: "On Selling Price", val: "On Selling Price" },
    { btn: "On Net Selling Price", val: "On Net Selling Price" },
  ];
  default_fabric_nature: any = [
    { btn: "Knit Finish Fabrics", val: "Knit Finish Fabrics" },
    { btn: "Woven Fabrics", val: "Woven Fabrics" },
  ];
  efficiency_source: any = [
    { btn: "Manual", val: "Manual" },
    { btn: "Work Study", val: "Work Study" },
    { btn: "Efficiency Slab", val: "Efficiency Slab" },
  ];
  embellishment_budget_on: any = [
    { btn: "Order Qnty", val: "Order Qnty" },
    { btn: "Plan Cut Qnty", val: "Plan Cut Qnty" },
  ];

  excess_cut_level_in_order_entry: any = [
    { btn: "Color Size Level", val: "Color Size Level" },
    { btn: "PO Level", val: "PO Level" },
  ];

  excess_cut_source_in_order_entry: any = [
    { btn: "Manual", val: "Manual" },
    { btn: "Slab", val: "Slab" },
    { btn: "No-Need", val: "No-Need" },
  ];
  rabric_req_qty_source: any = [
    { btn: "Budget", val: "Budget" },
    { btn: "Fabric Booking", val: "Fabric Booking" },
  ];
  fabric_source_for_aOP: any = [
    { btn: "Grey Fabric Qty", val: "Grey Fabric Qty" },
    { btn: "Finish Fabric Qty", val: "Finish Fabric Qty" },
  ];
  item_category: any = [{ btn: "Accessories", val: "Accessories" }];
  amount_exceed_level: any = [
    { btn: "Total Amount", val: "Total Amount" },
    { btn: "Item Amount", val: "Item Amount" },
  ];
  capacity_exceed_level: any = [
    { btn: "Confirmed Order Qty-LC", val: "Confirmed Order Qty-LC" },
    { btn: "Confirmed Order Value-LC", val: "Confirmed Order Value-LC" },
    { btn: "Confirmed Order Mint-LC", val: "Confirmed Order Mint-LC" },
    { btn: "Proj & Conf. Order Qty-LC", val: "Proj & Conf. Order Qty-LC" },
    { btn: "Proj & Conf. Order Value-LC", val: "Proj & Conf. Order Value-LC" },
    { btn: "Proj & Conf. Order Mint-LC", val: "Proj & Conf. Order Mint-LC" },
    { btn: "Confirmed Order Qty-Working", val: "Confirmed Order Qty-Working" },
    {
      btn: "Confirmed Order Value-Working",
      val: "Confirmed Order Value-Working",
    },
    {
      btn: "Confirmed Order Mint-Working",
      val: "Confirmed Order Mint-Working",
    },
    {
      btn: "Proj & Conf. Order Qty-Working",
      val: "Proj & Conf. Order Qty-Working",
    },
    {
      btn: "Proj & Conf. Order Value-Working",
      val: "Proj & Conf. Order Value-Working",
    },
    {
      btn: "Proj & Conf. Order Mint-Working",
      val: "Proj & Conf. Order Mint-Working",
    },
  ];
  per_cost_approval: any = [
    { btn: "Electronic Approval", val: "Electronic Approval" },
    { btn: "Manual Approval", val: "Manual Approval" },
  ];
  item_category_DDL: any = [
    { btn: "Accessories", val: "Accessories" },
    { btn: "Fabric Sales Order", val: "Fabric Sales Order" },
    { btn: "Grey Fabric(Knit)", val: "Grey Fabric(Knit)" },
    { btn: "Grey Fabric(woven) ", val: "Grey Fabric(woven) " },
    { btn: "Knit Finish Fabrics ", val: "Knit Finish Fabrics" },
    { btn: "Services - Fabric ", val: "Services - Fabric" },
    { btn: "Sweater ", val: "Sweater" },
    { btn: "Woven Fabrics ", val: "Woven Fabrics" },
  ];
  process_loss_method_DDL: any = [
    { btn: "Markup Method", val: "Markup Method" },
    { btn: "Margin method", val: "Margin method" },
  ];

  qc_cons_from: any = [
    { btn: "Cons", val: "Cons" },
    { btn: "Tot. Cons", val: "Tot. Cons" },
  ];

  report_date_catagory: any = [
    { btn: "Country Ship Date Wise", val: "Country Ship Date Wise" },
    { btn: "Org. Ship Date Wise", val: "Org. Ship Date Wise" },
    { btn: "PO Insert Date Wise", val: "PO Insert Date Wise" },
    { btn: "Extended Ship Date", val: "Extended Ship Date" },
  ];
  style_sMV_source_combinations: any = [
    { btn: "OE+PC", val: "OE+PC" },
    { btn: "PQ+OE+PC", val: "PQ+OE+PC" },
    { btn: "WS+OE+PC", val: "WS+OE+PC" },
    { btn: "WS+PQ+OE+PC", val: "WS+PQ+OE+PC" },
    { btn: "QI+PQ+OE+PC", val: "QI+PQ+OE+PC" },
    { btn: "QI+WS+PQ+OE+PC", val: "QI+WS+PQ+OE+PC" },
    { btn: "QC+OE+PC", val: "QC+OE+PC" },
    { btn: "QC+WS+OE+PC", val: "QC+WS+OE+PC" },
    { btn: "QI+QC+WS+OE+PC", val: "QI+QC+WS+OE+PC" },
  ];

  rna_process_type: any = [
    { btn: "Template Base", val: "Template Base" },
    { btn: "Percent Base", val: "Percent Base" },
  ];

  textile_tna_process_base: any = [
    { btn: "Booking", val: "Booking" },
    { btn: "Sales Order", val: "Sales Order" },
  ];

  trim_rate: any = [
    {
      btn: "When no relation between Item and Supplier",
      val: "When no relation between Item and Supplier",
    },
    {
      btn: "When  relation between Item and Supplier",
      val: "When  relation between Item and Supplier",
    },
    {
      btn: "When  relation amoung Item,Supplier and Buyer",
      val: "When  relation amoung Item,Supplier and Buyer",
    },
  ];
  work_study_mapping: any = [
    { btn: "Quick Costing", val: "Quick Costing" },
    { btn: "Quotation Inquery", val: "Quotation Inquery" },
    { btn: "Manual", val: "Manual" },
  ];

  yarn_dyeing_work_order: any = [
    { btn: "With Lot", val: "With Lot" },
    { btn: "Without Lot", val: "Without Lot" },
  ];
  userInfoesDDL() {
    this.userInfoesService.getAllUserInfoes().subscribe((data) => {
      this.userInfoesItems = data;
      console.log("UserInfoes list", this.userInfoesItems);
    });
  }
  onChangeVariableList(variableId, form: NgForm) {
    console.log(variableId);
   if(variableId==0) {
     this.isShowSaveButton=false;
   }
    console.log(form.value);
    this.variableSettingsTableService.variableSettingsTable.id = 0;
    // this.variableSettingsTableService.variableSettingsTable.companyId=0;
    this.variableSettingsTableService.variableSettingsTable.countPageInputField = 0;
    this.variableSettingsTableService.variableSettingsTable.variableListId = variableId;
    this.variableSettingsTableService.variableSettingsTable.labelOne = "";
    this.variableSettingsTableService.variableSettingsTable.valueOne = "";
    this.variableSettingsTableService.variableSettingsTable.labelTwo = "";
    this.variableSettingsTableService.variableSettingsTable.valueTwo = "";
    this.variableSettingsTableService.variableSettingsTable.labelThree = "";
    this.variableSettingsTableService.variableSettingsTable.valueThree = "";
    this.variableSettingsTableService.variableSettingsTable.labelFour = "";
    this.variableSettingsTableService.variableSettingsTable.valueFour = "";
    this.variableSettingsTableService.variableSettingsTable.labelFive = "";
    this.variableSettingsTableService.variableSettingsTable.valueFive = "";
    this.variableSettingsTableService.variableSettingsTable.labelSix = "";
    this.variableSettingsTableService.variableSettingsTable.valueSix = "";
    this.variableSettingsTableService.variableSettingsTable.labelSeven = "";
    this.variableSettingsTableService.variableSettingsTable.valueSeven = "";
    this.valueSeven = "";
    this.valueEight = "";
    this.valueNine = "";
    this.valueTen = "";
    this.valueEleven = "";
    this.valueTwelve = "";
    this.valueThirteen = "";
    this.valueFourteen = "";
    this.valueFifteen = "";
    this.valueSixteen = "";

    this.variableSettingsTableService
      .getVariableSettingsTable()
      .subscribe((data) => {
        console.log(data);
        this.variableSettingsTableList = data;

        let variableSettingsTableLObjectByVariableId = this.variableSettingsTableList.find(
          (f) => f.moduleId == 1 && f.variableListId == variableId
        );
        console.log(variableSettingsTableLObjectByVariableId);
        if (variableSettingsTableLObjectByVariableId != undefined) {
          this.variableSettingsTableService.variableSettingsTable= 
          variableSettingsTableLObjectByVariableId;

          if (
            this.variableSettingsTableService.variableSettingsTable
              .variableListId == 11
          ) {
            let valueTwo = variableSettingsTableLObjectByVariableId.valueTwo;
            let splitedValueOne = this.variableSettingsTableService.variableSettingsTable.valueOne.split(
              ","
            );
            this.variableSettingsTableService.variableSettingsTable.valueOne =
              splitedValueOne[0];
            this.variableSettingsTableService.variableSettingsTable.valueTwo =
              splitedValueOne[1];
            this.variableSettingsTableService.variableSettingsTable.valueThree =
              splitedValueOne[2];
            this.variableSettingsTableService.variableSettingsTable.valueFour =
              splitedValueOne[3];

            let splitedValueTwo = valueTwo.split(",");
            console.log(splitedValueTwo);
            this.variableSettingsTableService.variableSettingsTable.valueFive =
              splitedValueTwo[0];
            this.variableSettingsTableService.variableSettingsTable.valueSix =
              splitedValueTwo[1];
            this.valueSeven = splitedValueTwo[2];
            this.valueEight = splitedValueTwo[3];
          }
          if (
            this.variableSettingsTableService.variableSettingsTable
              .variableListId == 19
          ) {
            let valueTwo = this.variableSettingsTableService
              .variableSettingsTable.valueTwo;
            let splitedValueOne = this.variableSettingsTableService.variableSettingsTable.valueOne.split(
              ","
            );
            this.variableSettingsTableService.variableSettingsTable.valueOne =
              splitedValueOne[0];
            this.variableSettingsTableService.variableSettingsTable.valueTwo =
              splitedValueOne[1];
            this.variableSettingsTableService.variableSettingsTable.valueThree =
              splitedValueOne[2];
            this.variableSettingsTableService.variableSettingsTable.valueFour =
              splitedValueOne[3];
            this.variableSettingsTableService.variableSettingsTable.valueFive =
              splitedValueOne[4];
            this.variableSettingsTableService.variableSettingsTable.valueSix =
              splitedValueOne[5];

            let splitedValueTwo = valueTwo.split(",");
            console.log(splitedValueTwo);
            this.valueSeven = splitedValueTwo[0];
            this.valueEight = splitedValueTwo[1];
            this.valueNine = splitedValueTwo[2];
            this.valueTen = splitedValueTwo[3];
            this.valueEleven = splitedValueTwo[4];
            this.valueTwelve = splitedValueTwo[5];
          }
          if (
            this.variableSettingsTableService.variableSettingsTable
              .variableListId == 37
          ) {
            let valueTwo = this.variableSettingsTableService
              .variableSettingsTable.valueTwo;
            let splitedValueOne = this.variableSettingsTableService.variableSettingsTable.valueOne.split(
              ","
            );
            this.variableSettingsTableService.variableSettingsTable.valueOne =
              splitedValueOne[0];
            this.variableSettingsTableService.variableSettingsTable.valueTwo =
              splitedValueOne[1];
            this.variableSettingsTableService.variableSettingsTable.valueThree =
              splitedValueOne[2];
            this.variableSettingsTableService.variableSettingsTable.valueFour =
              splitedValueOne[3];
            this.variableSettingsTableService.variableSettingsTable.valueFive =
              splitedValueOne[4];
            this.variableSettingsTableService.variableSettingsTable.valueSix =
              splitedValueOne[5];
            this.valueSeven = splitedValueOne[6];
            this.valueEight = splitedValueOne[7];

            let splitedValueTwo = valueTwo.split(",");
            console.log(splitedValueTwo);
            this.valueNine = splitedValueTwo[0];
            this.valueTen = splitedValueTwo[1];
            this.valueEleven = splitedValueTwo[2];
            this.valueTwelve = splitedValueTwo[3];
            this.valueThirteen = splitedValueTwo[4];
            this.valueFourteen = splitedValueTwo[5];
            this.valueFifteen = splitedValueTwo[6];
            this.valueSixteen = splitedValueTwo[7];
          }
          this.isShowEditButton = true;
          this.isShowSaveButton = false;
          this.isShowDeleteButton = true;
        } else {
          this.isShowEditButton = false;
          this.isShowSaveButton = true;
          this.isShowDeleteButton = false;
        }
      });

    this.hideNShowList.forEach((element) => {
      if (element.id == variableId) {
        element.isHideNShow = true;
      } else {
        element.isHideNShow = false;
      }
    });

    if (variableId == 1) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Allow Ship Date on Off Day";
    }
    if (variableId == 2) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "BOM Page Setting";
    }
    if (variableId == 3) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Budget Validation";
    }
    if (variableId == 4) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 4;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "CM Cost Predefined Method";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Based On";
      this.variableSettingsTableService.variableSettingsTable.labelThree =
        "CM Cost Compulsory";
      this.variableSettingsTableService.variableSettingsTable.labelFour =
        "Always Editable";
    }
    if (variableId == 5) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "CM Cost Predefined Method";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "CM Cost Compulsory";
    }
    if (variableId == 6) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "In Master Part";
    }
    if (variableId == 7) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Color From Library";
    }
    if (variableId == 8) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 3;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Commercial Cost";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Percent";
      this.variableSettingsTableService.variableSettingsTable.labelThree =
        "Editable";
    }
    if (variableId == 9) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 3;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Commercial Cost";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Percent";
      this.variableSettingsTableService.variableSettingsTable.labelThree =
        "Editable";
    }
    if (variableId == 10) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Consumption Basis";
    }
    if (variableId == 11) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Rate Type";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Conversion From Chart";
    }
    if (variableId == 12) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Copy Quotation";
    }
    if (variableId == 13) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Cost Control Source";
    }
    if (variableId == 14) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 3;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Currier Cost";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Percent";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Editable";
    }
    if (variableId == 15) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Default fabric nature";
    }
    if (variableId == 16) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Default fabric source";
    }
    if (variableId == 17) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Duplicate Ship";
    }
    if (variableId == 18) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Efficiency Source";
    }
    if (variableId == 19) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Embellishment Type";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Embellishment Budget On";
    }
    if (variableId == 20) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Excess Cut % Level in Order Entry";
    }
    if (variableId == 21) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Excess Cut Source in Order Entry";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Is Editable";
    }
    if (variableId == 22) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Fabric Req. Qty. Source";
    }
    if (variableId == 23) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Fabric Source For AOP";
    }
    if (variableId == 24) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Size wise repeat";
    }
    if (variableId == 25) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Mandatory";
    }
    if (variableId == 26) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Inquery ID Mandatory";
    }
    if (variableId == 27) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Lab Test Rate Update";
    }
    if (variableId == 28) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Location Wise Cost Per Minute Setting:";
    }
    if (variableId == 29) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 5;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Item Category";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Exceed Budget Qty(%)";
      this.variableSettingsTableService.variableSettingsTable.labelThree =
        "Exceed Budget Amount(%)";
      this.variableSettingsTableService.variableSettingsTable.labelFour =
        "Amount Exceed Level";
      this.variableSettingsTableService.variableSettingsTable.labelFive =
        "Exceed Qty Level Above Exceed Budget Qty(%)";
    }
    if (variableId == 30) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Min Lead Time Control";
    }
    if (variableId == 31) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Buyer Allocation Maintain";
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Capacity Exceed Level";
    }
    if (variableId == 32) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "PO Current Date";
    }
    if (variableId == 33) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Update Period(Hr)";
      this.variableSettingsTableService.variableSettingsTable.labelTwo = "User";
    }
    if (variableId == 34) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Profit Calculative";
    }
    if (variableId == 35) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Per-Cost Approval";
    }
    if (variableId == 36) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Price Quotation Approval";
    }
    if (variableId == 37) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Item Category";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Process Loss Method";
    }
    if (variableId == 38) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Publish Shipment Date";
    }
    if (variableId == 39) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "QC Cons. From";
    }
    if (variableId == 40) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Report Date Catagory";
    }
    if (variableId == 41) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "S.F. Booking Before M.F.";
    }
    if (variableId == 42) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Sales Year started";
    }
    if (variableId == 43) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Season Mandatory";
    }
    if (variableId == 44) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Sequence validation with Booking";
    }
    if (variableId == 45) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Sew Company and Location mandatory in order entry";
    }
    if (variableId == 46) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 2;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Style & SMV Source/Combinations";
      this.variableSettingsTableService.variableSettingsTable.labelTwo =
        "Style from library";
    }
    if (variableId == 47) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "TNA Integrated";
    }
    if (variableId == 48) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "TNA Process Start Date";
    }
    if (variableId == 49) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Tna Process type";
    }
    if (variableId == 50) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Textile Tna Process Base";
    }
    if (variableId == 51) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Trim Rate";
    }
    if (variableId == 52) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Work Study Mapping";
    }
    if (variableId == 53) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Yarn Dyeing Charge (In WO) from Chart";
    }
    if (variableId == 54) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Yarn Dyeing Work Order";
    }
    if (variableId == 55) {
      this.variableSettingsTableService.variableSettingsTable.countPageInputField = 1;
      this.variableSettingsTableService.variableSettingsTable.labelOne =
        "Yarn Issue Validation Based on Service Approval";
    }
  }
  onSubmit() {
   
    console.log(this.variableSettingsTableService.variableSettingsTable);
    this.variableSettingsTableService.variableSettingsTable.moduleId = 1;

    if (
      this.variableSettingsTableService.variableSettingsTable.variableListId ==
      11
    ) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
        this.variableSettingsTableService.variableSettingsTable.valueOne +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueTwo +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueThree +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueFour;
      this.variableSettingsTableService.variableSettingsTable.valueTwo =
        this.variableSettingsTableService.variableSettingsTable.valueFive +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueSix +
        "," +
        this.valueSeven +
        "," +
        this.valueEight;
      console.log(
        this.variableSettingsTableService.variableSettingsTable.valueOne +
          " " +
          this.variableSettingsTableService.variableSettingsTable.valueTwo
      );
    }
    if (
      this.variableSettingsTableService.variableSettingsTable.variableListId ==
      19
    ) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
        this.variableSettingsTableService.variableSettingsTable.valueOne +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueTwo +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueThree +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueFour +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueFive +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueSix;

      this.variableSettingsTableService.variableSettingsTable.valueTwo = "";
      this.variableSettingsTableService.variableSettingsTable.valueThree = "";
      this.variableSettingsTableService.variableSettingsTable.valueFour = "";
      this.variableSettingsTableService.variableSettingsTable.valueFive = "";
      this.variableSettingsTableService.variableSettingsTable.valueSix = "";

      this.variableSettingsTableService.variableSettingsTable.valueTwo =
        this.valueSeven +
        "," +
        this.valueEight +
        "," +
        this.valueNine +
        "," +
        this.valueTen +
        "," +
        this.valueEleven +
        "," +
        this.valueTwelve;
      console.log(
        this.variableSettingsTableService.variableSettingsTable.valueOne +
          " " +
          this.variableSettingsTableService.variableSettingsTable.valueTwo
      );
    }
    if (
      this.variableSettingsTableService.variableSettingsTable.variableListId ==
      37
    ) {
      this.variableSettingsTableService.variableSettingsTable.valueOne =
        this.variableSettingsTableService.variableSettingsTable.valueOne +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueTwo +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueThree +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueFour +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueFive +
        "," +
        this.variableSettingsTableService.variableSettingsTable.valueSix +
        "," +
        this.valueSeven +
        "," +
        this.valueEight;

      this.variableSettingsTableService.variableSettingsTable.valueTwo = "";
      this.variableSettingsTableService.variableSettingsTable.valueThree = "";
      this.variableSettingsTableService.variableSettingsTable.valueFour = "";
      this.variableSettingsTableService.variableSettingsTable.valueFive = "";
      this.variableSettingsTableService.variableSettingsTable.valueSix = "";
      (this.valueSeven = ""),
        (this.valueEight = ""),
        (this.variableSettingsTableService.variableSettingsTable.valueTwo =
          this.valueNine +
          "," +
          this.valueTen +
          "," +
          this.valueEleven +
          "," +
          this.valueTwelve +
          "," +
          this.valueThirteen +
          "," +
          this.valueFourteen +
          "," +
          this.valueFifteen +
          "," +
          this.valueSixteen);
      console.log(
        this.variableSettingsTableService.variableSettingsTable.valueOne +
          "         " +
          this.variableSettingsTableService.variableSettingsTable.valueTwo
      );
    }
    if (
      this.variableSettingsTableService.variableSettingsTable.variableListId ==
      48
    ) {
      this.variableSettingsTableService.variableSettingsTable.valueOne = this.dateResizeService.dateResize(
        this.variableSettingsTableService.variableSettingsTable.valueOne
      );
    }

    if (this.variableSettingsTableService.variableSettingsTable.id == 0) {
      this.variableSettingsTableService
        .addVariableSettingsTable(
          this.variableSettingsTableService.variableSettingsTable
        )
        .subscribe((data) => {
          this.Tostr.showToast(
            "primary",
            "",
            "Saved Successfully",
            "",
            this.toastrService
          );
        });
      this.isShowEditButton = false;
      this.isShowDeleteButton = false;
      this.isShowSaveButton = false;
      this.hideNShowList.forEach((element) => {
        element.isHideNShow = false;
      });
      this.resetForm();
    } else {
      this.variableSettingsTableService
        .updateVariableSettingsTable(
          this.variableSettingsTableService.variableSettingsTable
        )
        .subscribe((data) => {
          this.Tostr.showToast(
            "primary",
            "",
            "Update Successfully",
            "",
            this.toastrService
          );

          this.hideNShowList.forEach((element) => {
            element.isHideNShow = false;
          });
          this.isShowEditButton = false;
          this.isShowDeleteButton = false;
          this.isShowSaveButton = false;
          this.resetForm();
        });
    }
  }
  onDelete(id) {
    console.log(id);
    this.mathdialogService
      .openConfirmDialog("Are you sure to delete this record ?")
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.variableSettingsTableService
            .deleteVariableSettingsTable(id)
            .subscribe(
              (res) => {
                this.Tostr.showToast(
                  "primary",
                  "",
                  "Deleleted",
                  "Successfully",
                  this.toastrService
                );
                this.isShowEditButton = false;
                this.isShowDeleteButton = false;
                this.hideNShowList.forEach((element) => {
                  element.isHideNShow = false;
                });
                this.resetForm();
                this.valueSeven = "";
                this.valueEight = "";
                this.valueNine = "";
                this.valueTen = "";
                this.valueEleven = "";
                this.valueTwelve = "";
                this.valueThirteen = "";
                this.valueFourteen = "";
                this.valueFifteen = "";
                this.valueSixteen = "";
              },
              (err) => {
                this.Tostr.showToast(
                  "danger",
                  "",
                  err.statusText,
                  "",
                  this.toastrService
                );
              }
            );
        }
      });
  }
}
