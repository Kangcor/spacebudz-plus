import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { SpaceBud } from "../constants";
import { ScarcityMapping } from "../constants/scarcity";
import { Spacebudz } from "../spacebudz";

@Injectable()
export class BudzService {
  private budz: SpaceBud[] = Spacebudz.budz;

  public processScarcity$(): Observable<SpaceBud[]> {
    return new Observable(obs => {
      const a = this.budz.map(this._processBudScarcity);
      obs.next(this.budz);
      obs.complete();
    });
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
