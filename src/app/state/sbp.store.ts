import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export interface SbpState {
  loading: boolean | null;
}

const initialSbpState = {
  loading: true
};

@Injectable({ providedIn: "root" })
@StoreConfig({ name: "sbp" })
export class SbpStore extends Store<SbpState> {
  constructor() {
    super(initialSbpState);
  }
}
