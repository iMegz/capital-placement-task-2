import { useState, useRef, useEffect } from "react";
import useCollapse from "../../hooks/useCollapse";
import style from "./DataRangePicker.module.css";
import { Calendar2Icon, DownArrowIcon, UpArrowIcon } from "../icons/Icons";
import { formatDateShort, formatDateValue } from "../utils/utils";

type T_VisiblePicker = "start" | "end";

type T_DivOmitOnChange = Omit<
    React.HtmlHTMLAttributes<HTMLDivElement>,
    "onChange"
>;

type T_DataRangePicker = React.FC<DataRangePickerProps>;

export type T_Range = { start: Date | string; end: Date | string };

export type T_RangeStr = { start: string; end: string };

const defaultDate = formatDateShort(new Date());

interface DataRangePickerProps extends T_DivOmitOnChange {
    range?: T_Range;
    onChange?: (range: T_RangeStr) => void;
}

function getDate(date: Date | string) {
    if (date instanceof Date) {
        return formatDateShort(date);
    } else return formatDateShort(new Date(date));
}

const DataRangePicker: T_DataRangePicker = (props) => {
    const { range: inputRange, className, onChange, ...rest } = props;
    const defaultClassName = `${style["data-range-picker"]} ${className}`;
    const { expand, setExpand, ref } = useCollapse();

    const [range, setRange] = useState({
        start: inputRange ? getDate(inputRange.start) : defaultDate,
        end: inputRange ? getDate(inputRange.end) : defaultDate,
    });

    useEffect(() => {
        setVisiblePicker("start");
        if (expand) {
            handleShowPicker();
        }
    }, [expand]);

    useEffect(() => {
        if (onChange) onChange(range);
    }, [range]);

    const [visiblePicker, setVisiblePicker] =
        useState<T_VisiblePicker>("start");

    const startRef = useRef<HTMLInputElement>(null);
    const endRef = useRef<HTMLInputElement>(null);

    // Handlers
    const handleOpenDatePicker = () => {
        setExpand((state) => !state);
    };

    function handleShowPicker(picker: "start" | "end" = "start") {
        if (picker === "start" && startRef.current) {
            startRef.current.showPicker();
        } else if (picker === "end" && endRef.current) {
            endRef.current.showPicker();
        }
    }

    function handleOnChange(date: "start" | "end", value: string) {
        setRange((state) => {
            const newState = { ...state };
            newState[date] = formatDateShort(new Date(value));
            return newState;
        });

        if (date === "start") {
            setVisiblePicker("end");
            handleShowPicker("end");
        } else {
            setExpand(false);
        }
    }

    // Renderers
    function renderArrow() {
        return expand ? <UpArrowIcon /> : <DownArrowIcon />;
    }

    function renderDateTitle() {
        if (expand)
            return (
                <span className={style["picker-title"]}>{visiblePicker}</span>
            );
    }

    return (
        <div
            className={defaultClassName}
            ref={ref}
            onClick={handleOpenDatePicker}
            {...rest}
        >
            <Calendar2Icon />
            <span>{range.start}</span>
            <span>-</span>
            <span>{range.end}</span>
            {renderArrow()}
            <input
                type="date"
                ref={startRef}
                defaultValue={formatDateValue(new Date(range.start))}
                onChange={({ target }) => handleOnChange("start", target.value)}
            />
            <input
                type="date"
                ref={endRef}
                defaultValue={formatDateValue(new Date(range.end))}
                onChange={({ target }) => handleOnChange("end", target.value)}
            />
            {renderDateTitle()}
        </div>
    );
};

export default DataRangePicker;
