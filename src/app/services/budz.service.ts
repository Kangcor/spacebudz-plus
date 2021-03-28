import { Injectable } from "@angular/core";
import { SpaceBud } from "../constants";
import { ScarcityMapping } from "../constants/scarcity";
import { Spacebudz } from "../spacebudz";

@Injectable()
export class BudzService {
  private budz: SpaceBud[] = Spacebudz.budz;

  public processScarcity() {
    this.budz.map(this._processBudScarcity);
    return this.budz;
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
