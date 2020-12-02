import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Mpiadina } from "src/app/core/interfaces";
import { MpiadinaService } from "src/app/core/services/mpiadina.service";
import { MpiadinaModalComponent } from "./mpiadina-modal/mpiadina-modal.component";
@Component({
  selector: "app-mpiadina",
  templateUrl: "./mpiadina.component.html",
  styleUrls: ["./mpiadina.component.css"],
})
export class MpiadinaComponent implements OnInit, OnDestroy {
  closeResult = "";

  listeMpiadina: Mpiadina[];

  unsubscribeAll: Subject<boolean>;

  constructor(
    private modalService: NgbModal,
    private mpiadinaService: MpiadinaService
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.loadMpiadina();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  loadMpiadina() {
    this.mpiadinaService
      .getAll()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((result) => {
        if (result && result.data) {
          this.listeMpiadina = result.data;
          console.log(this.listeMpiadina);
        }
      });
  }

  openAddModal() {
    const modalRef = this.modalService.open(MpiadinaModalComponent);

    modalRef.result
      .then((result) => {
        console.log("modal result:", result);
        this.loadMpiadina();
      })
      .catch((err) => console.log(err));
  }

  // uploadFileToActivity() {
  //   this.fileUploadService.postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  //service
  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  //}
}
