import { Component, OnDestroy, OnInit } from "@angular/core";

import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MpiadinaService } from "src/app/core/services/mpiadina.service";
import { NoteService } from "src/app/core/services/note.service";
import { NaotyModalComponent } from "./naoty-modal/naoty-modal.component";

@Component({
  selector: "app-naoty",
  templateUrl: "./naoty.component.html",
  styleUrls: ["./naoty.component.css"],
})
export class NaotyComponent implements OnInit, OnDestroy {
  unsubscribeAll: Subject<boolean>;

  listeMpiadina: any;

  constructor(
    private modalService: NgbModal,
    private noteService: NoteService,
    private mpiadinaService: MpiadinaService
  ) {
    this.unsubscribeAll = new Subject();
  }
  closeResult = "";

  ngOnInit(): void {
    this.loadNotes();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  loadNotes() {
    this.mpiadinaService
      .getAllWithNote()
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((result) => {
        console.log(result);
        if (result && result.data) {
          this.listeMpiadina = result.data;
        }
      });
  }

  showNote(selectedMpianatra) {
    const modalRef = this.modalService.open(NaotyModalComponent);
    modalRef.componentInstance.mpiadina = selectedMpianatra;

    modalRef.result
      .then((result) => {
        console.log("modal result:", result);
        this.loadNotes();
      })
      .catch((err) => console.log(err));
  }
}
