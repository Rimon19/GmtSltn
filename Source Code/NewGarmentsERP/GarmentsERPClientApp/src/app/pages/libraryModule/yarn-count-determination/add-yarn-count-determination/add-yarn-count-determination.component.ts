import { Component, OnInit, ViewChild } from "@angular/core";
import { NbToastrService } from "@nebular/theme";
import { Router } from "@angular/router";
import { Tostr } from "../../../../@core/data/tostr.model";
import { NgForm, FormBuilder, FormArray, Validators } from "@angular/forms";
import { YarnCountDeterminationComponent } from "../yarn-count-determination.component";
import { YarnCountsService } from "../../../../@core/mock/marchandizer/yarn-counts.service";
import { YarnCountDeterminationService } from "../../../../@core/mock/library/yarn-count-determination.service";
import { StaticFeaturesService } from "../../../../@core/mock/library/static-features.service";
import { CompositionEntryService } from "../../../../@core/mock/library/composition-entry.service";
import { CompositionEntry } from "../../../../@core/data/Library-Modul-model/composition-entry";
import { YarnCounts } from "../../Model/YarnCounts";

@Component({
  selector: "ngx-add-yarn-count-determination",
  templateUrl: "./add-yarn-count-determination.component.html",
  styleUrls: ["./add-yarn-count-determination.component.scss"],
})
export class AddYarnCountDeterminationComponent implements OnInit {
  // public countryList:CountryInfo[]=[];
  public ColorRangeList: any[] = [];
  public compositionList: CompositionEntry[] = [];
  public yarnCountList: YarnCounts[] = [];
  public typeList: any[] = [];
  Tostr = new Tostr();
  YarnCountDetermitionSubForm: FormArray = this.fb.array([]);
  public count = 0;
  constructor(
    private router: Router,
    private toastrService: NbToastrService,
    public yarnCountDeterminationService: YarnCountDeterminationService,
    private fb: FormBuilder,
    private staticFeaturesService: StaticFeaturesService,
    private compositionEntryService: CompositionEntryService,
    private yarnCountsService: YarnCountsService
  ) {}

  ngOnInit() {
    this.typeDDL();
    this.yarnCountDDL();
    this.compositionDDL();
    this.colorRangeDDL();
    this.resetForm();
  }
  colorRangeDDL() {
    this.staticFeaturesService.getAllColorRange().subscribe((data) => {
      this.ColorRangeList = data;
    });
  }
  compositionDDL() {
    this.compositionEntryService.getCompositionEntry().subscribe((data) => {
      this.compositionList = data;
    });
  }
  yarnCountDDL() {
    this.yarnCountsService.getAllYarnCount().subscribe((data) => {
      this.yarnCountList = data;
    });
  }
  typeDDL() {
    this.staticFeaturesService.getAllType().subscribe((data) => {
      this.typeList = data;
    });
  }
  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.yarnCountDeterminationService.yarnCountDetermination = {
      id: 0,
      fabricNature: "",
      construction: "",
      colorRange: "",
      gsm: "",
      status: "",
      stitchLength: 0,
      processLoss: 0,
      sequenceNo: 0,
      yarnCountDeterminationChildList: [],
    };
  }

  resetSubForm() {
    this.count = this.count + 1;
    this.YarnCountDetermitionSubForm.push(
      this.fb.group({
        id: 0,
        compositionId: ["", Validators.required],
        percentage: ["", Validators.required],
        yarnCountId: 0,
        type: "",
      })
    );
  }

  onDeleteSubForm(YarnCountDetermitionSubForm, k) {
    this.count = this.count - 1;
    YarnCountDetermitionSubForm.value.splice(k, 1);
    this.YarnCountDetermitionSubForm = this.fb.array([]);
    YarnCountDetermitionSubForm.value.forEach((item: any) => {
      this.YarnCountDetermitionSubForm.push(
        this.fb.group({
          id: item.id,
          compositionId: item.compositionId,
          percentage: item.percentage,
          yarnCountId: item.yarnCountId,
          type: item.type,
        })
      );
    });
  }

  onSubmit(form: NgForm, YarnCountDetermitionSubForm) {
    let totalPercent = 0;
    YarnCountDetermitionSubForm.value.forEach((element) => {
      totalPercent += parseFloat(element.percentage);
    });

    if (totalPercent > 100) {
      this.Tostr.showToast(
        "danger",
        "",
        "percent will be less than 100",
        "",
        this.toastrService
      );
      return;
    }
    form.value.yarnCountDeterminationChildList =
      YarnCountDetermitionSubForm.value;
    this.yarnCountDeterminationService.add(form.value).subscribe((res) => {
      console.log(res);
      this.Tostr.showToast(
        "primary",
        "",
        "Saved Successfully",
        "",
        this.toastrService
      );
      this.router.navigate(["/pages/yarn-count-determination"]);
      this.resetForm();
    });
  }
  backTo() {
    this.router.navigate(["/pages/yarn-count-determination"]);
  }
  check(YarnCountDetermitionSubForm) {
    console.log(YarnCountDetermitionSubForm);
  }
}
