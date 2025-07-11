// utils/dateUtils.ts
export const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "short", // "Jul"
        day: "numeric", // "13"
    };

    return date.toLocaleDateString("en-US", options);
};

export const getDay = (dateStr: string): number => {
    const date = new Date(dateStr);
    const day = date.getDate();

    return day;
};

export interface ParsedDate {
    day: string;
    month: string;
    year: string;
    weekday: string;
}

export const parseDate = (dateStr: string, fullMonth: boolean = false): ParsedDate => {
    const date = new Date(dateStr);

    return {
        day: date.getDate().toString(),
        month: date.toLocaleString("en-US", { month: fullMonth ? "long" : "short" }),
        year: date.getFullYear().toString(),
        weekday: date.toLocaleString("en-US", { weekday: "long" }),
    };
};
