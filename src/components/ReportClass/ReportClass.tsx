import StatCard, { I_StatCardIProps } from "../StatCard/StatCard";
import style from "./ReportClass.module.css";

type T_StatCardI = React.FC<I_ReportClassProps>;

export interface I_ReportClassProps {
    data: I_StatCardIProps[];
}

const ReportClass: T_StatCardI = ({ data }) => {
    return (
        <div className={style["report-class"]}>
            {data.map((stat) => (
                <StatCard key={stat.title} {...stat} />
            ))}
        </div>
    );
};

export default ReportClass;
