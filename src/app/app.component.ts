import { Component } from "@angular/core";
import { BudzService } from "./services/budz.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "spacebudz-plus";
  budz = [];

  constructor(private _budz: BudzService) {
    this.budz = this._budz.processScarcity();
  }
}
