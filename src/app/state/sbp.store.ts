import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";
import { SpaceBud } from "../constants";

export interface SbpState {
  loading: boolean | null;
  results: SpaceBud[];
}

const initialSbpState = {
  loading: true,
  results: []
};

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "sbp" })
export class SbpStore extends Store<SbpState> {
  constructor() {
    super(initialSbpState);
  }

  public setResults(results: SpaceBud[]) {
    this.update({ results });
  }
}
