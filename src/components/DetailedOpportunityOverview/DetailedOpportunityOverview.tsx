import Button from "../Button/Button";
import Program from "../Program/Program";
import Search from "../Search/Search";
import Sort from "../Sort/Sort";
import style from "./DetailedOpportunityOverview.module.css";
import { data } from "./detailedOpportunityOverviewData";

const DetailedOpportunityOverview = () => {
    return (
        <div className={style["detailed-opportunity-overview"]}>
            <h2>Detailed Opportunity Overview</h2>
            <div className={style.control}>
                <Search
                    placeholder="Search by employer name"
                    style={{ flexGrow: 0.6 }}
                />
                <Sort style={{ flexGrow: 0.2 }} />
                <Button style={{ flexGrow: 0.2 }}>Export All As CSV</Button>
            </div>

            <Program data={data} />
        </div>
    );
};

export default DetailedOpportunityOverview;
