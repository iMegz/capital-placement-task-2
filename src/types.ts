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
