import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { debounceTime } from "rxjs/operators";
import { SearchFilter } from "src/app/constants";
import { ScarcityMapping } from "src/app/constants/scarcity";

@Component({
  selector: "sbp-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @Output() change = new EventEmitter<SearchFilter>();
  public types = [];
  public filter = { types: [] };
  private _searchTrigger = new EventEmitter<SearchFilter>();

  constructor() {
    this.types = Object.keys(ScarcityMapping.type);
  }

  ngOnInit() {
    this._setupSearch();
  }

  public typeChanged(type: string, value: boolean) {
    this._updateTypeFilter(type, value);
  }

  private _setupSearch() {
    this._searchTrigger
      .pipe(debounceTime(200))
      .subscribe((filter: SearchFilter) => {
        this.change.emit(filter);
      });
  }

  private _updateTypeFilter(type: string, value: boolean) {
    if (!!value) {
      this.filter.types.push(type);
    } else {
      const index = this.filter.types.indexOf(type, 0);
      this.filter.types.splice(index, 1);
    }
    this._searchTrigger.emit(this.filter);
  }
}
