import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { MpiadinaService } from "src/app/core/services/mpiadina.service";

@Component({
  selector: "app-valiny",
  templateUrl: "./valiny.component.html",
  styleUrls: ["./valiny.component.css"],
})
export class ValinyComponent implements OnInit {
  unsubscribeAll: Subject<boolean>;
  canShow = false;
  delib;

  listeMpiadina: any;

  constructor(
    private modalService: NgbModal,
    private mpiadinaService: MpiadinaService
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  showResults() {
    this.canShow = true;
    console.log(this.delib);
    this.mpiadinaService.getAllWithNote().pipe(
      takeUntil(this.unsubscribeAll)
    ).subscribe(res => { //////////TODO
      console.log(res)
      this.listeMpiadina = res.data;

      for (const mpiadina of this.listeMpiadina) {
        const noteArray = [mpiadina.math, mpiadina.science, mpiadina.malagasy, mpiadina.histoire]
        mpiadina["moyenne"] = (noteArray.reduce((a,b) => a+b) / noteArray.length).toFixed(2)
        mpiadina["afaka"] = mpiadina.moyenne >= this.delib;
      }
    });
  }
}
