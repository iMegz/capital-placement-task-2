import "chart.js/auto";

import { Line } from "react-chartjs-2";
import { T_QualifedData } from "../../types";
import style from "./LineChart.module.css";
import { prepareChartData, prepareOptions } from "./lineChartConfig";
import { getChartRange } from "../../utils/utils";
import Select, { T_SelectOption } from "../Select/Select";

type T_LineChart = React.FC<I_LineChartProps>;

interface I_LineChartProps {
    data: T_QualifedData[];
    range: { start: Date; end: Date };
}

const steps: T_SelectOption[] = [
    { value: "applied", label: "Applied" },
    { value: "recommended", label: "Recommended" },
    { value: "interview", label: "Interview" },
    { value: "offer", label: "Offer" },
    { value: "hired", label: "Hired" },
    { value: "rejected", label: "Rejected" },
];

const LineChart: T_LineChart = ({ data, range }) => {
    const chartData = prepareChartData(data, range);
    const [min, max] = getChartRange(chartData);
    const options = prepareOptions(min, max);

    return (
        <div className={`card ${style["chart-card"]}`}>
            <Select
                options={steps}
                className={style.select}
                selected="recommended"
            />
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;
