import calender from "../../assets/calendar.svg";
import document from "../../assets/document.svg";
import group from "../../assets/group.svg";
import heart from "../../assets/heart.svg";
import home from "../../assets/home.svg";
import leftArrow from "../../assets/left-arrow.svg";
import notebook from "../../assets/notebook.svg";
import rightArrow from "../../assets/right-arrow.svg";
import sesttings from "../../assets/sesttings.svg";
import share from "../../assets/share.svg";

type T_Icon = React.FC<React.SVGAttributes<HTMLOrSVGElement>>;

export const CalendarIcon: T_Icon = (props) => {
    return <img {...props} src={calender} alt="Calendar" />;
};

export const DocumentIcon: T_Icon = (props) => {
    return <img {...props} src={document} alt="Document" />;
};

export const GroupIcon: T_Icon = (props) => {
    return <img {...props} src={group} alt="Group" />;
};

export const HeartIcon: T_Icon = (props) => {
    return <img {...props} src={heart} alt="Heart" />;
};

export const HomeIcon: T_Icon = (props) => {
    return <img {...props} src={home} alt="Home" />;
};

export const LeftArrowIcon: T_Icon = (props) => {
    return <img {...props} src={leftArrow} alt="Left arrow" />;
};

export const NotebookIcon: T_Icon = (props) => {
    return <img {...props} src={notebook} alt="Notebook" />;
};

export const RightArrowIcon: T_Icon = (props) => {
    return <img {...props} src={rightArrow} alt="Right arrow" />;
};

export const SesttingsIcon: T_Icon = (props) => {
    return <img {...props} src={sesttings} alt="Sesttings" />;
};

export const ShareIcon: T_Icon = (props) => {
    return <img {...props} src={share} alt="Share" />;
};

const Icon: T_Icon = (props) => {
    return <img {...props} />;
};

export default Icon;
