import { Injectable } from "@angular/core";
import { SearchFilter, SpaceBud } from "../constants";
import { ScarcityMapping } from "../constants/scarcity";
import { Spacebudz } from "../spacebudz";
import { SbpStore } from "../state/sbp.store";
import {RarityTier} from '../constants/rarity';

@Injectable()
export class BudzService {

  constructor(private _store: SbpStore) {
    this.processScarcity();
  }
  private _budz: SpaceBud[] = Spacebudz.budz;

  static _mapTypeRarity(scarcity: number): string {
    if (scarcity > 1000) {
      return RarityTier.COMMON;
    } else if (scarcity > 750) {
      return RarityTier.UNCOMMON;
    } else if (scarcity > 500) {
      return RarityTier.RARE;
    } else if (scarcity > 50) {
      return RarityTier.LEGENDARY;
    } else {
      return RarityTier.MYTHICAL;
    }
  }

  static _mapGadgetRarity(scarcity: number): string {
    if (scarcity > 4000) {
      return RarityTier.COMMON;
    } else if (scarcity > 750) {
      return RarityTier.UNCOMMON;
    } else if (scarcity > 400) {
      return RarityTier.RARE;
    } else if (scarcity > 100) {
      return RarityTier.LEGENDARY;
    } else {
      return RarityTier.MYTHICAL;
    }
  }

  public fetch(id: string) {
    return this._budz.find((budz: SpaceBud) => budz.id === id);
  }

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

  public compareBudz(myBudz) {
    const compareType = {};
    const compareGlobal = {};
    const perm = this.perm(myBudz.gadgets);
    console.log(perm);
    /*this._budz.forEach((budz: SpaceBud) => {
      budz.gadgets
    });*/
    return myBudz;
  }

  private perm(xs) {
    let ret = [];

    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = this.perm(xs.slice(0, i).concat(xs.slice(i + 1)));

      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }

  private _setSearchResult(data: SpaceBud[]) {
    this._store.setResults(data);
  }
  private _processBudScarcity(bud: SpaceBud) {
    const budScarcity = ScarcityMapping.type[bud.type];
    const gadgetScarcity: { [key: string]: number } = {};

    const typeRarity = BudzService._mapTypeRarity(budScarcity);
    const gadgetRarity: { [key: string]: string } = {};
    bud.gadgets.forEach((gadget: string) => {
      gadgetScarcity[gadget] = ScarcityMapping.gadgets[gadget];
      gadgetRarity[gadget] = BudzService._mapGadgetRarity(gadgetScarcity[gadget]);
    });
    bud.scarcity = { type: budScarcity, gadgets: gadgetScarcity };
    bud.rarity = { type: typeRarity, gadgets: gadgetRarity };
    return bud;
  }
}
