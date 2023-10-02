import DataRangePicker from "../DataRangePicker/DataRangePicker";
import LineChart from "../LineChart/LineChart";
import ReportClass from "../ReportClass/ReportClass";
import StatCard from "../StatCard/StatCard";
import TotalCandidateFlow from "../TotalCandidateFlow/TotalCandidateFlow";
import style from "./OpportunityOverview.module.css";
import {
    data,
    flowData,
    interview,
    recommended,
    reportData,
} from "./opportunityOverviewData";

const OpportunityOverview = () => {
    return (
        <section className={style["opportunity-overview"]}>
            {/* Header */}
            <header className={style.header}>
                <h1>Opportunity Overview</h1>
                <DataRangePicker />
            </header>

            <div className={style.stats}>
                {/* Left side */}
                <div className={style["side"]}>
                    {/* Report class */}
                    <ReportClass data={reportData} />

                    {/* Line chart */}
                    <LineChart
                        data={data}
                        range={{
                            start: new Date("01/01/2023"),
                            end: new Date("07/01/2023"),
                        }}
                    />
                </div>

                {/* Right side */}
                <div className={style["side"]}>
                    {/* Total Candidate Flow */}
                    <TotalCandidateFlow
                        total={4567}
                        data={flowData}
                        qualified={78}
                        disqualified={22}
                    />

                    {/* Bottom stats */}
                    <div style={{ display: "flex", gap: "32px" }}>
                        <StatCard {...recommended} />
                        <StatCard {...interview} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunityOverview;
