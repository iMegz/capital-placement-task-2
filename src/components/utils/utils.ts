import { ChartDataset } from "chart.js";
import { T_LineChartData } from "../../types";

export function formatNumber(number: number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function getRange(data: T_LineChartData, multiple: number = 250) {
    const allData: number[] = data.datasets.flatMap((dataset) => dataset.data);

    const min = Math.min(...allData);
    const max = Math.max(...allData);

    const closestMin = Math.floor(min / multiple) * multiple;
    const closestMax = Math.ceil(max / multiple) * multiple;

    return [closestMin, closestMax];
}

export const data: T_LineChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Qualified",
            data: [
                321.72282179520926, 662.9836799157672, 576.7504606475388,
                475.50342195314556, 437.9836799157673, 392.9718346933404,
                584.2129507765201,
            ],
            borderColor: "#FBE38E",
            borderWidth: 3,
            pointRadius: 8.29,
            pointBorderColor: "#FBE38E",
            pointBorderWidth: 2,
            pointBackgroundColor: "#FBE38EB3",
        },
        {
            label: "Disqualified",
            data: [
                317.1887338773361, 396.321400368518, 333.87075546196365,
                371.3477230850223, 417.18215319821, 350.5198736509608,
                500.5593577257173,
            ],
            borderColor: "#9A89FF",
            borderWidth: 3,
            pointRadius: 8.29,
            pointBorderColor: "#B1A5FF",
            pointBorderWidth: 2,
            pointBackgroundColor: "#9A89FFB3",
        },
    ],
};
