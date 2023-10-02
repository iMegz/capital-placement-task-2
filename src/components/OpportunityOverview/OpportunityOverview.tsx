import { useState } from "react";
import DataRangePicker, {
    T_RangeStr,
} from "../DataRangePicker/DataRangePicker";
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
    const [date, setDate] = useState({
        start: new Date("01/01/2023"),
        end: new Date("07/01/2023"),
    });

    function handleOnDateChange(range: T_RangeStr) {
        setDate((_) => {
            return { start: new Date(range.start), end: new Date(range.start) };
        });
        console.log(date);
    }

    return (
        <section className={style["opportunity-overview"]}>
            {/* Header */}
            <header className={style.header}>
                <h1>Opportunity Overview</h1>
                <DataRangePicker
                    onChange={handleOnDateChange}
                    range={{
                        start: date.start,
                        end: date.end,
                    }}
                />
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
