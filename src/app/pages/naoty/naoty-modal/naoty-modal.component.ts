import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { NoteService } from "src/app/core/services/note.service";

@Component({
  selector: "app-naoty-modal",
  templateUrl: "./naoty-modal.component.html",
  styleUrls: ["./naoty-modal.component.css"],
})
export class NaotyModalComponent implements OnInit, OnDestroy {
  @Input() mpiadina;

  noteForm: FormGroup;
  unsubscribeAll: Subject<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private activeModal: NgbActiveModal
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    console.log(this.mpiadina);
    this.initNoteForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onSubmit() {
    const note = this.noteForm.value;
    console.log(note);
    this.noteService
      .create(note)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((result) => {
        console.log(result);
        this.activeModal.close(" created");
      });
  }

  initNoteForm() {
    this.noteForm = this.formBuilder.group({
      math: ["", [Validators.required]],
      science: ["", [Validators.required]],
      malagasy: ["", [Validators.required]],
      histoire: ["", [Validators.required]],
      date_session: [2020],
      mpiadina: this.mpiadina,
    });
  }
}
