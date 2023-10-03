import calender from "../../assets/calendar.svg";
import calender2 from "../../assets/calender2.svg";
import document from "../../assets/document.svg";
import downArrow from "../../assets/down-arrow.svg";
import fileDownload from "../../assets/file-download.svg";
import group from "../../assets/group.svg";
import heart from "../../assets/heart.svg";
import home from "../../assets/home.svg";
import leftArrow from "../../assets/left-arrow.svg";
import notebook from "../../assets/notebook.svg";
import pieChart from "../../assets/pie-chart.svg";
import rightArrow from "../../assets/right-arrow.svg";
import search from "../../assets/search.svg";
import sesttings from "../../assets/sesttings.svg";
import share from "../../assets/share.svg";
import sortAsc from "../../assets/sort-ascending.svg";
import sortDesc from "../../assets/sort-descending.svg";
import trendDown from "../../assets/trend-down.svg";
import trendUp from "../../assets/trend-up.svg";
import upArrow from "../../assets/up-arrow.svg";
import warning from "../../assets/warning.svg";

export type T_Icon = React.FC<React.SVGAttributes<HTMLOrSVGElement>>;

export const CalendarIcon: T_Icon = (props) => {
    return <img {...props} src={calender} alt="Calendar" />;
};

export const Calendar2Icon: T_Icon = (props) => {
    return <img {...props} src={calender2} alt="Calendar" />;
};

export const DocumentIcon: T_Icon = (props) => {
    return <img {...props} src={document} alt="Document" />;
};

export const DownArrowIcon: T_Icon = (props) => {
    return <img {...props} src={downArrow} alt="Down arrow" />;
};

export const FileDownloadIcon: T_Icon = (props) => {
    return <img {...props} src={fileDownload} alt="File download" />;
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

export const PieChartIcon: T_Icon = (props) => {
    return <img {...props} src={pieChart} alt="Pie chart" />;
};

export const RightArrowIcon: T_Icon = (props) => {
    return <img {...props} src={rightArrow} alt="Right arrow" />;
};

export const SearchIcon: T_Icon = (props) => {
    return <img {...props} src={search} alt="Search" />;
};

export const SesttingsIcon: T_Icon = (props) => {
    return <img {...props} src={sesttings} alt="Sesttings" />;
};

export const ShareIcon: T_Icon = (props) => {
    return <img {...props} src={share} alt="Share" />;
};

export const SortAscIcon: T_Icon = (props) => {
    return <img {...props} src={sortAsc} alt="Sort ascending" />;
};

export const SortDescIcon: T_Icon = (props) => {
    return <img {...props} src={sortDesc} alt="Sort descending" />;
};

export const TrendDownIcon: T_Icon = (props) => {
    return <img {...props} src={trendDown} alt="Trend down" />;
};

export const TrendUpIcon: T_Icon = (props) => {
    return <img {...props} src={trendUp} alt="Trend up" />;
};

export const UpArrowIcon: T_Icon = (props) => {
    return <img {...props} src={upArrow} alt="Up arrow" />;
};

export const WarningIcon: T_Icon = (props) => {
    return <img {...props} src={warning} alt="Warning" />;
};

const Icon: T_Icon = (props) => {
    return <img {...props} />;
};

export default Icon;
