import { TrendDownIcon, TrendUpIcon } from "../icons/Icons";
import { formatNumber } from "../utils/utils";
import style from "./StatCard.module.css";

type T_StatCard = React.FC<I_StatCardIProps>;

export interface I_StatCardIProps {
    title: string;
    value: number;
    prevValue: number;
    percentDifference: number;
    type?: "vertical" | "horizontal";
}

const StatCard: T_StatCard = ({
    title,
    value,
    prevValue,
    percentDifference,
    type = "vertical",
}) => {
    //Renders
    function renderPercentDifference() {
        const className = `badge-sm-${percentDifference > 0 ? "blue" : "pink"}`;
        const icon =
            percentDifference > 0 ? <TrendUpIcon /> : <TrendDownIcon />;
        return (
            <span className={className}>
                {icon} {Math.abs(percentDifference)}
            </span>
        );
    }

    return (
        <div className={`card ${style["stat-card-i"]}`}>
            <div className={`${style["title-section"]} ${style[type]}`}>
                <span className={style.title}>{title}</span>
                <span className={style.value}>{formatNumber(value)}</span>
            </div>

            <div className={style["prev-period"]}>
                <span>Previous Period</span>
                <div className={style["prev-period-value"]}>
                    <span>{prevValue}</span>
                    {renderPercentDifference()}
                </div>
            </div>
        </div>
    );
};

export default StatCard;
