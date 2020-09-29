import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { ErpImagesService } from "../../../@core/mock/shared/erp-images.service";
import { DatapassingService } from "../../../@core/mock/shared/datapassing.service";
import { PageInfo } from "../../../@core/data/Library-Modul-model/page-info";
import { DateResizeService } from "../../../@core/mock/marchandizer/date-resize.service";
import { EntryBy } from "../../../@core/data/Shared/entry-by";

@Component({
  selector: "ngx-erp-images",
  templateUrl: "./erp-images.component.html",
  styleUrls: ["./erp-images.component.scss"],
})
export class ErpImagesComponent implements OnInit {
  selectedImageFiles: FileList;
  ImageFiles: File;
  output_image;
  imageCollections = [];
  pageInfo: any;
  imagesList = [];
  constructor(
    public dialogbox: MatDialogRef<ErpImagesComponent>,
    private erpImagesService: ErpImagesService,
    private datapassingService: DatapassingService,
    private dateResizeService: DateResizeService
  ) {}

  ngOnInit() {
    this.datapassingService.sendInfoPageToErpImagesObservable.subscribe(
      (pgInfo) => {
        this.pageInfo = pgInfo;
      }
    );
    console.log(this.pageInfo);

    this.refresh();
  }
  onClose() {
    this.dialogbox.close();
  }
  detectFiles(event) {
    this.selectedImageFiles = event.target.files;
    this.ImageFiles = this.selectedImageFiles.item(0);

    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.output_image = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    console.log("click");
    this.erpImagesService.uploadImage(this.ImageFiles).subscribe((img) => {
      img.entryBy = EntryBy.userName;

      img.entryDate = this.dateResizeService.dateResize(new Date());

      img.pageId = this.pageInfo.pageId;
      img.pageSpecificationId = this.pageInfo.primaryKey;

      this.erpImagesService.add(img).subscribe((res) => {
        this.imagesList.push(res);
        this.datapassingService.recievePageInfoFromErpImages.next(
          this.imagesList
        );
        this.refresh();
      });
    });
  }
  onDelete(id, i) {
    this.erpImagesService.delete(id).subscribe((data) => {
      this.imagesList.splice(i);
      this.datapassingService.recievePageInfoFromErpImages.next(
        this.imagesList
      );
      this.refresh();
    });
  }

  refresh() {
    this.erpImagesService.getAll().subscribe((data) => {
      console.log(this.pageInfo);
      let filterdDataByePageIdandPrimaryKey = data.filter(
        (f) =>
          f.pageId == this.pageInfo.pageId &&
          f.pageSpecificationId == this.pageInfo.primaryKey
      );

      this.imageCollections = filterdDataByePageIdandPrimaryKey;
    });
  }
}
