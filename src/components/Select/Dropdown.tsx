import { T_SelectOption } from "./Select";
import style from "./Select.module.css";

type T_Dropdown = React.FC<I_DropdownProps>;

type T_UlOmitOnSelect = Omit<
    React.HtmlHTMLAttributes<HTMLUListElement>,
    "onSelect"
>;

interface I_DropdownProps extends T_UlOmitOnSelect {
    items: T_SelectOption[];
    onSelect?: (value: string) => void;
}

const Dropdown: T_Dropdown = (props) => {
    const { className, items, onSelect, ...rest } = props;
    const defaultClassName = `${style.dropdown} ${className || ""}`;

    function handleOnSelect(value: string) {
        return () => {
            if (onSelect) return onSelect(value);
        };
    }

    return (
        <ul {...rest} className={defaultClassName}>
            {items.map((item, i) => (
                <li
                    onClick={handleOnSelect(item.value)}
                    key={i}
                    className={style["dropdown-item"]}
                >
                    {item.label}
                </li>
            ))}
        </ul>
    );
};

export default Dropdown;
