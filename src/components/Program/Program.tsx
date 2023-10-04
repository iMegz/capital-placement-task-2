import {
    T_ProgramData,
    T_StepKey,
    sumProgramData,
} from "../DetailedOpportunityOverview/detailedOpportunityOverviewData";
import IconBtn from "../IconBtn/IconBtn";
import OpportunitiesTable from "../OpportunitiesTable/OpportunitiesTable";
import { FileDownloadIcon, PieChartIcon } from "../icons/Icons";
import style from "./Program.module.css";

interface I_ProgramProps {
    data: T_ProgramData;
}
const Program = (props: I_ProgramProps) => {
    const { data } = props;
    const { rejected, opportunities, ...steps } = sumProgramData(data);

    function renderSteps() {
        const keys: T_StepKey[] = [
            "applied",
            "recommended",
            "interview",
            "offer",
            "hired",
        ];
        console.log(keys);

        const stepsJSX = keys.map((key) => (
            <div key={key} className={`card ${style["step-card"]}`}>
                <span className={style.title}>{key}</span>
                <span className={style.value}>{steps[key]}</span>
            </div>
        ));

        const rejectedJSX = (
            <div key="rejected" className={`card ${style["step-card"]}`}>
                <span className={style.title}>Total Rejected</span>
                <span className={style.value}>{rejected}</span>
            </div>
        );
        return [...stepsJSX, rejectedJSX];
    }

    return (
        <div className={`card ${style.program}`}>
            <div className={style.header}>
                <h2 style={{ flexGrow: 1 }}>{data.title}</h2>
                <IconBtn Icon={PieChartIcon} />
                <IconBtn Icon={FileDownloadIcon} />
            </div>
            <div className={style["steps-total"]}>{renderSteps()}</div>
            <OpportunitiesTable data={data} />
        </div>
    );
};

export default Program;
