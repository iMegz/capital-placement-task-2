import { useEffect, useRef, useState } from "react";
import style from "./Select.module.css";
import Dropdown from "./Dropdown";
import { DownArrowIcon, UpArrowIcon } from "../icons/Icons";

type T_Select = React.FC<I_SelectProps>;

export type T_SelectOption = { label: string; value: string };

type T_DivOmitOnChange = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    "onChange"
>;

interface I_SelectProps extends T_DivOmitOnChange {
    options: T_SelectOption[];
    selected?: string;
    onChange?: (value: string) => void;
}

const Select: T_Select = (props) => {
    const { options, selected, className, onChange, ...rest } = props;
    const defaultClassName = `${style.select} ${className}`;

    const ref = useRef<HTMLDivElement>(null);
    const [value, setValue] = useState(getValueOrLabel(selected));
    const [expand, setExpand] = useState(false);

    useEffect(() => {
        document.addEventListener("mousedown", handleOnClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleOnClickOutside);
        };
    }, []);

    function getValueOrLabel(
        selected?: string,
        valueOrLabel: "value" | "label" = "value"
    ) {
        return (
            options.find((option) => option.value === selected)?.[
                valueOrLabel
            ] || options[0]?.[valueOrLabel]
        );
    }

    // Handlers
    function hanldleOnChange(value: string) {
        setValue(value);
        setExpand(false);
        console.log(value);

        if (onChange) onChange(value);
    }

    function handleOnClickOutside(e: any) {
        if (ref.current && !ref.current.contains(e.target)) {
            setExpand(false);
        }
    }

    // Renderers
    function renderDropDown() {
        if (expand)
            return (
                <Dropdown
                    items={options}
                    onSelect={(value) => hanldleOnChange(value)}
                />
            );
    }

    function renderArrow() {
        return expand ? <UpArrowIcon /> : <DownArrowIcon />;
    }

    return (
        <div {...rest} ref={ref} className={defaultClassName}>
            <div
                onClick={() => setExpand((state) => !state)}
                className={style["selection-btn"]}
            >
                <span className={style.selected}>
                    {getValueOrLabel(value, "label")}
                </span>
                {renderArrow()}
            </div>
            {renderDropDown()}
        </div>
    );
};

export default Select;