import { T_Icon } from "../icons/Icons";
import style from "./IconBtn.module.css";

type T_IconBtn = React.FC<IconBtnProps>;

interface IconBtnProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    Icon?: T_Icon;
}

const IconBtn: T_IconBtn = (props) => {
    const { className: cn, Icon, ...rest } = props;
    const className = `${style["icon-btn"]}${cn ? ` ${cn}` : ""}`;
    return (
        <button {...rest} className={className}>
            {Icon ? <Icon /> : ""}
        </button>
    );
};

export default IconBtn;
