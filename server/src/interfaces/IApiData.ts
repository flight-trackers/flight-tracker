export interface IstateData {
    [0]: string;
    [1]: string;
    [2]: string;
    [3]: number | null;
    [4]: number | null;
    [5]: number | null;
    [6]: number | null;
    [7]: number | null;
    [8]: boolean | null;
    [9]: number | null;
    [10]: number | null;
    [11]: number | null;
    [12]: number[] | null;
    [13]: number | null;
    [14]: string | null;
    [15]: boolean | null;
    [16]: number | null;
    [17]?: number;
}

export interface IapiData {
    time: number,
    states: IstateData[]
}