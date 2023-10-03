import { T_LineChartData, T_Month, T_MonthNumber } from "../types";

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

export function formatDateShort(date: Date): string {
    const options: any = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
}

export function formatDateValue(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}
