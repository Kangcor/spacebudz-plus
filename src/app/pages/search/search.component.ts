import { Component, OnInit } from "@angular/core";
import { BudzService } from "src/app/services/budz.service";

@Component({
  selector: "sbp-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  constructor(private _budz: BudzService) {}

  ngOnInit() {
    // this._budz.processScarcity();
  }

  public filterChanged(event: any) {
    this._budz.filter(event);
  }
}
