import "chart.js/auto";

import { Line } from "react-chartjs-2";
import { T_LineChartData } from "../../types";
import style from "./LineChart.module.css";
import { getRange } from "../utils/utils";

type T_LineChart = React.FC<I_LineChartProps>;

interface I_LineChartProps {
    data: T_LineChartData;
}

const LineChart: T_LineChart = ({ data }) => {
    const [min, max] = getRange(data);
    // const font = { size: 12, family: "Poppins" };
    const font = {};
    const options: any = {
        scales: {
            x: { ticks: { minRotation: 34.58, font } },
            y: { min, max, ticks: { maxTicksLimit: 3, font } },
        },
        plugins: {
            legend: {
                labels: { usePointStyle: true, font },
                position: "top",
                align: "end",
            },
        },
    };

    return (
        <div className="card">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
