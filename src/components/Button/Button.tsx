import style from "./Button.module.css";

type T_Button = React.FC<React.HtmlHTMLAttributes<HTMLButtonElement>>;

const Button: T_Button = (props) => {
    const { className: cn, ...rest } = props;
    const className = `${style["button"]}${cn ? ` ${cn}` : ""}`;
    return <button {...rest} className={className} />;
};

export default Button;
