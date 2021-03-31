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
}

export interface SearchFilter {
  types: string[];
  range: { min: number; max: number };
}
