import { Injectable } from "@angular/core";
import { SearchFilter, SpaceBud } from "../constants";
import { ScarcityMapping } from "../constants/scarcity";
import { Spacebudz } from "../spacebudz";
import { SbpStore } from "../state/sbp.store";

@Injectable()
export class BudzService {
  private _budz: SpaceBud[] = Spacebudz.budz;

  constructor(private _store: SbpStore) {}

  public filter(filter: SearchFilter) {
    let filtered = [];
    if (filter.types.length > 0) {
      filtered = this._budz.filter((bud: SpaceBud) => {
        return filter.types.includes(bud.type);
      });
    } else {
      filtered = this._budz;
    }
    if (filter.range.min > 0 || filter.range.max < 9999) {
      filtered = filtered.filter((bud: SpaceBud) => {
        return (
          parseInt(bud.id) >= filter.range.min &&
          parseInt(bud.id) <= filter.range.max
        );
      });
    }
    this._setSearchResult(filtered);
  }

  public processScarcity() {
    this._budz.map(this._processBudScarcity);
    this._setSearchResult(this._budz);
  }

  private _setSearchResult(data: SpaceBud[]) {
    this._store.setResults(data);
  }
  private _processBudScarcity(bud: SpaceBud) {
    const budScarcity = ScarcityMapping.type[bud.type];
    const gadgetScarcity: { [key: string]: number } = {};

    bud.gadgets.forEach((gadget: string) => {
      gadgetScarcity[gadget] = ScarcityMapping.gadgets[gadget];
    });
    bud.scarcity = { type: budScarcity, gadgets: gadgetScarcity };
    return bud;
  }
}
