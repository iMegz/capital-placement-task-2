import { useState, useRef, useEffect } from "react";
import useCollapse from "../../hooks/useCollapse";
import style from "./DataRangePicker.module.css";
import { Calendar2Icon, DownArrowIcon, UpArrowIcon } from "../icons/Icons";
import { formatDateShort } from "../utils/utils";

type T_VisiblePicker = "start" | "end";

const defaultDate = formatDateShort(new Date());

const DataRangePicker = () => {
    const { expand, setExpand, ref } = useCollapse();

    useEffect(() => {
        setVisiblePicker("start");
        if (expand) {
            handleShowPicker();
        }
    }, [expand]);

    const [range, setRange] = useState({
        start: defaultDate,
        end: defaultDate,
    });

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
            className={style["data-range-picker"]}
            ref={ref}
            onClick={handleOpenDatePicker}
        >
            <Calendar2Icon />
            <span>{range.start}</span>
            <span>-</span>
            <span>{range.end}</span>
            {renderArrow()}
            <input
                type="date"
                ref={startRef}
                onChange={({ target }) => handleOnChange("start", target.value)}
            />
            <input
                type="date"
                ref={endRef}
                onChange={({ target }) => handleOnChange("end", target.value)}
            />
            {renderDateTitle()}
        </div>
    );
};

export default DataRangePicker;
