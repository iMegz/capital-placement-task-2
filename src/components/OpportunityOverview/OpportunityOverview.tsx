import LineChart from "../LineChart/LineChart";
import ReportClass from "../ReportClass/ReportClass";
import StatCard, { I_StatCardIProps } from "../StatCard/StatCard";
import TotalCandidateFlow from "../TotalCandidateFlow/TotalCandidateFlow";
import style from "./OpportunityOverview.module.css";
import { data } from "../utils/utils";

const OpportunityOverview = () => {
    const reportData: I_StatCardIProps[] = [
        {
            title: "Applied",
            value: 3122,
            prevValue: 1590,
            percentDifference: 15,
        },
        { title: "Offer", value: 183, prevValue: 71, percentDifference: 15 },
        { title: "Hired", value: 98, prevValue: 167, percentDifference: -15 },
    ];

    const flowData = {
        applied: { qualified: 3122, disqualified: 1445 },
        recommended: { qualified: 2164, disqualified: 958 },
        interview: { qualified: 443, disqualified: 1721 },
        offer: { qualified: 183, disqualified: 260 },
        hired: { qualified: 118, disqualified: 65 },
    };

    const recommended: I_StatCardIProps = {
        title: "Recommended",
        value: 2164,
        prevValue: 90,
        percentDifference: 15,
        type: "horizontal",
    };

    const interview: I_StatCardIProps = {
        title: "Interview",
        value: 443,
        prevValue: 90,
        percentDifference: 15,
        type: "horizontal",
    };

    return (
        <section className={style["opportunity-overview"]}>
            {/* Left side */}
            <div className={style["side"]}>
                <ReportClass data={reportData} />
                <LineChart data={data} />
            </div>

            {/* Right side */}
            <div className={style["side"]}>
                <TotalCandidateFlow
                    total={4567}
                    data={flowData}
                    qualified={78}
                    disqualified={22}
                />
                <div style={{ display: "flex", gap: "32px" }}>
                    <StatCard {...recommended} />
                    <StatCard {...interview} />
                </div>
            </div>
        </section>
    );
};

export default OpportunityOverview;
