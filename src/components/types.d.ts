type MetricsType = {
    product: string;
    units: number;
    year: number;
};

export interface SceneType {
    name: string;
    path: string;
}

export interface CompaniesType {
    id: number;
    name: string;
    aka: string;
    description: string;
    website: string;
    metrics: Array<MetricsType>;
    scenes: Array<SceneType>;
    colors: Array<string>;
}
