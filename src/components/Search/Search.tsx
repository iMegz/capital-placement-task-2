import { useRef } from "react";
import { SearchIcon, WarningIcon } from "../icons/Icons";
import style from "./Search.module.css";

type T_Div = React.FC<React.HtmlHTMLAttributes<HTMLDivElement>>;

const Search: T_Div = (props) => {
    const { className: cn, onChange, placeholder, ...rest } = props;
    const ref = useRef<HTMLInputElement>(null);
    const className = `${style.search}${cn ? ` ${cn}` : ""}`;

    const focus = () => ref.current?.focus();

    return (
        <div {...rest} className={className} onClick={focus}>
            <SearchIcon />
            <input
                type="search"
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
            />
            <WarningIcon style={{ marginLeft: "auto" }} />
        </div>
    );
};

export default Search;
