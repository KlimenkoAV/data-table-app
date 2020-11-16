export interface ExportData {
    data: (number|string)[][];
    meta: {
        total: {[key:string]:number};
        columns: {
            type: string;
            key: string;
            title: string;
            primary?: boolean;
            metricType?: "money" | "absolute" | "relative";
            currency?: string;
        }[]
    }

}