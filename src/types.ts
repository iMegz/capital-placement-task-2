import { ChartData } from "chart.js";

export type T_ApplicationFlowStep = { qualified: number; disqualified: number };

export interface I_ApplicationFlowSteps {
    applied: T_ApplicationFlowStep;
    recommended: T_ApplicationFlowStep;
    interview: T_ApplicationFlowStep;
    offer: T_ApplicationFlowStep;
    hired: T_ApplicationFlowStep;
}

export type T_ApplicationFlowStepsKey = keyof I_ApplicationFlowSteps;

export type T_ApplicationFlowStepKey = keyof T_ApplicationFlowStep;

export type T_LineChartData = ChartData<"line", number[], T_Month>;

export type T_Month =
    | "January"
    | "February"
    | "March"
    | "April"
    | "May"
    | "June"
    | "July"
    | "August"
    | "September"
    | "October"
    | "November"
    | "December";

export type T_MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type T_QualifedData = {
    year: number;
    month: number;
    qualified: number;
    disqualified: number;
};
