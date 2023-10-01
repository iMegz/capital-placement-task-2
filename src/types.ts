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
