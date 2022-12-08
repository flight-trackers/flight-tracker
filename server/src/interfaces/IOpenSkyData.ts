interface IState {
  icao24: string;
  callsign: string;
  origin_country: string;
  time_position: number;
  last_contact: number;
  longitude?: number;
  latitude?: number;
  baro_altitude?: number;
  on_ground: boolean;
  velocity?: number;
  true_track?: number;
  vertical_rate?: number;
  sensors: number[];
  geo_altitude?: number;
  squawk?: string;
  spi: boolean;
  position_source: number;
  category?: number;
}

interface IFlightData {
  time: string;
  states: IState[];
}

type Nullable<T> = T | null;

interface IOpenSkyRawData {
  [0]: string;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: number;
  [5]: Nullable<number>;
  [6]: Nullable<number>;
  [7]: Nullable<number>;
  [8]: boolean;
  [9]: Nullable<number>;
  [10]: Nullable<number>;
  [11]: Nullable<number>;
  [12]: number[];
  [13]: Nullable<number>;
  [14]: Nullable<string>;
  [15]: boolean;
  [16]: number;
  [17]: Nullable<number>;
}

export { IFlightData, IState, IOpenSkyRawData };
