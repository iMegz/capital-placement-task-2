type T_Steps = {
    applied: number;
    recommended: number;
    interview: number;
    offer: number;
    hired: number;
};

export type T_StepKey = keyof T_Steps;

export type T_Opportunity = {
    title: string;
    active: T_Steps;
    disqulified: T_Steps;
};

export interface T_ProgramData {
    title: string;
    opportunities: T_Opportunity[];
}

export const data: T_ProgramData = {
    title: "google",
    opportunities: [
        {
            title: "UX Internship",
            active: {
                applied: 20,
                recommended: 17,
                interview: 4,
                offer: 3,
                hired: 1,
            },
            disqulified: {
                applied: 7,
                recommended: 4,
                interview: 1,
                offer: 1,
                hired: 1,
            },
        },

        {
            title: "Art Internship",
            active: {
                applied: 44,
                recommended: 32,
                interview: 21,
                offer: 19,
                hired: 10,
            },
            disqulified: {
                applied: 24,
                recommended: 4,
                interview: 7,
                offer: 8,
                hired: 3,
            },
        },
    ],
};

export function sumProgramData(data: T_ProgramData) {
    const values: T_Steps = {
        applied: 0,
        hired: 0,
        interview: 0,
        offer: 0,
        recommended: 0,
    };
    let rejected = 0;
    const opportunities: T_Steps[] = [];

    data.opportunities.forEach((op, i) => {
        opportunities.push({
            applied: 0,
            hired: 0,
            interview: 0,
            offer: 0,
            recommended: 0,
        });
        const keys = Object.keys(op.active) as T_StepKey[];
        keys.forEach((key) => {
            values[key] += op.active[key] + op.disqulified[key];
            opportunities[i][key] = values[key];
            rejected += op.disqulified[key];
        });
    });

    return { ...values, rejected, opportunities };
}
