import { Component, OnInit } from "@angular/core";
import { SbpStore } from "src/app/state/sbp.store";

@Component({
  selector: "sbp-loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent implements OnInit {
  public loading$ = this._store._select(state => state.loading);

  constructor(private _store: SbpStore) {}

  ngOnInit() {}
}
