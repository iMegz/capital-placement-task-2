import { useState } from "react";
import Button from "../Button/Button";
import Program from "../Program/Program";
import Search from "../Search/Search";
import Sort, { T_Order } from "../Sort/Sort";
import style from "./DetailedOpportunityOverview.module.css";
import {
    I_ProgramData,
    I_SumedData,
    T_StepKey,
    googleData,
    mircosoftData,
    sumProgramData,
} from "./detailedOpportunityOverviewData";

type T_SortBy = T_StepKey | "rejected" | null;
type T_Data = {
    data: I_ProgramData;
    sum: I_SumedData;
};

// This code needs cleaing

const data: T_Data[] = [
    { data: googleData, sum: sumProgramData(googleData) },
    { data: mircosoftData, sum: sumProgramData(mircosoftData) },
];

const DetailedOpportunityOverview = () => {
    const [sortby, setSortBy] = useState<T_SortBy>(null);
    const [order, setOrder] = useState<T_Order>("ASC");

    function handleOnSort(value: string | null, order: T_Order) {
        console.log(value, order);

        setSortBy(value as T_SortBy);
        setOrder(order);
    }

    function sort(a: T_Data, b: T_Data) {
        if (order === "ASC") return a.sum[sortby!] - b.sum[sortby!];
        return b.sum[sortby!] - a.sum[sortby!];
    }

    function renderPrograms() {
        const sorted = sortby ? data.sort(sort) : data;
        return sorted.map((data) => (
            <Program
                key={data.data.title}
                data={data.data}
                sumedData={data.sum}
            />
        ));
    }

    return (
        <div className={style["detailed-opportunity-overview"]}>
            <h2>Detailed Opportunity Overview</h2>
            <div className={style.control}>
                <Search
                    placeholder="Search by employer name"
                    style={{ flexGrow: 0.6 }}
                />
                <Sort
                    defaultOrder={order}
                    style={{ flexGrow: 0.2 }}
                    onChange={handleOnSort}
                />
                <Button style={{ flexGrow: 0.2 }}>Export All As CSV</Button>
            </div>

            {renderPrograms()}
        </div>
    );
};

export default DetailedOpportunityOverview;
