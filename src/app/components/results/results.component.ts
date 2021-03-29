import { Component, OnInit } from "@angular/core";
import { SpaceBud } from "src/app/constants";
import { BudzService } from "src/app/services/budz.service";
import { SbpStore } from "src/app/state/sbp.store";

@Component({
  selector: "sbp-results",
  templateUrl: "./results.component.html",
  styleUrls: ["./results.component.scss"]
})
export class ResultsComponent implements OnInit {
  budz: SpaceBud[];
  constructor(private _budz: BudzService, private _store: SbpStore) {}

  ngOnInit() {
    this._budz.processScarcity$().subscribe((budz: SpaceBud[]) => {
      this.budz = budz.slice(0, 20);
      this._store.setLoading(false);
    });
  }
}
