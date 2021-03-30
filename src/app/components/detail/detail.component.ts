import { Component, Input, OnInit } from "@angular/core";
import { SpaceBud } from "src/app/constants";

@Component({
  selector: "sbp-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  @Input() bud: SpaceBud;
  constructor() {}

  ngOnInit() {}
}
