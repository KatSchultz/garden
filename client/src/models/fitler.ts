export interface PlantFilter {
  full: boolean;
  part: boolean;
  shade: boolean;

  dry: boolean;
  ave: boolean;
  wet: boolean;
}
export interface PlantParams {
  full?: string;
  part?: string;
  shade?: string;

  dry?: string;
  ave?: string;
  wet?: string;
}
