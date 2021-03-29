import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "sbp-pill",
  templateUrl: "./pill.component.html",
  styleUrls: ["./pill.component.scss"]
})
export class PillComponent implements OnInit {
  @Input() text: string;
  @Input() status: boolean = false;
  @Output() statusChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public toggleState() {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }
}
