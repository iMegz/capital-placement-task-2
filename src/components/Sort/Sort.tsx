import { useState } from "react";
import style from "./Sort.module.css";
import useCollapse from "../../hooks/useCollapse";
import Dropdown from "../Select/Dropdown";
import { T_SelectOption } from "../Select/Select";
import { SortAscIcon, SortDescIcon } from "../icons/Icons";

const steps: T_SelectOption[] = [
    { value: "applied", label: "Applied" },
    { value: "recommended", label: "Recommended" },
    { value: "interview", label: "Interview" },
    { value: "offer", label: "Offer" },
    { value: "hired", label: "Hired" },
    { value: "rejected", label: "Rejected" },
];
export type T_Order = "ASC" | "DESC";
type T_DivOmit = Omit<React.HtmlHTMLAttributes<HTMLDivElement>, "onChange">;
type T_Sort = React.FC<I_SortProps>;

interface I_SortProps extends T_DivOmit {
    onChange?: (value: string | null, order: T_Order) => void;
    defaultOrder?: T_Order;
}

const Sort: T_Sort = (props) => {
    const { className: cn, onChange, defaultOrder, ...rest } = props;
    const className = `${style.sort}${cn ? ` ${cn}` : ""}`;

    const [order, setOrder] = useState<T_Order>(defaultOrder || "ASC");
    const [sortBy, setSortBy] = useState<string | null>(null);
    const { ref, expand, setExpand } = useCollapse();

    function handleSelect(value: string) {
        setExpand(false);
        setSortBy(value);
        if (onChange) onChange(value, order);
    }

    function handleSortOrder(value: T_Order) {
        return () => {
            setOrder(value);
            if (onChange) onChange(sortBy, value);
        };
    }

    function renderDrowdown() {
        if (expand)
            return (
                <Dropdown
                    className={style.dropdown}
                    items={steps}
                    onSelect={handleSelect}
                />
            );
    }

    function renderOrderButton() {
        return order === "ASC" ? (
            <SortDescIcon
                className={style.icon}
                onClick={handleSortOrder("DESC")}
            />
        ) : (
            <SortAscIcon
                className={style.icon}
                onClick={handleSortOrder("ASC")}
            />
        );
    }

    return (
        <div ref={ref} className={className} {...rest}>
            <button onClick={() => setExpand((state) => !state)}>
                {sortBy || "Sort by"}
            </button>
            {renderOrderButton()}
            {renderDrowdown()}
        </div>
    );
};

export default Sort;
