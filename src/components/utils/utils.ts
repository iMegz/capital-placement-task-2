import {
    T_LineChartData,
    T_Month,
    T_MonthNumber,
    T_QualifedData,
} from "../../types";

export function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getChartRange(data: T_LineChartData, multiple: number = 250) {
    const allData: number[] = data.datasets.flatMap((dataset) => dataset.data);

    const min = Math.min(...allData);
    const max = Math.max(...allData);

    const closestMin = Math.floor(min / multiple) * multiple;
    const closestMax = Math.ceil(max / multiple) * multiple;

    return [closestMin, closestMax];
}

type T_MonthInfo = { year: number; month: number };

export function getMonthsInRange(start: Date, end: Date): T_MonthInfo[] {
    const months: T_MonthInfo[] = [];

    let currentDate = new Date(start);
    while (currentDate <= end) {
        months.push({
            year: currentDate.getFullYear(),
            month: (currentDate.getMonth() as T_MonthNumber) + 1, // Months are zero-based in JavaScript Dates
        });

        // Move to the next month
        currentDate.setMonth(currentDate.getMonth() + 1);
    }

    return months;
}

export function monthNumberToString(month: T_MonthNumber) {
    const monthNames: T_Month[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return monthNames[month - 1];
}

export const data: T_QualifedData[] = [
    { year: 2023, month: 1, qualified: 321, disqualified: 317 },
    { year: 2023, month: 2, qualified: 662, disqualified: 396 },
    { year: 2023, month: 3, qualified: 576, disqualified: 333 },
    { year: 2023, month: 4, qualified: 475, disqualified: 371 },
    { year: 2023, month: 5, qualified: 437, disqualified: 417 },
    { year: 2023, month: 6, qualified: 392, disqualified: 350 },
    { year: 2023, month: 7, qualified: 584, disqualified: 500 },
];
