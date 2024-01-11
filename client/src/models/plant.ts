export interface Plant {
  _id: string;
  region: string[];
  name_scientific: string;
  name_common: string;
  flower_color: string;
  sun: {
    full: boolean;
    part: boolean;
    shade: boolean;
  };
  height: {
    min: number;
    max: number;
  };
  moisture: {
    dry: boolean;
    ave: boolean;
    wet: boolean;
  };
  soil: {
    clay: boolean;
    sand: boolean;
  };
  img: {
    url: string;
    credit: string;
  };
}
