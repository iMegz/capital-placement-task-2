import { T_QualifedData } from "../../types";
import { I_StatCardIProps } from "../StatCard/StatCard";

export const data: T_QualifedData[] = [
    { year: 2023, month: 1, qualified: 321, disqualified: 317 },
    { year: 2023, month: 2, qualified: 662, disqualified: 396 },
    { year: 2023, month: 3, qualified: 576, disqualified: 333 },
    { year: 2023, month: 4, qualified: 475, disqualified: 371 },
    { year: 2023, month: 5, qualified: 437, disqualified: 417 },
    { year: 2023, month: 6, qualified: 392, disqualified: 350 },
    { year: 2023, month: 7, qualified: 584, disqualified: 500 },
];

export const reportData: I_StatCardIProps[] = [
    {
        title: "Applied",
        value: 3122,
        prevValue: 1590,
        percentDifference: 15,
    },
    { title: "Offer", value: 183, prevValue: 71, percentDifference: 15 },
    { title: "Hired", value: 98, prevValue: 167, percentDifference: -15 },
];

export const flowData = {
    applied: { qualified: 3122, disqualified: 1445 },
    recommended: { qualified: 2164, disqualified: 958 },
    interview: { qualified: 443, disqualified: 1721 },
    offer: { qualified: 183, disqualified: 260 },
    hired: { qualified: 118, disqualified: 65 },
};

export const recommended: I_StatCardIProps = {
    title: "Recommended",
    value: 2164,
    prevValue: 90,
    percentDifference: 15,
    type: "horizontal",
};

export const interview: I_StatCardIProps = {
    title: "Interview",
    value: 443,
    prevValue: 90,
    percentDifference: 15,
    type: "horizontal",
};
