import { I_ApplicationFlowSteps, T_ApplicationFlowStepsKey } from "../../types";
import { formatNumber } from "../utils/utils";
import style from "./TotalCandidateFlow.module.css";

type T_TotalCandidateFlow = React.FC<I_TotalCandidateFlowIProps>;

export interface I_TotalCandidateFlowIProps {
    total: number;
    data: I_ApplicationFlowSteps;
    qualified: number;
    disqualified: number;
}

const TotalCandidateFlow: T_TotalCandidateFlow = ({
    total,
    data,
    qualified,
    disqualified,
}) => {
    function renderData() {
        return Object.keys(data).map((key) => {
            const values = data[key as T_ApplicationFlowStepsKey];
            return (
                <li className={style.tr} key={key}>
                    <div className={style.td}>{key}</div>
                    <div className={style.td}>
                        {formatNumber(values.qualified)}
                    </div>
                    <div className={style.td}>
                        {formatNumber(values.disqualified)}
                    </div>
                </li>
            );
        });
    }

    return (
        <div className={`card ${style["total-candidate-flow"]}`}>
            <span className={style.title}>Total Candidate Flow</span>

            {/* Total candidates */}
            <span className={style.total}>{formatNumber(total)}</span>

            {/* Qualified/Disqualified Bar */}
            <div className={style.bar}>
                <div
                    className={style.qualified}
                    style={{ flexGrow: qualified }}
                >
                    <span className={style["bar-value"]}>
                        Qualified {qualified}%
                    </span>
                </div>
                <div
                    className={style.disqualified}
                    style={{ flexGrow: disqualified }}
                >
                    <span className={style["bar-value"]}>
                        Disqualified {disqualified}%
                    </span>
                </div>
            </div>

            {/* Application steps qualified/disqualified */}
            <ul className={style.table}>
                <li className={style.tr}>
                    <div className={style.th}>Stage</div>
                    <div className={style.th}>Qualified</div>
                    <div className={style.th}>Disqualified</div>
                </li>
                {renderData()}
            </ul>
        </div>
    );
};

export default TotalCandidateFlow;
