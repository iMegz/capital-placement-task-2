import {
    T_Opportunity,
    T_ProgramData,
    T_StepKey,
} from "../DetailedOpportunityOverview/detailedOpportunityOverviewData";
import style from "./OpportunitiesTable.module.css";

interface I_OpportunitiesTableProps {
    data: T_ProgramData;
}

const OpportunitiesTable = (props: I_OpportunitiesTableProps) => {
    const { data } = props;

    function renderRow(op: T_Opportunity) {
        const keys: T_StepKey[] = [
            "applied",
            "recommended",
            "interview",
            "offer",
            "hired",
        ];

        return (
            <div className={style.tr} key={op.title}>
                {/* Title */}
                <span className={`${style.td} ${style["row-span-3"]}`}>
                    {op.title}
                </span>

                {/* Active */}
                <span className={style.td}>
                    <span className="badge-lg-green">Active</span>
                </span>
                {keys.map((key) => (
                    <span key={key} className={style.td}>
                        {op.active[key]}
                    </span>
                ))}

                {/* Disqulified */}
                <span className={style.td}>
                    <span className="badge-lg-pink">Disqulified</span>
                </span>
                {keys.map((key) => (
                    <span key={key} className={style.td}>
                        {op.disqulified[key]}
                    </span>
                ))}

                {/* Sub - Total */}
                <span className={style.td}>Sub - Total</span>
                {keys.map((key) => (
                    <span key={key} className={style.td}>
                        {op.disqulified[key] + op.active[key]}
                    </span>
                ))}
            </div>
        );
    }
    return (
        <div className={style.table}>
            <div className={style.thead}>
                <span className={style.th}>Opportunity Name</span>
                <span className={style.th}>Status</span>
                <span className={style.th}>Applied</span>
                <span className={style.th}>Recommended</span>
                <span className={style.th}>Interview</span>
                <span className={style.th}>Offer</span>
                <span className={style.th}>Hired</span>
            </div>
            <div className={style.tbody}>
                {data.opportunities.map((op) => renderRow(op))}
            </div>
        </div>
    );
};

export default OpportunitiesTable;
