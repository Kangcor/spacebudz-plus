export interface SpaceBud {
  id: string;
  type: string;
  gadgets: string[];
  scarcity?: {
    type: number;
    gadgets: {
      [key: string]: number;
    };
  };
  rarity?: {
    type: string;
    gadgets: {
      [key: string]: string;
    };
  };
}

export interface SearchFilter {
  types: string[];
  range: { min: number; max: number };
}
