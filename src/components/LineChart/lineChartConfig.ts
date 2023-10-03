import { T_LineChartData, T_MonthNumber, T_QualifedData } from "../../types";
import { getMonthsInRange, monthNumberToString } from "../../utils/utils";

const qualifiedStyle = {
    borderColor: "#FBE38E",
    borderWidth: 3,
    pointRadius: 8.29,
    pointBorderColor: "#FBE38E",
    pointBorderWidth: 2,
    pointBackgroundColor: "#FBE38EB3",
};

const disqualifiedStyle = {
    borderColor: "#9A89FF",
    borderWidth: 3,
    pointRadius: 8.29,
    pointBorderColor: "#B1A5FF",
    pointBorderWidth: 2,
    pointBackgroundColor: "#9A89FFB3",
};

// { family: "Poppins" };
export const defaultOptions = {
    scales: {
        x: { ticks: { minRotation: 34.58, font: { size: 12 } } },
        y: {
            min: Number.MIN_VALUE,
            max: Number.MAX_VALUE,
            ticks: { maxTicksLimit: 3, font: { size: 12 } },
        },
    },
    plugins: {
        legend: {
            labels: { usePointStyle: true, font: { size: 12 } },
            position: "top",
            align: "end",
        },
    },
};

export function prepareChartData(
    data: T_QualifedData[],
    range: { start: Date; end: Date }
): T_LineChartData {
    const months = getMonthsInRange(range.start, range.end);
    const filteredData = data.filter((item) =>
        months.some(
            (month) => month.year === item.year && month.month === item.month
        )
    );

    return {
        labels: filteredData.map((value) =>
            monthNumberToString(value.month as T_MonthNumber)
        ),
        datasets: [
            {
                label: "Qualified",
                data: filteredData.map((value) => value.qualified),
                ...qualifiedStyle,
            },
            {
                label: "Disqualified",
                data: filteredData.map((value) => value.disqualified),
                ...disqualifiedStyle,
            },
        ],
    };
}

export function prepareOptions(min: number, max: number): any {
    const options = { ...defaultOptions };
    options.scales.y.min = min;
    options.scales.y.max = max;
    return options;
}
