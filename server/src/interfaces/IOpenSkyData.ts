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

interface IOpenSkyRawData {
  [0]: string;
  [1]: string;
  [2]: string;
  [3]: number;
  [4]: number;
  [5]?: number;
  [6]?: number;
  [7]?: number;
  [8]: boolean;
  [9]?: number;
  [10]?: number;
  [11]?: number;
  [12]: number[];
  [13]?: number;
  [14]?: string;
  [15]: boolean;
  [16]: number;
  [17]?: number;
}

export { IFlightData, IState, IOpenSkyRawData };
