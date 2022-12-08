type Nullable<T> = T | null

export interface IStateData {
    [0]: string;
    [1]: string;
    [2]: string;
    [3]: Nullable<number>;
    [4]: Nullable<number>;
    [5]: Nullable<number>;
    [6]: Nullable<number>;
    [7]: Nullable<number>;
    [8]: boolean;
    [9]: Nullable<number>;
    [10]: Nullable<number>;
    [11]: Nullable<number>;
    [12]: Nullable<number[]>;
    [13]: Nullable<number>;
    [14]: Nullable<string>;
    [15]: boolean;
    [16]: Nullable<number>;
    [17]?: Nullable<number>;
}

export interface IApiData {
    time: number,
    states: IStateData[]
}