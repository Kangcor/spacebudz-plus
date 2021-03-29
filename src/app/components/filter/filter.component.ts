import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { SearchFilter } from "src/app/constants";
import { ScarcityMapping } from "src/app/constants/scarcity";

@Component({
  selector: "sbp-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  @Output() filterChange = new EventEmitter<SearchFilter>();
  public types = [];
  public filter = { types: [], range: { min: 0, max: 9999 } }; // TODO const init
  public rangeIds = { min: 0, max: 9999 };
  public searchForm: FormGroup;
  private _searchTrigger = new EventEmitter<SearchFilter>();

  constructor() {
    this.types = Object.keys(ScarcityMapping.type);
    this.searchForm = new FormGroup({
      keywords: new FormControl("", []),
      min_id: new FormControl(0, []),
      max_id: new FormControl(9999, [])
    });
  }

  ngOnInit() {
    this._setupSearch();
    this._setupRange();
  }

  public typeChanged(type: string, value: boolean) {
    this._updateTypeFilter(type, value);
  }

  private _setupRange() {
    this.searchForm.get("min_id").valueChanges.subscribe((val: number) => {
      this.rangeIds.min = val;
      if (val > this.rangeIds.max) {
        this.searchForm.get("max_id").patchValue(val);
      } else {
        this._updateNumberFilter();
      }
    });
    this.searchForm.get("max_id").valueChanges.subscribe((val: number) => {
      this.rangeIds.max = val;
      if (val < this.rangeIds.min) {
        this.searchForm.get("min_id").patchValue(val);
      } else {
        this._updateNumberFilter();
      }
    });
  }

  private _setupSearch() {
    this._searchTrigger
      .pipe(debounceTime(200))
      .subscribe((filter: SearchFilter) => {
        this.filterChange.emit(filter);
      });
  }

  private _updateNumberFilter() {
    this.filter.range = this.rangeIds;
    this._searchTrigger.emit(this.filter);
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
