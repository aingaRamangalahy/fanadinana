import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MpiadinaService } from "src/app/core/services/mpiadina.service";

@Component({
  selector: "app-mpiadina-modal",
  templateUrl: "./mpiadina-modal.component.html",
  styleUrls: ["./mpiadina-modal.component.css"],
})
export class MpiadinaModalComponent implements OnInit, OnDestroy {
  fileToUpload: File = null;
  active = 1;
  mpiadinaForm: FormGroup;
  unsubscribeAll: Subject<boolean>;

  constructor(
    private mpiadinaService: MpiadinaService,
    private formBuilder: FormBuilder,
    private activeModal: NgbActiveModal
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.initMpiadinaForm();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  onSubmit() {
    let mpiadina = this.mpiadinaForm.value;
    console.log("new mpiadina", mpiadina);

    this.mpiadinaService
      .create(mpiadina)
      .pipe(takeUntil(this.unsubscribeAll))
      .subscribe((res) => {
        console.log(res);
        this.activeModal.close(" created");
      });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  initMpiadinaForm() {
    this.mpiadinaForm = this.formBuilder.group({
      anarana: ["", [Validators.required]],
      fiangonana: ["", [Validators.required]],
      foibe_fanadinana: ["", [Validators.required]],
      toerana_nianarana: ["", [Validators.required]],
      kilasy: ["", [Validators.required]],
    });
  }
}
